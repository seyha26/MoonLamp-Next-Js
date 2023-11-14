"use client";
// REACT AND NEXT IMPORT
import { useState } from "react";
import Image from "next/image";
import Cart from "./Cart";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";

// ICONS
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { BsCart4, BsFillBagHeartFill } from "react-icons/bs";

// IMAGES
import logo from "@/public/images/moonlamplogo.png";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const mobileMenuHanlder = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  const cartStore = useCartStore();
  console.log(cartStore.isOpen);
  return (
    <nav className="py-3">
      <div className="w-[89%] mx-auto flex justify-between items-center max-w-[1400px]">
        <div>
          <Image src={logo} width={200} height={200} alt="logo" />
        </div>
        <ul
          className={`md:flex items-center gap-8 md:static absolute text-gray-600 font-medium ${
            openMobileMenu
              ? "top-12 py-10 w-full bg-background left-0 text-center space-y-10 text-dark drop-shadow-lg z-20"
              : "hidden"
          }`}
        >
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/">More Info</Link>
          </li>
          <li>
            <Link href="/">FAQ</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
        <div className="flex gap-4 items-center text-dark ml-auto md:ml-0">
          <div onClick={() => cartStore.toggleCart()}>
            <BsCart4 size="20" />
          </div>
          <div>
            <BsFillBagHeartFill size="20" />
          </div>
        </div>
        <div className="md:hidden ml-4" onClick={mobileMenuHanlder}>
          {openMobileMenu ? <MdClose size="25" /> : <FiMenu size="25" />}
        </div>
      </div>
      {cartStore.isOpen && <Cart />}
    </nav>
  );
};

export default Navbar;
