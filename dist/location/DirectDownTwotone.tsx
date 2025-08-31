import React from 'react';

export interface DirectDownTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DirectDownTwotone: React.FC<DirectDownTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.1698 19.29L3.0698 7.70002C1.6198 4.95002 4.5498 1.96002 7.3298 3.35002L10.5698 4.97002C11.4698 5.42002 12.5298 5.42002 13.4298 4.97002L16.6698 3.35002C19.4498 1.96002 22.3698 4.95002 20.9298 7.70002L14.8298 19.29C13.6298 21.57 10.3698 21.57 9.1698 19.29Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default DirectDownTwotone;
