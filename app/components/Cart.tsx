import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import formatPrice from "@/utils/formaPrice";
import { totalPrice } from "@/utils/totalPrice";
import DecrementButton from "./UI/DecrementButton";
import IncrementButton from "./UI/IncrementButton";
import Checkout from "./Checkout";
import OrderSuccess from "./OrderSuccess";

const Cart = () => {
  const cartStore = useCartStore();
  const total = totalPrice(cartStore.cart);
  return (
    <div
      onClick={() => {
        cartStore.toggleCart();
        cartStore.setCheckout("cart");
      }}
      className="fixed w-full h-screen top-0 bg-black/25 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white absolute md:w-2/5 w-3/4 h-screen right-0 top-0 p-12"
      >
        {cartStore.onCheckout === "cart" && (
          <>
            <button onClick={() => cartStore.toggleCart()}>
              Back to store
            </button>
            {cartStore.cart.map((product) => (
              <div
                key={product.id}
                className="flex py-4 gap-4 items-center border-b-2 border-b-gray-600 justify-between mb-5"
              >
                <Image
                  src={product.image}
                  width={150}
                  height={150}
                  alt="moonlamp"
                />
                <h1 className="font-medium ">{product.name}</h1>
                <div className="flex gap-2 justify-center items-center bg-black/10 px-2 rounded-sm">
                  <DecrementButton product={product} />
                  <h2>{product.quantity}</h2>
                  <IncrementButton product={product} />
                </div>
              </div>
            ))}

            {cartStore.cart.length > 0 && cartStore.onCheckout === "cart" ? (
              <span>Total: {formatPrice(total)}</span>
            ) : null}

            {cartStore.cart.length < 1 && cartStore.onCheckout === "cart" ? (
              <div className="h-screen flex justify-center items-center">
                <span className="text-xl font-bold uppercase">
                  Your cart is empty.
                </span>
              </div>
            ) : null}
          </>
        )}
        {
          cartStore.onCheckout === "checkout" && <Checkout />
        }
        {cartStore.cart.length > 0 && cartStore.onCheckout === "cart" ? (
          <button
            className="bg-primary py-2 mt-4 w-full rounded-md text-white"
            onClick={() => cartStore.setCheckout("checkout")}
          >
            Checkout
          </button>
        ) : null}
        {
          cartStore.onCheckout === "success" && <OrderSuccess />
        }
      </div>
    </div>
  );
};

export default Cart;
