import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';

const Thrasher = () => (
	<Layout>
		<SEO title="Thrasher Magazine" />
		<Container>
			<Row>
				<iframe
					title="Thrasher Magazine"
					width="100%"
					height="480px"
					src="https://www.youtube.com/embed/sCUbL131tc0?autoplay=1"
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

export default Thrasher;
