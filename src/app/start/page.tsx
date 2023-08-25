import React from "react";
import Sidebar from "./components/Sidebar";

const getstarted = () => {
  return (
    <div className="flex px-[15%] py-[5%]">
      <Sidebar />
      <main className="flex-1">{/* Main content of your page */}</main>
    </div>
  );
};

export default getstarted;
