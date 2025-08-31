import React from 'react';

export interface Flag2BoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Flag2Bold: React.FC<Flag2BoldProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2 7.16L7.19995 3.7V2.75C7.19995 2.34 6.85995 2 6.44995 2C6.03995 2 5.69995 2.34 5.69995 2.75V21.25C5.69995 21.66 6.03995 22 6.44995 22C6.85995 22 7.19995 21.66 7.19995 21.25V17.29L15.42 13.23C15.42 13.23 15.42 13.23 15.43 13.23C17.09 12.37 17.98 11.26 17.93 10.09C17.88 8.92 16.91 7.88 15.2 7.16Z" fill={color}/>
</svg>

  );
};

export default Flag2Bold;
