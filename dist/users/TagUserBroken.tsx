import React from 'react';

export interface TagUserBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TagUserBroken: React.FC<TagUserBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8.95V15.88C21 17.52 19.66 18.85 18 18.85H17.24C16.44 18.85 15.68 19.16 15.12 19.72L13.41 21.41C12.63 22.18 11.36 22.18 10.58 21.41L8.87 19.72C8.31 19.16 7.54 18.85 6.75 18.85H6C4.34 18.85 3 17.52 3 15.88V4.97C3 3.33 4.34 2 6 2H18C19.66 2 21 3.33 21 4.97" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.0701 8.95005C12.0301 8.95005 11.97 8.95005 11.92 8.95005C10.87 8.91005 10.04 8.06005 10.04 7.00005C10.04 5.92005 10.9101 5.05005 11.9901 5.05005C13.0701 5.05005 13.9401 5.93005 13.9401 7.00005C13.9501 8.06005 13.1201 8.92005 12.0701 8.95005Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.25 15.19C10.76 16.2 13.24 16.2 14.75 15.19C16.08 14.3 16.08 12.85 14.75 11.96C13.24 10.95 10.76 10.95 9.25 11.96" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default TagUserBroken;
