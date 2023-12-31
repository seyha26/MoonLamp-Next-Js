"use client";
// REACT AND NEXT IMPORT
import { useState, useEffect } from "react";
import Image from "next/image";
import Cart from "./Cart";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useRouter } from "next/navigation";

// ICONS
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

// CLERK IMPORT
import { UserButton, useUser } from "@clerk/nextjs";

// IMAGES
import logo from "@/public/images/moonlamplogo.png";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import WishList from "./Wishlist";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const wishListStore = useWishlistStore();
  const mobileMenuHanlder = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  const cartStore = useCartStore();
  const router = useRouter();

  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [openMobileMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  return (
    <nav
      className={`py-4 w-full ${
        isScrolling ? "sticky top-0 shadow-lg bg-white z-50" : "relative"
      }`}
    >
      <div className="w-[89%] mx-auto flex justify-between  items-center max-w-[1400px]">
        <div onClick={() => router.push("/")}>
          <Image src={logo} width={150} height={150} alt="logo" />
        </div>
        <ul
          className={`md:flex items-center gap-8 md:static absolute text-gray-600 font-medium ${
            openMobileMenu
              ? "top-12 py-10 w-full bg-secondary left-0 text-center space-y-10 text-white drop-shadow-lg z-20"
              : "hidden"
          }`}
        >
          <li>
            <Link onClick={() => setOpenMobileMenu(false)} href="/#shop">
              Shop
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpenMobileMenu(false)} href="/#features">
              Features
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpenMobileMenu(false)} href="/#faq">
              FAQ
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpenMobileMenu(false)} href="/#contact">
              Contact
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpenMobileMenu(false)} href="/orders">
              My Orders
            </Link>
          </li>
        </ul>
        <div className="flex gap-4 items-center text-dark ml-auto md:ml-0">
          <div
            className="cursor-pointer relative"
            onClick={() => {
              cartStore.toggleCart();
            }}
          >
            <AiOutlineShoppingCart size="25" />
            {cartStore.cart.length > 0 && (
              <span className="absolute bg-primary text-white text-sm font-bold h-4 w-4 flex items-center justify-center left-4 bottom-4 rounded-full">
                {cartStore.cart.length}
              </span>
            )}
          </div>
          <div onClick={() => wishListStore.toggleWishList()}>
            <AiOutlineHeart size="25" />
          </div>
          {!isSignedIn ? (
            <Link href="/sign-in">
              <AiOutlineUser size={25} />
            </Link>
          ) : (
            <UserButton />
          )}
        </div>
        <div className="md:hidden ml-4" onClick={mobileMenuHanlder}>
          {openMobileMenu ? <MdClose size="25" /> : <FiMenu size="25" />}
        </div>
      </div>
      {cartStore.isOpen && <Cart />}
      {wishListStore.openWishlist && <WishList />}
    </nav>
  );
};

export default Navbar;
