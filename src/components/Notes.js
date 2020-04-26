import React from 'react';
import { Link } from '@reach/router';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DigitalLetter from '../img/digitalLetter.png';
import MailLetter from '../img/mailLetter.png';
import VideoLetter from '../img/videoLetter.png';

const Banner = (props) => {
	return (
		<div>
			<Container fluid>
				<Row className="justify-content-center align-items-center">
					<Link to="/video-message">
						<Col xs={3} style={{ padding: '0', margin: '0 1.5%' }}>
							<img
								src={VideoLetter}
								alt="video letter"
								style={{ width: '100%' }}
							/>
						</Col>
					</Link>
					<Link to="/mail-letter">
						<Col xs={3} style={{ padding: '0', margin: '0 1.5%' }}>
							<img
								src={MailLetter}
								alt="mail letter"
								style={{ width: '100%' }}
							/>
						</Col>
					</Link>
					<Link to="/digital-message">
						<Col xs={3} style={{ padding: '0', margin: '0 1.5%' }}>
							<img
								src={DigitalLetter}
								alt="digital letter"
								style={{ width: '100%' }}
							/>
						</Col>
					</Link>
				</Row>
			</Container>
		</div>
	);
};

const style = {
	BannerText: {
		fontSize: '30px',
		color: 'white',
		fontWeight: '700',
		margin: '2.5vh 0',
	},
};

export default Banner;
