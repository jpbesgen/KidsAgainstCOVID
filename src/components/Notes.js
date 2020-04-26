import React from 'react';
import Navbar from './Navbar';
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
			<Navbar />
			<Container
				fluid
				style={{
					borderTop: '2px solid #000038',
					paddingTop: '3vh',
				}}
			>
				<Row className="justify-content-center">
					<h3 style={style.Header3}>Let's Give Thanks</h3>
				</Row>
				<Row className="justify-content-center text-center">
					<p style={style.DescriptiveText}>
						It’s our time to give our thanks to these brave men and women and
						show our appreciation and for their heroic efforts fighting the
						pandemic and keeping us safe.
					</p>
				</Row>
				<Row
					className="justify-content-center align-items-center"
					style={{ padding: ' 0 0 12vh 0' }}
				>
					<Col xs={3} style={{ padding: '0', margin: '0 1.5%' }}>
						<Link to="/video-message">
							<img
								src={VideoLetter}
								alt="video letter"
								style={{ width: '100%' }}
							/>
						</Link>
					</Col>

					<Col xs={3} style={{ padding: '0', margin: '0 1.5%' }}>
						<Link to="/mail-letter">
							<img
								src={MailLetter}
								alt="mail letter"
								style={{ width: '100%' }}
							/>
						</Link>
					</Col>

					<Col xs={3} style={{ padding: '0', margin: '0 1.5%' }}>
						<Link to="/digital-message">
							<img
								src={DigitalLetter}
								alt="digital letter"
								style={{ width: '100%' }}
							/>
						</Link>
					</Col>
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
	Header3: {
		fontSize: '30px',
		fontWeight: '6s00',
		padding: '0 0 2vh 0',
	},
	DescriptiveText: {
		fontSize: '24px',
		fontWeight: '300',
		padding: '0 8% 4vh 8%',
	},
};

export default Banner;
