import React from "react";
import ProductSection from "@/app/premium/components/ProductSection";
import ProductHero from "@/app/premium/components/ProductHero";

// This has to be changed later.
// import MainNavbar from "@/components/MainNavbar";
const Premium = () => {
  return (
    <main>
      {/* <MainNavbar user_metadata={undefined} /> */}
      <ProductHero />
      <div className="h-[50vh] w-[100vw] flex md:items-center justify-center">
        <ProductSection />
      </div>
    </main>
  );
};

export default Premium;
