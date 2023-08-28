"use client";

import React, { ReactElement, Suspense } from "react";
import ShowcaseCardLoading from "./ShowcaseCardLoading";
import { Card } from "@nextui-org/react";

const ShowcaseCard = ({
  showcaseCard,
}: {
  showcaseCard: ReactElement<any, any>;
}) => {
  return (
    <Card
      radius="md"
      className=" bg-light-primary rounded-2xl h-[40%] w-[20%] p-5 mx-[5%]"
    >
      <Suspense fallback={<ShowcaseCardLoading />}>{showcaseCard}</Suspense>
      {/* <ShowcaseCardLoading /> */}
    </Card>
  );
};

export default ShowcaseCard;
