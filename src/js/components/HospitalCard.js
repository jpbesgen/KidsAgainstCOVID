import React from 'react';

import hospital from '../../img/hospital.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default class HospitalCard extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleClick(event) {
        console.log("CLICKED")
        this.props.cardClicked(event, {
            name: this.props.name,
            address: this.props.address,
        });
    }

    handleMouseOver(event) {
        
    }

	render() {
		const { setItem, formState } = this.props;

		return (
            <div style={style.HospitalCard} 
                onMouseOver={(event) => {this.handleMouseOver(event)}}
                onClick={(event) => {this.handleClick(event)}}>
                <Container fluid>
                    <Row className="justify-content-center align-items-center"> 
                        <Col className="text-center align-items-center">
                            <img src={hospital} />
                        </Col>
                    </Row>
                    <Row className="h-100 justify-content-center align-items-center" style={style.TextRow}> 
                        <Col className="text-center align-items-center">
                            <div style={style.HospitalName}> { this.props.name } </div>
                            <div style={style.HospitalAddress}> { this.props.address } </div>
                        </Col>
                    </Row>
                </Container>
			</div>
		);
	}
}

const style = {
    HospitalCard: {
        padding: '10px',
        width: '190px',
        height: '265px',
        margin: '10px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0px 8px 4px rgba(0, 0, 0, 0.15)',
        cursor: 'pointer',
    },
    
    HospitalName: {
        paddingTop: '10px',
        fontWeight: '500',
    },

    HospitalAddress: {
        fontWeight: '300',
        marginTop: '10px',
    },
    TextRow: {
        marginTop: '10px',
    }
};