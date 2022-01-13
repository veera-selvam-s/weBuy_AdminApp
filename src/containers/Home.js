import React from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { Row, Col, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Layout from '../components/Layout';
import { Container, Carousel } from 'react-bootstrap';
import Orderpic from './Homepic/orders.png';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Categorypic from './Homepic/category.jpg';
import CategoryIcon from '@mui/icons-material/Category';
import Productpic from './Homepic/products.webp';
import ListAltIcon from '@mui/icons-material/ListAlt';
import './home.css';

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
							<h2 className="car-title"><BorderColorIcon />Orders</h2>
							<h4 className="car-detail">{order.orders.length} orders from customers</h4>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={Categorypic}
							alt="Categories"
						/>

						<Carousel.Caption>
							<h2 className="car-title"><CategoryIcon />Categories</h2>
							<h4 className="car-detail">{category.categories.length} Main Categories</h4>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={Productpic}
							alt="Products"
						/>

						<Carousel.Caption>
							<h2 className="car-title"><ListAltIcon />Products</h2>
							<h4 className="car-detail">{product.products.length} products</h4>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Container>
		</Layout>
	)
}

export default Home
