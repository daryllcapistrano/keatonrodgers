import React from 'react';
import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Layout from '../components/layout';
import SEO from '../components/seo';
import 'bootstrap/dist/css/bootstrap.min.css';
//  THUMBNAIL IMPORTS
import Wornpath from '../images/video_thumbnails/WP_thumbnail.jpg';
import ManifestFarm from '../images/video_thumbnails/prana_manifest_farm.png';
import Bittersland from '../images/video_thumbnails/Bittersland.png';
import OJLeaves from '../images/video_thumbnails/oj_fall_thumb.jpg';
import SlimeBalls from '../images/video_thumbnails/SlimeBalls_thumbnail.jpg';
import OJRain from '../images/video_thumbnails/rainthumb.png';
import ChromeIndustries from '../images/video_thumbnails/chromeindustries.png';
import GreenDream from '../images/video_thumbnails/greendream.png';
import JackGraydon from '../images/video_thumbnails/jackgraydon.png';
import Alpental from '../images/video_thumbnails/Alpental.png';
import Summit from '../images/video_thumbnails/The Summit at Snoqualmie- sprung.png';

const IndexPage = () => (
	<Layout>
		<SEO title="Video Work" />
		<Container>
			<Row style={{ marginTop: '1.5rem' }}>
				<Col
					sm={12}
					md={6}
					lg={4}
					xl={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/wornpath/">
						<img
							src={Wornpath}
							alt="Wornpath"
							// style={{
							// 	webkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	mozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6),'
							// }}
						/>
						<Card.ImgOverlay className="text-center">
							<Card.Title
								style={{
									color: 'white',
									fontSize: '32px',
									fontWeight: '500',
									textShadow: '2px 2px 3px rgba(0,0,0,0.57)',
									width: '100%',
									position: 'absolute',
									top: '80%',
									left: '50%',
									transform: 'translate(-50%, -50%)'
								}}
							>
								Wornpath
							</Card.Title>
						</Card.ImgOverlay>
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					xl={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/prana_manifest_farm/">
						<img
							src={ManifestFarm}
							alt="Prana Manifest Farm"
							// style={{
							// 	webkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	mozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6),'
							// }}
						/>
						<Card.ImgOverlay className="text-center">
							<Card.Title
								style={{
									color: 'white',
									fontSize: '32px',
									fontWeight: '500',
									textShadow: '2px 2px 3px rgba(0,0,0,0.57)',
									width: '100%',
									position: 'absolute',
									top: '80%',
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
					xl={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/bittersland/">
						<img
							src={Bittersland}
							alt="Bittersland"
							// style={{
							// 	webkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	mozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6),'
							// }}
						/>
						<Card.ImgOverlay className="text-center">
							<Card.Title
								style={{
									color: 'white',
									fontSize: '32px',
									fontWeight: '500',
									textShadow: '2px 2px 3px rgba(0,0,0,0.57)',
									width: '100%',
									position: 'absolute',
									top: '80%',
									left: '50%',
									transform: 'translate(-50%, -50%)'
								}}
							>
								Bittersland
							</Card.Title>
						</Card.ImgOverlay>
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					xl={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/cruisingintheleaves/">
						<img
							src={OJLeaves}
							alt="cruisingintheleaves"
							// style={{
							// 	webkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	mozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6),'
							// }}
						/>
						<Card.ImgOverlay className="text-center">
							<Card.Title
								style={{
									color: 'white',
									fontSize: '32px',
									fontWeight: '500',
									textShadow: '2px 2px 3px rgba(0,0,0,0.57)',
									width: '100%',
									position: 'absolute',
									top: '80%',
									left: '50%',
									transform: 'translate(-50%, -50%)'
								}}
							>
								OJ Wheels <br /> Cruising in the Leaves
							</Card.Title>
						</Card.ImgOverlay>
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					xl={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/slimeballs/">
						<img
							src={SlimeBalls}
							alt="Slimeballs"
							// style={{
							// 	webkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	mozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6),'
							// }}
						/>
						<Card.ImgOverlay className="text-center">
							<Card.Title
								style={{
									color: 'white',
									fontSize: '32px',
									fontWeight: '500',
									textShadow: '2px 2px 3px rgba(0,0,0,0.57)',
									width: '100%',
									position: 'absolute',
									top: '80%',
									left: '50%',
									transform: 'translate(-50%, -50%)'
								}}
							>
								Slimeballs
							</Card.Title>
						</Card.ImgOverlay>
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					xl={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/cruisingintherain/">
						<img
							src={OJRain}
							alt="Cruising in the Rain"
							// style={{
							// 	webkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	mozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6),'
							// }}
						/>
						<Card.ImgOverlay className="text-center">
							<Card.Title
								style={{
									color: 'white',
									fontSize: '32px',
									fontWeight: '500',
									textShadow: '2px 2px 3px rgba(0,0,0,0.57)',
									width: '100%',
									position: 'absolute',
									top: '80%',
									left: '50%',
									transform: 'translate(-50%, -50%)'
								}}
							>
								OJ Wheels <br /> Cruising in the Rain
							</Card.Title>
						</Card.ImgOverlay>
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					xl={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/chromeindustries/">
						<img
							src={ChromeIndustries}
							alt="Chrome Industries"
							// style={{
							// 	webkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	mozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6),'
							// }}
						/>
						<Card.ImgOverlay className="text-center">
							<Card.Title
								style={{
									color: 'white',
									fontSize: '32px',
									fontWeight: '500',
									textShadow: '2px 2px 3px rgba(0,0,0,0.57)',
									width: '100%',
									position: 'absolute',
									top: '80%',
									left: '50%',
									transform: 'translate(-50%, -50%)'
								}}
							>
								Chrome
							</Card.Title>
						</Card.ImgOverlay>
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					xl={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/greendream/">
						<img
							src={GreenDream}
							alt="Green Dream"
							// style={{
							// 	webkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	mozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6),'
							// }}
						/>
						<Card.ImgOverlay className="text-center">
							<Card.Title
								style={{
									color: 'white',
									fontSize: '32px',
									fontWeight: '500',
									textShadow: '2px 2px 3px rgba(0,0,0,0.57)',
									width: '100%',
									position: 'absolute',
									top: '80%',
									left: '50%',
									transform: 'translate(-50%, -50%)'
								}}
							>
								Green Dream
							</Card.Title>
						</Card.ImgOverlay>
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					xl={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/jackgraydon/">
						<img
							src={JackGraydon}
							alt="Jack Graydon"
							// style={{
							// 	webkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	mozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6),'
							// }}
						/>
						<Card.ImgOverlay className="text-center">
							<Card.Title
								style={{
									color: 'white',
									fontSize: '32px',
									fontWeight: '500',
									textShadow: '2px 2px 3px rgba(0,0,0,0.57)',
									width: '100%',
									position: 'absolute',
									top: '80%',
									left: '50%',
									transform: 'translate(-50%, -50%)'
								}}
							>
								Jack Graydon
							</Card.Title>
						</Card.ImgOverlay>
					</Link>
				</Col>

				<Col
					sm={12}
					md={6}
					lg={4}
					xl={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/alpental/">
						<img
							src={Alpental}
							alt="Alpental"
							// style={{
							// 	webkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	mozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6),'
							// }}
						/>
						<Card.ImgOverlay className="text-center">
							<Card.Title
								style={{
									color: 'white',
									fontSize: '32px',
									fontWeight: '500',
									textShadow: '2px 2px 3px rgba(0,0,0,0.57)',
									width: '100%',
									position: 'absolute',
									top: '80%',
									left: '50%',
									transform: 'translate(-50%, -50%)'
								}}
							>
								Alpental
							</Card.Title>
						</Card.ImgOverlay>
					</Link>
				</Col>

				<Col
					sm={12}
					md={6}
					lg={4}
					xl={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/summitatsnoqualmie/">
						<img
							src={Summit}
							alt="Summit at Snoqualmie"
							// style={{
							// 	webkitBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	mozBoxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6)',
							// 	boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.6),'
							// }}
						/>
						<Card.ImgOverlay className="text-center">
							<Card.Title
								style={{
									color: 'white',
									fontSize: '32px',
									fontWeight: '500',
									textShadow: '2px 2px 3px rgba(0,0,0,0.57)',
									width: '100%',
									position: 'absolute',
									top: '80%',
									left: '50%',
									transform: 'translate(-50%, -50%)'
								}}
							>
								Summit<br /> at Snoqualmie
							</Card.Title>
						</Card.ImgOverlay>
					</Link>
				</Col>
			</Row>
		</Container>
	</Layout>
);

export default IndexPage;
