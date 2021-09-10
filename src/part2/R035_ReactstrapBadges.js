import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';

/** 035. reactstrap Badge 사용하기 */
class R035_ReactstrapAlerts extends Component {
  render() {
    return (
      <div>
        <h1>PRODUCT NAME <Badge color="secondary">hit</Badge></h1>
        <Button color="light" outline>
          Accessor <Badge color="dark">4</Badge>
        </Button>
        <Badge color="danger" pill>pill</Badge>
        <Badge href="htt://example.con" color="light">GoLink</Badge>
      </div>
    )
  }
}

export default R035_ReactstrapAlerts;