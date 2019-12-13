import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';

const CCS = () => (
	<Layout>
		<SEO title="CCS" />
		<Container>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="Hubbaberg"
					width="100%"
					height="480"
					src="https://www.youtube.com/embed/Chizcoy1s2k?"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
			<Row>
				<h5 style={{ margin: `auto` }}>Hubbaberg</h5>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Client: CCS</p>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Camera Operators: Keaton Rodgers & Chris Varcadipane</p>
			</Row>
			<Row style={{ paddingBottom: `30px` }}>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Edit: Chris Varcadipane</p>
			</Row>
		</Container>

		<Container>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="Go Skate Day 2018"
					width="100%"
					height="480"
					src="https://www.youtube.com/embed/5_1BHfPnQds"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
			<Row>
				<h5 style={{ margin: `auto` }}>Go Skateboarding Day 2018</h5>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Client: CCS</p>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>
					Camera Operators: Keaton Rodgers, Chris Varcadipane, Myles Laurion
				</p>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Edit: Chris Varcadipane</p>
			</Row>
		</Container>
	</Layout>
);

export default CCS;
