import React, { Component } from 'react';
import datatype from 'prop-types';

/* 020 props 객체형으로 사용하기 */
class R020_PropsObjVal extends Component {
  render() {
    let {
      ObjectJson
    } = this.props;
    return (
      <div style={{ padding: "0px" }}>
        {JSON.stringify(ObjectJson)}
      </div>
    );
  }
}

R020_PropsObjVal.propTypes = {
  ObjectJson: datatype.shape({
    react: datatype.string,
    twohundred: datatype.number
  })
};

export default R020_PropsObjVal;