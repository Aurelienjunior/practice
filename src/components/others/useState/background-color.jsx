import React, { useState } from 'react';

const BackgroundColorToggle = () => {
  const [bgColor, setBgColor] = useState('white');
  const handleBgColorChange = () => {
    setBgColor(!bgColor);
    console.log(bgColor);
  };

  return (
    <div className=" flex flex-col gap-5 justify-center items-center h-screen ">
      <div className=" text-2xl font-bold ">Background Color App</div>
      <div className=" text-gray-700 ">
        Click the button to change background color
      </div>

      <div className=" w-full border-black flex justify-center items-center p-4 flex-row gap-5 "></div>
      <div className=" flex flex-col gap-3 items-center shrink-0 p-3 w-[250px] h-[250px] bg-white rounded-4xl  ">
        <button
          className="px-6 py-1 border rounded-full text-2xl font-bold active:opacity-75 cursor-pointer "
          onClick={handleBgColorChange}
        >
          {bgColor ? 'Dark' : 'White'}
        </button>
      </div>
    </div>
  );
};
export default BackgroundColorToggle;
