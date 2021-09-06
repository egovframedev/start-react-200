import React, { Component } from 'react';

/* 007 생명주기 함수 componentDidMount() 사용하기 */
class R007_LifecycleEx extends Component {
  // 생명주기 함수증 가장 먼저 실행, 처음 한 번만 호출된다.
  // 부모 객체로 전달받은 props를 초기화 할 때 사용
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. consturctor Call");
  }

  // 새로운 props를 받게 됐을 때 state를 변경해준다.
  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps Call : ' + props.prop_value);
    return { tmp_state: props.prop_value };
  }

  render() {
    console.log('3. render Call');
    return (
      <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
    );
  }

  // 화면이 모두 그려진 후에 실행되야하는 이벤트 처리, 초기화 등 활용
  componentDidMount() {
    console.log('4. componentDidMount Call');
    console.log('5. tmp_state: ' + this.state.tmp_state);
  }

}

export default R007_LifecycleEx