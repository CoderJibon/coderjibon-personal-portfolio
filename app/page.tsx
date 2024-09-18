import Link from "next/link.js";
import MainLayout from "./MainLayout";
import { FaDownload } from "react-icons/fa";
import Image from "next/image.js";
import img from "@/public/images/animited/01.png";
export default function Home() {
  return (
    <>
      <MainLayout>
        <div className="rounded-md  md:flex items-center justify-center ">
          <div className="md:w-3/5 w-full">
            <p className="text-base"> Hi there 👋</p>
            <p className="text-2xl font-semibold dark:text-success ">
              {"I'm Jibon Roy"}
            </p>
            <p className=" text-2xl sm:text-4xl font-semibold text-color mt-2  ">
              A Passionate Full Stack Developer & Shopify Expert.
            </p>
            <p className="text-gray-400 font-medium text-base max-w-md mt-3 mb-0 lg:mb-3 dark:text-success ">
              Specializing in MongoDB, Express, React, Node.js, Next.js, Redux
              Toolkit, and Shopify Liquid.
            </p>

            <div className="mt-0 lg:mt-5 flex flex-col-reverse lg:flex-row gap-3 lg:gap-5  lg:items-center">
              <Link
                className="flex gap-2 items-center px-3 py-2 xl:py-3 xl:px-8 border w-fit rounded-full border-primary text-primary hover:text-white hover:bg-primary transition cursor-pointer "
                download={true}
                href={"/"}
              >
                Download Resume
                <FaDownload />
              </Link>
              <div className="dark:bg-[#F0F2F5] mt-4 lg:mt-0 bg-success  flex items-center gap-3 px-3 py-2 w-fit rounded-lg lg:text-[14px] xl:text-base">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                </span>
                Available for Freelancing
              </div>
            </div>
          </div>
          <div className="md:w-2/5 w-full hidden md:block">
            <Image src={img} alt="Developer" />
          </div>
        </div>
      </MainLayout>
    </>
  );
}
