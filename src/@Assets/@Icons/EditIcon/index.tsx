import React from 'react';

interface PropsI{
  width?:number,
  height?:number
}




export function EditNormalIcon({width=18,height=18}:PropsI) {
  return (
    <svg width={width} height={height} viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
