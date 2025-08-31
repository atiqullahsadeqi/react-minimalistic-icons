import React from 'react';

export interface TreeBoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TreeBold: React.FC<TreeBoldProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1701 10.0599H7.83007C6.65007 10.0599 6.24007 9.26995 6.93007 8.30995L11.1001 2.46995C11.5901 1.76995 12.4101 1.76995 12.9001 2.46995L17.0701 8.30995C17.7601 9.26995 17.3501 10.0599 16.1701 10.0599Z" fill={color}/>
<path d="M17.5901 18.0001H6.41009C4.83009 18.0001 4.29009 16.9501 5.22009 15.6701L9.21009 10.0601H14.7901L18.7801 15.6701C19.7101 16.9501 19.1701 18.0001 17.5901 18.0001Z" fill={color}/>
<path d="M12.75 18V22C12.75 22.41 12.41 22.75 12 22.75C11.59 22.75 11.25 22.41 11.25 22V18H12.75Z" fill={color}/>
</svg>

  );
};

export default TreeBold;
