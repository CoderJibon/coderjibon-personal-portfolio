import BGBox from "@/components/BGBox/BGBox";
import MainLayout from "../MainLayout";
import Skills from "@/components/Skills/Skills";
import Coverflow from "@/components/Coverflow/Coverflow";
import { FaBook } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";

function AboutPage() {
  return (
    <>
      <MainLayout>
        <div className=" md:p-6 pt-2 text-justify container mx-auto max-w-5xl text-gray-100 dark:text-success">
          <h1 className="text-xl sm:text-2xl font-bold mb-4 text-darkyellow dark:text-primary">
            About Me
          </h1>
          <p className="text-base mb-4 leading-relaxed">
            👋 <span className="font-semibold">Hi, {"I'm"} Jibon Roy</span>, a
            passionate and results-driven
            <span className="text-darkyellow dark:text-primary font-semibold">
              {" "}
              Full-Stack MERN Developer
            </span>{" "}
            with expertise in creating feature-rich, scalable web applications.
            I specialize in building dynamic and intuitive user interfaces using
            <span className="font-semibold"> React</span> and{" "}
            <span className="font-semibold">Next.js</span>, backed by robust
            server-side logic powered by{" "}
            <span className="font-semibold">Node.js</span> and{" "}
            <span className="font-semibold">Express.js</span>, Prisma, Firebase
            and managing data with{" "}
            <span className="font-semibold">MongoDB</span>, or{" "}
            <span className="font-semibold">MySQL</span>.
          </p>

          <p className="text-base mb-6">
            I have extensive experience across the full development stack,
            ensuring seamless integration between front-end and back-end
            systems. interactive UI or engineering high-performance API with
            technology combination enables me to build full-stack applications
            that efficiently handle data flow and user interactions, resulting
            in modern and feature-rich web experiences.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-darkyellow dark:text-primary">
            Key Strengths
          </h2>
          <ul className=" list-none mb-6">
            <li className="text-base mb-2">
              🚀 <span className="font-semibold">Frontend Expertise: </span>I
              excel in translating designs into highly responsive and dynamic
              user interfaces using <span className="font-semibold">React</span>{" "}
              and <span className="font-semibold">Next.js</span>, creating
              engaging experiences that are both visually appealing and
              user-friendly.
            </li>
            <li className="text-base mb-2">
              💻 <span className="font-semibold">Backend Development:</span> I
              use <span className="font-semibold">Node.js</span>,{" "}
              <span className="font-semibold">Express.js</span>, and{" "}
              <span className="font-semibold">Prisma</span> to build scalable,
              secure, and RESTful APIs. My focus is on smooth data handling and
              server-side logic, ensuring seamless connectivity between
              front-end and back-end.
            </li>
            <li className="text-base">
              📊 <span className="font-semibold">Database Management:</span>{" "}
              Proficient in <span className="font-semibold">MongoDB</span>, and{" "}
              <span className="font-semibold">MySQL</span>, I design efficient
              database architectures to store and retrieve data quickly and
              reliably, even under heavy loads.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-darkyellow dark:text-primary">
            Technical Skills
          </h2>
          <ul className=" list-none mb-6">
            <li className="text-base mb-2">
              ✔️ <span className="font-semibold">Frontend Development: </span>
              React.js, Next.js, TypeScript, Context API, Redux Toolkit &
              Toolkit Query, Tailwind CSS, Shadcn ui, Bootstrap, API integration
            </li>
            <li className="text-base mb-2">
              ✔️ <span className="font-semibold">Backend Development:</span>{" "}
              Node.js, Express.js, Prisma, MySQL, MongoDB, RestFul api
            </li>
            <li className="text-base mb-2">
              ✔️{" "}
              <span className="font-semibold">Project Management Tools:</span>{" "}
              Firebase, Heroku, Netlify, Vercel, Postman, Trello
            </li>
            <li className="text-base mb-2">
              ✔️ <span className="font-semibold">Version Control:</span> Git,
              GitHub
            </li>
            <li className="text-base mb-2">
              ✔️ <span className="font-semibold">Design:</span> Responsive Web
              Design, UI
            </li>
            <li className="text-base">
              ✔️ <span className="font-semibold">Problem Solving:</span>{" "}
              Debugging, troubleshooting, performance optimization
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-darkyellow dark:text-primary">
            What Sets Me Apart
          </h2>
          <p className="text-lg mb-6">
            {"I’m"} not just a developer. {"I’m"} a problem solver. I thrive in
            tackling challenges head-on and finding innovative solutions that
            enhance the functionality and performance of applications. My
            commitment to continuous learning keeps me up-to-date with the
            latest trends in web development, allowing me to integrate
            cutting-edge technologies into my work.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-darkyellow dark:text-primary">
            {"Let’s"} Work Together
          </h2>
          <p className="text-base">
            If {"you're"} in need of a modern web application or robust back-end
            development, {"I’m"} here to help. {"Let’s"} collaborate to bring
            your vision to life!
          </p>

          <p className="text-base mt-6">
            📧 <span className="font-semibold">Email: </span>
            contact.engjibon@gmail.com
            <br />
            🌐{" "}
            <a
              href="https://www.linkedin.com/in/coderjibon/"
              className="text-darkyellow dark:text-primary underline"
            >
              Linkedin
            </a>
          </p>
        </div>
      </MainLayout>
      <BGBox>
        <h2 className="text-2xl md:text-3xl text-color dark:dark-text-color font-semibold ">
          My Skills
        </h2>
        <Skills />
      </BGBox>
      {/* Education & Experience */}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 mb-5 ">
        <BGBox>
          <h2 className="text-2xl md:text-3xl mb-7 text-color dark:dark-text-color font-semibold ">
            My Education
          </h2>
          <div className="flex gap-7 items-center pl-3">
            <div>
              <FaBook className="text-gray-400 dark:text-success text-4xl" />
            </div>
            <div>
              <p className="text-base dark:text-darkLight text-gray-400">
                2013 - Present
              </p>
              <p className="text-lg sm:text-2xl capitalize mb-2 mt-2">
                Secondaary school certificate S.S.C
              </p>
              <p className="text-base capitalize dark:text-darkLight text-gray-400">
                Murapara model pilot hight school, narayanganj.
              </p>
            </div>
          </div>
          <hr className=" text-success my-5" />
          <div className="flex gap-7 items-center pl-3">
            <div>
              <FaBook className="text-gray-400 dark:text-success text-4xl" />
            </div>
            <div>
              <p className="sm:text-base text-xs dark:text-darkLight text-gray-400">
                2015 - 2019
              </p>
              <p className="text-lg sm:text-2xl capitalize mb-2 mt-2">
                diploma in computer engineering
              </p>
              <p className="sm:text-base text-xs capitalize dark:text-darkLight text-gray-400">
                PPMI, narayanganj.
              </p>
            </div>
          </div>
          <hr className=" text-success my-5" />
          <div className="flex gap-7 items-center pl-3">
            <div>
              <FaBook className="text-gray-400 dark:text-success text-4xl" />
            </div>
            <div>
              <p className="sm:text-base text-xs dark:text-darkLight text-gray-400">
                2018 - 2019
              </p>
              <p className="text-lg sm:text-2xl capitalize mb-2 mt-2">
                front-end web developer course
              </p>
              <p className="sm:text-base text-xs capitalize dark:text-darkLight text-gray-400">
                SoftTech-IT, Dhaka.
              </p>
            </div>
          </div>
          <hr className=" text-success my-5" />
          <div className="flex gap-7 items-center pl-3">
            <div>
              <FaBook className="text-gray-400 dark:text-success text-4xl" />
            </div>
            <div>
              <p className="sm:text-base text-xs dark:text-darkLight text-gray-400">
                2019 - 2020
              </p>
              <p className="text-lg sm:text-2xl capitalize mb-2 mt-2">
                Shopify E-commerce Platform
              </p>
              <p className="sm:text-base text-xs capitalize dark:text-darkLight text-gray-400">
                Shopify Partner
              </p>
            </div>
          </div>
          <hr className=" text-success my-5" />
          <div className="flex gap-7 items-center pl-3">
            <div>
              <FaBook className="text-gray-400 dark:text-success text-4xl" />
            </div>
            <div>
              <p className="sm:text-base text-xs dark:text-darkLight text-gray-400">
                2020 - 2021
              </p>
              <p className="text-lg sm:text-2xl capitalize mb-2 mt-2">
                Complete Web Development course
              </p>
              <p className="sm:text-base text-xs capitalize dark:text-darkLight text-gray-400">
                Programming Hero, Dhaka.
              </p>
            </div>
          </div>
          <hr className=" text-success my-5" />
          <div className="flex gap-7 items-center pl-3">
            <div>
              <FaBook className="text-gray-400 dark:text-success text-4xl" />
            </div>
            <div>
              <p className="sm:text-base text-xs dark:text-darkLight text-gray-400">
                2022 - 2023
              </p>
              <p className="text-lg sm:text-2xl capitalize mb-2 mt-2">
                MERN full stack web app development course
              </p>
              <p className="sm:text-base text-xs capitalize dark:text-darkLight text-gray-400">
                sorobindu, Dhaka.
              </p>
            </div>
          </div>
        </BGBox>
        <BGBox>
          <h2 className="text-2xl md:text-3xl mb-7 text-color dark:dark-text-color font-semibold ">
            My Experience
          </h2>
          <div className="flex gap-7 items-center pl-3">
            <div>
              <BsPersonWorkspace className="text-gray-400 dark:text-success text-4xl" />
            </div>
            <div>
              <p className="sm:text-base text-xs dark:text-darkLight text-gray-400">
                2020 - 2021
              </p>
              <p className="text-lg sm:text-2xl capitalize mb-2 mt-2">
                front-end web developer
              </p>
              <p className="sm:text-base text-xs capitalize dark:text-darkLight text-gray-400">
                BitwiseCode Technologies, Dhaka.
              </p>
            </div>
          </div>
          <hr className=" text-success my-5" />
          <div className="flex gap-7 items-center pl-3">
            <div>
              <BsPersonWorkspace className="text-gray-400 dark:text-success text-4xl" />
            </div>
            <div>
              <p className="sm:text-base text-xs dark:text-darkLight text-gray-400">
                2021 - 2022
              </p>
              <p className="text-lg sm:text-2xl capitalize mb-2 mt-2">
                front-end Design and shopify developer
              </p>
              <p className="sm:text-base text-xs capitalize dark:text-darkLight text-gray-400">
                scraft.studio, indian. (Remote)
              </p>
            </div>
          </div>
        </BGBox>
      </div>
      {/* Project */}
      <BGBox>
        <h2 className="text-2xl md:text-3xl mb-7 text-center text-color dark:dark-text-color font-semibold ">
          Works & Projects
        </h2>
        <Coverflow />
      </BGBox>
    </>
  );
}

export default AboutPage;
