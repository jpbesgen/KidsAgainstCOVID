import React from 'react';
import { useDropzone } from 'react-dropzone';
import Navbar from './Navbar';
import Banner from './Banner';
import HospitalSearchComponent from '../js/components/HospitalSearchComponent';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import VideoBanner from '../img/videoBanner.png';

const VideoMessage = (props) => {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

	const files = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));
	return (
		<div>
			<Navbar />
			<Banner text="send a video message" image={VideoBanner} />

			<Container fluid style={{ padding: '4vh 0 5vh 6%' }}>
				<Row style={{ display: 'flex', flexDirection: 'column' }}>
					<p style={style.DescriptiveText}>
						Send a local healthcare provider or essential worker a kind message
						through a video.
					</p>
					<p style={style.DescriptiveText}>
						You can uploaded a recorded video to send to a local healthcare
						worker. Please keep your video to less than thirty seconds.
					</p>
				</Row>
			</Container>
			<Container
				fluid
				style={{ padding: '0 0 10vh 0', borderBottom: '1px solid #000038' }}
			>
				<Row className="justify-content-center">
					<Col xs={7}>
						<section className="container text-center" style={style.UploadBox}>
							<div {...getRootProps({ className: 'dropzone' })}>
								<input {...getInputProps()} id={props.id} method="Post" />
								<p style={style.Title}>
									Drag and Drop
									<br />
									<b style={{ fontWeight: '300' }}>- or -</b>
									<br />
									Click to Upload
									<hr />
									<div>
										<ul style={style.Files}>{files}</ul>
									</div>
								</p>
							</div>
						</section>
					</Col>
				</Row>
			</Container>

			<Container fluid style={{ padding: '4vh 0 5vh 6%' }}>
				<Row style={{ display: 'flex', flexDirection: 'column' }}>
					<HospitalSearchComponent />
				</Row>
			</Container>
		</div>
	);
};

const style = {
	DescriptiveText: {
		fontSize: '20px',
		fontWeight: '300',
		padding: '0 0 0 0',
	},
	UploadBox: {
		border: '1px solid #000038',
		padding: '0',
		margin: '0',
		minHeight: '40vh',
	},
	Title: {
		fontSize: '20px',
		color: '#000038',
		margin: '0',
		padding: '1rem',
	},
	Files: {
		margin: '0',
		padding: '0',
		listStyleType: 'none',
		color: 'black',
		fonSize: '16px',
		fontWeight: '300',
	},
};

export default VideoMessage;
