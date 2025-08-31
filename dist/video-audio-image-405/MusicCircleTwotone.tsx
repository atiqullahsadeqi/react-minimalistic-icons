import React from 'react';

export interface MusicCircleTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MusicCircleTwotone: React.FC<MusicCircleTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.57996 8.66998C3.19996 6.90998 4.29997 5.37998 5.71997 4.22998" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12C2 13.17 2.20999 14.29 2.57999 15.33" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.08997 21.5703C10.01 21.8503 10.99 22.0002 12 22.0002C17.52 22.0002 22 17.5202 22 12.0002C22 11.4002 21.94 10.8102 21.84 10.2402" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.72003 19.75C5.25003 19.37 4.80002 18.95 4.40002 18.49" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.24 6.34003C18.44 3.72003 15.42 2 12 2C10.99 2 10.01 2.14999 9.08997 2.42999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<g opacity="0.4">
<path d="M8.59 17.1102C9.46813 17.1102 10.18 16.3983 10.18 15.5202C10.18 14.6421 9.46813 13.9302 8.59 13.9302C7.71186 13.9302 7 14.6421 7 15.5202C7 16.3983 7.71186 17.1102 8.59 17.1102Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.9999 14.4602V8.25015C15.9999 6.93015 15.1699 6.74012 14.3299 6.97012L11.1499 7.84018C10.5699 8.00018 10.1699 8.45015 10.1699 9.12015V10.2301V10.9701V15.5202" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.4098 16.0501C15.288 16.0501 15.9998 15.3383 15.9998 14.4601C15.9998 13.582 15.288 12.8701 14.4098 12.8701C13.5317 12.8701 12.8198 13.582 12.8198 14.4601C12.8198 15.3383 13.5317 16.0501 14.4098 16.0501Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.1802 10.7602L16.0002 9.17017" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>

  );
};

export default MusicCircleTwotone;
