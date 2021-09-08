import React, { Component } from 'react';

/** 026 stete를 직접 변경한 후 forceUpdate() 함수 사용하기 */
class R026_ForceUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString : 'react',
    }
  }

  StateChange = () => {
    this.state.StateString = '리액트';
    this.forceUpdate();
  };

  render() {
    return (
      <div style={{padding: 0}}>
        <button onClick={(e) => this.StateChange('direct', e)}>
          state 직접 변경
        </button>
        <p>
          [state 변경하기] StateString : {this.state.StateString}
        </p>        
      </div>
    )
  }
}

export default R026_ForceUpdate;