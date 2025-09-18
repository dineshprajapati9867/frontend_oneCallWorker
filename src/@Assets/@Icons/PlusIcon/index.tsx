import React from 'react';

interface PlusIconI {
  width?: number;
  height?: number;
}

export function PlusIcon({ width = 20, height = 20 }: PlusIconI) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M10 4.16663V15.8333' stroke='#111111' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M4.16663 10H15.8333' stroke='#111111' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

export function PlusIconLight({ width = 16, height = 16 }: PlusIconI) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.74967 3.33334C8.74967 2.91913 8.41389 2.58334 7.99967 2.58334C7.58546 2.58334 7.24967 2.91913 7.24967 3.33334H8.74967ZM7.24967 12.6667C7.24967 13.0809 7.58546 13.4167 7.99967 13.4167C8.41389 13.4167 8.74967 13.0809 8.74967 12.6667H7.24967ZM3.33301 7.25001C2.91879 7.25001 2.58301 7.5858 2.58301 8.00001C2.58301 8.41422 2.91879 8.75001 3.33301 8.75001V7.25001ZM12.6663 8.75001C13.0806 8.75001 13.4163 8.41422 13.4163 8.00001C13.4163 7.5858 13.0806 7.25001 12.6663 7.25001V8.75001ZM7.24967 3.33334V12.6667H8.74967V3.33334H7.24967ZM3.33301 8.75001H12.6663V7.25001H3.33301V8.75001Z'
        fill='white'
      />
    </svg>
  );
}

export function AddonPlusIcon() {
  return (
    <svg width={44} height={44} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M32.955 37.127h-20.91A1.045 1.045 0 0 1 11 36.08V6.81a1.045 1.045 0 0 1 1.046-1.046h20.909A1.046 1.046 0 0 1 34 6.81V36.08a1.046 1.046 0 0 1-1.045 1.046ZM13.09 35.036h18.818V7.854H13.091v27.182Z'
        fill='#222'
        stroke='#fff'
      />
      <path
        d='M22.5 16.542v9.916M17.542 21.5h9.916'
        stroke='#484848'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function GrayPlusIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='none'>
      <path
        stroke='#717171'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='M8.003 3.332v9.333M3.336 8h9.333'
      />
    </svg>
  );
}
