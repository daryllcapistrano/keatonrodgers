import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';

const Alpental = () => (
	<Layout>
		<SEO title="Alpental" />
		<Container>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="The Qualm"
					width="100%"
					height="480px"
					src="https://www.youtube.com/embed/J2WXVR8tbDc?autoplay=1"
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

export default Alpental;
