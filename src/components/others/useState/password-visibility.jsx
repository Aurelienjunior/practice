import React from 'react';

const PasswordVisibility = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=" flex flex-col gap-5 justify-center items-center h-screen border-y ">
      <h3 className=" text-2xl font-bold ">Password Visibility App</h3>

      <div className=" flex gap-3 border-2 rounded-md w-92 px-5 py-2 ">
        <input
          type={showPassword ? 'text' : 'password'}
          className=" outline-none w-full visible "
          placeholder="Enter Password"
        />
        <button className=" cursor-pointer " onClick={handleShowPassword}>
          {showPassword ? 'Show' : 'Hide'}
        </button>
      </div>
    </div>
  );
};

export default PasswordVisibility;
