import Image from "next/image.js";
import project from "@/public/images/project.jpg";
import Link from "next/link.js";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";

function ProjectCard() {
  return (
    <div className="relative overflow-hidden group">
      <Image
        className="rounded-tl-lg transition-all duration-700 rounded-tr-lg w-full"
        src={project}
        alt="project"
        height={350}
      />
      <Link
        className="flex md:-mr-28 md:group-hover:mr-0 duration-700  absolute top-2 right-2 md:text-base text-xs  gap-1 dark:bg-primary bg-darkyellow px-2 py-1 rounded-tr-2xl transition-all hover:scale-110 text-success rounded-bl-2xl items-center dark:text-white"
        href={"/"}
      >
        Visit Site{" "}
        <GoArrowUpRight className="text-xl text-blue-700 dark:text-white" />
      </Link>
      <Link
        className="flex md:-mt-28 md:group-hover:mt-0 duration-700 absolute top-2 left-2 text-base gap-1 bg-darkyellow dark:bg-primary px-2 py-1 rounded-tr-2xl transition-all hover:scale-110 text-success rounded-bl-2xl items-center dark:text-white"
        href={"/"}
      >
        <FaGithub className="text-2xl " />
      </Link>
      <div className="bg-success dark:bg-gray-100 rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg pb-4">
        <h2 className="text-center pt-2 pb-2 text-xl">
          Brand Identity and Motion Design
        </h2>
        <div className="flex flex-wrap gap-2 mt-2 justify-center items-center">
          <button className="rounded-md text-xs capitalize py-0.5 bg-darkyellow dark:bg-primary dark:text-white text-success px-[8px] font-semibold ">
            react
          </button>
          <button className="rounded-md text-xs capitalize py-0.5 bg-darkyellow dark:bg-primary dark:text-white text-success px-[8px] font-semibold ">
            react
          </button>
          <button className="rounded-md text-xs capitalize py-0.5 bg-darkyellow dark:bg-primary dark:text-white text-success px-[8px] font-semibold ">
            react
          </button>
          <button className="rounded-md text-xs capitalize py-0.5 bg-darkyellow dark:bg-primary dark:text-white text-success px-[8px] font-semibold ">
            react
          </button>
          <button className="rounded-md text-xs capitalize py-0.5 bg-darkyellow dark:bg-primary dark:text-white text-success px-[8px] font-semibold ">
            react
          </button>
          <button className="rounded-md text-xs capitalize py-0.5 bg-darkyellow dark:bg-primary dark:text-white text-success px-[8px] font-semibold ">
            react
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
