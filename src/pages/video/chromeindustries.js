import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'gatsby';

const ChromeIndustries = () => (
	<Layout>
		<SEO title="Chrome Industries" />
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
					to="/video/greendream/"
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
			<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
				<div style={{ width: 660, height: 'auto' }}>
					<ResponsiveEmbed aspectRatio="16by9">
						<iframe
							title="Shorts Stories - Pocket"
							src="https://www.youtube.com/embed/XmNUroFU0lc"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen="true"
						>
							...
						</iframe>
					</ResponsiveEmbed>
				</div>
			</Row>
			<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
				<div style={{ width: 660, height: 'auto' }}>
					<ResponsiveEmbed aspectRatio="16by9">
						<iframe
							title="Shorts Stories - Water Resistance"
							src="https://www.youtube.com/embed/8WCbwy9DpII"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen="true"
						>
							...
						</iframe>
					</ResponsiveEmbed>
				</div>
			</Row>
			<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
				<div style={{ width: 660, height: 'auto' }}>
					<ResponsiveEmbed aspectRatio="16by9">
						<iframe
							title="Shorts Stories - U Lock"
							src="https://www.youtube.com/embed/WrBE1s6HSo4"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen="true"
						>
							...
						</iframe>
					</ResponsiveEmbed>
				</div>
			</Row>
			<Row style={{ justifyContent: 'center' }}>
				<div style={{ width: 660, height: 'auto' }}>
					<ResponsiveEmbed aspectRatio="16by9">
						<iframe
							title="Shorts Stories - Tow"
							src="https://www.youtube.com/embed/_8menJ4w7hs"
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
					<h5>Shorts Stories</h5>
				</li>
				<li style={{ fontSize: `12px`, margin: `auto`, padding: '2px' }}>
					<p>Client: Chrome Industries</p>
				</li>
				<li style={{ fontSize: `12px`, margin: `auto`, padding: '2px' }}>
					<p>Director: Keaton Rodgers</p>
				</li>
			</Container>
		</Container>
	</Layout>
);

export default ChromeIndustries;
