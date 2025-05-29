import React from 'react';
import CounterApp from '@/components/others/useState/counter-app';
import HideShowApp from '@/components/others/useState/hide-show';
import FollowUnfollowApp from '@/components/others/useState/follow-unfollow';
import InputFieldTextDisplay from '@/components/others/useState/input-field-text-display';
import CountNumberOfCLick from '@/components/others/useState/count-number-of-clicks';
import PasswordVisibility from '@/components/others/useState/password-visibility';
import DisableButton from '@/components/others/useState/disable-button';

export default function useSateBeginnerPage() {
  const navigation = [
    { link: '/', tabName: 'Home' },
    { link: '/useState/beginner', tabName: 'useState' },
    { link: '/useEffect', tabName: 'useEffect' },
  ];

  return (
    <main className=" h-fit w-full ">
      
      
      <h1 className=" text-2xl text-center font-bold  ">
        UseState In Action ('Beginner')
      </h1>
      
      <CounterApp />
      <HideShowApp />
      <FollowUnfollowApp />
      <InputFieldTextDisplay />
      <CountNumberOfCLick />
      <DisableButton />
      <PasswordVisibility />
    </main>
  );
}
