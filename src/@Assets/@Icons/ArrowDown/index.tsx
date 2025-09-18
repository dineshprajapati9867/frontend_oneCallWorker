import * as React from 'react';

export function ChevronArrowDown() {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='m6 9 6 6 6-6'
        stroke='#4F4F4F'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
export function ChevronArrowUp() {
  return (
    <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='m18 15-6-6-6 6'
        stroke='#111'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function ArrowDown() {
  return (
    <svg width={8} height={5} fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M.292.293a1.009 1.009 0 0 0 0 1.419l2.94 2.965c.217.215.5.322.778.322.28 0 .556-.107.77-.322l2.93-2.955A1.01 1.01 0 0 0 7.386.085a.987.987 0 0 0-1.084.218L4.005 2.62 1.698.293a.99.99 0 0 0-1.406 0Z'
        fill='#42526E'
      />
    </svg>
  );
}

export function ArrowUpRight() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M7 17L17 7' stroke='#111111' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M7 7H17V17' stroke='#111111' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

export function ArrowUp() {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect
        width='20'
        height='20'
        transform='matrix(-1 0 0 -1 20 20)'
        fill='white'
        fillOpacity='0.01'
      />
      <path
        d='M9.70493 8.11866L9.70508 8.11851C9.78574 8.03709 9.8874 7.99828 9.99071 7.99828C10.0948 7.99828 10.2018 8.03772 10.2871 8.12099L12.7335 10.589C12.7336 10.5891 12.7336 10.5891 12.7337 10.5892C12.7967 10.653 12.832 10.739 12.832 10.8287C12.832 10.9184 12.7966 11.0046 12.7335 11.0684L13.089 11.4199L12.734 11.0679C12.7038 11.0984 12.6678 11.1226 12.6282 11.1391C12.5886 11.1556 12.5461 11.1641 12.5032 11.1641C12.4603 11.1641 12.4178 11.1556 12.3782 11.1391C12.3386 11.1226 12.3027 11.0984 12.2725 11.0679C12.2724 11.0679 12.2724 11.0679 12.2724 11.0679L10.35 9.12875L9.99495 8.77067L9.63987 9.12868L7.72487 11.0595L7.72375 11.0607C7.69374 11.0911 7.65798 11.1153 7.61855 11.1318C7.57912 11.1483 7.5368 11.1568 7.49405 11.1568C7.4513 11.1568 7.40898 11.1483 7.36954 11.1318C7.33011 11.1153 7.29435 11.0911 7.26434 11.0607L7.26407 11.0604C7.20095 10.9964 7.16557 10.9102 7.16557 10.8204C7.16557 10.7307 7.20085 10.6445 7.26379 10.5806C7.26388 10.5805 7.26398 10.5804 7.26407 10.5803L9.70493 8.11866Z'
        fill='#42526E'
        stroke='white'
      />
    </svg>
  );
}

export function ArrowDowns() {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='20' height='20' fill='white' fillOpacity='0.01' />
      <path
        d='M10.2951 11.8813L10.2949 11.8815C10.2143 11.9629 10.1126 12.0017 10.0093 12.0017C9.90524 12.0017 9.79816 11.9623 9.71286 11.879L7.26646 9.41097C7.26641 9.41091 7.26635 9.41086 7.2663 9.41081C7.2033 9.34702 7.16797 9.26097 7.16797 9.1713C7.16797 9.08157 7.20336 8.99545 7.26646 8.93164L6.91095 8.58006L7.266 8.93211C7.29622 8.90163 7.33217 8.87745 7.37178 8.86094C7.41139 8.84444 7.45387 8.83594 7.49679 8.83594C7.5397 8.83594 7.58218 8.84444 7.62179 8.86094C7.66139 8.87744 7.69733 8.90162 7.72754 8.93208C7.72755 8.93209 7.72756 8.9321 7.72757 8.9321L9.65004 10.8712L10.005 11.2293L10.3601 10.8713L12.2751 8.94049L12.2762 8.93935C12.3063 8.9089 12.342 8.88472 12.3814 8.86822C12.4209 8.85171 12.4632 8.84321 12.506 8.84321C12.5487 8.84321 12.591 8.85171 12.6305 8.86822C12.6699 8.88472 12.7057 8.9089 12.7357 8.93935L12.7359 8.93963C12.799 9.00357 12.8344 9.0898 12.8344 9.17964C12.8344 9.26935 12.7991 9.35545 12.7362 9.41937C12.7361 9.41946 12.736 9.41956 12.7359 9.41965L10.2951 11.8813Z'
        fill='#42526E'
        stroke='white'
      />
    </svg>
  );
}

export function ArrowLineUp() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={17} height={16} fill='none'>
      <path
        stroke='#222'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M12.546 6.38 8.5 2.333 4.453 6.38'
      />
      <path
        stroke='#171717'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M8.5 13.667V2.447'
      />
    </svg>
  );
}
