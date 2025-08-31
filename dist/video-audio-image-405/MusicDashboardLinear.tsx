import React from 'react';

export interface MusicDashboardLinearProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MusicDashboardLinear: React.FC<MusicDashboardLinearProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 2.5V21.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.47 16.8C12.2929 16.8 12.96 16.133 12.96 15.3101C12.96 14.4872 12.2929 13.8201 11.47 13.8201C10.6471 13.8201 9.98001 14.4872 9.98001 15.3101C9.98001 16.133 10.6471 16.8 11.47 16.8Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.43 14.31V8.48002C18.43 7.24002 17.65 7.07007 16.86 7.28007L13.88 8.09006C13.34 8.24006 12.96 8.67001 12.96 9.29001V10.3301V11.0301V15.3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.93 15.8C17.7529 15.8 18.42 15.133 18.42 14.3101C18.42 13.4872 17.7529 12.8201 16.93 12.8201C16.1071 12.8201 15.44 13.4872 15.44 14.3101C15.44 15.133 16.1071 15.8 16.93 15.8Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.96 11.04L18.43 9.55005" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default MusicDashboardLinear;
