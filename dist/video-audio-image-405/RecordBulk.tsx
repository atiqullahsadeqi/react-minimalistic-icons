import React from 'react';

export interface RecordBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const RecordBulk: React.FC<RecordBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.12 8.13L18.7 8.98L4.76 17.34C3.66 15.85 3 14 3 12C3 7.03 7.03 3 12 3C15.58 3 18.68 5.1 20.12 8.13Z" fill={color}/>
<path opacity="0.4" d="M21 12.0001C21 16.9701 16.97 21.0001 12 21.0001C9.53001 21.0001 7.30001 20.0101 5.67001 18.3901L5.76001 18.3401L19.7 9.98005L20.63 9.43005C20.87 10.2501 21 11.1101 21 12.0001Z" fill={color}/>
</svg>

  );
};

export default RecordBulk;
