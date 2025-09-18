interface UsersIconI {
  width?: string;
  height?: string;
}

export function UsersIcon() {
  return (
    <svg width='42' height='42' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='42' height='42' rx='21' fill='#E7E7E7' />
      <path
        d='M16.3125 24.75C19.678 24.75 22.4062 22.0217 22.4062 18.6562C22.4062 15.2908 19.678 12.5625 16.3125 12.5625C12.947 12.5625 10.2188 15.2908 10.2188 18.6562C10.2188 22.0217 12.947 24.75 16.3125 24.75Z'
        stroke='#717171'
        strokeWidth='1.5'
        strokeMiterlimit='10'
      />
      <path
        d='M24.2109 12.7852C24.7496 12.6391 25.3051 12.5642 25.8633 12.5625C27.4794 12.5625 29.0294 13.2045 30.1722 14.3473C31.315 15.4901 31.957 17.0401 31.957 18.6562C31.957 20.2724 31.315 21.8224 30.1722 22.9652C29.0294 24.108 27.4794 24.75 25.8633 24.75'
        stroke='#717171'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.875 29.1327C8.8265 27.7787 10.0899 26.6736 11.5584 25.9107C13.027 25.1478 14.6576 24.7495 16.3125 24.7495C17.9674 24.7495 19.598 25.1478 21.0666 25.9107C22.5351 26.6736 23.7985 27.7787 24.75 29.1327'
        stroke='#717171'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M25.8633 24.75C27.5183 24.749 29.1492 25.1468 30.618 25.9097C32.0867 26.6726 33.3499 27.7782 34.3008 29.1328'
        stroke='#717171'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function UserIconSmall({ width = '19', height = '18' }: UsersIconI) {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 19 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.5 15.75V14.25C15.5 13.4544 15.1839 12.6913 14.6213 12.1287C14.0587 11.5661 13.2956 11.25 12.5 11.25H6.5C5.70435 11.25 4.94129 11.5661 4.37868 12.1287C3.81607 12.6913 3.5 13.4544 3.5 14.25V15.75'
        stroke='#717171'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.5 8.25C11.1569 8.25 12.5 6.90685 12.5 5.25C12.5 3.59315 11.1569 2.25 9.5 2.25C7.84315 2.25 6.5 3.59315 6.5 5.25C6.5 6.90685 7.84315 8.25 9.5 8.25Z'
        stroke='#717171'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
