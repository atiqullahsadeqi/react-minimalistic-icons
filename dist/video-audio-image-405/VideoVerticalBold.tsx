import React from 'react';

export interface VideoVerticalBoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const VideoVerticalBold: React.FC<VideoVerticalBoldProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.36 7.78003H2V11.25H6.36V7.78003Z" fill={color}/>
<path d="M6.36002 6.29V2.13C4.08002 2.55 2.59002 4.02 2.15002 6.28H6.33002C6.34002 6.28 6.35002 6.29 6.36002 6.29Z" fill={color}/>
<path d="M6.36 16.31V12.75H2V16.28H6.24C6.28 16.28 6.32 16.3 6.36 16.31Z" fill={color}/>
<path d="M21.85 6.28005C21.42 4.09005 20.02 2.65005 17.86 2.18005V6.28005H21.85Z" fill={color}/>
<path d="M16.36 11.25V2.01C16.31 2 16.25 2 16.19 2H7.85999V11.25H16.36Z" fill={color}/>
<path d="M22 12.75H17.86V16.28H22V12.75Z" fill={color}/>
<path d="M17.86 21.82C20 21.35 21.4 19.93 21.84 17.78H17.86V21.82Z" fill={color}/>
<path d="M6.24003 17.78H2.16003C2.62003 20 4.10003 21.45 6.36003 21.87V17.76C6.32003 17.77 6.28003 17.78 6.24003 17.78Z" fill={color}/>
<path d="M22 7.78003H17.86V11.25H22V7.78003Z" fill={color}/>
<path d="M7.85999 12.75V22H16.19C16.25 22 16.31 22 16.36 21.99V12.75H7.85999Z" fill={color}/>
</svg>

  );
};

export default VideoVerticalBold;
