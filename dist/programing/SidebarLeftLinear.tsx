import React from 'react';

export interface SidebarLeftLinearProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SidebarLeftLinear: React.FC<SidebarLeftLinearProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.9702 15V9C21.9702 4 19.9702 2 14.9702 2H8.97021C3.97021 2 1.97021 4 1.97021 9V15C1.97021 20 3.97021 22 8.97021 22H14.9702C19.9702 22 21.9702 20 21.9702 15Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.97021 2V22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.9702 9.44L12.4102 12L14.9702 14.56" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default SidebarLeftLinear;
