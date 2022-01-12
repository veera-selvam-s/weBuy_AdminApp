import React from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { Row, Col, Container } from 'reactstrap';
import './home.css';
import { NavLink } from 'react-router-dom';
import Layout from '../components/Layout';
import { Container, Carousel } from 'react-bootstrap';
import Orderpic from './Homepic/orders.png';
import Categorypic from './Homepic/category.jpg';
import Productpic from './Homepic/products.webp';

function Home() {
	const order = useSelector((state) => state.order);
	const category = useSelector(state => state.category);
	const product = useSelector((state=> state.product));
	return (
		<Layout sidebar>
			<Container>
				<Carousel>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={Orderpic}
							alt="Orders"
						/>
						<Carousel.Caption>
							<h3>Orders</h3>
							<p>{order.orders.length} orders from customers</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={Categorypic}
							alt="Categories"
						/>

						<Carousel.Caption>
							<h3>Categories</h3>
							<p>{category.categories.length} Main Categories</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={Productpic}
							alt="Products"
						/>

						<Carousel.Caption>
							<h3>Products</h3>
							<p>{product.products.length} products</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Container>
		</Layout>
	)
}

export default Home
