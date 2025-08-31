import React from 'react';

export interface TagCrossTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TagCrossTwotone: React.FC<TagCrossTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2802 20.25H17.0002C19.7602 20.25 22.0002 18.01 22.0002 15.25V8.75C22.0002 5.99 19.7602 3.75 17.0002 3.75H10.2802C8.87018 3.75 7.53018 4.34 6.58018 5.39L3.05018 9.27C1.64018 10.82 1.64018 13.18 3.05018 14.73L6.58018 18.61C7.53018 19.66 8.87018 20.25 10.2802 20.25Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<g opacity="0.4">
<path d="M16.0005 14.4703L11.0605 9.53027" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path d="M11.0605 14.4703L16.0005 9.53027" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
</g>
</svg>

  );
};

export default TagCrossTwotone;
