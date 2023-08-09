"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DarkLogo from "../../assets/discoreon_dark.png";
import LightLogo from "../../assets/discoreon_light.png";

const Hero = () => {
  const heroVariant = {
    hidden: {
      x: -250,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 100,
    },
  };

  return (
    <div className="md:h-[100vh] md:w-[100vw] md:my-0 my-[20%] flex flex-col justify-around">
      <div className="mx-[10%] my-[5%] md:text-7xl md:leading-loose text-3xl text-light-primary">
        <motion.div
          variants={heroVariant}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1,
          }}
        >
          Introducing
        </motion.div>
        <motion.div
          variants={heroVariant}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.75,
            duration: 1,
          }}
        >
          <Image alt="Dark Logo" src={DarkLogo} />
        </motion.div>
        <motion.div
          variants={heroVariant}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1.25,
            duration: 1,
          }}
        >
          Bot
        </motion.div>
      </div>
      <motion.div 
      variants={heroVariant}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 2,
        duration: 1
      }}
      className="mx-[10%] md:mb-[10%]">
        <h3 className="md:text-4xl leading-loose">
          <hr />
          <br />
          The Pokemon bot you have been searching for.
        </h3>
      </motion.div>
    </div>
  );
};

export default Hero;
