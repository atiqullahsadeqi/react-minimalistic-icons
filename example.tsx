import React from 'react';
import { 
  ArrowLeftLinear, 
  HomeLinear, 
  UserLinear, 
  IconProps 
} from './dist/index';

// Custom component using IconProps
const CustomIcon: React.FC<IconProps & { label: string }> = ({ label, ...iconProps }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <ArrowLeftLinear {...iconProps} />
      <span>{label}</span>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>TypeScript Example</h1>
      
      <CustomIcon 
        size={24} 
        color="#007bff" 
        label="Custom Icon Component" 
      />
      
      <div style={{ marginTop: '20px' }}>
        <HomeLinear size={32} color="green" />
        <UserLinear size={24} />
      </div>
    </div>
  );
};

export default App;
