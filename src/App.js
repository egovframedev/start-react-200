import React from 'react';
import './App.css';
import PropsDefault from './part2/R022_PropsDefault';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>Props 사용하기</p>
      <PropsDefault ReactNumber={200} />
    </div>
  );
}

export default App;