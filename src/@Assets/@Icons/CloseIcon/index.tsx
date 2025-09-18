import React from 'react';

interface PropsI {
  width?: number | string;
  height?: number | string;
}

export function CloseIcon({ width = 24, height = 24 }: PropsI) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.75 5.25L5.25 18.75'
        stroke='#484848'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.75 18.75L5.25 5.25'
        stroke='#484848'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function CloseIconWhite({ width = 24, height = 24 }: PropsI) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.75 5.25L5.25 18.75'
        stroke='#FFFFFF'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.75 18.75L5.25 5.25'
        stroke='#FFFFFF'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
