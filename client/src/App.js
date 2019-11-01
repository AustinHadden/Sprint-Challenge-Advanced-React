import React from 'react';
import './App.css';

import { useAPI } from './hooks/useAPI';
import Display from './components/Display';

function App() {
  const [data] = useAPI();
  return (
    <div className="App">
      <Display data={data} />
    </div>
  );
}

export default App;
