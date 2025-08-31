import React from 'react';

export interface StatusUpLinearProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const StatusUpLinear: React.FC<StatusUpLinearProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.88 18.1501V16.0801" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path d="M12 18.15V14.01" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path d="M17.12 18.1499V11.9299" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path d="M17.12 5.8501L16.66 6.3901C14.11 9.3701 10.69 11.4801 6.88 12.4301" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path d="M14.1899 5.8501H17.1199V8.7701" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default StatusUpLinear;
