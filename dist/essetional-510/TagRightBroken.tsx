import React from 'react';

export interface TagRightBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TagRightBroken: React.FC<TagRightBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.21997 3.09998C2.46997 3.09998 1.41002 5.01998 2.33002 6.50998L5.09998 10.94C5.46998 11.53 5.46998 12.49 5.09998 13.08L2.33002 17.51C1.40002 18.99 2.46997 20.92 4.21997 20.92H14.67C15.28 20.92 16.08 20.52 16.45 20.03L21.63 13.13C22.09 12.52 22.13 11.49 21.73 10.85L17.55 4.16998C17.19 3.58998 16.34 3.11998 15.66 3.11998H8.65998" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default TagRightBroken;
