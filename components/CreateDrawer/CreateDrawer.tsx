"use client";
import Image from "next/image.js";
import Drawer from "react-modern-drawer";
import { FaWhatsapp, FaX } from "react-icons/fa6";
import { Menu } from "@/data/Data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import transparentLogo from "@/public/logo/transparentLogo.png";
import whiteLogo from "@/public/logo/whiteLogo.png";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
type DrawerProps = {
  open: boolean;
  onClose: () => void;
};

function CreateDrawer({ open, onClose }: DrawerProps) {
  const pathName = usePathname();
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Drawer open={open} onClose={onClose} direction={"left"}>
      <div className="p-4 bg-darkLight  dark:bg-white  h-screen">
        <div className="flex justify-between items-center">
          <Image
            src={currentTheme === "dark" ? transparentLogo : whiteLogo}
            alt="coderjibon logo"
            height={40}
          />
          <button
            onClick={onClose}
            className="text-white border dark:text-success dark:hover:text-white border-gray-300 rounded-md dark:hover:bg-primary hover:bg-darkyellow transition-all hover:text-black text-xs p-2"
          >
            <FaX />
          </button>
        </div>
        <div className="h-[1px] mt-4 mb-4 bg-white"></div>
        <div className="p-4 space-y-6  ml-7">
          {Menu.map((menu) => (
            <Link
              key={menu.id}
              className="text-gray-400 font-helvetica text-base font-semibold relative flex  items-center hover:text-white dark:text-success dark:hover:text-primary  justify-center w-fit "
              href={menu.url}
            >
              <span
                className={`text-xl absolute -left-[30px] ${
                  pathName === menu.url ? "dark:text-primary text-white " : ""
                } `}
              >
                {menu.icon}
              </span>
              <p
                className={`menuItem ${
                  pathName === menu.url
                    ? "after:scale-x-100 dark:text-primary text-white "
                    : ""
                } `}
              >
                {menu.label}
              </p>
            </Link>
          ))}
        </div>
        <div className="p-4 mt-3">
          <Link
            target="_blank"
            href={"https://wa.link/fpvk13"}
            className="hidden text-sm ease-in-out lg:flex items-center justify-center gap-2 text-white  py-3 px-6  rounded-lg  bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 font-semibold"
          >
            {"Let's Talk"} <FaWhatsapp className="text-lg" />
          </Link>
        </div>
      </div>
    </Drawer>
  );
}

export default CreateDrawer;
