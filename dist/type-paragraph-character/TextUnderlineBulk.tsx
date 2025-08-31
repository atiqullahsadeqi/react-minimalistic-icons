import React from 'react';

export interface TextUnderlineBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TextUnderlineBulk: React.FC<TextUnderlineBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M22 7.81V16.19C22 19.83 19.83 22 16.19 22H7.81C7.61 22 7.41 21.99 7.22 21.98C5.99 21.9 4.95 21.55 4.13 20.95C3.71 20.66 3.34 20.29 3.05 19.87C2.36 18.92 2 17.68 2 16.19V7.81C2 4.37 3.94 2.24 7.22 2.03C7.41 2.01 7.61 2 7.81 2H16.19C17.68 2 18.92 2.36 19.87 3.05C20.29 3.34 20.66 3.71 20.95 4.13C21.64 5.08 22 6.32 22 7.81Z" fill={color}/>
<path d="M16.83 18.96H7.17004C6.76004 18.96 6.42004 18.62 6.42004 18.21C6.42004 17.8 6.76004 17.46 7.17004 17.46H16.84C17.25 17.46 17.59 17.8 17.59 18.21C17.59 18.62 17.25 18.96 16.83 18.96Z" fill={color}/>
<path d="M12 16.2C8.92004 16.2 6.42004 13.7 6.42004 10.62V5.78998C6.42004 5.37998 6.76004 5.03998 7.17004 5.03998C7.58004 5.03998 7.92004 5.37998 7.92004 5.78998V10.62C7.92004 12.87 9.75004 14.7 12 14.7C14.25 14.7 16.08 12.87 16.08 10.62V5.78998C16.08 5.37998 16.42 5.03998 16.83 5.03998C17.24 5.03998 17.58 5.37998 17.58 5.78998V10.62C17.58 13.7 15.08 16.2 12 16.2Z" fill={color}/>
</svg>

  );
};

export default TextUnderlineBulk;
