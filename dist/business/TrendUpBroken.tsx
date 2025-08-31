import React from 'react';

export interface TrendUpBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TrendUpBroken: React.FC<TrendUpBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12.98V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.17 12L10.7 11.3L7.5 14.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 9.5L14.99 11.01L14 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 9.5H16.5V11.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default TrendUpBroken;
