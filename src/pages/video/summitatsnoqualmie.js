import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';

const Summit = () => (
	<Layout>
		<SEO title="Sprung" />
		<Container>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="Sprung"
					width="100%"
					height="480"
					src="https://www.youtube.com/embed/qrr7StlV-b8"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
			<Row>
				<h5 style={{ margin: `auto` }}>The Qualm</h5>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Client: The Summit at Snoqualmie</p>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Film and Edit: Keaton Rodgers</p>
			</Row>
		</Container>
	</Layout>
);

export default Summit;
