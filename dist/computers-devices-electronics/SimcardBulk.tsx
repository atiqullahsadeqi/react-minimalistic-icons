import React from 'react';

export interface SimcardBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SimcardBulk: React.FC<SimcardBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M19.54 6.54001L16.47 3.47C15.53 2.53 14.26 2.01001 12.93 2.01001H8C5 2.01001 3 4.01001 3 7.01001V17.01C3 20.01 5 22.01 8 22.01H16C19 22.01 21 20.01 21 17.01V10.08C21 8.73999 20.47 7.47001 19.54 6.54001Z" fill={color}/>
<path d="M9.5 18.75C9.31 18.75 9.12 18.68 8.97 18.53L6.97 16.53C6.68 16.24 6.68 15.76 6.97 15.47L8.97 13.47C9.26 13.18 9.74 13.18 10.03 13.47C10.32 13.76 10.32 14.24 10.03 14.53L8.56 16L10.03 17.47C10.32 17.76 10.32 18.24 10.03 18.53C9.88 18.68 9.69 18.75 9.5 18.75Z" fill={color}/>
<path d="M14.5 18.75C14.31 18.75 14.12 18.68 13.97 18.53C13.68 18.24 13.68 17.76 13.97 17.47L15.44 16L13.97 14.53C13.68 14.24 13.68 13.76 13.97 13.47C14.26 13.18 14.74 13.18 15.03 13.47L17.03 15.47C17.32 15.76 17.32 16.24 17.03 16.53L15.03 18.53C14.88 18.68 14.69 18.75 14.5 18.75Z" fill={color}/>
</svg>

  );
};

export default SimcardBulk;
