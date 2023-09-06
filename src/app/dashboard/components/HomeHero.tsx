"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { UserMetadata } from "@supabase/supabase-js";

interface LoaderProps {
  src: string,
  width: string,
  quality: string
}


// HomeHero Component --> The welcome div of the landing page after login.
const HomeHero = ({ discord_user }: {
  discord_user: UserMetadata
}) => {

  // Greetings variant to animate the h1 greeting tag of the HomeHero component.
  const greetingVariant = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 100,
      transition: {
        duration: 1,
      },
    },
  };

  // Profile variant to animate the discord pfp of the HomeHero component.
  const heroImageVariant = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 100,
        transition: {
            duration: 1,
        }
    }
  }

  // Image loader, required by Image/NextJS to load images from other sources.
  const imageLoader = ({ src, width, quality }: LoaderProps) => {
    return discord_user.picture;
  };

  return (
    <div className="md:h-[90vh] md:w-[100vw] md:my-0 my-[20%] flex flex-col justify-center items-center text-center">
      <motion.div
        variants={heroImageVariant}
        initial='hidden'
        animate='visible'
      >
        <Image
          className="border-2 rounded-full border-light-primary mb-[10%]"
          // Since the foreign image source does not take a width property, Image/NextJS requires a unoptimized prop.
          unoptimized={true}
          width={170}
          height={170}
          src={discord_user.picture}
          alt="Profile Picture"
        />
      </motion.div>
      <motion.h1
        variants={greetingVariant}
        initial="hidden"
        animate="visible"
        className=" md:text-7xl text-4xl"
      >
        Greetings, {discord_user.custom_claims.global_name}
      </motion.h1>
    </div>
  );
};

export default HomeHero;
