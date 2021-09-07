import React, { Component } from 'react';

/* 022 props를 기본값으로 정의하기 */
class R022_PropsDefault extends Component {
  render() {
    let {
      ReactString,
      ReactNumber
    } = this.props
    return (
      <div style={{padding : "0px"}}>
        {ReactString}-{ReactNumber}
      </div>
    )
  }
}

R022_PropsDefault.defaultProps = {
  ReactString: "리액트",
  ReactNumber: 400
}

export default R022_PropsDefault;