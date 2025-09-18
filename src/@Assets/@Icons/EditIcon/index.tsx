import React from 'react';

export function EditInvIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='m16 3 5 5L8 21H3v-5L16 3Z' stroke='#2F80ED' />
    </svg>
  );
}

export function EditIcon() {
  return (
    <svg width='38' height='38' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='38' height='38' rx='19' fill='white' />
      <path
        d='M22.3333 11.5L26.5 15.6667L15.6667 26.5H11.5V22.3333L22.3333 11.5Z'
        stroke='#111111'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export function EditUnderLineIcon() {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M11.6667 1.66699L15 5.00033L5.83333 14.167H2.5V10.8337L11.6667 1.66699Z'
        stroke='#111111'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M2.5 18.333H17.5'
        stroke='#111111'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function EditNormalIcon() {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10.5 3.50024L14.5 7.50024M1 17.0003H5L15.5 6.5003C16.0304 5.96987 16.3284 5.25045 16.3284 4.5003C16.3284 3.75016 16.0304 3.03074 15.5 2.5003C14.9696 1.96987 14.2501 1.67188 13.5 1.67188C12.7499 1.67187 12.0304 1.96987 11.5 2.5003L1 13.0003V17.0003Z'
        stroke='#484848'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function EditBlueIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} fill='none'>
      <path
        stroke='#007AFF'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
        d='m11.25 5.416 3.333 3.334m-11.25 7.916h3.334l8.75-8.75a2.357 2.357 0 0 0-3.334-3.333l-8.75 8.75v3.333Z'
      />
    </svg>
  );
}
