import React from 'react';

export interface RepeateMusicBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const RepeateMusicBroken: React.FC<RepeateMusicBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 21.0001L7.56 18.66L15.51 18.6801C19.08 18.6801 22.01 15.75 22.01 12.16C22.01 10.37 21.28 8.74006 20.1 7.56006" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12H15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.56 4.97998C4.99 4.97998 2.06 7.91 2.06 11.5C2.06 13.29 2.79 14.92 3.97 16.1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.06 2.65991L16.5 4.99994L12.99 4.98993" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default RepeateMusicBroken;
