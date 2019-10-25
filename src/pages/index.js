// import React, { Component } from 'react';
import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
// import Image from '../components/image';
import Prana from '../images/video_thumbnails/prana_manifest_farm.png';
import Bitters from '../images/video_thumbnails/Screen Shot 2019-06-26 at 6.56.27 PM.png';
import OJ from '../images/video_thumbnails/rainthumb.png';
import Chrome from '../images/video_thumbnails/chromeindustries.png';
import GreenDream from '../images/video_thumbnails/greendream.png';
import JackGraydon from '../images/video_thumbnails/jackgraydon.png';
import CCS from '../images/video_thumbnails/CCS.png';
import Alpental from '../images/video_thumbnails/Alpental.png';
import Thrasher from '../images/video_thumbnails/thrasher.png';
import Summit from '../images/video_thumbnails/The Summit at Snoqualmie- sprung.png';

import SEO from '../components/seo';

import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<ul>
			<li>
				<a class="" href="https://www.youtube.com/watch?v=fXV8AEs1IdQ">
					<img src={Prana} alt="Prana Manifest Farm" />
				</a>
			</li>
			<li>
				<a class="" href="https://www.youtube.com/watch?v=J-zFcJ0rMTM">
					<img src={Bitters} alt="Bittersland" />
				</a>
			</li>
			<li>
				<a class="" href="https://www.youtube.com/watch?v=fQgDbC9H9ag">
					<img src={OJ} alt="OJs Cruisin" />
				</a>
			</li>
			<li>
				<a class="" href="https://www.youtube.com/watch?v=fXV8AEs1IdQ">
					<img src={Chrome} alt="Chrome Industries" />
				</a>
			</li>
			<li>
				<a class="" href="https://www.youtube.com/watch?v=J-zFcJ0rMTM">
					<img src={GreenDream} alt="Green Dream" />
				</a>
			</li>
			<li>
				<a class="" href="https://www.youtube.com/watch?v=fQgDbC9H9ag">
					<img src={JackGraydon} alt="Jack Graydon" />
				</a>
			</li>
			<li>
				<a class="" href="https://www.youtube.com/watch?v=fQgDbC9H9ag">
					<img src={CCS} alt="CCS" />
				</a>
			</li>
			<li>
				<a class="" href="https://www.youtube.com/watch?v=fQgDbC9H9ag">
					<img src={Alpental} alt="Alpental" />
				</a>
			</li>
			<li>
				<a class="" href="https://www.youtube.com/watch?v=fQgDbC9H9ag">
					<img src={Thrasher} alt="Thrasher Magazine" />
				</a>
			</li>
			<li>
				<a class="" href="https://www.youtube.com/watch?v=fQgDbC9H9ag">
					<img src={Summit} alt="The Summit at Snoqualmie" />
				</a>
			</li>
		</ul>
	</Layout>
);

export default IndexPage;
