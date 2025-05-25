import React from 'react';
import CounterApp from '../others/useState/counter-app';
import HideShowApp from '../others/useState/hide-show';
import FollowUnfollowApp from '../others/useState/follow-unfollow';
import InputFieldTextDisplay from '../others/useState/input-field-text-display';
import CountNumberOfCLick from '../others/useState/count-number-of-clicks';
import BackgroundColorToggle from '../others/useState/background-color';
import DisableButton from '../others/useState/disable-button';
import PasswordVisibility from '../others/useState/password-visibility';

const HomePage = () => {
  return (
    <div className=" h-fit w-full ">
      <h1 className=" text-2xl text-center font-bold  ">UseState In Action</h1>
      {/* <CounterApp /> */}
      {/* <HideShowApp /> */}
      {/* <FollowUnfollowApp /> */}
      {/* <InputFieldTextDisplay /> */}
      {/* <CountNumberOfCLick /> */}
      {/* <BackgroundColorToggle /> */}
      {/* <DisableButton /> */}
      <PasswordVisibility />
    </div>
  );
};

export default HomePage;
