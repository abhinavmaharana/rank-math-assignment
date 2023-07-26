/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '../Button/Button';

const Card = ({ className }) => {
  const defaultClassname = `card`;
  const container = `flex items-center justify-between mb-12`;
  const startAlignedText = ``;
  const mergedClassname = twMerge(defaultClassname, className);

  // State to manage the visibility of the Buy and Sell buttons
  const [areButtonsVisible, setButtonsVisibility] = useState(false);

  // Click handler to toggle the visibility of the buttons
  const handleButtonToggle = () => {
    setButtonsVisibility(!areButtonsVisible);
  };

  return (
    <div className={mergedClassname}>
      <div className='space-y-20'>
        <div className={container}>
          <div className='mr-[1.6rem]'>
            {/* Image */}
            <img src='/icons/ICON_BITCOIN.svg' className='symbolColor rounded-full' />
          </div>
          <div className={startAlignedText}>
            {/* Text */}
            <h1 className='bitcoinText'>Bitcoin</h1>
          </div>
          <div className='flex flex-grow justify-end'>
            <h1 className='bitcoinSymbol'>BTC</h1>
          </div>
        </div>
        <div className=''>
          <h1 className='currencyText'>3.529020 BTC</h1>
        </div>
        <div className={container}>
          <div>
            <h1 className='descriptionText'>$19.153 USD</h1>
          </div>
          <div>
            {/* Button */}
            <Button
              fontClass=''
              color='dark'
              className='pt-[30px] pb-[33px] pl-[43px] pr-[52px]'
              variant='contained'
            >
              -2.32%
            </Button>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <img
            src='/icons/ICON_ARROW_DOWN_(DETAILED_STATISTIC).svg'
            className='mt-8 cursor-pointer'
            onClick={handleButtonToggle} // Add the click handler
          />
        </div>
        {areButtonsVisible && ( // Conditionally render the buttons based on the state
          <div className='flex items-center justify-evenly mt-[8.2rem]'>
            <Button
              fontClass=''
              color='dark'
              className='pt-[30px] pb-[33px] pl-[43px] pr-[52px]'
              variant='contained'
            >
              Buy
            </Button>
            <Button
              fontClass=''
              color='dark'
              className='pt-[30px] pb-[33px] pl-[43px] pr-[52px]'
              variant='contained'
            >
              Sell
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
