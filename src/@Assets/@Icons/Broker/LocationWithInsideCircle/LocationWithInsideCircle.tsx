import * as React from 'react';

function LocationWithInsideCircle() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none'>
      <path
        stroke='#171717'
        strokeWidth={1.5}
        d='M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z'
      />
      <path
        stroke='#171717'
        strokeWidth={1.5}
        d='M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z'
      />
    </svg>
  );
}
export default LocationWithInsideCircle;

export function GrayLocationWithInsideCircle() {
  return (
    <svg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_21_64059)'>
        <path
          d='M12.25 6.33398C12.25 10.4173 7 13.9173 7 13.9173C7 13.9173 1.75 10.4173 1.75 6.33398C1.75 4.9416 2.30312 3.60624 3.28769 2.62167C4.27226 1.63711 5.60761 1.08398 7 1.08398C8.39239 1.08398 9.72774 1.63711 10.7123 2.62167C11.6969 3.60624 12.25 4.9416 12.25 6.33398Z'
          stroke='#717171'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7 8.08398C7.9665 8.08398 8.75 7.30048 8.75 6.33398C8.75 5.36749 7.9665 4.58398 7 4.58398C6.0335 4.58398 5.25 5.36749 5.25 6.33398C5.25 7.30048 6.0335 8.08398 7 8.08398Z'
          stroke='#717171'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_21_64059'>
          <rect width='14' height='14' fill='white' transform='translate(0 0.5)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function SmallLocationWithInsideCircle() {
  return <svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='none'>
    <g
      stroke='#222'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      clipPath='url(#a)'
    >
      <path d='M14 6.667c0 4.667-6 8.667-6 8.667s-6-4-6-8.667a6 6 0 1 1 12 0Z' />
      <path d='M8 8.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
}
