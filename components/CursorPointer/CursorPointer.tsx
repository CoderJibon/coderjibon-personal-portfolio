"use client";
import AnimatedCursor from "react-animated-cursor";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function CursorPointer() {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        outerAlpha={0}
        innerScale={2}
        outerScale={2}
        innerStyle={
          currentTheme === "dark"
            ? { backgroundColor: "#7544D8" }
            : { backgroundColor: "#fff" }
        }
        outerStyle={
          currentTheme === "dark"
            ? { border: "3px solid #7544D8" }
            : { border: "3px solid #fff" }
        }
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
}

export default CursorPointer;
