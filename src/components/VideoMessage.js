import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const VideoMessage = () => {
	return (
		<div>
			<Navbar />
			<Banner text="create a digital message" />
		</div>
	);
};

const style = {};

export default VideoMessage;
