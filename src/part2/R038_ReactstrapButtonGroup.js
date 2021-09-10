import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

/** R038. reactstrap Button Group */
class R038_ReactstrapButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { number : 10}
  }

  move = (type, e) => {
    if(type === 'Left') {
      this.setState({number: this.state.number - 1})
    } else if(type === 'Right') {
      this.setState({number: this.state.number + 1})
    } else {
      this.setState({number: 10 })
    }
  }

  render() {
    return (
      <div style={{padding: "0px"}}>
        <ButtonGroup style={{padding: "0px"}}>
          <Button onClick={e => this.move('Left')}>Left</Button>
          <Button onClick={e => this.move('Middle')}>Middle</Button>
          <Button onClick={e => this.move('Right')}>Right</Button>
        </ButtonGroup>
        <br />
        {this.state.number}
      </div>
    )
  }
}

export default R038_ReactstrapButtonGroup;