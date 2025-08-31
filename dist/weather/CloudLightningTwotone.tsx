import React from 'react';

export interface CloudLightningTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CloudLightningTwotone: React.FC<CloudLightningTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.61 19.9999C17.95 20.0099 19.24 19.5099 20.23 18.6099C23.5 15.7499 21.75 10.0099 17.44 9.46995C15.9 0.129949 2.42998 3.66995 5.61998 12.5599" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.27999 12.97C6.74999 12.7 6.15999 12.56 5.56999 12.57C0.909986 12.9 0.919986 19.68 5.56999 20.01" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.8199 9.88998C16.3399 9.62998 16.8999 9.48998 17.4799 9.47998" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M9.22995 19.16H10.23V21.49C10.23 21.83 10.66 22 10.88 21.74L13.33 18.95C13.63 18.61 13.5 18.33 13.05 18.33H12.05V16C12.05 15.66 11.62 15.49 11.4 15.75L8.94995 18.54C8.64995 18.88 8.77995 19.16 9.22995 19.16Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default CloudLightningTwotone;
