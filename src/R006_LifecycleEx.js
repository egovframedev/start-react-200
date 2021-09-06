import React, { Component } from 'react';

/* 006 생명주기 함수 static getDerivedStateFromProps(props, state) 사용하기 */
class R006_LifecycleEx extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. consturctor Call");
  }

  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps Call : ' + props.prop_value);
    return {};
  }

  render() {
    console.log('3. render Call');
    return (
      <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
    );
  }
}

export default R006_LifecycleEx