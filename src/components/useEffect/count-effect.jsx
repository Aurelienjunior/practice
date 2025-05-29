'use client';

import React from 'react';

const CounterEffect = () => {
  const [count, setCount] = React.useState(0);
  const increament = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className=" flex flex-col gap-5 justify-center items-center h-screen border-y ">
      <h3 className=" text-2xl font-bold ">Counter App</h3>
      <p>count: {count}</p>
      <div className=" w-full flex justify-center items-center gap-5 ">
        <button
          className=" cursor-pointer border px-3 py-1 "
          onClick={increament}
        >
          Increment
        </button>
        <button
          className=" cursor-pointer border px-3 py-1 "
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          className=" cursor-pointer border px-3 py-1 "
          onClick={resetCount}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterEffect;
