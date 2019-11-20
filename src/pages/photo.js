import React from 'react';
import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from '../components/layout';

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
						<img src="../../static/action thumbnail-08df447f7a568b1c096c721117aa1fc0.jpg" alt="Action" />
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
						<img src="../../static/architecturethumbnail-16916413f0ae96793bde9587507ca742.jpg" alt="Architecture" />
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
						<img src="../../static/poler thumbnail-4aceb9af7b940f3c416dda4197932757.jpg" alt="Poler" />
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
						<img src="../../static/portraitthumbnail-2e6e67ebb3f9822f78434e4769337c42.jpg" alt="Portrait" />
					</Link>
				</Col>
			</Row>
		</Container>
	</Layout>
);

export default PhotoPage;
