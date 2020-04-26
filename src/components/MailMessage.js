import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MailBanner from '../img/mailBanner.png';

const MailMessage = () => {
	return (
		<div>
			<Navbar />
			<Banner text="mail a letter" image={MailBanner} />
		</div>
	);
};

const style = {};

export default MailMessage;
