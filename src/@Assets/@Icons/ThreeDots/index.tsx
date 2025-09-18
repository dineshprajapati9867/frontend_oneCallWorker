import * as React from 'react';

export function ThreeDots(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={4} height={18} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M2 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM2 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
        fill='#484848'
      />
      <path
        d='M2.25 9a.25.25 0 0 1-.25.25v1.5A1.75 1.75 0 0 0 3.75 9h-1.5ZM2 9.25A.25.25 0 0 1 1.75 9H.25c0 .966.784 1.75 1.75 1.75v-1.5ZM1.75 9A.25.25 0 0 1 2 8.75v-1.5A1.75 1.75 0 0 0 .25 9h1.5ZM2 8.75a.25.25 0 0 1 .25.25h1.5A1.75 1.75 0 0 0 2 7.25v1.5ZM2.25 16a.25.25 0 0 1-.25.25v1.5A1.75 1.75 0 0 0 3.75 16h-1.5Zm-.25.25a.25.25 0 0 1-.25-.25H.25c0 .966.784 1.75 1.75 1.75v-1.5ZM1.75 16a.25.25 0 0 1 .25-.25v-1.5A1.75 1.75 0 0 0 .25 16h1.5Zm.25-.25a.25.25 0 0 1 .25.25h1.5A1.75 1.75 0 0 0 2 14.25v1.5ZM2.25 2a.25.25 0 0 1-.25.25v1.5A1.75 1.75 0 0 0 3.75 2h-1.5ZM2 2.25A.25.25 0 0 1 1.75 2H.25c0 .966.784 1.75 1.75 1.75v-1.5ZM1.75 2A.25.25 0 0 1 2 1.75V.25A1.75 1.75 0 0 0 .25 2h1.5ZM2 1.75a.25.25 0 0 1 .25.25h1.5A1.75 1.75 0 0 0 2 .25v1.5Z'
        fill='#484848'
      />
    </svg>
  );
}

export function WhiteThreeDots() {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
        stroke='#DDD'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function ThreeDotsModified() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
        stroke='#717171'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z'
        stroke='#717171'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z'
        stroke='#717171'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function ThreeDotsHorizontal() {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10.8327 9.99967C10.8327 9.53944 10.4596 9.16634 9.99935 9.16634C9.53911 9.16634 9.16602 9.53944 9.16602 9.99967C9.16602 10.4599 9.53911 10.833 9.99935 10.833C10.4596 10.833 10.8327 10.4599 10.8327 9.99967Z'
        fill='#717171'
        stroke='#717171'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.00065 9.99967C5.00065 9.53944 4.62756 9.16634 4.16732 9.16634C3.70708 9.16634 3.33398 9.53944 3.33398 9.99967C3.33398 10.4599 3.70708 10.833 4.16732 10.833C4.62756 10.833 5.00065 10.4599 5.00065 9.99967Z'
        fill='#717171'
        stroke='#717171'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.6667 9.99967C16.6667 9.53944 16.2936 9.16634 15.8333 9.16634C15.3731 9.16634 15 9.53944 15 9.99967C15 10.4599 15.3731 10.833 15.8333 10.833C16.2936 10.833 16.6667 10.4599 16.6667 9.99967Z'
        fill='#717171'
        stroke='#717171'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
