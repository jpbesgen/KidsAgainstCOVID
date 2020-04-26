import React from 'react';
import Navbar from './Navbar';
import HospitalSearchComponent from '../js/components/HospitalSearchComponent';
import MapComponent from '../js/components/MapComponent';
import Banner from './Banner';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Thanks = (props) => {
    return (
        <div style={{height: "150vh"}}>
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
                    <p> <b>Thank you for your submission!</b><br/> You offered to send a note to <b>{props.location.state.name}.<br /></b><br /></p>
                </Row>
                { props.location.state != null && props.location.state.url != null ? 
                    <Row className="justify-content-left" style={{ paddingLeft: "10%" }}>
                        <p> You can download your note <a href={props.location.state.url} target="_blank" download>here.</a><br /></p>
                    </Row>
                    :
                    null
                }
                <Row className="justify-content-left" style={{ paddingLeft: "10%" }}>
                    <p>
                        <b>The hospital's mailing address is: <br /></b>
                        {props.location.state.name} <br />
                        {props.location.state.address}
                    </p>
                </Row>
                <Row className="justify-content-left" style={{ paddingLeft: "10%" }}>
                    <p>
                        <b>Here are some other notes that have been sent around the country: <br /></b>
                    </p>
                </Row>
            </Container>
            <Container
                style={{
                    paddingTop: '3vh',
                    width: '90vw',
                    height: '50px',
                    paddingBottom: "20px",
                }}
            >
                <MapComponent />
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
