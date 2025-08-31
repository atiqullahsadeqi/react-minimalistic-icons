import React from 'react';

export interface GlobalRefreshLinearProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const GlobalRefreshLinear: React.FC<GlobalRefreshLinearProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.0001 3H9.0001C7.0501 8.84 7.0501 15.16 9.0001 21H8.0001" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 3C15.97 5.92 16.46 8.96 16.46 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 8.99998C8.84 7.04998 15.16 7.04998 21 8.99998" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.4998 14.7C19.1298 14.59 18.7098 14.52 18.2498 14.52C16.1798 14.52 14.5098 16.2 14.5098 18.26C14.5098 20.33 16.1898 22 18.2498 22C20.3098 22 21.9897 20.32 21.9897 18.26C21.9897 17.49 21.7597 16.77 21.3597 16.18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0396 14.8L18.7896 13.37" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0396 14.8L18.5796 15.86" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default GlobalRefreshLinear;
