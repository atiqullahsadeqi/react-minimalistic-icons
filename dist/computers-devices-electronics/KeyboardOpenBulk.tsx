import React from 'react';

export interface KeyboardOpenBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const KeyboardOpenBulk: React.FC<KeyboardOpenBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 22.75H7C6.59 22.75 6.25 22.41 6.25 22C6.25 21.59 6.59 21.25 7 21.25H17C17.41 21.25 17.75 21.59 17.75 22C17.75 22.41 17.41 22.75 17 22.75Z" fill={color}/>
<path opacity="0.4" d="M18 19H6C3.79 19 2 17.21 2 15V6C2 3.79 3.79 2 6 2H18C20.21 2 22 3.79 22 6V15C22 17.21 20.21 19 18 19Z" fill={color}/>
<path d="M17.26 9.07001H13.58C13.17 9.07001 12.83 8.73001 12.83 8.32001C12.83 7.91001 13.17 7.57001 13.58 7.57001H17.26C17.67 7.57001 18.01 7.91001 18.01 8.32001C18.01 8.73001 17.68 9.07001 17.26 9.07001Z" fill={color}/>
<path d="M10 9.32001C9.45 9.32001 9 8.87001 9 8.32001C9 7.77001 9.44 7.32001 10 7.32001C10.55 7.32001 11 7.77001 11 8.32001C11 8.87001 10.56 9.32001 10 9.32001Z" fill={color}/>
<path d="M6.85001 9.32001C6.30001 9.32001 5.85001 8.87001 5.85001 8.32001C5.85001 7.77001 6.29001 7.32001 6.85001 7.32001H6.86C7.41 7.32001 7.86 7.77001 7.86 8.32001C7.86 8.87001 7.40001 9.32001 6.85001 9.32001Z" fill={color}/>
<path d="M17.26 14.86H6.75C6.34 14.86 5.99001 14.52 5.99001 14.11C5.99001 13.7 6.32 13.36 6.73 13.36H17.26C17.67 13.36 18.01 13.7 18.01 14.11C18.01 14.52 17.68 14.86 17.26 14.86Z" fill={color}/>
</svg>

  );
};

export default KeyboardOpenBulk;
