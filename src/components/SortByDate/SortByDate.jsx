/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { twMerge } from 'tailwind-merge'

const SortByDate = ({className}) => {
    const defaultClassname = `sortbydate`
    const mergedClassname = twMerge(defaultClassname, className)
  return (
    <div className={mergedClassname}>
        <div className='flex items-center justify-center space-x-64 pt-20'>
            <button className='sortbydateText'>Day</button>
            <button className='sortbydateText'>Week</button>
            <button className='sortbydateText'>Month</button>
            <button className='sortbydateText'>Year</button>
        </div>
    </div>
  )
}

export default SortByDate