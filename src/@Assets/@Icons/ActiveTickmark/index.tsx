import React from 'react';

interface ActiveTickmarkI {
  onClick?: () => void;
}

export function ActiveTickmark({ onClick }: ActiveTickmarkI) {
  return (
    <svg
      onClick={onClick}
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='13' cy='13' r='13' fill='#323232' />
      <path
        d='M20 8L10 18.01L7 15.01'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
