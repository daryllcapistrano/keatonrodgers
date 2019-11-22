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
			<Row>
				<iframe
					title="Chrome Industries"
					width="100%"
					height="480px"
					src="https://www.youtube.com/embed/XmNUroFU0lc?autoplay=1"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
			<Row>
				<iframe
					title="Chrome Industries"
					width="100%"
					height="480px"
					src="https://www.youtube.com/embed/WrBE1s6HSo4"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
			<Row>
				<iframe
					title="Chrome Industries"
					width="100%"
					height="480px"
					src="https://www.youtube.com/embed/_8menJ4w7hs"
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
