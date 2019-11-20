import React from 'react';
import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Layout from '../components/layout';

import SEO from '../components/seo';

import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
	<Layout>
		<SEO title="Video Work" />
		<Container>
			<Row>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/prana_manifest_farm/">
						<img
							src="../../static/prana_manifest_farm-1d4e92cbc315a18832b2bb95dd261c67.png"
							alt="Prana Manifest Farm"
						/>
						<Card.ImgOverlay className="text-center">
							<Card.Title
								style={{
									color: 'white',
									fontSize: '40px',
									width: '100%',
									position: 'absolute',
									top: '50%',
									left: '50%',
									transform: 'translate(-50%, -50%)'
								}}
							>
								Manifest Farm
							</Card.Title>
						</Card.ImgOverlay>
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/bittersland/">
						<img
							src="../../static/Screen Shot 2019-06-26 at 6.56.27 PM-fdaa1d8c0a415f9a741d131e08250201.png"
							alt="Bittersland"
						/>
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/cruisingintherain/">
						<img src="../../static/rainthumb-28e162c7d7c85ed3a272a9bf18a0e4b3.png" alt="Cruising in the Rain" />
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/chromeindustries/">
						<img src="../../static/chromeindustries-58ed57e84737453f1eac16261cee2f7c.png" alt="Chrome Industries" />
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/greendream/">
						<img src="../../static/greendream-7f09b0b5919904a4de37f0f0dff4102f.png" alt="Green Dream" />
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/jackgraydon/">
						<img src="../../static/jackgraydon-2450058223da44fceccf67ca153079de.png" alt="Jack Graydon" />
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/ccs/">
						<img src="../../static/CCS-ef15a145827871a474971cb22372bb5c.png" alt="CCS" />
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/alpental/">
						<img src="../../static/Alpental-33b4fd5b6e239eb7c7c98729b3760236.png" alt="Alpental" />
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/thrasher/">
						<img src="../../static/thrasher-83c9ee1e7383803a9ed04b6c9dfeda94.png" alt="Thrasher" />
					</Link>
				</Col>
				<Col
					sm={12}
					md={6}
					lg={4}
					style={{
						padding: '5px'
					}}
				>
					<Link to="/video/summitatsnoqualmie/">
						<img
							src="../../static/The Summit at Snoqualmie- sprung-e539868e30d606b3e3ac3ac29a6c9774.png"
							alt="Summit at Snoqualmie"
						/>
					</Link>
				</Col>
			</Row>
		</Container>
	</Layout>
);

export default IndexPage;
