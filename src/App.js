import React from 'react';
import './App.css';
import PropsBoolean from './part2/R019_PropsBoolean';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>Props 사용하기</p>
      <PropsBoolean BooleanTrueFalse={false} />
      <PropsBoolean BooleanTrueFalse />
    </div>
  );
}

export default App;