import React from 'react';
import CounterApp from '../others/useState/counter-app';
import HideShowApp from '../others/useState/hide-show';
import FollowUnfollowApp from '../others/useState/follow-unfollow';

const HomePage = () => {
  return (
    <div className=" h-fit w-full ">
      <h1 className=" text-2xl text-center font-bold  ">UseState In Action</h1>
      <CounterApp />
      <HideShowApp />
      <FollowUnfollowApp />
    </div>
  );
};

export default HomePage;
