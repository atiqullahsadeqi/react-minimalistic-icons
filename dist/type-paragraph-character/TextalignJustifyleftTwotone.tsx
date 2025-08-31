import React from 'react';

export interface TextalignJustifyleftTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TextalignJustifyleftTwotone: React.FC<TextalignJustifyleftTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 4.5H3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 9.5H3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M21 14.5H3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 19.5H3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default TextalignJustifyleftTwotone;
