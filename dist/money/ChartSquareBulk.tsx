import React from 'react';

export interface ChartSquareBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ChartSquareBulk: React.FC<ChartSquareBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16.19 2H7.82001C4.18001 2 2.01001 4.17 2.01001 7.81V16.18C2.01001 19.82 4.18001 21.99 7.82001 21.99H16.19C19.83 21.99 22 19.82 22 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill={color}/>
<path d="M10.11 11.15H7.46005C6.83005 11.15 6.32007 11.66 6.32007 12.29V17.41H10.11V11.15Z" fill={color}/>
<path opacity="0.4" d="M12.7601 6.59998H11.2401C10.6101 6.59998 10.1001 7.10999 10.1001 7.73999V17.4H13.8901V7.73999C13.8901 7.10999 13.3901 6.59998 12.7601 6.59998Z" fill={color}/>
<path d="M16.5501 12.85H13.9001V17.4H17.6902V13.99C17.6802 13.36 17.1701 12.85 16.5501 12.85Z" fill={color}/>
</svg>

  );
};

export default ChartSquareBulk;
