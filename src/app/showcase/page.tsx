import React from "react";
import ShowcaseHero from "@/components/showcase/ShowcaseHero";
import MainNavbar from "@/components/MainNavbar";

const Showcase = () => {
  return (
    <div>
      <MainNavbar user_metadata={undefined} />
      <ShowcaseHero />
    </div>
  );
};

export default Showcase;
