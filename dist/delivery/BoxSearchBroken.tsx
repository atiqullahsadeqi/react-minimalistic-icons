import React from 'react';

export interface BoxSearchBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BoxSearchBroken: React.FC<BoxSearchBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.17017 7.43994L12.0002 12.5499L20.7701 7.46991" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.0002 21.6099V12.5399" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.0701 21.5201C13.5001 21.8401 12.7501 22.0001 12.0001 22.0001C11.2501 22.0001 10.5001 21.8401 9.93011 21.5201L4.59012 18.5601C3.38012 17.8901 2.39014 16.2101 2.39014 14.8301" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.6101 12.83V9.17C21.6101 7.79 20.6201 6.11002 19.4101 5.44002L14.0701 2.48C12.9301 1.84 11.0701 1.84 9.93011 2.48L4.59012 5.44002C3.38012 6.11002 2.39014 7.79 2.39014 9.17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.2 21.4C20.9673 21.4 22.4 19.9673 22.4 18.2C22.4 16.4327 20.9673 15 19.2 15C17.4327 15 16 16.4327 16 18.2C16 19.9673 17.4327 21.4 19.2 21.4Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23 22L22 21" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default BoxSearchBroken;
