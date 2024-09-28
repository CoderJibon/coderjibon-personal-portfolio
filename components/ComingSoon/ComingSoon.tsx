import React from "react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <h1 className="  text-5xl font-bold text-darkyellow dark:text-primary mb-4">
        Coming Soon
      </h1>
      <p className="text-lg text-gray-400 dark:text-success mb-8">
        {"I'm"} working hard to bring you something amazing!
      </p>

      <div className="mt-12">
        <p className="text-gray-400 dark:text-success">
          Stay tuned for updates!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
