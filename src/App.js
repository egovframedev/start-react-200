import React from 'react';
import './App.css';
import PropsNode from './part2/R023_PropsNode';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>Props 사용하기</p>
      <PropsNode>
        <span>node from App.js</span>
      </PropsNode>
    </div>
  );
}

export default App;