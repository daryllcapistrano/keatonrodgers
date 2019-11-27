import React from 'react';
// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
// Images
import ContactPhoto from '../images/model1.jpg';

const ContactPage = () => (
	<Layout>
		<SEO title="Contact" />
		<Container>
			<Row>
				<Col
					sm={12}
					md={6}
					lg={6}
					style={{
						padding: '5px'
					}}
				>
					<Container className="text-center">
						<h1>contact info</h1>
						<p>971.347.6704</p>
						<p>keatonrodgers@gmail.com</p>
						<p>@keatonrodgers</p>
					</Container>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={6}
					style={{
						padding: '5px'
					}}
				>
					<Container>
						<img src={ContactPhoto} alt="Keaton Rodgers" />
					</Container>
				</Col>
			</Row>
		</Container>
	</Layout>
);

export default ContactPage;
