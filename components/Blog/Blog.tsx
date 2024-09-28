import Image from "next/image.js";
import Link from "next/link.js";
import project from "@/public/images/project.jpg";
import { GoArrowRight } from "react-icons/go";
function Blog() {
  return (
    <div className="group overflow-hidden rounded-tl-lg rounded-tr-lg">
      <Link target="_blank" href={"/"}>
        <Image
          className="rounded-tl-lg group-hover:scale-105 transition-all duration-700 rounded-tr-lg w-full"
          src={project}
          alt="project"
          height={350}
        />
      </Link>
      <div className="bg-success p-4 overflow-hidden dark:bg-gray-100 rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg pb-4">
        <h2 className="pt-1 pb-2 text-[18px]">
          Brand Identity and Motion Design
        </h2>
        <div className="text-[16px] text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet!
        </div>
        <Link
          className="flex mt-3 duration-700  md:text-base text-xs  gap-1 dark:text-primary text-darkyellow hover:gap-2 rounded-tr-2xl transition-all rounded-bl-2xl items-center "
          href={"/blog/create-blog-item"}
        >
          Read more
          <GoArrowRight className="text-xl  dark:text-primary" />
        </Link>
      </div>
    </div>
  );
}

export default Blog;
