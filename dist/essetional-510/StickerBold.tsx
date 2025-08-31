import React from 'react';

export interface StickerBoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const StickerBold: React.FC<StickerBoldProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.96 11.66C20.77 10.91 19.39 10.5 17.97 10.5C13.83 10.5 10.47 13.86 10.47 18C10.47 19.42 10.87 20.79 11.62 21.98C11.16 21.97 10.69 21.92 10.21 21.85C6.09999 21.15 2.78999 17.82 2.10999 13.7C0.97999 6.85002 6.81999 1.01002 13.67 2.14002C17.79 2.82002 21.12 6.13002 21.82 10.24C21.9 10.72 21.95 11.2 21.96 11.66Z" fill={color}/>
<path d="M13.3802 21.86C12.5002 20.82 11.9702 19.47 11.9702 18C11.9702 14.69 14.6602 12 17.9702 12C19.4402 12 20.7902 12.53 21.8302 13.41" fill={color}/>
</svg>

  );
};

export default StickerBold;
