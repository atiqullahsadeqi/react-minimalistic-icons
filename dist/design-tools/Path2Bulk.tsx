import React from 'react';

export interface Path2BulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Path2Bulk: React.FC<Path2BulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.15 22H9.86996C8.33996 22 7.19996 20.76 7.48996 19.43L8.18996 16.35H15.83L16.53 19.43C16.85 20.84 15.78 22 14.15 22Z" fill={color}/>
<path opacity="0.4" d="M18.77 13.74L15.83 16.35H8.19001L5.25001 13.74C3.54001 12.34 3.54001 11.26 4.84001 9.61L10.03 3.04C10.39 2.59 10.81 2.28 11.26 2.12C11.75 1.95 12.27 1.95 12.76 2.12C13.21 2.28 13.63 2.59 13.99 3.04L19.18 9.61C20.48 11.26 20.42 12.28 18.77 13.74Z" fill={color}/>
<path d="M12.76 2.12V6.97C12.76 7.38 12.42 7.72 12.01 7.72C11.6 7.72 11.26 7.38 11.26 6.97V2.12C11.75 1.95 12.27 1.95 12.76 2.12Z" fill={color}/>
</svg>

  );
};

export default Path2Bulk;
