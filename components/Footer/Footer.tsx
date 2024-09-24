import Link from "next/link.js";
import { FaLinkedin } from "react-icons/fa";
import {
  FaFacebook,
  FaGithub,
  FaSkype,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="p-[5px] md:p-[15px]">
      <div className="bg-darkLight space-y-3 md:space-y-0 flex-col-reverse md:flex-row dark:bg-white md:items-center dark:border shadow-sm py-2 px-4 rounded-md flex items-center text-center justify-between">
        <p className="text-sm text-[#8c8c8e] dark:text-darkLight">
          Copyright © 2019-{currentYear} All Rights Reserved.
        </p>
        <div className="flex space-x-3 items-center justify-center">
          <Link
            className=" text-xl md:text-2xl hover:text-darkyellow transition text-gray-400 items-center dark:text-darkLight dark:hover:text-primary"
            target="_blank"
            href={"https://github.com/CoderJibon"}
          >
            <FaGithub />
          </Link>
          <Link
            className=" text-xl md:text-2xl hover:text-darkyellow transition text-gray-400 items-center dark:text-darkLight dark:hover:text-primary"
            target="_blank"
            href={"https://www.linkedin.com/in/coderjibon/"}
          >
            <FaLinkedin />
          </Link>
          <Link
            className=" text-xl md:text-2xl hover:text-darkyellow transition text-gray-400 items-center dark:text-darkLight dark:hover:text-primary"
            target="_blank"
            href={"https://www.facebook.com/coderroy/"}
          >
            <FaFacebook />
          </Link>
          <Link
            className=" text-xl md:text-2xl hover:text-darkyellow transition text-gray-400 items-center dark:text-darkLight dark:hover:text-primary"
            target="_blank"
            href={"https://wa.link/fpvk13"}
          >
            <FaWhatsapp />
          </Link>
          <Link
            className=" text-xl md:text-2xl hover:text-darkyellow transition text-gray-400 items-center dark:text-darkLight dark:hover:text-primary"
            target="_blank"
            href={"https://join.skype.com/invite/BLnlj2fzcVMv"}
          >
            <FaSkype />
          </Link>
          <Link
            className=" text-xl md:text-2xl hover:text-darkyellow transition text-gray-400 items-center dark:text-darkLight dark:hover:text-primary"
            target="_blank"
            href={"https://www.youtube.com/@coderjibon"}
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
