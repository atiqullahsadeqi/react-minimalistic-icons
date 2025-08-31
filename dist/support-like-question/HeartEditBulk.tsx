import React from 'react';

export interface HeartEditBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const HeartEditBulk: React.FC<HeartEditBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16.44 3.1001C14.63 3.1001 13.01 3.98008 12 5.33008C10.99 3.98008 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.60009 2 8.69009C2 9.88009 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.88009 22 8.69009C22 5.60009 19.51 3.1001 16.44 3.1001Z" fill={color}/>
<path d="M14.8402 9.16C13.9402 8.26 13.2302 8.55 12.6202 9.16L9.08019 12.7C8.94019 12.84 8.81019 13.1 8.78019 13.29L8.59019 14.64C8.52019 15.13 8.86019 15.47 9.35019 15.4L10.7002 15.21C10.8902 15.18 11.1602 15.05 11.2902 14.91L14.8302 11.37C15.4502 10.77 15.7402 10.06 14.8402 9.16Z" fill={color}/>
</svg>

  );
};

export default HeartEditBulk;
