import React from 'react';

export interface Link2BrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Link2Broken: React.FC<Link2BrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.06 10.94C15.31 13.19 15.31 16.83 13.06 19.07C10.81 21.31 7.17003 21.32 4.93003 19.07C2.69003 16.82 2.68003 13.18 4.93003 10.94" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.97 3.16998C16.46 3.19998 17.94 3.78998 19.07 4.92998C21.41 7.26998 21.41 11.07 19.07 13.42" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.59 13.41C8.25002 11.07 8.25002 7.26998 10.59 4.91998" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default Link2Broken;
