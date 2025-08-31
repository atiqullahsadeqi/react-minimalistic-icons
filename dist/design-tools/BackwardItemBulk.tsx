import React from 'react';

export interface BackwardItemBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BackwardItemBulk: React.FC<BackwardItemBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M21.25 5.14999V7.85001C21.25 9.69001 20.69 10.25 18.85 10.25H16.15C14.31 10.25 13.75 9.69001 13.75 7.85001V5.14999C13.75 3.30999 14.31 2.75 16.15 2.75H18.85C20.69 2.75 21.25 3.30999 21.25 5.14999Z" fill={color}/>
<path opacity="0.4" d="M10.25 16.15V18.85C10.25 20.69 9.69 21.25 7.85 21.25H5.15C3.31 21.25 2.75 20.69 2.75 18.85V16.15C2.75 14.31 3.31 13.75 5.15 13.75H7.85C9.69 13.75 10.25 14.31 10.25 16.15Z" fill={color}/>
<path d="M16.63 11.75V13.62C16.63 15.9 15.9 16.63 13.62 16.63H11.75V16.15C11.75 13.49 10.51 12.25 7.84999 12.25H7.37V10.38C7.37 8.1 8.09999 7.37 10.38 7.37H12.25V7.85001C12.25 10.51 13.49 11.75 16.15 11.75H16.63Z" fill={color}/>
</svg>

  );
};

export default BackwardItemBulk;
