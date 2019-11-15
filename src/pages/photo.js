import React from 'react';
import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from '../components/layout';

// import Image from '../components/image';
import Action from '../images/photo_thumbnails/action thumbnail.jpg';
import Architecture from '../images/photo_thumbnails/architecturethumbnail.jpg';
import Poler from '../images/photo_thumbnails/poler thumbnail.jpg';
import Portrait from '../images/photo_thumbnails/portraitthumbnail.jpg';

import SEO from '../components/seo';

import 'bootstrap/dist/css/bootstrap.min.css';

const PhotoPage = () => (
	<Layout>
		<SEO title="Photos" />
		<Container>
			<Row>
				<Col
					sm={12}
					md={6}
					lg={6}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/photography/action/">
						<img src={Action} alt="Action" />
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={6}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/photography/architecture/">
						<img src={Architecture} alt="Architecture" />
					</Link>
				</Col>
			</Row>
			<Row>
				<Col
					sm={12}
					md={6}
					lg={6}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/photography/poler/">
						<img src={Poler} alt="Poler" />
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={6}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/photography/portrait/">
						<img src={Portrait} alt="Portrait" />
					</Link>
				</Col>
			</Row>
		</Container>
	</Layout>
);

export default PhotoPage;
