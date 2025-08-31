import React from 'react';

export interface SecurityUserBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SecurityUserBroken: React.FC<SecurityUserBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.8699 18.0001C19.8199 17.2901 20.5999 15.7401 20.5999 14.5601V7.13008C20.5999 5.90008 19.6599 4.54006 18.5099 4.11006L13.5199 2.24007C12.6899 1.93007 11.3299 1.93007 10.4999 2.24007L5.50992 4.11006C4.35992 4.54006 3.41992 5.90008 3.41992 7.13008V14.5601C3.41992 15.7401 4.1999 17.2901 5.1499 18.0001L9.44992 21.2101C10.8599 22.2701 13.1799 22.2701 14.5899 21.2101L15.3299 20.6501" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.0002 10.9199C11.9602 10.9199 11.9102 10.9199 11.8702 10.9199C10.9302 10.8899 10.1802 10.1099 10.1802 9.15991C10.1802 8.18991 10.9702 7.3999 11.9402 7.3999C12.9102 7.3999 13.7002 8.18991 13.7002 9.15991C13.6902 10.1199 12.9402 10.8899 12.0002 10.9199Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.01 13.7199C9.05004 14.3599 9.05004 15.4099 10.01 16.0498C11.1 16.7799 12.89 16.7799 13.98 16.0498C14.94 15.4099 14.94 14.3599 13.98 13.7199C12.9 12.9899 11.11 12.9899 10.01 13.7199Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default SecurityUserBroken;
