import React from 'react';

export interface SendSquareBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SendSquareBulk: React.FC<SendSquareBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16.19 2H7.82002C4.18002 2 2.01001 4.17 2.01001 7.81V16.18C2.01001 19.82 4.18002 21.99 7.82002 21.99H16.19C19.83 21.99 22 19.82 22 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill={color}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 5.97968C11.7626 5.68679 12.2374 5.68679 12.5303 5.97968L15.5303 8.97968C15.8232 9.27257 15.8232 9.74745 15.5303 10.0403C15.2374 10.3332 14.7626 10.3332 14.4697 10.0403L12 7.57067L9.53033 10.0403C9.23744 10.3332 8.76256 10.3332 8.46967 10.0403C8.17678 9.74745 8.17678 9.27257 8.46967 8.97968L11.4697 5.97968Z" fill={color}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.76001C12.4142 5.76001 12.75 6.0958 12.75 6.51001V14.51C12.75 14.9242 12.4142 15.26 12 15.26C11.5858 15.26 11.25 14.9242 11.25 14.51V6.51001C11.25 6.0958 11.5858 5.76001 12 5.76001Z" fill={color}/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.28863 16.2723C5.41992 15.8795 5.84482 15.6674 6.23768 15.7987C9.97339 17.0471 14.0265 17.0471 17.7622 15.7987C18.1551 15.6674 18.58 15.8795 18.7113 16.2723C18.8426 16.6652 18.6305 17.0901 18.2377 17.2214C14.1934 18.5729 9.80653 18.5729 5.76224 17.2214C5.36938 17.0901 5.15734 16.6652 5.28863 16.2723Z" fill={color}/>
</svg>

  );
};

export default SendSquareBulk;
