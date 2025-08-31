import React from 'react';

export interface VolumeLowBoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const VolumeLowBold: React.FC<VolumeLowBoldProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.33 16.75C19.17 16.75 19.02 16.7 18.88 16.6C18.55 16.35 18.48 15.88 18.73 15.55C20.3 13.46 20.3 10.54 18.73 8.45003C18.48 8.12003 18.55 7.65003 18.88 7.40003C19.21 7.15003 19.68 7.22003 19.93 7.55003C21.9 10.17 21.9 13.83 19.93 16.45C19.79 16.65 19.56 16.75 19.33 16.75Z" fill={color}/>
<path d="M15.35 3.77997C14.23 3.15997 12.8 3.31997 11.34 4.22997L8.41996 6.05997C8.21996 6.17997 7.98996 6.24997 7.75996 6.24997H6.82996H6.32996C3.90996 6.24997 2.57996 7.57997 2.57996 9.99997V14C2.57996 16.42 3.90996 17.75 6.32996 17.75H6.82996H7.75996C7.98996 17.75 8.21996 17.82 8.41996 17.94L11.34 19.77C12.22 20.32 13.08 20.59 13.88 20.59C14.4 20.59 14.9 20.47 15.35 20.22C16.46 19.6 17.08 18.31 17.08 16.59V7.40997C17.08 5.68997 16.46 4.39997 15.35 3.77997Z" fill={color}/>
</svg>

  );
};

export default VolumeLowBold;
