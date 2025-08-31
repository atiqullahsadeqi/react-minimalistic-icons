import React from 'react';

export interface MiniMusicSqaureTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MiniMusicSqaureTwotone: React.FC<MiniMusicSqaureTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H11" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<g opacity="0.4">
<path d="M15.2701 22.0001C16.0654 22.0001 16.7101 21.3554 16.7101 20.5601C16.7101 19.7648 16.0654 19.1201 15.2701 19.1201C14.4748 19.1201 13.8301 19.7648 13.8301 20.5601C13.8301 21.3554 14.4748 22.0001 15.2701 22.0001Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.0002 19.6001V13.9601C22.0002 12.7601 21.2502 12.5901 20.4802 12.8001L17.5902 13.5901C17.0702 13.7301 16.7002 14.1501 16.7002 14.7501V15.7601V16.4401V20.5701" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.5601 21.04C21.3554 21.04 22.0001 20.3953 22.0001 19.6C22.0001 18.8047 21.3554 18.16 20.5601 18.16C19.7648 18.16 19.1201 18.8047 19.1201 19.6C19.1201 20.3953 19.7648 21.04 20.5601 21.04Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.71 16.43L22 14.99" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>

  );
};

export default MiniMusicSqaureTwotone;
