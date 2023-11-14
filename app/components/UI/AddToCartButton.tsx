"use client";
import { ProductType } from "@/types/productType";
import { useCartStore } from "@/store/useCartStore";

const AddToCartButton = ({
  name,
  unit_amount,
  image,
  id,
  quantity,
}: ProductType) => {
  const cartStore = useCartStore();

  return (
    <button
      className="my-12 text-white py-2 px-6 font-medium rounded-md bg-secondary"
      onClick={() =>
        cartStore.addToCart({
          name,
          unit_amount,
          image,
          id,
          quantity,
        })
      }
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
