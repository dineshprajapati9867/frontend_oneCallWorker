import React from 'react';
interface NotificationIconPropsI extends React.SVGProps<SVGSVGElement> {
  height?: number;
  width?: number;
}

export function NotificationIcon({
  height = 20,
  width = 20,
  ...props
}: NotificationIconPropsI) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.33651 14.28C9.21696 14.4861 9.04536 14.6571 8.8389 14.7761C8.63244 14.895 8.39837 14.9576 8.16011 14.9576C7.92185 14.9576 7.68777 14.895 7.48131 14.7761C7.27485 14.6571 7.10326 14.4861 6.98371 14.28M14.9601 11.56H1.36011C1.90115 11.56 2.42003 11.3451 2.80261 10.9625C3.18518 10.5799 3.40011 10.061 3.40011 9.51998V6.11998C3.40011 4.85755 3.90161 3.64683 4.79428 2.75416C5.68695 1.86148 6.89768 1.35999 8.16011 1.35999C9.42254 1.35999 10.6333 1.86148 11.5259 2.75416C12.4186 3.64683 12.9201 4.85755 12.9201 6.11998V9.51998C12.9201 10.061 13.135 10.5799 13.5176 10.9625C13.9002 11.3451 14.4191 11.56 14.9601 11.56Z"
        stroke="#111111"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NotificationLeadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect width='22' height='22' rx='11' fill='#42526E' />
      <path
        d='M15.6641 8.08203H6.33073C5.6864 8.08203 5.16406 8.60437 5.16406 9.2487V15.082C5.16406 15.7264 5.6864 16.2487 6.33073 16.2487H15.6641C16.3084 16.2487 16.8307 15.7264 16.8307 15.082V9.2487C16.8307 8.60437 16.3084 8.08203 15.6641 8.08203Z'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.3307 16.25V6.91667C13.3307 6.60725 13.2078 6.3105 12.989 6.09171C12.7702 5.87292 12.4735 5.75 12.1641 5.75H9.83073C9.52131 5.75 9.22456 5.87292 9.00577 6.09171C8.78698 6.3105 8.66406 6.60725 8.66406 6.91667V16.25'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
