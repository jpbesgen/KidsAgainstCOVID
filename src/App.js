import React from 'react';
import { Router } from '@reach/router';

import Landing from './components/Landing';
import MapPage from './components/MapPage';
import Notes from './components/Notes';
import About from './components/About';
import VideoMessage from './components/VideoMessage';
import MailMessage from './components/MailMessage';
import DigitalMessage from './components/DigitalMessage';
import Thanks from './components/Thanks';
import HospitalSearchComponent from './js/components/HospitalSearchComponent';
import Footer from './components/Footer';

import './App.css';

function App() {
	return (
		<div className="App">
			<div style={{ minHeight: '95.5vh' }}>
				<Router>
					<Landing path="/" />
					<MapPage path="/map" />
					<Notes path="/give-thanks" />
					<About path="/about" />
					<VideoMessage path="/video-message" />
					<MailMessage path="/mail-letter" />
					<DigitalMessage path="/digital-message" />
          <HospitalSearchComponent path="search" />
          <Thanks path="thanks" />
				</Router>
			</div>
			<Footer />
		</div>
	);
}

export default App;
