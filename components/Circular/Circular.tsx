"use client";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
function Circular({ percentage = 66 }: { percentage: number }) {
  return (
    <>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        minValue={1}
        strokeWidth={8}
        styles={buildStyles({
          pathTransitionDuration: 20, // animation speed
          pathColor: `#6E4EF2`,
          textColor: "#f88",
          trailColor: "#d6d6d6",
        })}
      />
    </>
  );
}

export default Circular;
