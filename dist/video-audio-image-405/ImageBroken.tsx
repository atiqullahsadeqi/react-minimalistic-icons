import React from 'react';

export interface ImageBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ImageBroken: React.FC<ImageBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3298 12.8399C11.3698 14.5699 9.57978 14.7199 8.33978 13.1699L8.11978 12.8899C6.82978 11.2699 5.00978 11.4699 4.07978 13.3199L2.35978 16.7699C1.15978 19.1699 2.90978 21.9999 5.58978 21.9999H18.3498C20.9398 21.9999 22.6898 19.3499 21.6698 16.9599L18.5398 9.64988C17.4798 7.16988 15.5298 7.06988 14.2198 9.42988" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.96978 5C9.96978 6.66 8.62978 8 6.96978 8C5.30978 8 3.96978 6.66 3.96978 5C3.96978 3.34 5.30978 2 6.96978 2C7.32978 2 7.66978 2.06 7.97978 2.18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default ImageBroken;
