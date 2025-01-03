"use client";

import { useEffect } from "react";

const Coffee: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    const div = document.getElementById("supportByBMC");

    // Check if the div exists to prevent errors
    if (div) {
      script.setAttribute(
        "src",
        "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      );
      script.setAttribute("data-name", "BMC-Widget");
      script.setAttribute("data-cfasync", "false");
      script.setAttribute("data-id", "coderjibon");
      script.setAttribute("data-description", "Support me on Buy me a coffee!");
      script.setAttribute(
        "data-message",
        "Thanks for visiting my portfolio!  Your support helps me continue building innovative web applications. I truly appreciate it!"
      );
      script.setAttribute("data-color", "#FF813F");
      script.setAttribute("data-position", "Right");
      script.setAttribute("data-x_margin", "18");
      script.setAttribute("data-y_margin", "18");

      script.onload = () => {
        const evt = new Event("DOMContentLoaded");
        window.dispatchEvent(evt);
      };

      div.appendChild(script);
    }

    // Cleanup script when the component unmounts
    return () => {
      if (div) {
        div.removeChild(script);
      }
    };
  }, []);

  return <div id="supportByBMC"></div>;
};

export default Coffee;
