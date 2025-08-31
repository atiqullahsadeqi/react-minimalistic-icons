import React from 'react';

export interface NoteRemoveTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const NoteRemoveTwotone: React.FC<NoteRemoveTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M7 14H12" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<g opacity="0.4">
<path d="M7 5.95996L3.25 2.20996" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.96094 2.25L3.21094 6" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<path opacity="0.4" d="M7 10H15" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 2H16C19.33 2.18 21 3.41 21 7.99V16" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 9.01001V15.98C3 19.99 4 22 9 22H12C12.17 22 14.84 22 15 22" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 16L15 22V19C15 17 16 16 18 16H21Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default NoteRemoveTwotone;
