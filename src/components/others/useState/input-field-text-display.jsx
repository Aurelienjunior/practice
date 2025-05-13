import React, { useState } from 'react';

const InputFieldTextDisplay = () => {
  const [text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };
  // console.log(`${text}`);

  return (
    <div className=" flex flex-col gap-5 justify-center items-center h-screen bg-yellow-100 ">
      <h1 className=" text-2xl font-bold ">Text Dispaly App</h1>
      <div className=" text-black "></div>
      <input
        onChange={handleChange}
        value={text}
        type="text"
        placeholder="Enter what you want to see"
        className=" border border-black p-2 px-10 rounded-full outline-none "
      />
      {/* Display text tyyped in the above placeholder */}
      <div className=" bg-[#ffffffb7] md:w-[500px] text-center p-3 italic cursor-not-allowed text-black w-[80%] rounded-2xl min-h-[200px]">
        {text}
      </div>
    </div>
  );
};

export default InputFieldTextDisplay;
