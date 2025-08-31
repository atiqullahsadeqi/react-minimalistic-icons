import React from 'react';

export interface HierarchySquare3BrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const HierarchySquare3Broken: React.FC<HierarchySquare3BrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13.02V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.7998 13.8V9.60001" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.95001 18C9.02697 18 9.90002 17.1269 9.90002 16.05C9.90002 14.973 9.02697 14.1 7.95001 14.1C6.87306 14.1 6 14.973 6 16.05C6 17.1269 6.87306 18 7.95001 18Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.79999 9.60001C8.7941 9.60001 9.59998 8.7941 9.59998 7.79999C9.59998 6.80588 8.7941 6 7.79999 6C6.80588 6 6 6.80588 6 7.79999C6 8.7941 6.80588 9.60001 7.79999 9.60001Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.1999 9.60001C17.194 9.60001 17.9999 8.7941 17.9999 7.79999C17.9999 6.80588 17.194 6 16.1999 6C15.2058 6 14.3999 6.80588 14.3999 7.79999C14.3999 8.7941 15.2058 9.60001 16.1999 9.60001Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.87988 13.8C8.14988 12.75 9.10987 11.97 10.2399 11.98L12.2999 11.99C13.8699 12 15.2099 10.99 15.6999 9.57999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default HierarchySquare3Broken;
