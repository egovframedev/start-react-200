import React from 'react';
import './App.css';
import PropsRequired from './part2/R021_PropsRequired';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>Props 사용하기</p>
      <PropsRequired
        ReactString="React"
        ReactNumber={200} />
    </div>
  );
}

export default App;