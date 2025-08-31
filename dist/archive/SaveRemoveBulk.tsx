import React from 'react';

export interface SaveRemoveBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SaveRemoveBulk: React.FC<SaveRemoveBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76 19.5199C9.34 19.2899 8.66 19.2899 8.24 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.4 5.87988 5.11 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z" fill={color}/>
<path d="M10.06 12L10.94 11.12C11.23 10.83 11.23 10.35 10.94 10.06C10.65 9.77003 10.17 9.77003 9.88 10.06L9 10.94L8.12 10.06C7.83 9.77003 7.35 9.77003 7.06 10.06C6.77 10.35 6.77 10.83 7.06 11.12L7.94 12L7.06 12.88C6.77 13.17 6.77 13.65 7.06 13.94C7.21 14.09 7.4 14.16 7.59 14.16C7.78 14.16 7.97 14.09 8.12 13.94L9 13.06L9.88 13.94C10.03 14.09 10.22 14.16 10.41 14.16C10.6 14.16 10.79 14.09 10.94 13.94C11.23 13.65 11.23 13.17 10.94 12.88L10.06 12Z" fill={color}/>
<path d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.4 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" fill={color}/>
</svg>

  );
};

export default SaveRemoveBulk;
