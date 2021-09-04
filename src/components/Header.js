import React from 'react'
import { Navbar,Nav,Container, }  from 'react-bootstrap';
import {NavLink,Link} from 'react-router-dom';

function Header() {
    return (
        <>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    {/* <Navbar.Brand >Admin DashBoard</Navbar.Brand> */}
                    <Link to="/" className="navbar-brand">Admin DashBoard</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <li className="nav-item">
                                <NavLink to="/Signin" className="nav-link">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Signup" className="nav-link">Signup</NavLink>
                            </li>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </>
    )
}

export default Header
