import React, { Component } from 'react';

/* 004 생명주기 함수 render() 사용하기 */
class R004_LifecycleEx extends Component {
  render() {
    console.log('3. render Call');
    return (
      <h2>[THIS IS RENDER FUNCTION]</h2>
    );
  }
}

export default R004_LifecycleEx