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
						// override default padding
						padding: '0px'
					}}
				>
					<Container className="text-center">
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
						// override default padding
						padding: '0px'
					}}
				>
					<Container>
						<img
							src={ContactPhoto}
							alt="Keaton Rodgers"
							// style={{
							// 	margin: `0 auto`,
							// 	padding: `0px 1.0875rem 1.45rem`,
							// 	width: `100%`
							// }}
						/>
					</Container>
				</Col>
			</Row>
		</Container>
	</Layout>
);

export default ContactPage;
