import React, { Component } from 'react';

/** 023 props의 자식 Component에 node 전달하기 */
class R023_PropsNode extends Component {
  render() {
    return (
      <div style={{padding: "0px"}}>
        {this.props.children}
      </div>
    )
  }
}

export default R023_PropsNode;