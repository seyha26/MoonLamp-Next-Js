import { CartType } from "@/types/cartTypes";
import { useCartStore } from "@/store/useCartStore";
import { BiPlus } from "react-icons/bi";

type IncrementProps = {
  product: CartType;
};

const IncrementButton = ({ product }: IncrementProps) => {
  const cartStore = useCartStore();
  return (
    <button
      onClick={() =>
        cartStore.addToCart({
          id: product.id,
          name: product.name,
          unit_amount: product.unit_amount,
          image: product.image,
        })
      }
    >
      <BiPlus />
    </button>
  );
};

export default IncrementButton;
