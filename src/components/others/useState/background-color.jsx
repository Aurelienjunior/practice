import React, { useState } from 'react';
import { CiDark } from 'react-icons/ci';
import { CiLight } from 'react-icons/ci';

const BackgroundColorToggle = () => {
  const [islight, setIsLightColor] = useState(true);
  const handleBgColorChange = () => {
    setIsLightColor(!islight);
    console.log(islight);
  };

  return (
    <div
      className={` transform transition-all duration-700 ${
        islight ? ' bg-white text-black ' : ' bg-black text-white '
      } flex flex-col gap-5 justify-center items-center h-screen  `}
    >
      <div className=" text-2xl font-bold ">Background Color App</div>
      <div className=" text-gray-700 font-bold ">
        Click the button to change background color
      </div>

      <div className=" w-full border-black flex justify-center items-center p-4 flex-row gap-5 "></div>
      <div className=" flex flex-col gap-3 items-center shrink-0 p-3 w-[250px] h-[250px] rounded-4xl  ">
        <button
          className=" p-6 border rounded-full text-2xl font-bold active:opacity-75 cursor-pointer "
          onClick={handleBgColorChange}
        >
          {islight ? <CiDark /> : <CiLight />}
        </button>
      </div>
    </div>
  );
};
export default BackgroundColorToggle;
