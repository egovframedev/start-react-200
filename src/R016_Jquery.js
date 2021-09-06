import React, { Component } from 'react';
import $ from 'jquery';

/* 016 jQuery 사용하기 */
class R016_Jquery extends Component {
  input_alert = (e) => {
    console.log(e);
    var input_val = $('#inputId').val();
    alert(input_val);
  }

  render() {
    return (
      <div>
        <h2>[ THIS IS JQuery ]</h2>
        <input type="text" id="inputId" name="inputName" />
        <button id="buttonId" onClick={e => this.input_alert(e)}>
          JQuery Button
        </button>
      </div>
    )
  }
}

export default R016_Jquery;