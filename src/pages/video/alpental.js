import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'gatsby';

const Alpental = () => (
	<Layout>
		<SEO title="Alpental" />
		<Container>
			<Link
				to="/video/jackgraydon/"
				style={{
					color: '#000000',
					padding: '10px'
				}}
			>
				Previous
			</Link>
			<Link
				to="/video/summitatsnoqualmie/"
				style={{
					color: '#000000',
					padding: '10px'
				}}
			>
				Next
			</Link>
		</Container>
		<Container>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="The Qualm"
					width="100%"
					height="480"
					src="https://www.youtube.com/embed/J2WXVR8tbDc"
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
				<p style={{ fontSize: `12px`, margin: `auto` }}>Client: Alpental</p>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Film & Edit: Keaton Rodgers</p>
			</Row>
		</Container>
	</Layout>
);

export default Alpental;
