import React from 'react';
import {  Row, Col, Container } from 'reactstrap';
import './home.css';
import {NavLink} from 'react-router-dom';
import Layout from '../components/Layout';

function Home() {
	return (
		<Layout>
			<Container fluid>
				<Row>
					<Col md={2} className="sidebar">
						<ul>
							<li><NavLink to={`/`}>Home</NavLink></li>
							<li><NavLink to={`/products`}>products</NavLink></li>
							<li><NavLink to={`/orders`}>Orders</NavLink></li>
						</ul>
					</Col>
					<Col md={10} style={{ marginLeft: 'auto' }}>container</Col>
				</Row>
			</Container>

		</Layout>
		// <Jumbotron>
		//     <h1  style={{textAlign:"center",fontWeight:600}} >Welcome to Admin Dashboard</h1>
		// </Jumbotron>
	)
}

export default Home
