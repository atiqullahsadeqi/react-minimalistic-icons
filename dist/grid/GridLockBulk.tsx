import React from 'react';

export interface GridLockBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const GridLockBulk: React.FC<GridLockBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.53 17.31V17.15C21.53 15.22 20.55 14.25 18.63 14.25C16.71 14.25 15.73 15.23 15.73 17.15V17.31C14.68 17.57 14.26 18.29 14.26 19.73V20.47C14.26 22.32 14.95 23 16.79 23H20.47C22.32 23 23 22.31 23 20.47V19.73C23 18.3 22.58 17.57 21.53 17.31ZM18.62 15.63C19.91 15.63 20.14 16.12 20.14 17.15V17.2H17.1V17.15C17.1 16.12 17.33 15.63 18.62 15.63Z" fill={color}/>
<path d="M8.38995 2.16998V8.62H1.92993V7.94C1.92993 4.33 4.07994 2.17999 7.68994 2.17999H8.38995V2.16998Z" fill={color}/>
<path d="M21.7698 7.92999C21.7698 8.30999 21.4598 8.60999 21.0898 8.60999H15.3398V2.15997H16.0099C19.1899 2.16997 21.7698 4.74999 21.7698 7.92999Z" fill={color}/>
<path d="M8.38995 15.55V21.31C8.38995 21.69 8.07993 21.99 7.70993 21.99H7.69995C4.51995 21.99 1.93994 19.41 1.93994 16.23V15.55H8.38995Z" fill={color}/>
<path opacity="0.4" d="M8.39993 8.60999H1.93994V15.55H8.39993V8.60999Z" fill={color}/>
<path d="M15.3299 8.60999V14.55C15.3299 15.1 14.8799 15.55 14.3299 15.55H8.38989V8.60999H15.3299Z" fill={color}/>
<path opacity="0.4" d="M15.3299 2.16998H8.38989V8.62H15.3299V2.16998Z" fill={color}/>
</svg>

  );
};

export default GridLockBulk;
