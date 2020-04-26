import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

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
