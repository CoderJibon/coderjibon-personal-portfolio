import Image from "next/image.js";
import Link from "next/link.js";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";

type projectProps = {
  name: string;
  sourceFile: string;
  liveLink: string;
  desc: string;
  shortDesc: string;
  image: string;
  skill?: string[];
};

function ProjectCard({ project }: { project: projectProps }) {
  return (
    <div className="relative overflow-hidden group rounded-tl-lg rounded-tr-lg">
      <Link target="_blank" href={project.liveLink}>
        <div className="max-h-[300px] overflow-hidden">
          <Image
            className="transform hover:translate-y-[-100px] rounded-tl-lg transition-transform duration-[2000ms] rounded-tr-lg w-full"
            src={project.image}
            alt="project"
            height={800}
            width={1200}
          />
        </div>
      </Link>
      <Link
        className="flex md:-mr-28 md:group-hover:mr-0 duration-700  absolute top-2 right-2 md:text-base text-xs  gap-1 dark:bg-primary bg-darkyellow px-2 py-1 rounded-tr-2xl transition-all hover:scale-110 text-success rounded-bl-2xl items-center dark:text-white"
        href={project.liveLink}
      >
        Visit Site{" "}
        <GoArrowUpRight className="text-xl text-blue-700 dark:text-white" />
      </Link>
      <Link
        className="flex md:-mt-28 md:group-hover:mt-0 duration-700 absolute top-2 left-2 text-base gap-1 bg-darkyellow dark:bg-primary px-2 py-1 rounded-tr-2xl transition-all hover:scale-110 text-success rounded-bl-2xl items-center dark:text-white"
        href={project.sourceFile}
      >
        <FaGithub className="text-2xl " />
      </Link>
      <div className="bg-success dark:bg-gray-100 rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg pb-4 px-4">
        <h2 className="text-center pt-2 pb-1 text-[18px] capitalize ">
          {project.name}
        </h2>
        {project.shortDesc && (
          <div className="text-gray-400 text-center ">{project.shortDesc}</div>
        )}
        <div className="flex flex-wrap gap-2 mt-2 justify-center items-center">
          {project.skill &&
            project.skill.map((skill, i) => (
              <button
                key={i}
                className="rounded-md text-xs capitalize py-0.5 bg-darkyellow dark:bg-primary dark:text-white text-success px-[8px] font-semibold "
              >
                {skill}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
