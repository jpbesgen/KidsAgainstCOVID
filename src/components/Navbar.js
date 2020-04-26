import React from 'react';
import { Link } from '@reach/router';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const SiteNavbar = () => {
	return (
		<Navbar bg="transparent" expand="lg">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link>
						<Link to="/notes">
							<p style={style.NavText}>Notes</p>
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/map">
							<p style={style.NavText}>Map</p>
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/about">
							<p style={style.NavText}>About</p>
						</Link>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

let style = {
	NavText: {
		fontSize: '22px',
		color: 'black',
		fontWeight: '600',
		margin: '1vh 25px 1vh 15px',
	},
};

export default SiteNavbar;
