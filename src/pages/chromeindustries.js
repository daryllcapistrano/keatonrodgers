import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import SEO from '../components/seo';
import Layout from '../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';

const ChromeIndustries = () => (
	<Layout>
		<SEO title="Chrome Industries" />
		<Container>
			<Row>
				<iframe
					title="Chrome Industries"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/XmNUroFU0lc"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
		</Container>
	</Layout>
);

export default ChromeIndustries;
