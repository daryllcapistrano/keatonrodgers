import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'gatsby';

const Wornpath = () => (
	<Layout>
		<SEO title="Wornpath" />
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
					to="/video/prana_manifest_farm/"
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
							title="Wornpath"
							src="https://www.youtube.com/embed/cpuSnsD_ZOg?modestbranding=1"
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
				<h5 style={{ margin: `auto` }}>Wornpath</h5>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Client: Wornpath</p>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Film & Edit: Keaton Rodgers</p>
			</Row>
		</Container>
	</Layout>
);

export default Wornpath;
