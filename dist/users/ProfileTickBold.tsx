import React from 'react';

export interface ProfileTickBoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProfileTickBold: React.FC<ProfileTickBoldProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill={color}/>
<path d="M17.08 14.16C14.29 12.3 9.73996 12.3 6.92996 14.16C5.65996 15 4.95996 16.15 4.95996 17.38C4.95996 18.61 5.65996 19.75 6.91996 20.59C8.31996 21.53 10.16 22 12 22C13.84 22 15.68 21.53 17.08 20.59C18.34 19.74 19.04 18.6 19.04 17.36C19.03 16.14 18.34 14.99 17.08 14.16ZM14.33 16.56L11.81 19.08C11.69 19.2 11.53 19.26 11.37 19.26C11.21 19.26 11.05 19.19 10.93 19.08L9.66996 17.82C9.42996 17.58 9.42996 17.18 9.66996 16.94C9.90996 16.7 10.31 16.7 10.55 16.94L11.37 17.76L13.45 15.68C13.69 15.44 14.09 15.44 14.33 15.68C14.58 15.92 14.58 16.32 14.33 16.56Z" fill={color}/>
</svg>

  );
};

export default ProfileTickBold;
