import React from 'react';

interface DownloadIconI {
  width?: string | number;
  height?: string | number;
}

export function DownloadIcon({ width = '20', height = '20' }: DownloadIconI) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5'
        stroke='#2F80ED'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.83203 8.33301L9.9987 12.4997L14.1654 8.33301'
        stroke='#2F80ED'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M10 12.5V2.5' stroke='#2F80ED' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

export function BlackDownloadIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8.0625 10.3125L12 14.25L15.9375 10.3125'
        stroke='black'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 3.75V14.25'
        stroke='black'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20.25 14.25V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V14.25'
        stroke='black'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
