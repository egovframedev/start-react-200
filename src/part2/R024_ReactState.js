import React, { Component } from 'react';

/* 024. state 사용하기 */
class R024_ReactState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: this.props.reactString,
      StrateNumber:  200,
    }
  }

  render() {
    return (
      <div style={{padding: "0px"}}>
        {this.state.StateString} - {this.state.StrateNumber}
      </div>
    )
  }
}

export default R024_ReactState;