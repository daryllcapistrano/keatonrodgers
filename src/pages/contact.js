// import React, { Component } from 'react';
import React from 'react';
// import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from '../components/layout';

// import Image from '../components/image';
import Prana from '../images/video_thumbnails/prana_manifest_farm.png';

import OJ from '../images/video_thumbnails/rainthumb.png';

import SEO from '../components/seo';

import 'bootstrap/dist/css/bootstrap.min.css';

const ContactPage = () => (
	<Layout>
		<SEO title="Contact" />
		<Container>
			<Row>
				<Col sm={12} md={6} lg={6}>
					<a class="" href="https://www.youtube.com/watch?v=fXV8AEs1IdQ">
						<img src={Prana} alt="Prana Manifest Farm" />
					</a>
				</Col>
			</Row>
			<Row>
				<Col sm={12} md={6} lg={6}>
					<a class="" href="https://www.youtube.com/watch?v=fQgDbC9H9ag">
						<img src={OJ} alt="OJs Cruisin" />
					</a>
				</Col>
			</Row>
		</Container>
	</Layout>
);

export default ContactPage;
