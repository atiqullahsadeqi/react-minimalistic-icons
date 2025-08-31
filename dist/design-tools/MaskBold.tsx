import React from 'react';

export interface MaskBoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MaskBold: React.FC<MaskBoldProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.65 4.59C16.89 2.99 14.56 2.03 12 2.03C6.50003 2.03 2.03003 6.5 2.03003 12C2.03003 17.5 6.50003 21.97 12 21.97C14.56 21.97 16.89 21.01 18.65 19.41C20.69 17.6 21.97 14.94 21.97 12C21.97 9.06 20.69 6.4 18.65 4.59ZM11.97 16.39C11.95 18.04 10.72 18.44 9.57003 17.98C7.20003 17.03 5.53003 14.71 5.53003 12C5.53003 9.29 7.20003 6.97 9.57003 6.01C10.72 5.55 11.95 5.96 11.97 7.6V16.39Z" fill={color}/>
</svg>

  );
};

export default MaskBold;
