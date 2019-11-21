import React from 'react';
import Header from './Header';
import MemeGenerator from './MemeGenerator';
import './index.css'


function App() {
  return (
    <div>
      <Header className='Header'/>
      <MemeGenerator />
    </div>
  );
}

export default App;
