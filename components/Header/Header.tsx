"use client";
import Logo from "../MainMenu/Logo";
import MainMenu from "../MainMenu/MainMenu";
import Switch from "../Switch/Switch";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import HamburgerBtn from "./HamburgerBtn";
import ProfileBtn from "./ProfileBtn";
import CreateDrawer from "../CreateDrawer/CreateDrawer";
import { useState } from "react";
import ProfileDrawer from "../Profile/ProfileDrawer";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = (): void => {
    setIsOpen((prevState) => !prevState);
  };

  //profileDrawer
  const [isOpenProfile, setIsOpenProfile] = useState<boolean>(false);
  const toggleDrawerProfile = (): void => {
    setIsOpenProfile((prevState) => !prevState);
  };

  return (
    <>
      {/*  */}
      <div className=" p-[5px] md:p-[15px] pt-0 md:pt-0 header-area">
        <div className="dark:bg-white   dark:drop-shadow-md bg-darkLight rounded-lg py-3 px-5 flex  items-center justify-between space-x-2  xl:space-x-12 ">
          {/* left */}
          <div className="flex gap-8 lg:gap-16 items-center">
            {/* logo */}
            <Link href={"/"}>
              <Logo />
            </Link>
            {/* menu */}
            <div className="hidden  md:block">
              <MainMenu />
            </div>
          </div>
          {/* right */}
          <div className="flex sm:space-x-5 space-x-2 items-center">
            {/* switch dark mode */}
            <Switch />
            {/* profile btn */}
            <div className=" lg:hidden ">
              <ProfileBtn onClick={toggleDrawerProfile} />
            </div>
            <Link
              target="_blank"
              href={"https://wa.link/fpvk13"}
              className="hidden text-sm ease-in-out xl:flex items-center gap-2 text-white  py-3 px-6  rounded-lg  bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary font-semibold "
            >
              {"Let's Talk"} <FaWhatsapp className="text-lg" />
            </Link>
            {/* hamburger Button */}
            <div className="md:hidden">
              <HamburgerBtn onClick={toggleDrawer} />
            </div>
          </div>
        </div>
      </div>
      <CreateDrawer open={isOpen} onClose={toggleDrawer} />
      <ProfileDrawer open={isOpenProfile} onClose={toggleDrawerProfile} />
    </>
  );
}

export default Header;
