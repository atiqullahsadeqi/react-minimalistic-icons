import React from 'react';

export interface VideoCircleOutlineProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const VideoCircleOutline: React.FC<VideoCircleOutlineProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.76 16.3701C10.34 16.3701 9.95003 16.27 9.60003 16.07C8.80003 15.61 8.34003 14.67 8.34003 13.48V10.52C8.34003 9.34005 8.80003 8.39005 9.60003 7.93005C10.4 7.47005 11.44 7.54005 12.47 8.14005L15.04 9.62005C16.06 10.21 16.65 11.08 16.65 12C16.65 12.92 16.06 13.79 15.04 14.38L12.47 15.86C11.89 16.2 11.3 16.3701 10.76 16.3701ZM10.77 9.13005C10.61 9.13005 10.47 9.16005 10.36 9.23005C10.04 9.42005 9.85003 9.89005 9.85003 10.52V13.48C9.85003 14.11 10.03 14.58 10.36 14.77C10.68 14.96 11.18 14.88 11.73 14.56L14.3 13.08C14.85 12.76 15.16 12.37 15.16 12C15.16 11.63 14.85 11.23 14.3 10.92L11.73 9.44005C11.37 9.23005 11.04 9.13005 10.77 9.13005Z" fill={color}/>
<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill={color}/>
</svg>

  );
};

export default VideoCircleOutline;
