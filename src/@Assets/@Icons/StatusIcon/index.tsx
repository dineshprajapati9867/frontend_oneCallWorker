import React from 'react';

interface StatusIconI {
  color?: string;
}

export function StatusIcon({ color = '#27AE60' }: StatusIconI) {
  return (
    <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='5' cy='5' r='5' fill={`${color}`} />
    </svg>
  );
}
