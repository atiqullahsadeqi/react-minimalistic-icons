import React from 'react';

export interface Path2BoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Path2Bold: React.FC<Path2BoldProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.15 22H9.82998C8.28998 22 7.14998 20.75 7.44998 19.42L7.96998 17.1C8.06998 16.64 8.47998 16.32 8.94998 16.32H15.04C15.51 16.32 15.91 16.64 16.02 17.1L16.54 19.41C16.86 20.84 15.79 22 14.15 22Z" fill={color}/>
<path d="M18.82 13.69L17.75 14.63C17.38 14.95 16.91 15.13 16.43 15.13H7.58995C7.09995 15.13 6.61995 14.95 6.25995 14.62L5.20995 13.68C3.48995 12.27 3.47995 11.19 4.79995 9.53L10.03 2.92C10.0665 2.87094 10.104 2.82374 10.1424 2.77836C10.5833 2.25735 11.27 2.70487 11.27 3.38743V6.86C11.26 7.29 11.6 7.63 12.02 7.62C12.44 7.63 12.77 7.29 12.78 6.86V3.38743C12.78 2.70487 13.4563 2.2676 13.909 2.77848C13.9464 2.82077 13.9834 2.8646 14.02 2.91L19.23 9.53C20.53 11.19 20.48 12.22 18.82 13.69Z" fill={color}/>
</svg>

  );
};

export default Path2Bold;
