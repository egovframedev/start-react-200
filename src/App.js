import React from 'react';
import './App.css';
import ReactState from './part2/R024_ReactState';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>Props 사용하기</p>
      <ReactState reactString={"react"} />
    </div>
  );
}

export default App;