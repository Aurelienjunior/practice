'use client';

import React, { useState } from 'react';

const CountNumberOfCLick = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    // console.log(count);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className=" w-full flex flex-col gap-5 justify-center items-center h-screen bg-gray-100 ">
      <h1 className=" text-2xl font-bold  ">Number of Click App</h1>
      <p className=" text-gray-700 ">Click the button to count</p>
      <div className=" w-full border-black flex justify-center items-center p-4 flex-row gap-5 ">
        <div className=" flex flex-col gap-3 items-center shrink-0 p-3 w-[250px] h-[250px] bg-white rounded-4xl  ">
          <div className="w-[100px] h-[100px] flex justify-center items-center text-blue-200 rounded-full border border-dashed ">
            <p className="text-4xl font-bold text-center">{count}</p>
          </div>
          <div className="flex flex-col items-center gap-0">
            <p className="text-[12px] italic font-[100]">Click Count</p>
          </div>
          <div className="w-full flex justify-center items-center text-white">
            <button
              className="px-6 py-1 rounded-full active:opacity-75 cursor-pointer bg-blue-500"
              onClick={handleClick}
            >
              Click Me
            </button>
          </div>
          <button
            className=" underline cursor-pointer italic text-red-400 active:opacity-75 "
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountNumberOfCLick;
