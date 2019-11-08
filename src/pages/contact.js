import React from 'react';
// import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from '../components/layout';

import ContactPhoto from '../images/model1.jpg';

import SEO from '../components/seo';

import 'bootstrap/dist/css/bootstrap.min.css';

const ContactPage = () => (
	<Layout>
		<SEO title="Contact" />
		<Container>
			<Row>
				<Col sm={12} md={6} lg={6}>
					<img src={ContactPhoto} alt="Keaton Rodgers" />
				</Col>
				<Col sm={12} md={6} lg={6}>
					<h1 className="text-center">contact info</h1>
				</Col>
			</Row>
		</Container>
	</Layout>
);

export default ContactPage;
