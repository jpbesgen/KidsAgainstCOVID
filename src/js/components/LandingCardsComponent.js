import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Row, Col, Container, Button } from 'reactstrap';

import PrintLetterImage from '../../img/hexagon.png';

export default class LandingCardsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <Container>
            <Row>
                <Col sm="4">
                    <button style={style.Button}>
                    <Card inverse width="30px" height="3px">
                        <CardImg width="100%" src={PrintLetterImage} alt="Card image cap" />
                        <CardImgOverlay>
                        <CardTitle>Card Title</CardTitle>
                        <CardText></CardText>
                        <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                        </CardImgOverlay>
                    </Card>
                    </button>
                </Col>
                
                <Col sm="4">
                    <Card width="30px" height="3px">
                        <CardImg width="100%" src={PrintLetterImage} alt="Card image cap" />
                        <CardImgOverlay>
                        <CardText>
                            Hello hello!
                        </CardText>
                        <Button className='stretched-link' style={style.Button}> This is a button</Button>
                        </CardImgOverlay>
                    </Card>
                </Col>

                <Col sm="4">
                    <Card inverse width="30px" height="3px">
                        <CardImg width="100%" src={PrintLetterImage} alt="Card image cap" />
                        <CardImgOverlay>
                        <CardTitle>Card Title</CardTitle>
                        <CardText>
                            Some text
                        </CardText>
                        <CardText>
                            <a href=''>Click me!</a>
                        </CardText>
                        </CardImgOverlay>
                    </Card>
                </Col>
            </Row>
            </Container>
        );
    }
}

let style = {
	Button: {
        background: 'transparent',
        outline: 'none',
        color: 'transparent',
	},
}