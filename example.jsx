import React from 'react';
import { 
  ArrowLeftLinear, 
  HomeLinear, 
  UserLinear, 
  HeartLinear,
  ShoppingCartLinear 
} from './dist/index';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React Minimalistic Icons Example</h1>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
        <ArrowLeftLinear size={24} color="#007bff" />
        <span>Arrow Left</span>
      </div>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
        <HomeLinear size={32} color="#28a745" />
        <span>Home (larger)</span>
      </div>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
        <UserLinear size={20} />
        <span>User (default color)</span>
      </div>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
        <HeartLinear size={24} color="red" />
        <span>Heart (red)</span>
      </div>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
        <ShoppingCartLinear size={28} color="#6f42c1" />
        <span>Shopping Cart (purple)</span>
      </div>
    </div>
  );
}

export default App;
