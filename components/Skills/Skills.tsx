import Marquee from "react-fast-marquee";
import { Skill } from "@/data/Data";
function Skills() {
  return (
    <div className="">
      <h2 className="text-color font-semibold text-3xl sm:text-5xl">
        My Skills
      </h2>
      <Marquee>
        <div className="mt-5 flex cursor-pointer">
          {Skill.map((skill) => (
            <div
              key={skill.id}
              className="bg-success mr-2 ml-2 dark:bg-gray-100  dark:text-success dark:hover:bg-primary dark:hover:text-white hover:bg-primary transition-all py-3 px-6 text-7xl rounded-xl"
            >
              <div className="w-[70px]">{skill.icon}</div>
              <p className="text-xs text-center mt-2">{skill.label}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default Skills;
