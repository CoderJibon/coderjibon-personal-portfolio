import Image from "next/image";
import profilePic from "@/public/logo/coderjibon.jpg";
import Link from "next/link";
import Circular from "../Circular/Circular";
import { FaGithub, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa6";

function Profile() {
  return (
    <>
      <div>
        <Image
          src={profilePic}
          alt="Jibon Roy"
          width={100}
          height={100}
          className=" rounded-full mx-auto "
        />
        <div className="mx-auto items-center flex flex-col">
          <h2
            style={{ letterSpacing: "2.5px" }}
            className="text-center mt-3 font-semibold text-[17px] uppercase "
          >
            Jibon Roy
          </h2>
          <p className="text-[15px] text-gray-400 dark:text-darkLight text-center">
            A Passionate Full Stack Developer
          </p>
          <Link
            className="text-[15px] text-gray-400 dark:text-darkLight text-center mx-auto"
            href={"mailto:contact.engjibon@gmail.com"}
          >
            contact.engjibon@gmail.com
          </Link>
        </div>
        <div className="pl-4 pr-4 pt-3">
          <div className="flex justify-between ">
            <p className="text-[14px]">Country:</p>
            <p className="text-[14px] text-gray-400 dark:text-darkLight">
              Bangladesh
            </p>
          </div>
          <div className="flex justify-between ">
            <p className="text-[14px]">City:</p>
            <p className="text-[14px] text-gray-400 dark:text-darkLight">
              Dhaka
            </p>
          </div>
          <div className="flex justify-between ">
            <p className="text-[14px]">Phone:</p>
            <p className="text-[14px] text-gray-400 dark:text-darkLight">
              <Link href={"tel:+8801985868068"}>+8801985868068</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="pl-4 pr-4 mt-4">
        <div className="h-[1px] bg-[#8c8c8e]"></div>
        <h4 className="text-[15px] mt-4">Languages</h4>
        <div className="h-[80px] md:h-[80px] lg:h-[110px] overflow-hidden mt-4 grid grid-cols-3 gap-5 justify-center ">
          <div className="text-center">
            <Circular percentage={100} />
            <p className="text-sm mt-1">Bangla</p>
          </div>
          <div className="text-center">
            <Circular percentage={70} />
            <p className="text-sm mt-1">Hindi</p>
          </div>
          <div className="text-center">
            <Circular percentage={55} />
            <p className="text-sm mt-1">English</p>
          </div>
        </div>

        <div className="mt-3">
          <Link
            target="_blank"
            href={"https://wa.link/fpvk13"}
            className=" justify-center  text-lg ease-in-out flex items-center gap-2 text-white  py-3 px-6  rounded-lg  bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary font-semibold "
          >
            {"Let's Talk"} <FaWhatsapp className="text-xl" />
          </Link>
        </div>
        <div className="mt-5 items-center flex justify-center gap-3">
          <Link
            className=" text-xl md:text-2xl  transition items-center  px-[10px] py-[10px] inline-block bg-success dark:bg-slate-200 rounded-md hover:bg-darkyellow hover:text-black dark:hover:bg-primary dark:hover:text-white"
            target="_blank"
            href={"https://github.com/CoderJibon"}
          >
            <FaGithub />
          </Link>
          <Link
            className=" text-xl md:text-2xl  transition items-center  px-[10px] py-[10px] inline-block bg-success dark:bg-slate-200 rounded-md hover:bg-darkyellow hover:text-black dark:hover:bg-primary dark:hover:text-white"
            target="_blank"
            href={"https://www.linkedin.com/in/coderjibon/"}
          >
            <FaLinkedin />
          </Link>
          <Link
            className=" text-xl md:text-2xl  transition items-center  px-[10px] py-[10px] inline-block bg-success dark:bg-slate-200 rounded-md hover:bg-darkyellow hover:text-black dark:hover:bg-primary dark:hover:text-white"
            target="_blank"
            href={"https://wa.link/fpvk13"}
          >
            <FaWhatsapp />
          </Link>
          <Link
            className=" text-xl md:text-2xl  transition items-center  px-[10px] py-[10px] inline-block bg-success dark:bg-slate-200 rounded-md hover:bg-darkyellow hover:text-black dark:hover:bg-primary dark:hover:text-white"
            target="_blank"
            href={"https://www.youtube.com/@coderjibon"}
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Profile;
