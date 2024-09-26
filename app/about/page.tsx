import BGBox from "@/components/BGBox/BGBox";
import MainLayout from "../MainLayout";

function AboutPage() {
  return (
    <>
      <MainLayout>
        <div className="p-6 container mx-auto max-w-5xl text-gray-100 dark:text-success">
          <h1 className="text-4xl font-bold mb-4 text-darkyellow dark:text-primary">
            About Me
          </h1>
          <p className="text-lg mb-6 leading-relaxed">
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
            <span className="font-semibold">Node.js</span> and
            <span className="font-semibold">Express.js</span>, and managing data
            with
            <span className="font-semibold">MongoDB</span>,{" "}
            <span className="font-semibold">Prisma</span>, and
            <span className="font-semibold">MySQL</span>.
          </p>

          <p className="text-lg mb-6">
            I have extensive experience across the full development stack,
            ensuring seamless integration between front-end and back-end
            systems. Whether {"it's"} crafting responsive, interactive UIs or
            engineering high-performance APIs, I focus on delivering efficient,
            scalable solutions that enhance user experience.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-darkyellow dark:text-primary">
            Key Strengths
          </h2>
          <ul className="list-disc list-none mb-6">
            <li className="text-lg mb-2">
              🚀 <span className="font-semibold">Frontend Expertise:</span>I
              excel in translating designs into highly responsive and dynamic
              user interfaces using <span className="font-semibold">React</span>{" "}
              and <span className="font-semibold">Next.js</span>, creating
              engaging experiences that are both visually appealing and
              user-friendly.
            </li>
            <li className="text-lg mb-2">
              💻 <span className="font-semibold">Backend Development:</span> I
              use <span className="font-semibold">Node.js</span>,{" "}
              <span className="font-semibold">Express.js</span>, and{" "}
              <span className="font-semibold">Prisma</span> to build scalable,
              secure, and RESTful APIs. My focus is on smooth data handling and
              server-side logic, ensuring seamless connectivity between
              front-end and back-end.
            </li>
            <li className="text-lg">
              📊 <span className="font-semibold">Database Management:</span>{" "}
              Proficient in <span className="font-semibold">MongoDB</span>,{" "}
              <span className="font-semibold">Prisma</span>, and{" "}
              <span className="font-semibold">MySQL</span>, I design efficient
              database architectures to store and retrieve data quickly and
              reliably, even under heavy loads.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-darkyellow dark:text-primary">
            Technical Skills
          </h2>
          <ul className="list-disc list-none mb-6">
            <li className="text-lg mb-2">
              ✔️ <span className="font-semibold">Frontend Development:</span>
              React.js, Next.js, TypeScript, Redux Toolkit & Toolkit Query,
              Socket.IO, OOP, Tailwind CSS, Material UI, Bootstrap, API
              integration
            </li>
            <li className="text-lg mb-2">
              ✔️ <span className="font-semibold">Backend Development:</span>{" "}
              Node.js, Express.js, Prisma, MySQL, MongoDB, REST API
            </li>
            <li className="text-lg mb-2">
              ✔️{" "}
              <span className="font-semibold">Project Management Tools:</span>{" "}
              Firebase, Heroku, Netlify, Vercel, Postman, Trello
            </li>
            <li className="text-lg mb-2">
              ✔️ <span className="font-semibold">Version Control:</span> Git,
              GitHub
            </li>
            <li className="text-lg mb-2">
              ✔️ <span className="font-semibold">Design:</span> Responsive Web
              Design, UI/UX
            </li>
            <li className="text-lg">
              ✔️ <span className="font-semibold">Problem Solving:</span>{" "}
              Debugging, troubleshooting, performance optimization
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 text-darkyellow dark:text-primary">
            What Sets Me Apart
          </h2>
          <p className="text-lg mb-6">
            {"I’m"} a problem solver at heart. Every project I take on, I
            approach with the mindset of finding innovative and efficient
            solutions to challenges. {"I’m"} committed to staying up-to-date
            with the latest technologies and trends, allowing me to continuously
            improve and deliver cutting-edge applications.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-darkyellow dark:text-primary">
            {"Let’s"} Work Together
          </h2>
          <p className="text-lg">
            If {"you're"} in need of a modern web application or robust back-end
            development, {"I’m"} here to help. {"Let’s"} collaborate to bring
            your vision to life!
          </p>

          <p className="text-lg mt-6">
            📧 <span className="font-semibold">Email:</span>
            contact.engjibon@gmail.com
            <br />
            🌐 <span className="font-semibold">Linkedin:</span>
            <a
              href="https://www.linkedin.com/in/coderjibon/"
              className="text-darkyellow dark:text-primary underline"
            >
              Profile
            </a>
          </p>
        </div>
      </MainLayout>
      <BGBox></BGBox>
    </>
  );
}

export default AboutPage;
