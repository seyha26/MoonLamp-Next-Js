"use client";
// REACT AND NEXT
import { useState, ReactNode } from "react";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Image from "next/image";
import AddToCartButton from "./UI/AddToCartButton";

// ICONS
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

// IMAGES
import image1 from "@/public/images/productimage1.jpeg";
import image2 from "@/public/images/productimage2.jpeg";
import image3 from "@/public/images/productimage3.jpeg";
import image4 from "@/public/images/productimage4.jpeg";
import AddToWishlistButton from "./UI/AddToWishlistButton";
import { ProductType } from "@/types/productType";
import formatPrice from "@/utils/formaPrice";

const Product = ({
  name,
  unit_amount,
  image,
  id,
  quantity,
  description,
}: ProductType) => {
  const [currentImg, setCurrentImg] = useState(0);
  const productData = { name, unit_amount, image, id, quantity, description };
  const price = formatPrice(unit_amount as number);

  const productImages: StaticImageData[] = [image1, image2, image3, image4];

  const imageVariants = {
    exit: { opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.4 } },
    enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-20" id="shop">
      <div className="w-[89%] m-auto max-w[1400px] grid grid-cols-1 md:grid-cols-2 items-center gap-5">
        {/* LEFT SIDE */}
        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-4">
            {productImages.map(
              (image: StaticImageData, index: number): ReactNode => (
                <Image
                  key={index}
                  src={image}
                  width={100}
                  height={100}
                  alt="product"
                  className="rounded-md cursor-pointer"
                  onClick={(): void => setCurrentImg(index)}
                />
              )
            )}
          </div>
          <div className="flex items-center">
            <motion.div
              initial="exit"
              animate="enter"
              exit="exit"
              variants={imageVariants}
              key={currentImg}
            >
              <Image
                src={productImages[currentImg]}
                width={480}
                height={480}
                alt="main-image"
                className="rounded-md"
              />
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-5">Wireless MoonLamp</h2>
          <div className="flex text-yellow-400 gap-1 justify-center items-center mb-5">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <span>(5.0)</span>
          </div>
          <div className="mb-5">
            <span className="text-2xl mr-3 font-bold">{price}</span>
            <span className="text-gray-400 line-through">$49.99</span>
          </div>
          <p className="mb-5">{description}</p>
          <div className="flex items-center gap-5 justify-center">
            <AddToCartButton {...productData} />
            <AddToWishlistButton {...productData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
