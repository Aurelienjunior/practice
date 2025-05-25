'use client';

import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const incrementByOne = () => {
    setCount(count + 1);
  };
  const incrementByFive = () => {
    setCount(count + 5);
  };
  const decrementByOne = () => {
    setCount(count - 1);
  };
  const decrementByFive = () => {
    setCount(count - 5);
  };
  const reset = () => {
    setCount(0);
  };
  const colorOfState = () => {
    if (count < 0) {
      return 'text-red-500';
    }
    if (count > 0) {
      return 'text-green-500';
    } else {
      return 'text-black';
    }
  };

  return (
    <div className=" flex flex-col gap-5 justify-center items-center h-screen border-y ">
      {/*  */}
      <h3 className=" text-2xl font-bold ">Counter App</h3>
      <button
        className=" border px-5 rounded-[5px] hover:bg-green-200 cursor-pointer "
        onClick={reset}
      >
        Reset
      </button>
      <p className=" text-2xl font-[400] text-gray-700">
        Count : <span className={` ${colorOfState()} `}>{count}</span>
      </p>

      <div className=" flex gap-5 ">
        <button
          className=" border px-5 rounded-[5px] hover:bg-green-200 cursor-pointer "
          onClick={incrementByOne}
        >
          +1
        </button>
        <button
          className=" border px-5 rounded-[5px] hover:bg-red-200 cursor-pointer "
          onClick={decrementByOne}
        >
          -1
        </button>
      </div>
      <div className=" flex gap-5 ">
        <button
          className=" border px-5 rounded-[5px] hover:bg-green-200 cursor-pointer "
          onClick={incrementByFive}
        >
          +5
        </button>
        <button
          className=" border px-5 rounded-[5px] hover:bg-red-200 cursor-pointer "
          onClick={decrementByFive}
        >
          -5
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
