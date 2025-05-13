'use client';

import React, { useState } from 'react';

const FollowUnfollowApp = () => {
  const [accountInfos, setAccountInfos] = useState([
    {
      name: 'Aaron Blur',
      sigle: 'AB',
      username: 'aaronblur',
      isFollowing: false,
    },
    {
      name: 'Loic Ayane',
      sigle: 'LA',
      username: 'loicayane',
      isFollowing: false,
    },
    {
      name: 'Yan Nana',
      sigle: 'YN',
      username: 'yannana',
      isFollowing: false,
    },
  ]);

  const handleToggleFollow = (index) => {
    const updatedAccounts = [...accountInfos];
    updatedAccounts[index].isFollowing = !updatedAccounts[index].isFollowing;
    setAccountInfos(updatedAccounts);
    console.log(
      `${updatedAccounts[index].isFollowing ? 'followed' : 'unfollowed'} ${
        updatedAccounts[index].username
      }`
    );
  };

  return (
    <div className=" w-full flex flex-col gap-5 justify-center items-center h-screen bg-green-100">
      <h1 className="text-2xl font-bold">Follow Unfollow App</h1>
      <p className="text-gray-700">Click the button to follow or unfollow</p>

      <div className=" w-full border-black flex flex-row gap-5 overflow-x-auto ">
        {accountInfos.map((account, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 items-center shrink-0 p-3 w-[250px] h-[250px] bg-white rounded-4xl  "
          >
            <div className="w-[100px] h-[100px] flex justify-center items-center text-amber-200 rounded-full border border-dashed ">
              <p className="text-4xl font-bold text-center">{account.sigle}</p>
            </div>
            <div className="flex flex-col items-center gap-0">
              <p className="text-[12px] italic font-[100]">
                {account.username}
              </p>
              <p className="text-xl font-[600]">{account.name}</p>
            </div>
            <div className="w-full flex justify-center items-center text-white">
              <button
                className={`px-6 py-1 rounded-full hover:opacity-75 cursor-pointer ${
                  account.isFollowing ? 'bg-red-300' : 'bg-blue-300'
                }`}
                onClick={() => handleToggleFollow(index)}
              >
                {account.isFollowing ? 'UnFollow' : 'Follow'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowUnfollowApp;
