import React from 'react';

export interface TaskSquareTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TaskSquareTwotone: React.FC<TaskSquareTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12.3701 8.88H17.6201" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M6.37988 8.88L7.12988 9.63L9.37988 7.38" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M12.3701 15.88H17.6201" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M6.37988 15.88L7.12988 16.63L9.37988 14.38" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default TaskSquareTwotone;
