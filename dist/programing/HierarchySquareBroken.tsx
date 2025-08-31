import React from 'react';

export interface HierarchySquareBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const HierarchySquareBroken: React.FC<HierarchySquareBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13.02V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.4498 14.4V8.5C16.4498 7.95 15.9998 7.5 15.4498 7.5H12.5498" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.05 6L12.25 7.5L14.05 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5498 10.2V14.4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.70001 9.89999C8.77697 9.89999 9.65002 9.02697 9.65002 7.95001C9.65002 6.87306 8.77697 6 7.70001 6C6.62306 6 5.75 6.87306 5.75 7.95001C5.75 9.02697 6.62306 9.89999 7.70001 9.89999Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.54999 18C8.5441 18 9.34998 17.1941 9.34998 16.2C9.34998 15.2059 8.5441 14.4 7.54999 14.4C6.55588 14.4 5.75 15.2059 5.75 16.2C5.75 17.1941 6.55588 18 7.54999 18Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.4499 18C17.444 18 18.2499 17.1941 18.2499 16.2C18.2499 15.2059 17.444 14.4 16.4499 14.4C15.4558 14.4 14.6499 15.2059 14.6499 16.2C14.6499 17.1941 15.4558 18 16.4499 18Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default HierarchySquareBroken;
