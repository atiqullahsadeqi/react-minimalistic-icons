import React from 'react';

export interface ProfileAddBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProfileAddBulk: React.FC<ProfileAddBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill={color}/>
<path opacity="0.4" d="M17.08 14.15C14.29 12.29 9.73996 12.29 6.92996 14.15C5.65996 15 4.95996 16.15 4.95996 17.38C4.95996 18.61 5.65996 19.75 6.91996 20.59C8.31996 21.53 10.16 22 12 22C13.84 22 15.68 21.53 17.08 20.59C18.34 19.74 19.04 18.6 19.04 17.36C19.03 16.13 18.34 14.99 17.08 14.15Z" fill={color}/>
<path d="M14 16.63H12.75V15.38C12.75 14.97 12.41 14.63 12 14.63C11.59 14.63 11.25 14.97 11.25 15.38V16.63H10C9.59 16.63 9.25 16.97 9.25 17.38C9.25 17.79 9.59 18.13 10 18.13H11.25V19.38C11.25 19.79 11.59 20.13 12 20.13C12.41 20.13 12.75 19.79 12.75 19.38V18.13H14C14.41 18.13 14.75 17.79 14.75 17.38C14.75 16.97 14.41 16.63 14 16.63Z" fill={color}/>
</svg>

  );
};

export default ProfileAddBulk;
