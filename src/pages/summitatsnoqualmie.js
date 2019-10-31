import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import SEO from '../components/seo';
import Layout from '../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';

const Summit = () => (
	<Layout>
		<SEO title="Sprung" />
		<Container>
			<Row>
				<iframe
					title="Sprung"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/qrr7StlV-b8"
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

export default Summit;
