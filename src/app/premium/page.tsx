import React from "react";
import ProductSection from "@/components/premium/ProductSection";
import ProductHero from "@/components/premium/ProductHero";

// This has to be changed later.
import MainNavbar from "@/components/MainNavbar";
const Premium = async () => {
  return (
    <main>
      <MainNavbar user_metadata={undefined} />
      <ProductHero />
      <div className="h-[50vh] w-[100vw] flex md:items-center justify-center">
        <ProductSection />
      </div>
    </main>
  );
};

export default Premium;
