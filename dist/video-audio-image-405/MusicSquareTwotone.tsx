import React from 'react';

export interface MusicSquareTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MusicSquareTwotone: React.FC<MusicSquareTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<g opacity="0.4">
<path d="M8.4201 17.11C9.28719 17.11 9.99011 16.4071 9.99011 15.54C9.99011 14.6729 9.28719 13.97 8.4201 13.97C7.55302 13.97 6.8501 14.6729 6.8501 15.54C6.8501 16.4071 7.55302 17.11 8.4201 17.11Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.75 14.49V8.34997C15.75 7.03997 14.93 6.86002 14.1 7.09002L10.96 7.95001C10.39 8.11001 10 8.56002 10 9.21002V10.31V11.05V15.55" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.1799 16.0599C15.047 16.0599 15.7499 15.357 15.7499 14.4899C15.7499 13.6228 15.047 12.9199 14.1799 12.9199C13.3128 12.9199 12.6099 13.6228 12.6099 14.4899C12.6099 15.357 13.3128 16.0599 14.1799 16.0599Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.99023 11.04L15.7502 9.46997" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>

  );
};

export default MusicSquareTwotone;
