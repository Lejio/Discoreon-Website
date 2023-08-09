"use client";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

// MotionButton Component --> A HTML Button wrapper that contains some cool animations.

interface MotionButtonProps {
  clickHandler: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  width: number;
  height: number;
  textClassName: string;
}

export default function MotionButton({
  clickHandler,
  text,
  width,
  height,
  textClassName,
}: MotionButtonProps) {

  const [hover, setHover] = useState(false)
  // Animation outline variants. The path starts at 0 and goes to 1 (the end) over a duration of 0.5s, things such as the opacity
  // and stroke color also changes. Also the two strokeline properties are referring to the line tips.
  const outlineVariants: Variants = {
    default: {
      strokeWidth: 5,
      pathLength: 0,
      stroke: "#808080",
      strokeLinejoin: "round",
      strokeLinecap: "round",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },

    enter: {
      strokeWidth: 5,
      pathLength: 1,
      opacity: 100,
      stroke: "#5363AD",
      strokeLinejoin: "round",
      strokeLinecap: "round",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <button
      // Uses the clickHandler provided by the parent component
      onClick={clickHandler}
      className={"w-auto h-auto md:block"}
    >
      <motion.div
        className="flex flex-col items-center justify-center"
        whileHover='enter'
        initial="default"
        animate='default'
      >
        <motion.p className={` text-center absolute ${textClassName}`}>
          {text}
        </motion.p>
        <motion.svg width={width} height={height} viewBox="0 0 100 50">
          <motion.path
            variants={outlineVariants}
            strokeWidth="5"
            fill="none"
            stroke="grey"
            d="M5,25
            A20,20 0 0 1 25,5
            L75,5
            A20,20 0 0 1 95,30
            L95,30
            A20,20 0 0 1 75,45
            L25,45
            A20,20 0 0 1 5,24"

            // Work in progress on possibly expanding the length of the button based on the width prop.
            // d={`M${5 - width},25
            // A20,20 0 0 1 25,5
            // L${75 + width},5
            // A20,20 0 0 1 ${95 + width},30
            // L${95 + width},30
            // A20,20 0 0 1 ${75 + width},45
            // L25,45
            // A20,20 0 0 1 ${5 - width},24`}
          />
        </motion.svg>
      </motion.div>
    </button>
  );
}
