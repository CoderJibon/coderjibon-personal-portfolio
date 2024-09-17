"use client";
import React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

function Switch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      <button className="cursor-pointe p-1 rounded-sm transition-all ease-in-out duration-300 hover:scale-125 ">
        {currentTheme === "dark" ? (
          <MdDarkMode
            onClick={() => setTheme("light")}
            className="text-2xl text-yellow-400"
          />
        ) : (
          <MdLightMode
            onClick={() => setTheme("dark")}
            className="text-2xl text-yellow-400"
          />
        )}
      </button>
    </>
  );
}

export default Switch;
