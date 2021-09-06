import React, { Component } from 'react';

/* 009 템플릿 문자열 사용하기 */
class R009_Es6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const jsString1 = '자바스크립트';
    const jsString2 = '입니다\n다음 줄입니다.'
    console.log(jsString1 + ' 문자열' + jsString2 + '~');

    const Es6String1 = 'ES6';
    const Es6String2 = '입니다';
    console.log(`${Es6String1} 문자열${Es6String2}!!
____다음 줄 입니다.`);

    const LongString = "ES6에 추가된 String 함수들입니다.";
    console.log('startsWith : ' + LongString.startsWith("ES6에 추가")); // startWith는 문자열 앞에서 일치문자열 찾는다.
    console.log('endsWith : ' + LongString.endsWith("함수들입니다."));  // endsWith는 문자열 뒤에서 일치문자열  찾기
    console.log('includes : ' + LongString.includes("추가된 String")); // 특정 문자열을 포함하는 지 검사 
  }

  render() {
    return (
      <h2>[THIS IS ES6 STRING]</h2>
    )
  }
}

export default R009_Es6;