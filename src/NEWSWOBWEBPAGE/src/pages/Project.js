import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Project = () => (
	<Container className="my-5">
		<h2 className="text-center mb-4">Our Project</h2>
		<Row>
			<Col md={6}>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
			</Col>
			<Col md={6}>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
			</Col>
		</Row>
	</Container>
);

export default Project;
