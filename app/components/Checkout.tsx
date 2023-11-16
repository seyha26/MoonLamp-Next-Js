import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCartStore } from "@/store/useCartStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useClerk } from "@clerk/nextjs";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Checkout = () => {
  const router = useRouter();
  const { user } = useClerk();
  const [clientSecret, setClientSecret] = useState("");

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
      labels: "floating",
    },
  };

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const userId = user?.id;
        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: cartStore.cart,
            payment_intent_id: cartStore.paymentIntent,
            userId: userId,
          }),
        });

        if (response.status === 403) {
          router.push("/");
        }
        if (!response.ok) {
          throw new Error("Network response is not okay!");
        }
        const data = await response.json();
        if (data && data.paymentIntent) {
          setClientSecret(data.paymentIntent.client_secret);
          cartStore.setPaymentIntent(data.paymentIntent.id);
        } else {
          console.log("Unexpected data structure");
        }
      } catch (error) {
        console.error("There was a problem: ", error);
      }
    };
    createPaymentIntent();
  }, [user]);
  const cartStore = useCartStore();
  return (
    <>
      <button
        className="text-sm font-bold pb-12"
        onClick={() => cartStore.setCheckout("cart")}
      >
        Back to Cart
      </button>
      <div>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        )}
      </div>
    </>
  );
};

export default Checkout;
