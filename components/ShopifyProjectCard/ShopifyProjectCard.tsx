import Image from "next/image.js";
import Link from "next/link.js";
import { GoArrowUpRight } from "react-icons/go";

type projectProps = {
  url: string;
  image: string;
  name: string;
};

function ShopifyProjectCard({ project }: { project: projectProps }) {
  return (
    <div className="relative overflow-hidden group rounded-tl-lg rounded-tr-lg">
      <div className="max-h-[300px] overflow-hidden">
        <Image
          className="transform hover:translate-y-[-500px] rounded-tl-lg transition-transform duration-[2000ms] rounded-tr-lg w-full"
          src={project.image}
          alt="project"
          height={800}
          width={1200}
        />
      </div>
      <Link
        target="_blank"
        className="flex md:-mr-28 md:group-hover:mr-0 duration-700  absolute top-2 right-2 md:text-base text-xs  gap-1 dark:bg-primary bg-darkyellow px-2 py-1 rounded-tr-2xl transition-all hover:scale-110 text-success rounded-bl-2xl items-center dark:text-white"
        href={project.url}
      >
        Visit Site{" "}
        <GoArrowUpRight className="text-xl text-blue-700 dark:text-white" />
      </Link>
      <div className="bg-success dark:bg-gray-100 rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg pb-4 px-4">
        <h2 className="text-center pt-2 pb-1 text-[18px]">{project.name}</h2>
        <div className="text-gray-400 hidden ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
          natus. Doloremque consequatur sint a eaque quibusdam expedita vero
          nemo harum sit iste fuga quae
        </div>
      </div>
    </div>
  );
}

export default ShopifyProjectCard;
