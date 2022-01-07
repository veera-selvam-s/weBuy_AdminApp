import React from 'react';
import Header from './Header';
import { Container, Row, Col, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import WebIcon from '@mui/icons-material/Web';
import CategoryIcon from '@mui/icons-material/Category';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import './Layout.css';

const Layout = (props) => {
  return (
    <>
      <Header />
      {
        props.sidebar ?
          <Container fluid>
            <div class="sidebar">
              <ul>
                <li><NavLink exact to={`/`}><HomeIcon /> Home</NavLink></li>
                <li><NavLink to={`/page`}><WebIcon /> Page</NavLink></li>
                <li><NavLink to={`/category`}><CategoryIcon /> Category</NavLink></li>
                <li><NavLink to={`/products`}><ListAltIcon /> Products</NavLink></li>
                <li><NavLink to={`/orders`}><BorderColorIcon />Orders</NavLink></li>
              </ul>
            </div>
            <div class="content">
              {props.children}
            </div>
            {/* <Row>
              <Col md={2} className="sidebar">
                <ul>
                  <li><NavLink exact to={`/`}>Home</NavLink></li>
                  <li><NavLink to={`/page`}>Page</NavLink></li>
                  <li><NavLink to={`/category`}>Category</NavLink></li>
                  <li><NavLink to={`/products`}>Products</NavLink></li>
                  <li><NavLink to={`/orders`}>Orders</NavLink></li>
                </ul>
              </Col>
              <Col md={10} style={{ marginLeft: 'auto', paddingTop: '60px' }}>
                {props.children}
              </Col>
            </Row> */}
          </Container>
          :
          props.children
      }


    </>
  )

}

export default Layout;