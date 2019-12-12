import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';

const Summit = () => (
	<Layout>
		<SEO title="Sprung" />
		<Container>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="Sprung"
					width="100%"
					height="480px"
					src="https://www.youtube.com/embed/qrr7StlV-b8?autoplay=1"
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
