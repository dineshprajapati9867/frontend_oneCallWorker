import React from 'react';

interface CalendarIconP {
  width?: string;
  height?: string;
}
export function CalendarIcon({ width, height }: CalendarIconP) {
  return (
    <svg
      width={width || 20}
      height={height || 19}
      viewBox='0 0 20 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.2018 3.32275H4.11849C3.24404 3.32275 2.53516 3.99497 2.53516 4.82419V15.3342C2.53516 16.1635 3.24404 16.8357 4.11849 16.8357H15.2018C16.0763 16.8357 16.7852 16.1635 16.7852 15.3342V4.82419C16.7852 3.99497 16.0763 3.32275 15.2018 3.32275Z'
        stroke='#222222'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.8281 1.82129V4.82416'
        stroke='#222222'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.49219 1.82129V4.82416'
        stroke='#222222'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.53516 7.82715H16.7852'
        stroke='#222222'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export function CalenderFilledIcon() {
  return (
    <svg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_1004_40201)'>
        <path
          d='M8.70833 1.83398H2.29167C1.78541 1.83398 1.375 2.24439 1.375 2.75065V9.16732C1.375 9.67358 1.78541 10.084 2.29167 10.084H8.70833C9.21459 10.084 9.625 9.67358 9.625 9.16732V2.75065C9.625 2.24439 9.21459 1.83398 8.70833 1.83398Z'
          fill='#808486'
        />
        <path
          d='M7.33398 0.916016V2.74935'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M3.66602 0.916016V2.74935'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7.83301 0.916016C7.83301 0.639873 7.60915 0.416016 7.33301 0.416016C7.05687 0.416016 6.83301 0.639873 6.83301 0.916016H7.83301ZM6.83301 1.41602V1.91602H7.83301V1.41602H6.83301ZM6.83301 0.916016V1.41602H7.83301V0.916016H6.83301Z'
          fill='#808486'
        />
        <path
          d='M4.16699 0.916016C4.16699 0.639873 3.94313 0.416016 3.66699 0.416016C3.39085 0.416016 3.16699 0.639873 3.16699 0.916016H4.16699ZM3.16699 1.41602V1.91602H4.16699V1.41602H3.16699ZM3.16699 0.916016V1.41602H4.16699V0.916016H3.16699Z'
          fill='#808486'
        />
        <path
          d='M1.375 4.58398H9.625'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_1004_40201'>
          <rect width='11' height='11' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function CalendarIconSmall() {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.6667 2.66797H3.33333C2.59695 2.66797 2 3.26492 2 4.0013V13.3346C2 14.071 2.59695 14.668 3.33333 14.668H12.6667C13.403 14.668 14 14.071 14 13.3346V4.0013C14 3.26492 13.403 2.66797 12.6667 2.66797Z'
        stroke='#717171'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2 6.66797H14'
        stroke='#717171'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.6665 1.33203V3.9987'
        stroke='#717171'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.3335 1.33203V3.9987'
        stroke='#717171'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function CalendarWhiteIcon() {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M15.8333 3.33594H4.16667C3.24619 3.33594 2.5 4.08213 2.5 5.0026V16.6693C2.5 17.5897 3.24619 18.3359 4.16667 18.3359H15.8333C16.7538 18.3359 17.5 17.5897 17.5 16.6693V5.0026C17.5 4.08213 16.7538 3.33594 15.8333 3.33594Z'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.5 8.33594H17.5'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.334 1.66406V4.9974'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6.66602 1.66406V4.9974'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export function CalendarDotsIcon() {
  return (
    <svg width='18' height='19' viewBox='0 0 18 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='18' height='18' transform='translate(0 0.5)' fill='white' fillOpacity='0.01' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.74625 4.25H14.2537C15.0802 4.25 15.75 4.92125 15.75 5.7455V14.7545C15.75 14.951 15.7113 15.1455 15.6361 15.327C15.5609 15.5085 15.4507 15.6734 15.3117 15.8122C15.1728 15.9511 15.0078 16.0613 14.8263 16.1364C14.6448 16.2115 14.4502 16.2501 14.2537 16.25H3.74625C3.34955 16.25 2.96909 16.0925 2.68851 15.812C2.40793 15.5316 2.2502 15.1512 2.25 14.7545V5.7455C2.25 4.91975 2.919 4.25 3.74625 4.25ZM3.75 7.25V14C3.75 14.1989 3.82902 14.3897 3.96967 14.5303C4.11032 14.671 4.30109 14.75 4.5 14.75H13.5C13.6989 14.75 13.8897 14.671 14.0303 14.5303C14.171 14.3897 14.25 14.1989 14.25 14V7.25H3.75ZM4.5 3.5C4.5 3.30109 4.57902 3.11032 4.71967 2.96967C4.86032 2.82902 5.05109 2.75 5.25 2.75C5.44891 2.75 5.63968 2.82902 5.78033 2.96967C5.92098 3.11032 6 3.30109 6 3.5V4.25H4.5V3.5ZM12 3.5C12 3.30109 12.079 3.11032 12.2197 2.96967C12.3603 2.82902 12.5511 2.75 12.75 2.75C12.9489 2.75 13.1397 2.82902 13.2803 2.96967C13.421 3.11032 13.5 3.30109 13.5 3.5V4.25H12V3.5ZM5.25 10.25V8.74925H6.75V10.25H5.25ZM11.25 10.25V8.74925H12.75V10.25H11.25ZM8.25 10.25V8.74925H9.75075V10.25H8.25ZM5.25 13.25V11.75H6.75V13.25H5.25ZM8.25 13.25V11.75H9.75075V13.25H8.25ZM11.25 13.25V11.75H12.75V13.25H11.25Z'
        fill='#42526E'
      />
    </svg>
  );
}

export function CalendarHangIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={36} height={34} fill='none'>
      <path
        stroke='#484848'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M12 2.834v4.25M24 2.834v4.25M5.25 12.877h25.5M31.5 12.042v12.042c0 4.25-2.25 7.083-7.5 7.083H12c-5.25 0-7.5-2.833-7.5-7.083V12.042c0-4.25 2.25-7.083 7.5-7.083h12c5.25 0 7.5 2.833 7.5 7.083Z'
      />
      <path
        stroke='#484848'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M23.542 19.408h.013M23.542 23.658h.013M17.993 19.408h.014M17.993 23.658h.014M12.441 19.408h.014M12.441 23.658h.014'
      />
    </svg>
  );
}
