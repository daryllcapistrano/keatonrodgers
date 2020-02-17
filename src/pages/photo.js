import React from 'react';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import SEO from '../components/seo';
import Layout from '../components/layout';
import PhotoGallery from '../components/PhotoGallery';

import 'bootstrap/dist/css/bootstrap.min.css';

const PhotoPage = () => (
	<Layout>
		<SEO title="Photos" />
		<Container
			// quick fix styling to center images on screen
			style={{
				paddingLeft: '24px',
				paddingTop: '20px'
			}}
		>
			<PhotoGallery />
		</Container>
	</Layout>
);

export default PhotoPage;
