import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Footer = () => {
	return (
		<Container fluid style={{ background: '#000038' }}>
			<Row
				className="justify-content-center align-items-center"
				style={{ height: '4.5vh' }}
			>
				<p style={{ color: 'white', margin: '0', fontSize: '15px' }}>
					Created for hack:now 2020
				</p>
			</Row>
		</Container>
	);
};

export default Footer;
