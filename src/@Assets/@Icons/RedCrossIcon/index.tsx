import React from 'react';
interface PropsI{
  width?:number
  ;height?:number
}
export function RedCrossIcon({width=25,height=25}:PropsI) {
  return (
    <svg width={width} height={height} viewBox='0 0 77 76' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect x='0.5' width='76' height='76' rx='38' fill='#FF0000' />
      <path
        d='M52.5625 24.9375L24.4375 53.0625'
        stroke='white'
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M52.5625 53.0625L24.4375 24.9375'
        stroke='white'
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
