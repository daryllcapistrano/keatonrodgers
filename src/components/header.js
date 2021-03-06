import React from 'react';
// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
	<Container>
		<Helmet>
			<link href="https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap" rel="stylesheet" />
			<script src="https://use.fontawesome.com/53c5530bdf.js" />
		</Helmet>
		<Navbar
			expand="sm"
			style={{
				backgroundColor: 'white',
				padding: '0px 15px',
				zIndex: '0', // change to unhide nav on modal show
				fontFamily: 'Poppins'
			}}
			sticky="top"
		>
			<Navbar.Brand
				href="/"
				style={{
					letterSpacing: '2px',
					fontSize: '2rem',
					fontWeight: '700',
					margin: '0px'
				}}
			>
				{siteTitle}
			</Navbar.Brand>
			<Navbar.Toggle
				aria-controls="basic-navbar-nav"
				style={{
					borderColor: '#ffffff',
					width: '100%'
				}}
			>
				<span
					class="fa fa-lg fa-bars"
					aria-hidden="true"
					style={{
						color: '#000000',
						paddingTop: '10px'
					}}
				/>
			</Navbar.Toggle>
			<Container>
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end text-center">
					<Nav>
						<Link
							to="/"
							style={{
								color: '#000000',
								padding: '10px'
							}}
						>
							VIDEO
						</Link>
						<Link
							to="/photo/"
							style={{
								color: '#000000',
								padding: '10px'
							}}
						>
							PHOTO
						</Link>
						<Link
							to="/contact/"
							style={{
								color: '#000000',
								padding: '10px'
							}}
						>
							CONTACT
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
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
