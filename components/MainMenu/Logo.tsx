"use client";
import Image from "next/image.js";
import transparentLogo from "@/public/logo/transparentLogo.png";
import whiteLogo from "@/public/logo/whiteLogo.png";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
function Logo() {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return <Image src={transparentLogo} alt="coderjibon logo" height={40} />;
  return (
    <>
      <Image
        src={currentTheme === "dark" ? transparentLogo : whiteLogo}
        alt="coderjibon logo"
        height={40}
      />
    </>
  );
}

export default Logo;
