'use client';

import React from 'react';

const DisableButton = () => {
  const [disabled, setDisabled] = React.useState(false);
  const [clicksCount, setClicksCount] = React.useState(0);

  const handleDisable = () => {
    setClicksCount((prev) => {
      const newCount = prev + 1;
      console.log('Click count:', prev, '->', newCount);
      if (newCount === 3) {
        setDisabled(true);
      }
      return newCount;
    });
  };
  const handleEnable = () => {
    setClicksCount(0);

    setDisabled((prev) => {
      const newState = !prev;
      console.log('Previous disabled state:', prev, '->', newState);
    });
    console.log(disabled);
  };

  return (
    <div className=" flex flex-col gap-5 justify-center items-center h-screen border-y ">
      <h3 className=" text-2xl font-bold ">
        Disable Button App after 3 clicks
      </h3>
      <button
        className=" text-black px-4 py-2 border rounded-md cursor-pointer active:px-3 active:py-1 "
        onClick={handleDisable}
        disabled={disabled}
      >
        {disabled ? 'DIsabled ' : 'Click'}
      </button>
      <button
        className={` ${
          disabled ? 'text-green-500' : 'text-gray-300'
        } text-black px-4 py-2 border rounded-md cursor-pointer active:px-3 active:py-1 `}
        onClick={handleEnable}
      >
        Enable
      </button>
    </div>
  );
};

export default DisableButton;
