/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import SubHeader from './SubHeader';

const Header = ({ className }) => {
  const defaultClassname = `header`;
  const mergedClassname = twMerge(defaultClassname, className);

  // State to manage the visibility of the SubHeader
  const [isSubHeaderVisible, setSubHeaderVisibility] = useState(false);

  // Click handler to toggle the visibility of the SubHeader
  const handleSubHeaderToggle = () => {
    setSubHeaderVisibility(!isSubHeaderVisible);
  };

  return (
    <div className={mergedClassname}>
      <div className='flex items-center justify-evenly space-x-40'>
        <img src='/icons/ICON_BACK.svg' className='' />
        <h1 className='bitcoinWalletText'>Bitcoin Wallet</h1>
        {/* Add the click handler to the ICON_MORE */}
        <img
          src='/icons/ICON_MORE.svg'
          alt='More'
          className='cursor-pointer'
          onClick={handleSubHeaderToggle}
        />
      </div>
      {/* Conditionally render the SubHeader based on isSubHeaderVisible */}
      {isSubHeaderVisible && <SubHeader />}
    </div>
  );
};

export default Header;
