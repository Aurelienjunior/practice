'use client';

import React, { useState } from 'react';
import { CiDark } from 'react-icons/ci';
import { CiLight } from 'react-icons/ci';

const LayoutWrapper = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleIsDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={` transition-all duration-500 w-full h-fit justify-center items-center flex flex-col ${
        isDarkMode ? ' bg-black text-white ' : ' bg-white text-black  '
      } `}
    >
      <div className=" sticky top-0 w-full h-fit flex justify-end items-center p-2 px-5 ">
        <button
          className={` transition-all duration-300 ${
            isDarkMode
              ? ' hover:bg-white hover:text-black '
              : ' hover:bg-black hover:text-white '
          } p-3 text-2xl cursor-pointer active:opacity-75 rounded-full border `}
          onClick={handleIsDarkMode}
        >
          {isDarkMode ? <CiDark /> : <CiLight />}
        </button>
      </div>
      {children}
    </div>
  );
};

export default LayoutWrapper;
