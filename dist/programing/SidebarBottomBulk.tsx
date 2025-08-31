import React from 'react';

export interface SidebarBottomBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SidebarBottomBulk: React.FC<SidebarBottomBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 16.39 2.01 16.59 2.02 16.78C2.1 18.01 2.45 19.05 3.05 19.87C3.34 20.29 3.71 20.66 4.13 20.95C5.08 21.64 6.32 22 7.81 22H16.19C19.63 22 21.76 20.06 21.97 16.78C21.99 16.59 22 16.39 22 16.19V7.81C22 6.32 21.64 5.08 20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2Z" fill={color}/>
<path d="M22 15.28H2V16.19C2 16.39 2.01 16.59 2.02 16.78H21.97C21.99 16.59 22 16.39 22 16.19V15.28Z" fill={color}/>
<path d="M8.68994 9.02999C8.68994 9.21999 8.75994 9.40999 8.90994 9.55999L11.4699 12.12C11.7599 12.41 12.2399 12.41 12.5299 12.12L15.0899 9.55999C15.3799 9.26999 15.3799 8.78999 15.0899 8.49999C14.7999 8.20999 14.3199 8.20999 14.0299 8.49999L11.9999 10.52L9.96994 8.49999C9.67994 8.19999 9.19994 8.19999 8.90994 8.49999C8.75994 8.63999 8.68994 8.82999 8.68994 9.02999Z" fill={color}/>
</svg>

  );
};

export default SidebarBottomBulk;
