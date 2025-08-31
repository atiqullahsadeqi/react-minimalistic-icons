import React from 'react';

export interface CardsBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CardsBulk: React.FC<CardsBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M19 10.28V17.43C18.97 20.28 18.19 21 15.22 21H5.78003C2.76003 21 2 20.25 2 17.27V10.28C2 7.58005 2.63 6.71005 5 6.57005C5.24 6.56005 5.50003 6.55005 5.78003 6.55005H15.22C18.24 6.55005 19 7.30005 19 10.28Z" fill={color}/>
<path d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z" fill={color}/>
<path d="M6.96002 18.5601H5.23999C4.82999 18.5601 4.48999 18.2201 4.48999 17.8101C4.48999 17.4001 4.82999 17.0601 5.23999 17.0601H6.96002C7.37002 17.0601 7.71002 17.4001 7.71002 17.8101C7.71002 18.2201 7.38002 18.5601 6.96002 18.5601Z" fill={color}/>
<path d="M12.5501 18.5601H9.11011C8.70011 18.5601 8.36011 18.2201 8.36011 17.8101C8.36011 17.4001 8.70011 17.0601 9.11011 17.0601H12.5501C12.9601 17.0601 13.3001 17.4001 13.3001 17.8101C13.3001 18.2201 12.9701 18.5601 12.5501 18.5601Z" fill={color}/>
<path d="M19 11.86H2V13.36H19V11.86Z" fill={color}/>
</svg>

  );
};

export default CardsBulk;
