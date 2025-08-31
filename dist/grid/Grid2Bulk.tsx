import React from 'react';

export interface Grid2BulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Grid2Bulk: React.FC<Grid2BulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M2 12H12V22H7.81C4.17 22 2 19.83 2 16.19V12Z" fill={color}/>
<path opacity="0.4" d="M22 7.81V12H12V2H16.19C19.83 2 22 4.17 22 7.81Z" fill={color}/>
<path d="M12 2V12H2V7.81C2 4.17 4.17 2 7.81 2H12Z" fill={color}/>
<path d="M22 12V16.19C22 19.83 19.83 22 16.19 22H12V12H22Z" fill={color}/>
</svg>

  );
};

export default Grid2Bulk;
