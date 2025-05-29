'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CiDark, CiLight } from 'react-icons/ci';

const LayoutWrapper = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'true');
    }
  }, []);

  const handleIsDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
  };

  const navigation = [
    { link: '/', tabName: 'Home' },
    { link: '/useState/beginner', tabName: 'useState' },
    { link: '/useEffect', tabName: 'useEffect' },
  ];

  return (
    <div
      className={`transition-all duration-500 w-full min-h-screen flex flex-col items-center ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <nav
        aria-label=" Main navigation"
        className=" sticky top-0 w-full border flex justify-between items-center border-b p-2"
      >
        <div></div>
        <ul className=" border flex gap-5 text-red-500 font-medium">
          {navigation.map((item, index) => (
            <li key={index}>
              <Link href={item.link} className="hover:underline">
                {item.tabName}
              </Link>
            </li>
          ))}
        </ul>
        <div className="  ">
          <button
            onClick={handleIsDarkMode}
            aria-label="Toggle dark mode"
            className={` cursor-pointer transition-all duration-300 p-3 text-2xl rounded-full border ${
              isDarkMode
                ? 'hover:bg-white hover:text-black'
                : 'hover:bg-black hover:text-white'
            } active:opacity-75`}
          >
            {isDarkMode ? <CiDark /> : <CiLight />}
          </button>
        </div>
      </nav>

      <div className="w-full h-fit flex-grow">{children}</div>
    </div>
  );
};

export default LayoutWrapper;
