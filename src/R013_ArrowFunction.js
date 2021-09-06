import React, { Component } from 'react';

/* 013  화살표 함수 사용하기 */
class R013_ArrowFunction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowFunc: 'React200',
      num: 3
    };
  }

  componentDidMount() {
    Function1(1);
    this.Function2(1, 1);
    this.Function3(1, 3);
    this.Function4();
    this.Function5(0, 2, 3);

    function Function1(num1) {
      return console.log(num1 + '. Es5 Function');
    }
  }

  Function2 = (num1, num2) => {
    let num3 = num1 + num2;
    console.log(num3 + '. Arrow Function : ' + this.state.arrowFunc);
  }

  Function3() {
    var this_bind = this; // 콜백 함수 내부에서 this로 컴포넌트를 접근할 수 없기에 this를 백업한다.
    setTimeout(function () {
      console.log(this_bind.state.num + '. Es5 Callback Function noBind : ');
      //console.log(this.state.arrowFunc); // 콜백 함수 내부에서 this는 window 객체이므로 state 접근은 undefined 에러 발생
      console.log(this_bind.state.arrowFunc)
    }, 100);
  }

  Function4() {
    setTimeout(function () {
      console.log('4. Es5 Callback Function Bind : ' + this.state.arrowFunc);
      console.log(this.state.arrowFunc);
    }.bind(this), 100); // this를 bind 해주면, this를 컴포넌트로 사용할 수 있다.
  }

  // 화살표 함수에서는 this를 bind하지 않아도 this는 컴포넌트를 가리킨다.
  Function5 = (num1, num2, num3) => {
    const num4 = num1 + num2 + num3;
    setTimeout(() => {
      console.log(num4 + '. Arrow Callback Function : ' + this.state.arrowFunc);
    }, 100)
  }

  render() {
    return (
      <h2>[ THIS IS ArrowFunction ]</h2>
    );
  }
}

export default R013_ArrowFunction;