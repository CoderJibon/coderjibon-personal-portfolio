"use client";
import Image from "next/image.js";
import Drawer from "react-modern-drawer";
import { FaWhatsapp, FaX } from "react-icons/fa6";
import { useTheme } from "next-themes";
import { Menu } from "@/data/Data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import whiteLogo from "@/public/logo/whiteLogo.png";
import colorLogo from "@/public/logo/logo.png";
type DrawerProps = {
  open: boolean;
  onClose: () => void;
};

function CreateDrawer({ open, onClose }: DrawerProps) {
  const pathName = usePathname();
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <Drawer open={open} onClose={onClose} direction={"left"}>
      <div className="p-4 bg-success dark:bg-secondary  h-screen">
        <div className="flex justify-between items-center">
          {currentTheme === "dark" ? (
            <Image src={whiteLogo} alt="coderjibon logo" height={40} />
          ) : (
            <Image src={colorLogo} alt="coderjibon logo" height={40} />
          )}
          <button
            onClick={onClose}
            className="text-white border border-gray-300 rounded-md hover:bg-primary transition-all hover:text-black text-xs p-2"
          >
            <FaX />
          </button>
        </div>
        <div className="h-[1px] mt-4 mb-4 bg-white"></div>
        <div className="p-4 space-y-6 ml-8">
          {Menu.map((menu) => (
            <Link
              key={menu.id}
              className="text-white font-helvetica text-base font-semibold relative flex  items-center  justify-center w-fit "
              href={menu.url}
            >
              <span className="text-xl absolute -left-[30px] ">
                {menu.icon}
              </span>
              <p
                className={`menuItem ${
                  pathName === menu.url ? "after:scale-x-100" : ""
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
