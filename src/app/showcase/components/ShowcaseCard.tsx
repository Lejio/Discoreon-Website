"use client";

import React, { ReactElement, Suspense } from "react";
import ShowcaseCardLoading from "./ShowcaseCardLoading";

const ShowcaseCard = ({
  showcaseCard,
}: {
  showcaseCard: ReactElement<any, any>;
}) => {
  return (
    <div className=" bg-light-primary rounded-2xl h-[20%] w-[20%] p-5 mx-[5%]">
      <Suspense fallback={<ShowcaseCardLoading />}>{showcaseCard}</Suspense>
      <ShowcaseCardLoading />
    </div>
  );
};

export default ShowcaseCard;
