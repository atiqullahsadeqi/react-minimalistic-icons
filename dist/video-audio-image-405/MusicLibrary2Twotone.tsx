import React from 'react';

export interface MusicLibrary2TwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MusicLibrary2Twotone: React.FC<MusicLibrary2TwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 13V17C22 20.5 20 22 17 22H7C4 22 2 20.5 2 17V13C2 10.35 3.15 8.85003 5 8.28003C5.6 8.09003 6.27 8 7 8H17C17.73 8 18.4 8.09003 19 8.28003C20.85 8.85003 22 10.35 22 13Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 7V8.28003C18.4 8.09003 17.73 8 17 8H7C6.27 8 5.6 8.09003 5 8.28003V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 3.51001V5H8V3.51001C8 2.68001 8.68001 2 9.51001 2H14.49C15.32 2 16 2.68001 16 3.51001Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<g opacity="0.4">
<path d="M9.07001 19.4501C9.79902 19.4501 10.39 18.8591 10.39 18.1301C10.39 17.4011 9.79902 16.8101 9.07001 16.8101C8.34099 16.8101 7.75 17.4011 7.75 18.1301C7.75 18.8591 8.34099 19.4501 9.07001 19.4501Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.2499 17.25V12.08C15.2499 10.98 14.5599 10.82 13.8599 11.02L11.2099 11.74C10.7299 11.87 10.3999 12.25 10.3999 12.8V13.72V14.34V18.13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.9299 18.5699C14.6589 18.5699 15.2499 17.979 15.2499 17.2499C15.2499 16.5209 14.6589 15.9299 13.9299 15.9299C13.2009 15.9299 12.6099 16.5209 12.6099 17.2499C12.6099 17.979 13.2009 18.5699 13.9299 18.5699Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.3999 14.35L15.2499 13.03" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>

  );
};

export default MusicLibrary2Twotone;
