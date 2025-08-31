import React from 'react';

export interface SidebarTopBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SidebarTopBulk: React.FC<SidebarTopBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 7.61 21.99 7.41 21.98 7.22C21.9 5.99 21.55 4.95 20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C4.37 2 2.24 3.94 2.03 7.22C2.01 7.41 2 7.61 2 7.81V16.19C2 17.68 2.36 18.92 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C5.08 21.64 6.32 22 7.81 22Z" fill={color}/>
<path d="M2 8.72H22V7.81C22 7.61 21.99 7.41 21.98 7.22H2.03C2.01 7.41 2 7.61 2 7.81V8.72Z" fill={color}/>
<path d="M15.3099 14.97C15.3099 14.78 15.2399 14.59 15.0899 14.44L12.5299 11.88C12.2399 11.59 11.7599 11.59 11.4699 11.88L8.90988 14.44C8.61988 14.73 8.61988 15.21 8.90988 15.5C9.19988 15.79 9.67988 15.79 9.96988 15.5L11.9999 13.48L14.0299 15.51C14.3199 15.8 14.7999 15.8 15.0899 15.51C15.2399 15.36 15.3099 15.17 15.3099 14.97Z" fill={color}/>
</svg>

  );
};

export default SidebarTopBulk;
