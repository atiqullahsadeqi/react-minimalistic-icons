import React from 'react';

export interface QuoteDownBoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const QuoteDownBold: React.FC<QuoteDownBoldProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.91 12.37H20.6C20.52 17.04 19.6 17.81 16.73 19.51C16.4 19.71 16.29 20.13 16.49 20.47C16.69 20.8 17.11 20.91 17.45 20.71C20.83 18.71 22.01 17.49 22.01 11.67V6.28C22.01 4.57 20.62 3.19 18.92 3.19H15.92C14.16 3.19 12.83 4.52 12.83 6.28V9.28C12.82 11.04 14.15 12.37 15.91 12.37Z" fill={color}/>
<path d="M5.09 12.37H9.78C9.7 17.04 8.78 17.81 5.91 19.51C5.58 19.71 5.47 20.13 5.67 20.47C5.87 20.8 6.29 20.91 6.63 20.71C10.01 18.71 11.19 17.49 11.19 11.67V6.28C11.19 4.57 9.8 3.19 8.1 3.19H5.1C3.33 3.19 2 4.52 2 6.28V9.28C2 11.04 3.33 12.37 5.09 12.37Z" fill={color}/>
</svg>

  );
};

export default QuoteDownBold;
