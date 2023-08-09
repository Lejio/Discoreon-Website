"use client";

import React from "react";
import { useEffect } from "react";
import { useInView } from "framer-motion";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

import Image from "next/image";
import PipulpEmbed from "../../assets/embed.png";

const EmbedBody = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  const embedVariant = {
    visible: { opacity: 100, x: 0 },
    hidden: { opacity: 0, x: -50 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  });

  return (
    <div className="flex w-[80%] items-center justify-around my-[10%]">
      <div>
        <div className=" md:text-6xl md:leading-tight text-3xl">
          <motion.div
            className=" text-light-primary"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={embedVariant}
            transition={{ duration: .75, delay: 0.5 }}
          >
            Amazing
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={embedVariant}
            transition={{ duration: .75, delay: 1 }}
          >
            Embed Designs
          </motion.div>
        </div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={embedVariant}
          transition={{ duration: .75, delay: 1.5 }}
        >
          <br />
          <hr />
          <br />
          <p className="md:text-3xl md:leading-tight">
            Each page contains colors <br />
            custom to the pokemon's type.
          </p>
        </motion.div>
      </div>
      <Image className="h-[35vw] w-[25vw]" src={PipulpEmbed} alt="Pipulp Embed" />
    </div>
  );
};

export default EmbedBody;
