import React from 'react';

export function FileIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path opacity='0.2' d='M14.25 3V8.25H19.5L14.25 3Z' fill='#717171' />
      <path
        d='M18.75 21H5.25C5.05109 21 4.86032 20.921 4.71967 20.7803C4.57902 20.6397 4.5 20.4489 4.5 20.25V3.75C4.5 3.55109 4.57902 3.36032 4.71967 3.21967C4.86032 3.07902 5.05109 3 5.25 3H14.25L19.5 8.25V20.25C19.5 20.4489 19.421 20.6397 19.2803 20.7803C19.1397 20.921 18.9489 21 18.75 21Z'
        stroke='#717171'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.25 3V8.25H19.5'
        stroke='#717171'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

/**
 * Pdf type file icon
 */
export function PDFIcon() {
  return (
    <svg width='12' height='16' viewBox='0 0 12 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M7.5 1.25V4.25C7.5 4.44891 7.57902 4.63968 7.71967 4.78033C7.86032 4.92098 8.05109 5 8.25 5H11.25M7.5 1.25H2.25C1.85218 1.25 1.47064 1.40804 1.18934 1.68934C0.908035 1.97064 0.75 2.35218 0.75 2.75V13.25C0.75 13.6478 0.908035 14.0294 1.18934 14.3107C1.47064 14.592 1.85218 14.75 2.25 14.75H9.75C10.1478 14.75 10.5294 14.592 10.8107 14.3107C11.092 14.0294 11.25 13.6478 11.25 13.25V5M7.5 1.25L11.25 5M6 7.25V11.75M6 7.25L3.75 9.5M6 7.25L8.25 9.5'
        stroke='#484848'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
