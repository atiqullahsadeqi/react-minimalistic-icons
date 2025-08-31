import React from 'react';

export interface QuoteDownBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const QuoteDownBulk: React.FC<QuoteDownBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.91 12.37H20.6C20.52 17.04 19.6 17.81 16.73 19.51C16.4 19.71 16.29 20.13 16.49 20.47C16.69 20.8 17.11 20.91 17.45 20.71C20.83 18.71 22.01 17.49 22.01 11.67V6.28003C22.01 4.57003 20.62 3.19 18.92 3.19H15.92C14.16 3.19 12.83 4.52003 12.83 6.28003V9.28003C12.82 11.04 14.15 12.37 15.91 12.37Z" fill={color}/>
<path opacity="0.4" d="M5.08994 12.37H9.77994C9.69994 17.04 8.77994 17.81 5.90994 19.51C5.57994 19.71 5.46994 20.13 5.66994 20.47C5.86994 20.8 6.28994 20.91 6.62994 20.71C10.0099 18.71 11.1899 17.49 11.1899 11.67V6.28003C11.1899 4.57003 9.79994 3.19 8.09994 3.19H5.09994C3.33994 3.19 2.00994 4.52003 2.00994 6.28003V9.28003C1.99994 11.04 3.32994 12.37 5.08994 12.37Z" fill={color}/>
</svg>

  );
};

export default QuoteDownBulk;
