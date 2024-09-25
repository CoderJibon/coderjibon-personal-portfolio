"use client";
import { services } from "@/data/Services";
import Tilt from "react-parallax-tilt";
function MyServices() {
  return (
    <div>
      <h2 className="text-2xl mb-4">My Quality Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-5">
        {services.map((sv, index) => (
          <Tilt
            key={index}
            className="bg-success items-center flex flex-col justify-center p-4 rounded-md dark:bg-gray-100 cursor-pointer"
          >
            <div className="text-5xl dark:text-primary text-darkyellow w-10 h-10 mb-3">
              {sv.icon}
            </div>
            <h6 className="text-[14px] font-semibold mt-2 uppercase ">
              {sv.name}
            </h6>
            <p className="text-[14px] text-center mt-2 dark:text-success text-gray-400  ">
              {sv.description}
            </p>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default MyServices;
