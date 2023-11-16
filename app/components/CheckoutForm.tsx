import { useState, useEffect, FormEvent } from "react";
import { PaymentElement, useStripe,  useElements } from "@stripe/react-stripe-js";
import { useCartStore } from "@/store/useCartStore";

const CheckoutForm = ({ clientSecret }: { clientSecret: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  const cartStore = useCartStore();

  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const totalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + item.unit_amount! * item.quantity!;
  }, 0);

  const formattedPrice = totalPrice;

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!clientSecret) {
      return;
    }
  }, [stripe]);

  useEffect(() => {
    // async function fetchLatestOrderId() {
    //   try {
    //     const response = await fetch("/api/get-latest-order-id");
    //     const data = await response.json();
    //     setOrderId(data.orderId);
    //   } catch (error) {
    //     console.error("Error fetching the latest order ID:", error);
    //   }
    // }

    // fetchLatestOrderId();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(!stripe || !elements) return
    setIsLoading(true)

    stripe.confirmPayment({
      elements, 
      redirect: 'if_required'
    }).then(result =>{ if (result.error) {
      cartStore.setCheckout("success")
          
      fetch("/api/update-order-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId: orderId,
          status: "payment successful",
        })
    })
    setIsLoading(false)
  }
  return <form className="text-gray-600 " id="payment-form" onSubmit={handleSubmit}>
    <PaymentElement id="payment-element" options={{
      layout: "tabs"
    }}  />
    <h1 className="py-4 text-sm font-bold">Total: {formattedPrice}</h1>
    <button className={`py-2 mt-4 w-full bg-primary round-md text-white disable:opacity-25 `} id="submit" type="submit" disabled={isLoading || !stripe || !elements}>{isLoading? "Processing..." : "Pay Now"}</button>
  </form>;
};

export default CheckoutForm;
