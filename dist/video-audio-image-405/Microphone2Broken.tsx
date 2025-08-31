import React from 'react';

export interface Microphone2BrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Microphone2Broken: React.FC<Microphone2BrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99963 10.02V11.5C7.99963 13.71 9.78963 15.5 11.9996 15.5C14.2096 15.5 15.9996 13.71 15.9996 11.5V6C15.9996 3.79 14.2096 2 11.9996 2C9.78963 2 7.99963 3.79 7.99963 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.34961 9.6499V11.3499C4.34961 15.5699 7.77961 18.9999 11.9996 18.9999C16.2196 18.9999 19.6496 15.5699 19.6496 11.3499V9.6499" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.6096 6.43012C11.5096 6.10012 12.4896 6.10012 13.3896 6.43012" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.1996 8.55007C11.7296 8.41007 12.2796 8.41007 12.8096 8.55007" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9996 19V22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default Microphone2Broken;
