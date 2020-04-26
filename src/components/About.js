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
						We're a group of UC Berkeley Students who've come together at
						Hack:Now 2020 to help build a site that allows children to send
						letters of thanks to those on the frontline of the coronavirus
						outbreak. We hope that by doing so, morale in our battle can
						strengthen as we all work to #flatten the curve together.{' '}
					</h3>
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

export default About;
