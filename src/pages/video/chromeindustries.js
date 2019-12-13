import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';

const ChromeIndustries = () => (
	<Layout>
		<SEO title="Chrome Industries" />
		<Container>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="Shorts Stories - Pocket"
					width="100%"
					height="480"
					src="https://www.youtube.com/embed/XmNUroFU0lc"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="Shorts Stories - U Lock"
					width="100%"
					height="480"
					src="https://www.youtube.com/embed/WrBE1s6HSo4"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="Shorts Stories - Tow"
					width="100%"
					height="480"
					src="https://www.youtube.com/embed/_8menJ4w7hs"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
			<Row>
				<h5 style={{ margin: `auto` }}>Shorts Stories</h5>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Client: Chrome Industries</p>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Director: Keaton Rodgers</p>
			</Row>
		</Container>
	</Layout>
);

export default ChromeIndustries;
