import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const PhotoPage = () => (
	<Layout>
		<SEO title="Photo Page" />
		<h1>Hi from the Photo page</h1>
		<p>Welcome to the Photo page</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
);

export default PhotoPage;
