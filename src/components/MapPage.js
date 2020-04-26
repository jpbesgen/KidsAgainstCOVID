import React from 'react';
import Navbar from './Navbar';
import HospitalSearchComponent from '../js/components/HospitalSearchComponent';
import MapComponent from '../js/components/MapComponent';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const MapPage = () => {
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
						Look at where our letters have come from!
					</h3>
				</Row>
			</Container>
			<Container
				style={{
					paddingTop: '3vh',
					paddingBottom: '3vh',
					width: '90vw',
					height: '50px',
				}}
			>
				<MapComponent />
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

export default MapPage;
