import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Banner = (props) => {
	return (
		<div>
			<Container fluid style={{ background: '#000038', paddingLeft: '5%' }}>
				<Row className="align-items-center">
					<Col xs={6}>
						<p style={style.BannerText}>{props.text.toUpperCase()}</p>
					</Col>
					<Col xs={6}>
						<img
							src={props.image}
							alt="covid particle"
							style={{ height: '221px', marginLeft: '25%' }}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

const style = {
	BannerText: {
		fontSize: '40px',
		color: 'white',
		fontWeight: '700',
		margin: '2.5vh 0',
	},
};

export default Banner;
