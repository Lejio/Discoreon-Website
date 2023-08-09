"use client";
import React from "react";
import { motion } from "framer-motion";

const ProductHero = () => {
  const heroVariant = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 100,
        transition: {
            ease: 'easeOut',
            duration: 1
        }
    }
  };

  const subVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 100,
        transition: {
            duration: 1.5
        }
    }
  }

  return (
    <div className="flex flex-col justify-center items-center my-[2%]">
      <motion.h1
        variants={heroVariant}
        initial="hidden"
        animate="visible"
        className="md:text-5xl text-3xl text-center md:leading-loose cursor-default"
      >
        Pricing Plans
      </motion.h1>
      <motion.hr
        variants={subVariant}
        animate="visible"
        initial="hidden"
        className="w-[50%]"
      />
      <motion.h3
        variants={subVariant}
        animate="visible"
        initial="hidden"
        className="text-center text-light-primary md:leading-relaxed md:text-3xl cursor-default"
      >
        Start your journey for free with some restrictions. <br />
        Purchase a plan to unlock all features.
      </motion.h3>
    </div>
  );
};

export default ProductHero;
