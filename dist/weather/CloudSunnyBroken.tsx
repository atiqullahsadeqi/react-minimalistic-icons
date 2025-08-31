import React from 'react';

export interface CloudSunnyBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CloudSunnyBroken: React.FC<CloudSunnyBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.25994 5.43006C9.73994 3.42006 13.7599 3.32006 15.9999 6.03006V6.04006C16.6999 6.90006 17.2299 8.04006 17.4699 9.49006C18.7999 9.66006 19.8799 10.3101 20.6499 11.2301C22.3999 13.3001 22.5499 16.6801 20.2699 18.6801C19.2799 19.5901 17.9799 20.0901 16.6299 20.0801H5.53994C0.869942 19.7401 0.859942 12.9401 5.53994 12.6001H5.58994C5.10994 11.2601 5.00994 10.0401 5.17994 8.96006" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.25997 13.01C6.73997 12.75 6.16997 12.61 5.58997 12.6" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.85 9.92001C16.37 9.66001 16.94 9.52001 17.52 9.51001" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.97 8.5C21.97 9.6 21.46 10.59 20.65 11.23C19.88 10.31 18.8 9.66 17.47 9.49C17.23 8.04 16.7 6.9 16 6.04V6.03C16.63 5.39 17.51 5 18.47 5C20.4 5 21.97 6.57 21.97 8.5Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default CloudSunnyBroken;
