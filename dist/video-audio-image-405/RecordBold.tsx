import React from 'react';

export interface RecordBoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const RecordBold: React.FC<RecordBoldProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.63 7.24003C19.93 7.71003 19.77 8.34003 19.29 8.63003L18.7 8.98003L5.59 16.84C5.11 17.13 4.48 16.97 4.2 16.48C3.2 14.74 2.75 12.62 3.14 10.4C3.8 6.63003 6.9 3.63003 10.69 3.09003C14.44 2.56003 17.83 4.36003 19.63 7.24003Z" fill={color}/>
<path d="M20.89 13.4301C20.21 17.6801 16.45 20.9301 12.14 21.0001C10.24 21.0301 8.48 20.4801 7.02 19.4901C6.4 19.0801 6.42 18.1601 7.06 17.7801L19.47 10.4901C20.12 10.1101 20.92 10.5501 20.98 11.3001C21.03 12.0001 21 12.7101 20.89 13.4301Z" fill={color}/>
</svg>

  );
};

export default RecordBold;
