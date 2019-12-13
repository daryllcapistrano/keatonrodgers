import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';

const Thrasher = () => (
	<Layout>
		<SEO title="Thrasher Magazine" />
		<Container>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="Burnside Halloween"
					width="100%"
					height="480"
					src="https://www.youtube.com/embed/sCUbL131tc0"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
			<Row>
				<h5 style={{ margin: `auto` }}>Burnside Halloween</h5>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Client: Thrasher Magazine</p>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Film and Edit: Keaton Rodgers and Tyson Vassar</p>
			</Row>
		</Container>
	</Layout>
);

export default Thrasher;
