import React from 'react';

export interface TagBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TagBroken: React.FC<TagBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.83 15.45C21.69 13.59 21.69 10.57 19.83 8.69999L15.3 4.16999C14.35 3.21999 13.04 2.70999 11.7 2.77999L6.69998 3.01999C4.69998 3.10999 3.10998 4.69999 3.00998 6.68999L2.76998 11.69C2.70998 13.03 3.20998 14.34 4.15998 15.29L8.68997 19.82C10.55 21.68 13.57 21.68 15.44 19.82L16.96 18.3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 9.5C7 10.88 8.12 12 9.5 12C10.88 12 12 10.88 12 9.5C12 8.12 10.88 7 9.5 7" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
</svg>

  );
};

export default TagBroken;
