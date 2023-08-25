"use client";

import React, { ReactElement, Suspense } from "react";

const ShowcaseCard = ({
  showcaseCard,
}: {
  showcaseCard: ReactElement<any, any>;
}) => {
  return (
    <div className=" bg-light-primary rounded-2xl h-[20%] w-[20%] p-5 mx-[5%]">
      <Suspense fallback={"loading..."}>{showcaseCard}</Suspense>
    </div>
  );
};

export default ShowcaseCard;
