import React from 'react';
import Navbar from './Navbar';
import HospitalSearchComponent from '../js/components/HospitalSearchComponent';
import MapComponent from '../js/components/MapComponent';
import Banner from './Banner';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Thanks = (props) => {
    return (
        <div>
            <Navbar />
            <Banner text='Thank you' />
            <Container
                fluid
                style={{
                    borderTop: '2px solid #000038',
                    paddingTop: '3vh',
                }}
            >
                <Row className="justify-content-left" style={{ paddingLeft: "10%" }}>
                    <h3 style={style.Header3}>
                        Thanks for your submission!! Look at where our letters have come from!
					</h3>
                </Row>
                <Row className="justify-content-left" style={{ paddingLeft: "10%" }}>
                    <p> You offered to send a note to <b>{props.location.state.name}.<br /></b><br /></p>
                </Row>
                <Row className="justify-content-left" style={{ paddingLeft: "10%" }}>
                    <p>
                        <b>The hospital's mailing address is: <br /></b>
                        {props.location.state.name} <br />
                        {props.location.state.address}
                    </p>
                </Row>
            </Container>
            <Container
                style={{
                    paddingTop: '3vh',
                    width: '90vw',
                    height: '50px',
                }}
            >
                <MapComponent />
            </Container>
            <Container>
                <div style={{ paddingBottom: "20px" }} />
            </Container>
        </div >
    );
};

const style = {
    BannerText: {
        fontSize: '30px',
        color: 'white',
        fontWeight: '700',
        margin: '2.5vh 0',
    },
    Header3: {
        fontSize: '24px',
        fontWeight: '6s00',
        padding: '0 0 2vh 0',
    },
    DescriptiveText: {
        fontSize: '24px',
        fontWeight: '300',
        padding: '0 8% 4vh 8%',
    },
};

export default Thanks;
