import React from 'react';
import './App.css';
import PropsObjVal from './part2/R020_PropsObjVal';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>Props 사용하기</p>
      <PropsObjVal
        ObjectJson={{ react: "리액트", twohundred: "200" }}
      />
    </div>
  );
}

export default App;