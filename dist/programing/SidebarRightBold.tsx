import React from 'react';

export interface SidebarRightBoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SidebarRightBold: React.FC<SidebarRightBoldProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.81 2C6.32 2 5.08 2.36 4.13 3.05C3.71 3.34 3.34 3.71 3.05 4.13C2.36 5.08 2 6.32 2 7.81V16.19C2 19.83 4.17 22 7.81 22H15.28V2H7.81ZM12.12 12.53L9.56 15.09C9.41 15.24 9.22 15.31 9.03 15.31C8.84 15.31 8.65 15.24 8.5 15.09C8.21 14.8 8.21 14.32 8.5 14.03L10.52 12L8.5 9.97C8.2 9.68 8.2 9.2 8.5 8.91C8.8 8.62 9.27 8.62 9.56 8.91L12.12 11.47C12.41 11.76 12.41 12.24 12.12 12.53Z" fill={color}/>
<path d="M16.7798 2.03V21.98C18.0098 21.9 19.0498 21.55 19.8698 20.95C20.2898 20.66 20.6598 20.29 20.9498 19.87C21.6398 18.92 21.9998 17.68 21.9998 16.19V7.81C21.9998 4.37 20.0598 2.24 16.7798 2.03Z" fill={color}/>
</svg>

  );
};

export default SidebarRightBold;
