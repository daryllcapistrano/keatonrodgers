import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import SEO from '../components/seo';
import Layout from '../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';

const OJ = () => (
	<Layout>
		<SEO title="OJs Cruising in the Rain" />
		<Container>
			<Row>
				<iframe
					title="OJs Cruising in the Rain"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/fQgDbC9H9ag"
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

export default OJ;
