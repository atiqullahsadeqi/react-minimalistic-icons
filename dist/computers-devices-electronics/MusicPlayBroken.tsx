import React from 'react';

export interface MusicPlayBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MusicPlayBroken: React.FC<MusicPlayBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.01994 12.22C1.90994 6.59997 6.34996 2.04999 11.97 2.04999C17.59 2.04999 22.0199 6.59999 22.0199 12.11V18.27C22.0199 20.22 20.4 21.84 18.45 21.84C16.5 21.84 14.88 20.22 14.88 18.27V15.46C14.88 14.49 15.64 13.62 16.72 13.62C17.69 13.62 18.56 14.38 18.56 15.46V18.49" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.48004 18.49V15.57C5.48004 14.6 6.24004 13.73 7.32004 13.73C8.29004 13.73 9.16003 14.49 9.16003 15.57V18.38C9.16003 20.33 7.54003 21.95 5.59003 21.95C3.64003 21.95 2.02002 20.32 2.02002 18.38V16.01" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.54 8.19L11.08 7.27002C10.97 7.06002 10.67 7.05001 10.56 7.26001L9.71997 8.80999C9.61997 8.99999 9.41998 9.11999 9.19998 9.11999H8.46997" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.53 9.12H14.72C14.5 9.12 14.29 9.25 14.19 9.44L13.44 10.94C13.33 11.16 13.02 11.16 12.91 10.94" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default MusicPlayBroken;
