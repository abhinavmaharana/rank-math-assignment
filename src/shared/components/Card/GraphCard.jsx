/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { twMerge } from 'tailwind-merge';
import Graph from '../../../components/Graph/Graph';

const GraphCard = ({ className }) => {
  const defaultClassname = `card1`;
  const container = `grid gap-4`;
  const mergedClassname = twMerge(defaultClassname, className);

  return (
    <div className={mergedClassname}>
      <div className={container}>
        {/* First section */}
        <div className='flex items-center justify-between p-24'>
          <div className='flex items-center justify-center'>
            <img src='/icons/CIRCLE_MAGENTA_LOWER.svg' className='mr-5 mt-2' />
            <h1 className='text'>Lower: $4.895</h1>
          </div>
          <div className='flex items-center flex-end corner-section'>
            <img src='/icons/CIRCLE_GREEN_HIGHER.svg' className='mr-5' />
            <h1 className='text1'>Higher: $6.857</h1>
          </div>
        </div>

        {/* Second section (Graph) */}
        <div style={{ width: '100%', height: '300px' }}>
          <Graph />
        </div>

        {/* Overlapping div */}
        <div className='flex items-center justify-start px-24'>
          <img src='/icons/CIRCLE_MAGENTA_LOWER.svg' className='mr-5 mt-2' />
          <h1 className='text2'>1 BTC=$5.483</h1>
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
