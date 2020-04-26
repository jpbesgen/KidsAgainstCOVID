import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import HospitalSearchComponent from '../js/components/HospitalSearchComponent';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import MailBanner from '../img/mailBanner.png';
import LetterTemplate from '../img/letterTemplate.png';
import LetterTemplateText from '../img/letterTemplateText.png';

const MailMessage = () => {
	return (
		<div>
			<Navbar />
			<Banner text="mail a letter" image={MailBanner} />
			<Container fluid style={{ padding: '4vh 0 11vh 6%' }}>
				<Row style={{ display: 'flex', flexDirection: 'column' }}>
					<p style={style.DescriptiveText}>
						Send a local healthcare provider or essential worker a kind letter
						in the mail.
						<br />
						Use one of the letter templates below or write your own!
					</p>
					<p style={style.DescriptiveText}>
						Remember to include your first name and your letter should include a
						greeting, body, and closing.
					</p>
					<p style={style.Link1}>Template 1.pdf</p>
					<p style={style.Link2}>Template 2.pdf</p>
				</Row>
			</Container>

			<Container
				fluid
				style={{
					borderTop: '1px solid #000038',
					borderBottom: '1px solid #000038',
					padding: '10% 0',
				}}
			>
				<Row className="align-items-center justify-content-around">
					<Col xs={3}>
						<img src={LetterTemplateText} style={style.ImageInstructions} alt="letter template text" />
					</Col>
					<Col xs={7}>
						<img src={LetterTemplate} style={style.ImageLetter} alt="letter template" />
					</Col>
				</Row>
			</Container>

			<Container fluid style={{ padding: '4vh 0 5vh 6%' }}>
				<Row style={{ display: 'flex', flexDirection: 'column' }}>
					{/* <Form style={{ width: '80%' }}>
						<Form.Group controlId="address">
							<Form.Label style={style.FormText}>Enter your address</Form.Label>
							<Form.Control
								type="email"
								placeholder="1234 street lane, townsville, CA 12345"
							/>
						</Form.Group>
					</Form> */}
					<HospitalSearchComponent />
				</Row>
			</Container>
		</div>
	);
};

const style = {
	Link1: {
		fontSize: '20px',
		fontWeight: '300',
		padding: '6vh 0 0 0',
		margin: '0',
	},
	Link2: {
		fontSize: '20px',
		fontWeight: '300',
		padding: '4vh 0 0 0',
		margin: '0',
	},
	FormText: {
		fontSize: '20px',
		fontWeight: '600',
		padding: '3.5vh 0 1.2vh 0',
		margin: '0',
	},
	ImageInstructions: {
		width: '250px',
	},
	ImageLetter: {
		width: '60vw',
	}
};

export default MailMessage;
