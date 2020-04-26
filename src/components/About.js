import React from 'react';
import Navbar from './Navbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const About = () => {
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
					<h3 style={style.Header3}>
						ABOUT US
					</h3>
					<p style={style.DescriptiveText}>
					We are a team of undergraduate students from UC Berkeley and UC Santa Cruz looking to help in any way that we can during the COVID-19 Crisis. 
					We are proudly part of a broader community of designers, makers, and innovators trying to do our best to tackle the crises brought by the pandemic. 
					<br />
					<br />
					Our sister projects can be found at: <br/>
					<a href="https://resource19.org">resource19.org</a><br/>
					<a href="https://shareddistance.com">shareddistance.com</a><br/>
					<a href="https://covid-19list.com">covid-19list.com</a>
					</p>
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
		fontSize: '24px',
		fontWeight: '6s00',
		padding: '0 0 2vh 0',
	},
	DescriptiveText: {
		fontSize: '18px',
		fontWeight: '300',
		padding: '0 8% 4vh 8%',
	},
};

export default About;
