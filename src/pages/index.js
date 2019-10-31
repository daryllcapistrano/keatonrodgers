import React from 'react';
import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from '../components/layout';

import Prana from '../images/video_thumbnails/prana_manifest_farm.png';
import Bitters from '../images/video_thumbnails/Screen Shot 2019-06-26 at 6.56.27 PM.png';
import OJ from '../images/video_thumbnails/rainthumb.png';
import Chrome from '../images/video_thumbnails/chromeindustries.png';
import GreenDream from '../images/video_thumbnails/greendream.png';
import JackGraydon from '../images/video_thumbnails/jackgraydon.png';
import CheapSkates from '../images/video_thumbnails/CCS.png';
import Alpental from '../images/video_thumbnails/Alpental.png';
import Thrasher from '../images/video_thumbnails/thrasher.png';
import Summit from '../images/video_thumbnails/The Summit at Snoqualmie- sprung.png';

import SEO from '../components/seo';

import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
	<Layout>
		<SEO title="Video Work" />
		<Container>
			<Row>
				<Col sm={12} md={6} lg={4}>
					<Link to="/prana_manifest_farm/">
						<img src={Prana} alt="Prana Manifest Farm" />
					</Link>
				</Col>
				<Col sm={12} md={6} lg={4}>
					<Link to="/bittersland/">
						<img src={Bitters} alt="Bittersland" />
					</Link>
				</Col>
				<Col sm={12} md={6} lg={4}>
					<Link to="/cruisingintherain/">
						<img src={OJ} alt="Cruising in the Rain" />
					</Link>
				</Col>
				<Col sm={12} md={6} lg={4}>
					<Link to="/chromeindustries/">
						<img src={Chrome} alt="Chrome Industries" />
					</Link>
				</Col>
				<Col sm={12} md={6} lg={4}>
					<Link to="/greendream/">
						<img src={GreenDream} alt="Green Dream" />
					</Link>
				</Col>
				<Col sm={12} md={6} lg={4}>
					<Link to="/jackgraydon/">
						<img src={JackGraydon} alt="Jack Graydon" />
					</Link>
				</Col>
				<Col sm={12} md={6} lg={4}>
					<Link to="/ccs/">
						<img src={CheapSkates} alt="CCS" />
					</Link>
				</Col>
				<Col sm={12} md={6} lg={4}>
					<Link to="/alpental/">
						<img src={Alpental} alt="Alpental" />
					</Link>
				</Col>
				<Col sm={12} md={6} lg={4}>
					<Link to="/thrasher/">
						<img src={Thrasher} alt="Thrasher" />
					</Link>
				</Col>
				<Col sm={12} md={6} lg={4}>
					<Link to="/summitatsnoqualmie/">
						<img src={Summit} alt="Summit at Snoqualmie" />
					</Link>
				</Col>
			</Row>
		</Container>
	</Layout>
);

export default IndexPage;
