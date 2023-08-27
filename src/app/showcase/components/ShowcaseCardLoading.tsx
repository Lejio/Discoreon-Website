import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

const ShowcaseCardLoading = () => {
  return (
    <>
      <Skeleton className="rounded-lg bg-default-200">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
    </>
  );
};

export default ShowcaseCardLoading;
