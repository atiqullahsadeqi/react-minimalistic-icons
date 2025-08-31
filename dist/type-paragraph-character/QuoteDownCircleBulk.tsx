import React from 'react';

export interface QuoteDownCircleBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const QuoteDownCircleBulk: React.FC<QuoteDownCircleBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill={color}/>
<path d="M8.19 16.78H9.67999C10.77 16.78 11.62 15.93 11.62 14.84V13.35C11.62 12.26 10.77 11.41 9.67999 11.41H7.77C7.85 9.59997 8.27 9.33 9.48 8.62C9.84 8.41 9.95001 7.95003 9.74001 7.59003C9.60001 7.35003 9.35 7.21997 9.09 7.21997C8.96 7.21997 8.83001 7.25001 8.71001 7.32001C6.92001 8.38001 6.25 9.07002 6.25 12.15V14.82C6.25 15.91 7.12 16.78 8.19 16.78Z" fill={color}/>
<path d="M14.32 16.78H15.81C16.9 16.78 17.75 15.93 17.75 14.84V13.35C17.75 12.26 16.9 11.41 15.81 11.41H13.9C13.98 9.59997 14.4 9.33 15.61 8.62C15.97 8.41 16.08 7.95003 15.87 7.59003C15.73 7.35003 15.48 7.21997 15.22 7.21997C15.09 7.21997 14.96 7.25001 14.84 7.32001C13.05 8.38001 12.38 9.07002 12.38 12.15V14.82C12.39 15.91 13.26 16.78 14.32 16.78Z" fill={color}/>
</svg>

  );
};

export default QuoteDownCircleBulk;
