import React from 'react';
import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Layout from '../components/layout';
//! learn more efficient way to import photos
import Prana from '../images/video_thumbnails/prana_manifest_farm.png';
import Bitters from '../images/video_thumbnails/Screen Shot 2019-06-26 at 6.56.27 PM.png';
import OJ from '../images/video_thumbnails/rainthumb.png';
import Chrome from '../images/video_thumbnails/chromeindustries.png';
import GreenDream from '../images/video_thumbnails/greendream.png';
import JackGraydon from '../images/video_thumbnails/jackgraydon.png';
import CheapSkates from '../images/video_thumbnails/CCS.png';
import Alpental from '../images/video_thumbnails/Alpental.png';
import Thrasher from '../images/video_thumbnails/thrasher.png';
import Summit from '../images/video_thumbnails/The Summit at Snoqualmie- sprung.png';

import SEO from '../components/seo';

import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
	<Layout>
		<SEO title="Video Work" />
		<Container>
			<Row>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/prana_manifest_farm/">
						<img src={Prana} alt="Prana Manifest Farm" />
						<Card.ImgOverlay className="text-center">
							<Card.Title
								style={{
									color: 'white',
									fontSize: '40px',
									width: '100%',
									position: 'absolute',
									top: '50%',
									left: '50%',
									transform: 'translate(-50%, -50%)'
								}}
							>
								Manifest Farm
							</Card.Title>
						</Card.ImgOverlay>
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/bittersland/">
						<img src={Bitters} alt="Bittersland" />
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/cruisingintherain/">
						<img src={OJ} alt="Cruising in the Rain" />
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/chromeindustries/">
						<img src={Chrome} alt="Chrome Industries" />
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/greendream/">
						<img src={GreenDream} alt="Green Dream" />
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/jackgraydon/">
						<img src={JackGraydon} alt="Jack Graydon" />
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/ccs/">
						<img src={CheapSkates} alt="CCS" />
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/alpental/">
						<img src={Alpental} alt="Alpental" />
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/thrasher/">
						<img src={Thrasher} alt="Thrasher" />
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/summitatsnoqualmie/">
						<img src={Summit} alt="Summit at Snoqualmie" />
					</Link>
				</Col>
			</Row>
		</Container>
	</Layout>
);

export default IndexPage;
