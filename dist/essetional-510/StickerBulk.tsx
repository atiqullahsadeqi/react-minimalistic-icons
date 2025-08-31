import React from 'react';

export interface StickerBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const StickerBulk: React.FC<StickerBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M21.93 12.86C21.91 13.05 21.88 13.23 21.83 13.41C20.79 12.53 19.44 12 17.97 12C14.66 12 11.97 14.69 11.97 18C11.97 19.47 12.5 20.82 13.38 21.86C13.2 21.91 13.02 21.94 12.83 21.96C11.98 22.04 11.11 22 10.21 21.85C6.09999 21.15 2.78999 17.82 2.10999 13.7C0.97999 6.85002 6.81999 1.01002 13.67 2.14002C17.79 2.82002 21.12 6.13002 21.82 10.24C21.97 11.14 22.01 12.01 21.93 12.86Z" fill={color}/>
<path d="M21.8302 13.41C21.6902 13.9 21.4302 14.34 21.0602 14.71L14.6802 21.09C14.3102 21.46 13.8702 21.72 13.3802 21.86C12.5002 20.82 11.9702 19.47 11.9702 18C11.9702 14.69 14.6602 12 17.9702 12C19.4402 12 20.7902 12.53 21.8302 13.41Z" fill={color}/>
</svg>

  );
};

export default StickerBulk;
