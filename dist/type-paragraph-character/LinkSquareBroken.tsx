import React from 'react';

export interface LinkSquareBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LinkSquareBroken: React.FC<LinkSquareBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13.05V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.17997 16.02C7.41997 15.95 6.66998 15.6 6.08998 14.99C4.76998 13.6 4.76998 11.32 6.08998 9.93001L8.27998 7.63002C9.59998 6.24002 11.77 6.24002 13.1 7.63002C14.42 9.02002 14.42 11.3 13.1 12.69L12.01 13.84" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.82 7.98004C16.58 8.05004 17.33 8.40004 17.91 9.01004C19.23 10.4 19.23 12.68 17.91 14.07L15.72 16.37C14.4 17.76 12.23 17.76 10.9 16.37C9.57997 14.98 9.57997 12.7 10.9 11.31L11.99 10.16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default LinkSquareBroken;
