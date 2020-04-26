import React from 'react';
import { Router } from '@reach/router';

import Landing from './components/Landing';
import Map from './components/Map';
import Notes from './components/Notes';
import About from './components/About';
import VideoMessage from './components/VideoMessage';
import MailMessage from './components/MailMessage';
import DigitalMessage from './components/DigitalMessage';
import Footer from './components/Footer';


import './App.css';


function App() {
	return (
		<div className="App">
			<div style={{ minHeight: '95.5vh' }}>
				<Router>
					<Landing path="/" />
					<Map path="/map" />
					<Notes path="/notes" />
					<About path="/about" />
					<VideoMessage path="/video-message" />
					<MailMessage path="/mail-letter" />
					<DigitalMessage path="/digital-message" />
				</Router>
			</div>
			<Footer />
		</div>
	);
}

export default App;
