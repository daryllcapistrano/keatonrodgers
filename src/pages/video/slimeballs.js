import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'gatsby';

const Slimeballs = () => (
	<Layout>
		<SEO title="Slimeballs" />
		<Container>
			<Link
				to="/video/cruisingthroughtheleaves/"
				style={{
					color: '#000000',
					padding: '10px'
				}}
			>
				Previous
			</Link>
			<Link
				to="/video/cruisingintherain/"
				style={{
					color: '#000000',
					padding: '10px'
				}}
			>
				Next
			</Link>
		</Container>
		<Container>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="SlimeballsPromo1"
					width="100%"
					height="480"
					src="https://www.youtube.com/embed/mo8VYHI6aes"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="SlimeballsPromo2"
					width="100%"
					height="480"
					src="https://www.youtube.com/embed/q25eR8f1yro"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="SlimeballsPromo3"
					width="100%"
					height="480"
					src="https://www.youtube.com/embed/m13QqtAeHxc"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="SlimeballsPromo4"
					width="100%"
					height="480"
					src="https://www.youtube.com/embed/CjxfdhOvT4k"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="SlimeballsPromo5"
					width="100%"
					height="480"
					src="https://www.youtube.com/embed/69BABGRWz0o"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="SlimeballsPromo6"
					width="100%"
					height="480"
					src="https://www.youtube.com/embed/BYYeqrtZqCg"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="SlimeballsPromo7"
					width="100%"
					height="480"
					src="https://www.youtube.com/embed/yK9CS95xQjA"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="SlimeballsPromo8"
					width="100%"
					height="480"
					src="https://www.youtube.com/embed/R23jFPaaNLE"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
			<Row class="embed-responsive embed-responsive-16by9">
				<iframe
					title="SlimeballsPromo9"
					width="100%"
					height="480"
					src="https://www.youtube.com/embed/yjHIyzIhBUM"
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				>
					...
				</iframe>
			</Row>
			<Row>
				<h5 style={{ margin: `auto` }}>Slimeballs</h5>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Client: OJ Wheels</p>
			</Row>
			<Row>
				<p style={{ fontSize: `12px`, margin: `auto` }}>Film & Edit: Keaton Rodgers</p>
			</Row>
		</Container>
	</Layout>
);

export default Slimeballs;
