import React from 'react';

export interface LampLinearProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LampLinear: React.FC<LampLinearProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.78 13.6499V18.5899H3.21997V13.6499C3.21997 8.82993 7.11997 4.92993 11.94 4.92993H12.06C16.88 4.92993 20.78 8.82993 20.78 13.6499Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 2V4.92999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.6501 18.59C15.5201 20.5 13.9301 22 12.0001 22C10.0701 22 8.4801 20.5 8.3501 18.59H15.6501Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default LampLinear;
