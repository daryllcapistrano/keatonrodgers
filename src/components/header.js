import React from 'react';
// import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = ({ siteTitle }) => (
	<Navbar bg="light" expand="lg">
		<Navbar.Brand href="/">Keaton Rodgers</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
			<Nav>
				<Nav.Link href="/">Video</Nav.Link>
				<Nav.Link href="/photo">Photo</Nav.Link>
				<Nav.Link href="/contact">Contact</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
