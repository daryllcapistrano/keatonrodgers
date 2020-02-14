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
					xs={12}
					sm={6}
					md={6}
					lg={6}
					style={{
						// override default padding
						padding: '0px'
					}}
				>
					<Container style={{ padding: '5px 30px 5px 30px' }}>
						<li>
							<a
								href="tel:"
								style={{
									color: '#000000',
									padding: '5px',
									margin: '0px'
								}}
							>
								<span class="fa fa-lg fa-mobile" aria-hidden="true" />
								971.347.6704
							</a>
						</li>
						<li>
							<a
								href="mailto:"
								style={{
									color: '#000000',
									padding: '5px',
									margin: '0px'
								}}
							>
								<span class="fa fa-lg fa-envelope-o" aria-hidden="true" />
								keatonrodgers@gmail.com
							</a>
						</li>
						<li>
							{' '}
							<a
								href="https://www.instagram.com/keatonrodgers"
								style={{
									color: '#000000',
									padding: '5px',
									margin: '0px'
								}}
							>
								<span class="fa fa-lg fa-instagram" aria-hidden="true" />
								@keatonrodgers
							</a>
						</li>
					</Container>
				</Col>
				<Col
					xs={12}
					sm={6}
					md={6}
					lg={6}
					style={{
						// override default padding
						padding: '0px'
					}}
				>
					<Container>
						<Container style={{}}>
							<img
								src={ContactPhoto}
								alt="Keaton Rodgers"
								style={{
									margin: `auto`,
									width: `100%`,
									float: `center`
								}}
							/>
						</Container>
					</Container>
				</Col>
			</Row>
		</Container>
	</Layout>
);

export default ContactPage;
