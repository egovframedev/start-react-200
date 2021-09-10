import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button
} from 'reactstrap';

/** 040 reactstrap Card 사용하기 */
class R040_ReactstrapCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImg top height="200px" src="https://source.unsplash.com/user/erondu/" alt="Card image"/>
          <CardBody>
            <CardTitle>Card 제목</CardTitle>
            <CardSubtitle>Card 부제목</CardSubtitle>
            <CardText>Card 내용 Lorem ipsum dolor sit amet consectetur adipisicing elit.</CardText>
            <Button>버튼</Button>
          </CardBody>  
        </Card>
      </div>
    )
  }
}

export default R040_ReactstrapCard;