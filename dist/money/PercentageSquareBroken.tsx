import React from 'react';

export interface PercentageSquareBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PercentageSquareBroken: React.FC<PercentageSquareBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13.05V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.32007 15.27L14.86 8.73004" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.73001 10.37C9.40932 10.37 9.95999 9.81936 9.95999 9.14005C9.95999 8.46073 9.40932 7.91003 8.73001 7.91003C8.0507 7.91003 7.5 8.46073 7.5 9.14005C7.5 9.81936 8.0507 10.37 8.73001 10.37Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.27 16.09C15.9493 16.09 16.5 15.5393 16.5 14.86C16.5 14.1807 15.9493 13.63 15.27 13.63C14.5907 13.63 14.04 14.1807 14.04 14.86C14.04 15.5393 14.5907 16.09 15.27 16.09Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default PercentageSquareBroken;
