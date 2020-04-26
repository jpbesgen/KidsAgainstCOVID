import React from 'react';
import { Link } from '@reach/router';
import Navbar from './Navbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import covidParticle from '../img/covidParticle.png';
import ImageLeft from '../img/imageLeft.png';
import ImageMiddle from '../img/imageMiddle.png';
import ImageRight from '../img/imageRight.png';
import DigitalLetter from '../img/digitalLetter.png';
import MailLetter from '../img/mailLetter.png';
import VideoLetter from '../img/videoLetter.png';
import LetterMontage from '../img/letterMontage.png';

const Landing = () => {
	function setButtonHover(e) {
		e.target.style.color = '#050442';
		e.target.style.background = 'transparent';
	}

	function unsetButtonHover(e) {
		e.target.style.color = 'white';
		e.target.style.background = '#050442';
	}

	return (
		<div>
			<Navbar />
			<Container fluid style={{ background: '#000038', paddingLeft: '5%' }}>
				<Row className="align-items-center">
					<Col xs={6}>
						<p style={style.BannerText}>COVID-19 HAS PUT UP A GOOD FIGHT</p>
						<p style={style.BannerTextLight}>
							Propoganda and stuff kinda like cheese n' stuff except u cant eat
							it
						</p>
						<p style={style.BannerText}>BUT SO CAN WE.</p>
					</Col>
					<Col xs={6}>
						<img
							src={covidParticle}
							alt="covid particle"
							style={{ height: '331px', marginLeft: '10%' }}
						/>
					</Col>
				</Row>
			</Container>

			<Container fluid style={{ paddingBottom: '11vh' }}>
				<Row className="justify-content-center">
					<h3 style={style.Header3}>Honoring Our Heroes</h3>
				</Row>
				<Row className="justify-content-center text-center">
					<p style={style.DescriptiveText}>
						Farm workers, nurses, grocery store clerks, doctors, postal workers,
						janitors, and so many more are essential to our society’s growth and
						survival. They have been working tirelessly to keep up us alive and
						safe and to keep our world running.
					</p>
				</Row>
				<Row className="justify-content-center">
					<Col xs={3} style={{ padding: '0', margin: '0 3%' }}>
						<img src={ImageLeft} alt="farmer" style={{ width: '100%' }} />
					</Col>
					<Col xs={3} style={{ padding: '0', margin: '0 3%' }}>
						<img src={ImageMiddle} alt="nurse" style={{ width: '100%' }} />
					</Col>
					<Col xs={3} style={{ padding: '0', margin: '0 3%' }}>
						<img src={ImageRight} alt="grocery" style={{ width: '100%' }} />
					</Col>
				</Row>
			</Container>

			<Container
				fluid
				style={{
					borderTop: '1px solid #000038',
					borderBottom: '1px solid #000038',
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

			{/* <Container fluid>
				<Row
					className="justify-content-center"
					style={{ padding: '6.5% 0 10.2% 0' }}
				>
					<Col xs={4}>
						<Link to="/map">
							<Button
								style={{
									width: '100%',
									background: '#050442',
									fontSize: '24px',
									padding: '1.5rem 0',
									borderRadius: '10px',
									border: '2px solid black',
								}}
								onMouseEnter={setButtonHover}
								onMouseLeave={unsetButtonHover}
							>
								Find A Hospital Near You
							</Button>
						</Link>
					</Col>
				</Row>
				<Row>
					<Col xs={12} style={{ padding: '0' }}>
						<img
							src={LetterMontage}
							alt="letter montage"
							style={{ width: '100%' }}
						/>
					</Col>
				</Row>
			</Container> */}
		</div>
	);
};

const style = {
	BannerText: {
		fontSize: '24px',
		color: 'white',
		fontWeight: '700',
		margin: '2.5vh 0',
	},
	BannerTextLight: {
		fontSize: '20px',
		color: 'white',
		fontWeight: '300',
		margin: '2.5vh 0',
	},
	Header3: {
		fontSize: '24px',
		fontWeight: '6s00',
		padding: '4vh 0 2vh 0',
	},
	DescriptiveText: {
		fontSize: '20px',
		fontWeight: '300',
		padding: '0 8% 4vh 8%',
	},
};

export default Landing;
