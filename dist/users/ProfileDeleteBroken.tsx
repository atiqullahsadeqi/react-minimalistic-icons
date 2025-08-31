import React from 'react';

export interface ProfileDeleteBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProfileDeleteBroken: React.FC<ProfileDeleteBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.4101 18.09L15.5901 20.91" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.4101 20.91L15.5901 18.09" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21.8101C10.18 21.8101 8.37005 21.3501 6.99005 20.4301C4.57005 18.8101 4.57005 16.1701 6.99005 14.5601C9.74005 12.7201 14.25 12.7201 17 14.5601" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.6801 3.96C16.1601 4.67 16.4401 5.52 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default ProfileDeleteBroken;
