"use client";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";
function Counter() {
  return (
    <>
      <div className="hidden sm:flex justify-between gap-3 items-center ">
        <div className="flex justify-center items-center w-full gap-4 bg-success dark:bg-gray-100 px-4 rounded-md py-2">
          <h3 className="font-bold text-darkyellow dark:text-primary text-6xl ">
            <CountUp start={0} end={3} />
          </h3>
          <p className="text-lg dark:text-success text-gray-400 ">
            Years of Experience
          </p>
        </div>

        <div className="flex w-full justify-center items-center gap-4 dark:bg-gray-100 bg-success  px-4 rounded-md py-2">
          <h3 className="font-bold text-darkyellow dark:text-primary text-6xl flex ">
            <CountUp start={0} end={125} /> <span className="text-lg">+</span>
          </h3>
          <p className="text-lg dark:text-success text-gray-400 ">
            Project Completed
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 dark:bg-gray-100 bg-success w-full px-4 rounded-md py-2">
          <h3 className="font-bold text-darkyellow dark:text-primary text-6xl flex ">
            <CountUp start={0} end={85} />
            <span className="text-lg">+</span>
          </h3>
          <p className="text-lg text-gray-400 dark:text-success ">
            Happy Clients
          </p>
        </div>
      </div>

      {/* marquee slide */}
      <div className="flex sm:hidden justify-between gap-3 items-center ">
        <Marquee direction="right">
          <div className="flex items-center gap-4 mr-3 bg-success dark:bg-gray-100 w-fit px-4 rounded-md py-2">
            <h3 className="font-bold dark:text-primary text-darkyellow text-5xl sm:text-6xl ">
              <CountUp start={0} end={3} />
            </h3>
            <p className="text-lg dark:text-success text-gray-400 ">
              Years of Experience
            </p>
          </div>
          <div className="flex items-center gap-4 mr-3 dark:bg-gray-100 bg-success w-fit px-4 rounded-md py-2">
            <h3 className="font-bold dark:text-primary text-darkyellow flex text-5xl sm:text-6xl ">
              <CountUp start={0} end={125} />
              <span className="text-lg">+</span>
            </h3>
            <p className="text-lg dark:text-success text-gray-400 ">
              Project Completed
            </p>
          </div>
          <div className="flex items-center gap-4 mr-3 dark:bg-gray-100 bg-success w-fit px-4 rounded-md py-2">
            <h3 className="font-bold dark:text-primary text-darkyellow flex text-5xl sm:text-6xl ">
              <CountUp start={0} end={85} />
              <span className="text-lg">+</span>
            </h3>
            <p className="text-lg text-gray-400 dark:text-success ">
              Happy Clients
            </p>
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default Counter;
