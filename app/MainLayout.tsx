import Profile from "@/components/Profile/Profile";
import React from "react";

function MainLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex lg:space-x-4 pt-2 md:pt-0 ">
      <div className="bg-darkLight p-4 rounded-md lg:w-1/4 dark:bg-white dark:border dark:shadow-sm hidden lg:block lg:min-h-screen h-full lg:sticky lg:top-[83px]">
        <Profile />
      </div>
      <div
        className="bg-darkLight p-4 rounded-md w-full lg:w-3/4 dark:bg-white dark:border dark:shadow-sm lg:min-h-screen h-full 
      "
      >
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
