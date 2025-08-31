import React from 'react';

export interface WifiBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const WifiBroken: React.FC<WifiBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3101 10.21C17.2801 10.61 18.2101 11.15 19.0901 11.83" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.90991 11.84C7.34991 9.95003 10.2099 9.14003 13.0099 9.40003" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.36011 5.28001C12.9901 4.18001 17.9101 5.2 22.0001 8.36" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 8.36002C2.94 7.64002 3.91999 7.02002 4.92999 6.52002" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.79004 15.49C9.94004 13.05 14.05 13.05 17.2 15.49" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.3999 19.15C10.9799 17.93 13.0299 17.93 14.6099 19.15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default WifiBroken;
