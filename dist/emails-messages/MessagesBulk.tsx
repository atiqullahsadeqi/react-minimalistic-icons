import React from 'react';

export interface MessagesBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MessagesBulk: React.FC<MessagesBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M17 9C17 12.87 13.64 16 9.5 16L8.57001 17.12L8.02 17.78C7.55 18.34 6.65 18.22 6.34 17.55L5 14.6C3.18 13.32 2 11.29 2 9C2 5.13 5.36 2 9.5 2C12.52 2 15.13 3.67001 16.3 6.07001C16.75 6.96001 17 7.95 17 9Z" fill={color}/>
<path d="M21.9998 12.86C21.9998 15.15 20.8198 17.18 18.9998 18.46L17.6598 21.41C17.3498 22.08 16.4498 22.21 15.9798 21.64L14.4998 19.86C12.0798 19.86 9.91982 18.79 8.56982 17.12L9.49982 16C13.6398 16 16.9998 12.87 16.9998 9C16.9998 7.95 16.7498 6.96001 16.2998 6.07001C19.5698 6.82001 21.9998 9.57999 21.9998 12.86Z" fill={color}/>
<path d="M12 9.75H7C6.59 9.75 6.25 9.41 6.25 9C6.25 8.59 6.59 8.25 7 8.25H12C12.41 8.25 12.75 8.59 12.75 9C12.75 9.41 12.41 9.75 12 9.75Z" fill={color}/>
</svg>

  );
};

export default MessagesBulk;
