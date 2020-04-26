import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

const VideoMessage = () => {
	return (
		<div>
			<Navbar />
			<Banner text="send a video message" />
		</div>
	);
};

const style = {};

export default VideoMessage;
