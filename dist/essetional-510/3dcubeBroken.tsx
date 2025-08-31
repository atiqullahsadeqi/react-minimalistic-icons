import React from 'react';

export interface 3dcubeBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const 3dcubeBroken: React.FC<3dcubeBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.43 7.75997C20.19 7.34997 20.19 6.17997 19.43 5.76997L12.92 2.25997C12.34 1.94997 11.66 1.94997 11.08 2.25997L4.57 5.76997C3.81 6.17997 3.81 7.34997 4.57 7.75997L11.08 11.27C11.66 11.58 12.34 11.58 12.92 11.27L15.26 10.01" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 11.12C2 10.29 2.87 9.76005 3.61 10.13L9.66 13.16C10.41 13.54 10.89 14.31 10.89 15.15V20.8701C10.89 21.7001 10.02 22.2301 9.28 21.8601L3.23 18.83C2.48 18.45 2 17.68 2 16.84V14.96" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.3901 10.13L14.3401 13.16C13.5901 13.54 13.1101 14.31 13.1101 15.15V20.8701C13.1101 21.7001 13.9801 22.2301 14.7201 21.8601L20.7701 18.83C21.5201 18.45 22.0001 17.68 22.0001 16.84V11.12C22.0001 10.29 21.1301 9.76005 20.3901 10.13Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default 3dcubeBroken;
