import React from 'react';
// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = ({ siteTitle }) => (
	<Container>
		<Navbar
			expand="lg"
			style={{
				backgroundColor: 'white',
				padding: '35px 0px 35px'
			}}
			sticky="top"
		>
			<Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
				<Nav>
					<Nav.Link href="/">Video</Nav.Link>
					<Nav.Link href="/photo">Photography</Nav.Link>
					<Nav.Link href="/contact">Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Container>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
