/* eslint-disable no-unused-vars */
import React from 'react';

const SubHeader = () => {
  return (
    <div
      className='absolute top-[250px] right-[680px] mt-2 border border-gray-300 bg-white shadow-lg p-12 w-56 rounded-xl'
    >
      <ul className='space-y-4'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Wallet</a>
        </li>
        <li>
          <a href='#'>Transactions</a>
        </li>
        <li>
          <a href='#'>Settings</a>
        </li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default SubHeader;
