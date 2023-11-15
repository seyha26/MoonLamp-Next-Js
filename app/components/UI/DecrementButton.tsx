import { useCartStore } from "@/store/useCartStore";
import { CartType } from "@/types/cartTypes";
type DecrementProps = {
  product: CartType;
};
import { BiMinus } from "react-icons/bi";

const DecrementButton = ({ product }: DecrementProps) => {
  const cartStore = useCartStore();
  return (
    <button
      onClick={() => {
        cartStore.removeProduct({
          id: product.id,
          name: product.name,
          image: product.image,
          unit_amount: product.unit_amount,
        });
      }}
    >
      <BiMinus />
    </button>
  );
};

export default DecrementButton;
