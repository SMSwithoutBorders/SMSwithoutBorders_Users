import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => (
	<Navbar bg="dark" variant="dark" expand="lg" className="mb-5">
		<Navbar.Brand as={Link} to="/">Project Website</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="ml-auto">
				<Nav.Link as={Link} to="/">Home</Nav.Link>
				<Nav.Link as={Link} to="/features">Features</Nav.Link>
				<Nav.Link as={Link} to="/about">About</Nav.Link>
				<Nav.Link as={Link} to="/project">Project</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default NavbarComponent;
