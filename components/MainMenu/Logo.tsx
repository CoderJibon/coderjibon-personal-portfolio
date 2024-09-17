"use client";
import Image from "next/image.js";
import ColorLogo from "@/public/logo/logo.png";
import whiteLogo from "@/public/logo/whiteLogo.png";
import { useTheme } from "next-themes";
function Logo() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {currentTheme === "dark" ? (
        <Image src={whiteLogo} alt="coderjibon logo" height={40} />
      ) : (
        <Image src={ColorLogo} alt="coderjibon logo" height={40} />
      )}
    </>
  );
}

export default Logo;
