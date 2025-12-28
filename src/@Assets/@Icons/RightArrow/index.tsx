import React from 'react';

export function RightArrow() {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='m9 18 6-6-6-6'
        stroke='#2F80ED'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export const  RightArrowStraightWhite = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21 12-5-5m5 5-5 5m5-5H3"
    />
  </svg>
)
