/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Footer = ({className}) => {
    const defaultClassname = `footer -mt-72`
    const mergedClassname = twMerge(defaultClassname, className)
  return (
    <div className={mergedClassname}>
        <div className='flex items-center justify-center space-x-64 pt-20'>
            <img src='/icons/ICON_WALLET.svg' className='' />
            <img src='/icons/ICON_EXPLORE_COINS.svg' className='' />
            <img src='/icons/ICON_NOTIFICATION.svg' className='' />
            <img src='/icons/ICON_SETTINGS.svg' className='' />
        </div>
    </div>
  )
}

export default Footer