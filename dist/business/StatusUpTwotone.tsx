import React from 'react';

export interface StatusUpTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const StatusUpTwotone: React.FC<StatusUpTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M6.88 18.1501V16.0801" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path opacity="0.4" d="M12 18.15V14.01" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path opacity="0.4" d="M17.12 18.1499V11.9299" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<g opacity="0.4">
<path d="M17.1199 5.84961L16.6599 6.38961C14.1099 9.36961 10.6899 11.4796 6.87988 12.4296" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path d="M14.1904 5.84961H17.1204V8.76961" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default StatusUpTwotone;
