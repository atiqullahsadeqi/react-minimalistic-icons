import React from 'react';

export interface DiscoverBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DiscoverBulk: React.FC<DiscoverBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M20.9801 3.0201C20.1101 2.1501 18.8801 1.8101 17.6901 2.1101L7.8901 4.5601C6.2401 4.9701 4.9701 6.2501 4.5601 7.8901L2.1101 17.7001C1.8101 18.8901 2.1501 20.1201 3.0201 20.9901C3.6801 21.6401 4.5501 22.0001 5.4501 22.0001C5.7301 22.0001 6.0201 21.9701 6.3001 21.8901L16.1101 19.4401C17.7501 19.0301 19.0301 17.7601 19.4401 16.1101L21.8901 6.3001C22.1901 5.1101 21.8501 3.8801 20.9801 3.0201Z" fill={color}/>
<path d="M12.0001 15.88C14.143 15.88 15.8801 14.1429 15.8801 12C15.8801 9.85713 14.143 8.12 12.0001 8.12C9.85725 8.12 8.12012 9.85713 8.12012 12C8.12012 14.1429 9.85725 15.88 12.0001 15.88Z" fill={color}/>
</svg>

  );
};

export default DiscoverBulk;
