import React from 'react';

export interface EraserBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const EraserBulk: React.FC<EraserBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.03 22H13.99C13.57 22 13.24 21.66 13.24 21.25C13.24 20.84 13.58 20.5 13.99 20.5H21.03C21.45 20.5 21.78 20.84 21.78 21.25C21.78 21.66 21.45 22 21.03 22Z" fill={color}/>
<path opacity="0.4" d="M15.41 16.34L10.66 21.09C9.54997 22.2 7.77002 22.26 6.59002 21.27C6.52002 21.21 6.46002 21.15 6.40002 21.09L5.53003 20.22L3.73999 18.43L2.88 17.57C2.81 17.5 2.75 17.43 2.69 17.36C1.71 16.18 1.78 14.42 2.88 13.32L6.57 9.63999L7.63 8.57999L15.41 16.34Z" fill={color}/>
<path d="M21.1199 10.64L15.4099 16.34L7.62988 8.58L13.3399 2.88C14.5099 1.71 16.4299 1.71 17.5999 2.88L21.1199 6.39C22.2899 7.56 22.2899 9.47 21.1199 10.64Z" fill={color}/>
</svg>

  );
};

export default EraserBulk;
