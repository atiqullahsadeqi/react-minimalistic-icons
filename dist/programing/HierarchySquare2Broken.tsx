import React from 'react';

export interface HierarchySquare2BrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const HierarchySquare2Broken: React.FC<HierarchySquare2BrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13.02V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.7998 10.2V14.4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.95001 9.89999C9.02697 9.89999 9.90002 9.02697 9.90002 7.95001C9.90002 6.87306 9.02697 6 7.95001 6C6.87306 6 6 6.87306 6 7.95001C6 9.02697 6.87306 9.89999 7.95001 9.89999Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.79999 18C8.7941 18 9.59998 17.1941 9.59998 16.2C9.59998 15.2059 8.7941 14.4 7.79999 14.4C6.80588 14.4 6 15.2059 6 16.2C6 17.1941 6.80588 18 7.79999 18Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.1999 18C17.194 18 17.9999 17.1941 17.9999 16.2C17.9999 15.2059 17.194 14.4 16.1999 14.4C15.2058 14.4 14.3999 15.2059 14.3999 16.2C14.3999 17.1941 15.2058 18 16.1999 18Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.87988 10.2C8.14988 11.25 9.10987 12.03 10.2399 12.02L12.2999 12.01C13.8699 12 15.2099 13.01 15.6999 14.42" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default HierarchySquare2Broken;
