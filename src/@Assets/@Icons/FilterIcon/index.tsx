import React from 'react';

export function FilterIcon() {
  return (
    <svg width='18' height='17' viewBox='0 0 18 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M17.3337 1H0.666992L7.33366 8.88333V14.3333L10.667 16V8.88333L17.3337 1Z'
        stroke='black'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

interface DarkFilterIconI {
  width?: number;
  height?: number;
}

export function DarkFilterIcon({ width = 22, height = 22 }: DarkFilterIconI) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.33332 1.66675H19.6667C19.8587 1.73409 20.0327 1.8445 20.1755 1.9895C20.3183 2.1345 20.426 2.31026 20.4903 2.50331C20.5547 2.69636 20.574 2.90157 20.5468 3.10324C20.5195 3.3049 20.4465 3.49766 20.3333 3.66675L13.6667 11.0001V20.3334L8.33332 16.3334V11.0001L1.66666 3.66675C1.55344 3.49766 1.48044 3.3049 1.45323 3.10324C1.42602 2.90157 1.44533 2.69636 1.50968 2.50331C1.57403 2.31026 1.68171 2.1345 1.82447 1.9895C1.96724 1.8445 2.1413 1.73409 2.33332 1.66675Z'
        stroke='#484848'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
