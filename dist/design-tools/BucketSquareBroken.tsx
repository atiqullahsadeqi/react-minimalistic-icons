import React from 'react';

export interface BucketSquareBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BucketSquareBroken: React.FC<BucketSquareBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.94005 16.9301L6.11003 14.1C5.17003 13.16 5.17003 12.21 6.11003 11.27L10.83 6.54999L16.02 11.74C16.28 12 16.28 12.4201 16.02 12.6801L11.77 16.9301C10.83 17.8701 9.88005 17.8701 8.94005 16.9301Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.88 5.59998L10.83 6.53998" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.44006 12.64L16.1301 12.17" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.3 14.8101C17.3 14.8101 15.99 16.23 15.99 17.1C15.99 17.82 16.58 18.41 17.3 18.41C18.02 18.41 18.61 17.82 18.61 17.1C18.6 16.23 17.3 14.8101 17.3 14.8101Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12.97V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default BucketSquareBroken;
