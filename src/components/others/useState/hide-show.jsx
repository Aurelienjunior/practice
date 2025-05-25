'use client';

import React, { useState } from 'react';

const HideShowApp = () => {
  const [visible, setVisible] = useState(true);
  const handleShow = () => {
    setVisible(true);
    console.log('show');
  };

  const handleHide = () => {
    setVisible(false);
    console.log('hide');
  };
  return (
    <div className=" flex flex-col gap-5 justify-center items-center h-screen border-y ">
      <h1 className=" text-2xl font-bold ">Hide Show App</h1>
      <p className=" text-gray-700 ">Click the button to show or hide text</p>
      <div className=" flex gap-5 ">
        <button
          className=" border px-5 rounded-[5px] hover:bg-green-200 cursor-pointer "
          onClick={handleShow}
        >
          Show
        </button>
        <button
          className=" border px-5 rounded-[5px] hover:bg-red-200 cursor-pointer "
          onClick={handleHide}
        >
          Hide
        </button>
      </div>
      <div className=" h-[50px] ">
        <p className={` text-gray-700 ${visible ? 'flex' : 'hidden'} `}>
          Please hide me 👋🏽.
        </p>
      </div>
    </div>
  );
};

export default HideShowApp;
