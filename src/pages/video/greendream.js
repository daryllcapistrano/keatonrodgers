import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';

const GreenDream = () => (
	<Layout>
		<SEO title="Green Dream" />
		<Container>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="Green Dream Promotional"
					width="100%"
					height="480"
					src="https://www.youtube.com/embed/EYzWnZchDNg"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
			<Row>
				<h5 style={{ margin: `auto` }}>Green Dream Promotional</h5>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Client: Green Dream</p>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Director: Keaton Rodgers</p>
			</Row>
		</Container>
	</Layout>
);

export default GreenDream;
