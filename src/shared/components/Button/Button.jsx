/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const ButtonVariants = {
    disabled: 'text-slate-950 text-opacity-30 bg-stone-300',
    containedLight: 'text-slate-950 bg-white',
    containedDark: 'button buttonText',
    outlinedLight: 'text-slate-950 bg-transparent border border-slate-950',
    outlinedDark: 'text-white bg-slate-950 border border-white',
};

const Button = ({
  variant = 'contained',
  className = '',
  color = 'light',
  children,
  fontClass = '',
  fontVariant = '',
  disabled,
  ...rest
}) => {
    let buttonClass =
    'w-full px-[2rem] py-[1.6rem] rounded-full flex justify-center items-center gap-[1rem] ';
  let variantClass = '';

  if (disabled) {
    variantClass = ButtonVariants.disabled;
  } else {
    if (variant === 'contained') {
      if (color === 'light') {
        variantClass = ButtonVariants.containedLight;
      } else {
        variantClass = ButtonVariants.containedDark;
      }
    } else {
      if (color === 'light') {
        variantClass = ButtonVariants.outlinedLight;
      } else {
        variantClass = ButtonVariants.outlinedDark;
      }
    }
  }

  const mergedButtonClass = twMerge(buttonClass, variantClass, className);

  const fontColorClass = disabled
    ? 'text-slate-950 text-opacity-30'
    : color === 'light'
    ? 'text-slate-950'
    : 'text-white';

  const mergedFontClass = twMerge(fontColorClass, fontClass);

  return (
    <button className={mergedButtonClass} {...rest}>
        {children}
    </button>
  )
}

export default Button