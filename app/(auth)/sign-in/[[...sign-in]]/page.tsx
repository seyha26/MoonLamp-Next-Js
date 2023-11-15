"use client";
import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <div className="w-full h-[65vh] flex items-center justify-center"></div>
      <div
        onClick={() => router.push("/")}
        className="absolute top-0 w-full h-screen  bg-black/25 z-100"
      ></div>{" "}
      <div className="pt-[20px] my-9 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%]">
        <SignIn />
      </div>
    </>
  );
}
