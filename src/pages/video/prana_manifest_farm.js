import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';

const Prana = () => (
	<Layout>
		<SEO title="Prana Manifest Farm" />
		<Container>
			<Row>
				<iframe
					title="Prana Manifest Farm"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/fXV8AEs1IdQ"
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

export default Prana;
