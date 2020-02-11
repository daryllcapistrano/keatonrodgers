import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'gatsby';

const Prana = () => (
	<Layout>
		<SEO title="Prana Manifest Farm" />
		<Container>
			<Link
				to="/"
				style={{
					color: '#000000',
					padding: '10px'
				}}
			>
				Back
			</Link>
			<Link
				to="/video/bittersland/"
				style={{
					color: '#000000',
					padding: '10px'
				}}
			>
				Next
			</Link>
		</Container>
		<Container>
			<Row style={{ justifyContent: 'center' }}>
				<div style={{ width: 660, height: 'auto' }}>
					<ResponsiveEmbed aspectRatio="16by9">
						<iframe
							title="Prana Manifest Farm"
							src="https://www.youtube.com/embed/fXV8AEs1IdQ"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen="true"
						>
							...
						</iframe>
					</ResponsiveEmbed>
				</div>
			</Row>

			<Row>
				<h5 style={{ margin: `auto` }}>Prana Manifest Farm</h5>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Client: Prana</p>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Film & Edit: Keaton Rodgers</p>
			</Row>
		</Container>
	</Layout>
);

export default Prana;
