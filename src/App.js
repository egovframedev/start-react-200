import React from 'react';
import './App.css'; /* 002 .jsx에  CSS 적용하기 */
import LifecycleEx from './R004_LifecycleEx'; /* 004 생명주기 함수 render 사용하기 */

/* 001 .jsx에 html 적용하기 */
function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <LifecycleEx></LifecycleEx>
    </div>
  );
}

export default App;
