import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center  background relative overflow-x-hidden">
      <h1 className=" bg-white w-[90%] text-center text-4xl mt-[40px] font-bold rounded-lg py-3 ">
        RANDOM GIFS
      </h1>

      <div className="flex flex-col w-full items-center mt-[30px] gap-y-10 ">
        <Random />

        <Tag />
      </div>
    </div>
  );
};

export default App;
