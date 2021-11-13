import React from 'react';
import {  Row, Col, Container } from 'reactstrap';
import './home.css';

function Home() {
	return (
		<layout>
			<Container fluid>
				<Row>
					<Col md={2} className="sidebar">Sidebar</Col>
					<Col md={10} style={{ marginLeft: 'auto' }}>container</Col>
				</Row>
			</Container>

		</layout>
		// <Jumbotron>
		//     <h1  style={{textAlign:"center",fontWeight:600}} >Welcome to Admin Dashboard</h1>
		// </Jumbotron>
	)
}

export default Home
