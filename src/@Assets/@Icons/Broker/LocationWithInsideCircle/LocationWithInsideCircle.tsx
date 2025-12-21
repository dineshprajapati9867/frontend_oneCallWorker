import * as React from "react";

export function BlackNormalLocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <g
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        clipPath="url(#a)"
      >
        <path d="M12 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M19.5 9.75c0 6.75-7.5 12-7.5 12s-7.5-5.25-7.5-12a7.5 7.5 0 0 1 15 0v0Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
