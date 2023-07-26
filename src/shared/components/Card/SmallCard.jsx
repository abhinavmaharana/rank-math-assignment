/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { twMerge } from 'tailwind-merge'

const SmallCard = ({className, image, symbol}) => {
    const defaultClassname = `smallCard`
    const mergedClassname = twMerge(defaultClassname, className)
  return (
    <div className={mergedClassname}>
      <div className='flex flex-col items-center justify-center space-y-4'>
        <div>
          <img src={image} className={symbol} />
        </div>
        <div>
          <h1 className='buyBTCText'>Buy BTC</h1>
        </div>
      </div>
    </div>
  )
}

export default SmallCard