import React, { Component } from 'react';

/* 008 생명주기 함수 shouldComponentUpdate() 사용하기 */
class R008_LifecycleEx extends Component {
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
      <h2>[THIS IS shouldComponentUpdate FUNCTION]</h2>
    );
  }

  // 화면이 모두 그려진 후에 실행돼야하는 이벤트 처리, 초기화 등 활용
  componentDidMount() {
    console.log('4. componentDidMount Call');
    console.log('5. tmp_state: ' + this.state.tmp_state);
    this.setState({ tmp_state2: true });
  }

  // component 변경시 실행 함수 -  props, state 변경 시
  // boolean 데이터 반환 true일 경우 render() 함수 한 번 더 호출
  shouldComponentUpdate(props, state) {
    console.log(`6. shuldComponentUpdate Call / tmp_state2 = ${state.tmp_state2}`);
    return state.tmp_state2;
  }

}

export default R008_LifecycleEx