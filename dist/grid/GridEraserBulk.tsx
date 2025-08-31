import React from 'react';

export interface GridEraserBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const GridEraserBulk: React.FC<GridEraserBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.38995 2.16998V8.62H1.92993V7.94C1.92993 4.33 4.07994 2.17999 7.68994 2.17999H8.38995V2.16998Z" fill={color}/>
<path d="M21.7698 7.92999C21.7698 8.30999 21.4598 8.60999 21.0898 8.60999H15.3398V2.15997H16.0099C19.1899 2.16997 21.7698 4.74999 21.7698 7.92999Z" fill={color}/>
<path d="M8.38995 15.55V21.31C8.38995 21.69 8.07993 21.99 7.70993 21.99H7.69995C4.51995 21.99 1.93994 19.41 1.93994 16.23V15.55H8.38995Z" fill={color}/>
<path opacity="0.4" d="M8.39993 8.60999H1.93994V15.55H8.39993V8.60999Z" fill={color}/>
<path d="M15.3299 8.60999V14.87C15.3299 15.25 15.0199 15.55 14.6499 15.55H8.38989V8.60999H15.3299Z" fill={color}/>
<path opacity="0.4" d="M15.3299 2.16998H8.38989V8.62H15.3299V2.16998Z" fill={color}/>
<path opacity="0.4" d="M19.8 20.7L17.9 22.61C17.38 23.13 16.52 23.13 15.98 22.61L14.4 21.02C13.88 20.49 13.88 19.64 14.4 19.1L16.31 17.21L19.8 20.7Z" fill={color}/>
<path d="M22.61 17.9L19.8 20.7L16.3101 17.21L19.11 14.39C19.64 13.87 20.5001 13.87 21.0301 14.39L22.61 15.98C23.13 16.51 23.13 17.38 22.61 17.9Z" fill={color}/>
</svg>

  );
};

export default GridEraserBulk;
