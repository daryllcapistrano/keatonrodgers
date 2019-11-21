import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import SEO from '../components/seo';
import Layout from '../components/layout';
import PhotoGallery from '../components/PhotoGallery';

import 'bootstrap/dist/css/bootstrap.min.css';

const RenameThis = () => (
	<Layout>
		<SEO title="RenameThis" />
		<Container>
			<Row>
				<div>
					<PhotoGallery />
				</div>
			</Row>
		</Container>
	</Layout>
);

export default RenameThis;
