"use client";
import Image from "next/image.js";
import whiteLogo from "@/public/logo/transparentLogo.png";
function Logo() {
  return (
    <>
      <Image src={whiteLogo} alt="coderjibon logo" height={40} />
    </>
  );
}

export default Logo;
