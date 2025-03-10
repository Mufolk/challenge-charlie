import React from "react";

export const Mist: React.FC<{
  color: string;
  width: string;
  height: string;
}> = ({ color, width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 36"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.14999 18C3.04999 17.52 3 17.01 3 16.5C3 12.36 6.36 9 10.5 9C11.51 9 12.47 9.21 13.35 9.57C15.34 5.69 19.34 3 24 3C28.66 3 32.66 5.69 34.64 9.57C35.52 9.21 36.48 9 37.5 9C41.64 9 45 12.36 45 16.5C45 17.01 44.95 17.52 44.85 18H47.85C47.92 17.51 48 17.01 48 16.5C48 10.71 43.29 6 37.5 6C37 6 36.51 6.04 36.02 6.11C33.22 2.29 28.8 0 24 0C19.2 0 14.78 2.29 11.98 6.11C11.49 6.04 11 6 10.5 6C4.71 6 0 10.71 0 16.5C0 17.01 0.0799939 17.51 0.149994 18H3.14999Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M46.5 21H1.5C0.67 21 0 21.67 0 22.5C0 23.33 0.67 24 1.5 24H46.5C47.33 24 48 23.33 48 22.5C48 21.67 47.33 21 46.5 21Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M46.5 27H1.5C0.67 27 0 27.67 0 28.5C0 29.33 0.67 30 1.5 30H46.5C47.33 30 48 29.33 48 28.5C48 27.67 47.33 27 46.5 27Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M46.5 33H1.5C0.67 33 0 33.67 0 34.5C0 35.33 0.67 36 1.5 36H46.5C47.33 36 48 35.33 48 34.5C48 33.67 47.33 33 46.5 33Z"
      fill={color}
    />
  </svg>
);
