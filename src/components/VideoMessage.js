import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

import VideoBanner from '../img/videoBanner.png';

const VideoMessage = () => {
	return (
		<div>
			<Navbar />
			<Banner text="send a video message" image={VideoBanner} />
		</div>
	);
};

const style = {};

export default VideoMessage;
