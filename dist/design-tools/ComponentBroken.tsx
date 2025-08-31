import React from 'react';

export interface ComponentBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ComponentBroken: React.FC<ComponentBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.74 18.24L3.06001 14.56C1.66001 13.16 1.66001 10.86 3.06001 9.45002L9.45002 3.06001C10.85 1.66001 13.15 1.66001 14.56 3.06001L20.95 9.45002C22.35 10.85 22.35 13.15 20.95 14.56L14.56 20.95C13.16 22.35 10.86 22.35 9.45002 20.95" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default ComponentBroken;
