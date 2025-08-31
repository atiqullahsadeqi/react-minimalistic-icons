import React from 'react';

export interface SubtitleOutlineProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SubtitleOutline: React.FC<SubtitleOutlineProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill={color}/>
<path d="M17.5 17.83H15.65C15.24 17.83 14.9 17.49 14.9 17.08C14.9 16.67 15.24 16.33 15.65 16.33H17.5C17.91 16.33 18.25 16.67 18.25 17.08C18.25 17.49 17.91 17.83 17.5 17.83Z" fill={color}/>
<path d="M12.97 17.83H6.5C6.09 17.83 5.75 17.49 5.75 17.08C5.75 16.67 6.09 16.33 6.5 16.33H12.97C13.38 16.33 13.72 16.67 13.72 17.08C13.72 17.49 13.39 17.83 12.97 17.83Z" fill={color}/>
<path d="M17.5 14.0699H11.97C11.56 14.0699 11.22 13.7299 11.22 13.3199C11.22 12.9099 11.56 12.5699 11.97 12.5699H17.5C17.91 12.5699 18.25 12.9099 18.25 13.3199C18.25 13.7299 17.91 14.0699 17.5 14.0699Z" fill={color}/>
<path d="M9.27 14.0699H6.5C6.09 14.0699 5.75 13.7299 5.75 13.3199C5.75 12.9099 6.09 12.5699 6.5 12.5699H9.27C9.68 12.5699 10.02 12.9099 10.02 13.3199C10.02 13.7299 9.68 14.0699 9.27 14.0699Z" fill={color}/>
</svg>

  );
};

export default SubtitleOutline;
