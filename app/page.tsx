import Link from "next/link.js";
import MainLayout from "./MainLayout";
import { FaDownload } from "react-icons/fa";
import Image from "next/image.js";
import img from "@/public/images/animited/01.png";
import Counter from "@/components/Counter/Counter";
import Skills from "@/components/Skills/Skills";
import BGBox from "@/components/BGBox/BGBox";
import MyServices from "@/components/MyServices/MyServices";
import Coverflow from "@/components/Coverflow/Coverflow";
import Shopify from "@/components/Shopify/Shopify";
import ClientReview from "@/components/ClientReview/ClientReview";
import Blog from "@/components/Blog/Blog";
import { GoArrowRight } from "react-icons/go";
export default function Home() {
  return (
    <>
      <MainLayout>
        <div className="rounded-md lg:pl-4  md:flex items-center justify-center ">
          <div className="md:w-3/5 w-full">
            <p className="text-base"> Hi there 👋</p>
            <p className="text-2xl font-semibold dark:text-success ">
              {"I'm Jibon Roy"}
            </p>
            <p className=" text-2xl sm:text-4xl font-semibold text-color dark:dark-text-color mt-2  lg:w-full  ">
              A Passionate Full Stack Developer & Shopify Expert.
            </p>
            <p className="text-gray-400 font-medium text-base max-w-md mt-3 mb-0 lg:mb-3 dark:text-success text-justify ">
              I turn your ideas into reality, crafting unique web solutions that
              not only meet your needs but also inspire both you and your
              customers. With expertise in JavaScript, Node.js, React.js,
              MongoDB, Express.js, REST APIs, Next.js, ReduxToolkit and Shopify
              development, I am dedicated to delivering web projects that stand
              out.
            </p>

            <div className="mt-0 lg:mt-5 flex flex-col-reverse lg:flex-row gap-3 lg:gap-5  lg:items-center">
              <Link
                className="flex gap-2 items-center px-3 lg:px-5 py-2 xl:py-3 xl:px-8 border w-fit rounded-full border-white dark:border-primary text-white dark:text-primary hover:text-success hover:bg-darkyellow dark:hover:bg-primary dark:hover:text-white transition cursor-pointer "
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
        {/* Skill */}
        <div className=" mt-4 ">
          <h2 className=" font-semibold text-2xl sm:text-3xl">My Skills</h2>
          <Skills />
        </div>
      </MainLayout>
      {/* counter */}
      <BGBox>
        <Counter />
      </BGBox>
      {/* MyServices */}
      <BGBox>
        <h2 className="text-2xl sm:text-3xl mb-7 text-center text-color dark:dark-text-color font-semibold capitalize ">
          my expectations
        </h2>
        <MyServices />
      </BGBox>
      {/* MyProject for react */}
      <BGBox>
        <h2 className="text-2xl sm:text-3xl mb-7 text-center text-color dark:dark-text-color font-semibold ">
          Works & Projects
        </h2>
        <Coverflow />
      </BGBox>
      {/* Client Reviews*/}
      <BGBox className="relative mt-4">
        <h2 className="text-2xl sm:text-3xl mb-7 text-left md:text-center text-color dark:dark-text-color font-semibold ">
          What clients say!
        </h2>
        <ClientReview />
      </BGBox>
      {/* Shopify Project*/}
      <BGBox>
        <div className="mb-7 flex justify-between items-center">
          <h2 className="text-2xl sm:text-3xl  text-color dark:dark-text-color font-semibold ">
            Shopify Projects
          </h2>
          <Link
            className="text-base flex font-semibold group gap-1 items-center underline-offset-8 dark:text-success hover:text-darkyellow dark:hover:text-primary transition-all "
            href={"/shopify"}
          >
            View more{" "}
            <GoArrowRight className="text-xl group-hover:translate-x-1  " />
          </Link>
        </div>
        <Shopify />
      </BGBox>
      {/* Recent Blogs*/}
      <BGBox className="hidden">
        <div className="mb-7 flex justify-between items-center">
          <h2 className="text-2xl sm:text-3xl  text-color dark:dark-text-color font-semibold ">
            Recent Blogs
          </h2>
          <Link
            className="text-base flex font-semibold group gap-1 items-center underline-offset-8 dark:text-success hover:text-darkyellow dark:hover:text-primary transition-all "
            href={"/blog"}
          >
            View more{" "}
            <GoArrowRight className="text-xl group-hover:translate-x-1  " />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Blog />
          <Blog />
          <Blog />
        </div>
      </BGBox>
    </>
  );
}
