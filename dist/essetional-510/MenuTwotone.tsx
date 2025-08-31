import React from 'react';

export interface MenuTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MenuTwotone: React.FC<MenuTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7H21" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path opacity="0.34" d="M3 12H21" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path d="M3 17H21" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
</svg>

  );
};

export default MenuTwotone;
