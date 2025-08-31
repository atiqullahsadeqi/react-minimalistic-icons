import React from 'react';

export interface MusicLinearProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MusicLinear: React.FC<MusicLinearProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.28 22C8.00313 22 9.4 20.6031 9.4 18.88C9.4 17.1569 8.00313 15.76 6.28 15.76C4.55688 15.76 3.16 17.1569 3.16 18.88C3.16 20.6031 4.55688 22 6.28 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.84 16.8001V4.60009C20.84 2.00009 19.21 1.64009 17.56 2.09009L11.32 3.79009C10.18 4.10009 9.39999 5.00009 9.39999 6.30009V8.47009V9.93009V18.8701" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.72 19.9201C19.4431 19.9201 20.84 18.5232 20.84 16.8001C20.84 15.0769 19.4431 13.6801 17.72 13.6801C15.9969 13.6801 14.6 15.0769 14.6 16.8001C14.6 18.5232 15.9969 19.9201 17.72 19.9201Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.39999 9.52002L20.84 6.40002" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default MusicLinear;
