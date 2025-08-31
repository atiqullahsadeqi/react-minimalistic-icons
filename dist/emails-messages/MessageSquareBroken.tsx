import React from 'react';

export interface MessageSquareBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MessageSquareBroken: React.FC<MessageSquareBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13.02V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.28 9.76001V12.9C18.28 13.1 18.27 13.3 18.25 13.49C18.07 15.61 16.82 16.67 14.52 16.67H14.21C14.01 16.67 13.82 16.76 13.71 16.92L12.77 18.18C12.35 18.74 11.68 18.74 11.26 18.18L10.32 16.92C10.22 16.79 9.99001 16.67 9.82001 16.67H9.51001C7.00001 16.67 5.75 16.05 5.75 12.91V9.76999C5.75 7.46999 6.80999 6.22001 8.92999 6.04001C9.11999 6.02001 9.31999 6.01001 9.51999 6.01001H14.55C17.02 6.00001 18.28 7.26001 18.28 9.76001Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default MessageSquareBroken;
