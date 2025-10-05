import React from "react";
interface RightGreenRoundIconProps {
  width?: string;
  height?: string;
}
export function RightGreenRoundIcon({ width, height }: RightGreenRoundIconProps) {
  return (
    <svg
      width={width || '76'}
      height={height || '76'}
      viewBox='0 0 76 76'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='76' height='76' rx='38' fill='#03D103' />
      <path
        d='M54.7198 26.98L31.7298 49.97L21.2798 39.52'
        stroke='white'
        strokeWidth='4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function RightPlainRoundIcon() {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z'
        stroke='#484848'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.27734 8.00011L7.22179 9.94455L11.1107 6.05566'
        stroke='#484848'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
