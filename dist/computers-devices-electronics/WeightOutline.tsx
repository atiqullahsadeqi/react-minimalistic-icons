import React from 'react';

export interface WeightOutlineProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const WeightOutline: React.FC<WeightOutlineProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 22.75H10C4.57 22.75 2.25 20.43 2.25 15V9C2.25 3.57 4.57 1.25 10 1.25H14C19.43 1.25 21.75 3.57 21.75 9V15C21.75 20.43 19.43 22.75 14 22.75ZM10 2.75C5.39 2.75 3.75 4.39 3.75 9V15C3.75 19.61 5.39 21.25 10 21.25H14C18.61 21.25 20.25 19.61 20.25 15V9C20.25 4.39 18.61 2.75 14 2.75H10Z" fill={color}/>
<path d="M15.07 12.54C14.89 12.54 14.71 12.47 14.57 12.35C13.11 11.05 10.89 11.05 9.42999 12.35C9.26999 12.5 9.04999 12.56 8.81999 12.53C8.59999 12.5 8.40999 12.37 8.28999 12.18L6.10999 8.68001C5.91999 8.37001 5.97999 7.97001 6.24999 7.72001C9.52999 4.81001 14.47 4.81001 17.75 7.72001C18.02 7.96001 18.08 8.37001 17.89 8.68001L15.71 12.18C15.59 12.37 15.4 12.49 15.18 12.53C15.14 12.53 15.1 12.54 15.07 12.54ZM12 9.87001C13 9.87001 13.99 10.15 14.86 10.7L16.26 8.45001C13.73 6.57001 10.26 6.57001 7.72999 8.45001L9.12999 10.7C10.01 10.14 11 9.87001 12 9.87001Z" fill={color}/>
</svg>

  );
};

export default WeightOutline;
