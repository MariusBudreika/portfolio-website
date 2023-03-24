import React from 'react';

export const Circles: React.FC = () => {
  return (
    <svg fill="none" viewBox="0 0 120 77" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#d)" fill="#E84949">
        <g clipPath="url(#c)">
          <circle cx="7.4997" cy="7.9437" r="7.5" />
          <circle cx="55.5" cy="7.9437" r="7.5" />
          <circle cx="103.5" cy="7.9437" r="7.5" />
        </g>
        <g clipPath="url(#b)">
          <circle cx="7.4997" cy="34.944" r="7.5" />
          <circle cx="55.5" cy="34.944" r="7.5" />
          <circle cx="103.5" cy="34.944" r="7.5" />
        </g>
        <g clipPath="url(#a)">
          <circle cx="7.4997" cy="61.944" r="7.5" />
          <circle cx="55.5" cy="61.944" r="7.5" />
          <circle cx="103.5" cy="61.944" r="7.5" />
        </g>
      </g>
      <defs>
        <clipPath id="d">
          <rect
            transform="translate(-.00030518 .44373)"
            width="120"
            height="76"
            fill="#fff"
          />
        </clipPath>
        <clipPath id="c">
          <rect
            transform="translate(-.00030518 .44373)"
            width="207"
            height="15"
            fill="#fff"
          />
        </clipPath>
        <clipPath id="b">
          <rect
            transform="translate(-.00030518 27.444)"
            width="207"
            height="15"
            fill="#fff"
          />
        </clipPath>
        <clipPath id="a">
          <rect
            transform="translate(-.00030518 54.444)"
            width="207"
            height="15"
            fill="#fff"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
