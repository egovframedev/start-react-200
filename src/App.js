import React from 'react';
import './App.css';
import PropsDatatype from './part2/R018_PropsDatatype';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>Props 사용하기</p>
      <PropsDatatype
        String="react"
        Number={200}
        Boolean={1 == 1}
        Array={[0, 1, 8]}
        ObjectJson={{ react: "리액트", twohundred: "200" }}
        Function={console.log("FunctionProps: function!")}
      />
    </div>
  );
}

export default App;