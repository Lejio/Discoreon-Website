import React from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const getstarted = () => {
  return (
    <div className="flex px-[10%] py-[5%]">
      <Sidebar />
      <main className="flex-1">
        <Content />
      </main>
    </div>
  );
};

export default getstarted;
