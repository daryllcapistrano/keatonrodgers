import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'gatsby';

const OJ = () => (
	<Layout>
		<SEO title="OJs Cruising in the Rain" />
		<Container>
			<Row style={{ justifyContent: 'center' }}>
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
					to="/video/chromeindustries/"
					style={{
						color: '#000000',
						padding: '10px'
					}}
				>
					Next
				</Link>
			</Row>
		</Container>
		<Container>
			<Row style={{ justifyContent: 'center' }}>
				<div style={{ width: 660, height: 'auto' }}>
					<ResponsiveEmbed aspectRatio="16by9">
						<iframe
							title="OJs Cruising in the Rain"
							src="https://www.youtube.com/embed/fQgDbC9H9ag"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen="true"
						>
							...
						</iframe>
					</ResponsiveEmbed>
				</div>
			</Row>

			<Container style={{ padding: '10px', textAlign: 'center' }}>
				<li style={{ margin: `auto`, padding: '2px' }}>
					<h5>Cruising in the Rain</h5>
				</li>
				<li style={{ fontSize: `12px`, margin: `auto`, padding: '2px' }}>
					<p>Client: OJ Wheels</p>
				</li>
				<li style={{ fontSize: `12px`, margin: `auto`, padding: '2px' }}>
					<p>Film & Edit: Keaton Rodgers</p>
				</li>
			</Container>
		</Container>
	</Layout>
);

export default OJ;
