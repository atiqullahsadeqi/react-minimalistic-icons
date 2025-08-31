import React from 'react';

export interface ProgrammingArrowBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProgrammingArrowBulk: React.FC<ProgrammingArrowBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M5.75 16.11V7.89999C7.04 7.56999 8 6.39999 8 5.00999C8 3.34999 6.66 2.00999 5 2.00999C3.34 2.00999 2 3.34999 2 5.00999C2 6.40999 2.96 7.56999 4.25 7.89999V16.11C2.96 16.44 2 17.61 2 19C2 20.66 3.34 22 5 22C6.66 22 8 20.66 8 19C8 17.6 7.04 16.44 5.75 16.11Z" fill={color}/>
<path d="M19.75 16.11V6.50001C19.75 4.98001 18.52 3.75001 17 3.75001H14.07L15.48 2.58001C15.8 2.31001 15.84 1.84001 15.58 1.52001C15.31 1.20001 14.84 1.16001 14.52 1.42001L11.52 3.92001C11.35 4.06001 11.25 4.27001 11.25 4.50001C11.25 4.73001 11.35 4.93001 11.52 5.08001L14.52 7.58001C14.66 7.70001 14.83 7.75001 15 7.75001C15.21 7.75001 15.43 7.66 15.58 7.48C15.85 7.16 15.8 6.69001 15.48 6.42001L14.07 5.25001H17C17.69 5.25001 18.25 5.81001 18.25 6.50001V16.11C16.96 16.44 16 17.61 16 19C16 20.66 17.34 22 19 22C20.66 22 22 20.66 22 19C22 17.6 21.04 16.44 19.75 16.11Z" fill={color}/>
</svg>

  );
};

export default ProgrammingArrowBulk;
