import React, { Component } from 'react';

/* 005 생명주기 함수 constuctor(props) 사용하기 */
class R005_LifecycleEx extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. consturctor Call");
  }

  render() {
    console.log('3. render Call');
    return (
      <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
    );
  }
}

export default R005_LifecycleEx