import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../../../CustomLink';
import Logo from '../../../icon/icon1.jpg';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar className='navber py-0 shadow-sm' sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className='nav-brand' href="#home"><h3><img src={Logo} alt="imaige" /><strong className='ms-0'>T</strong>oys</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <CustomLink className="nav-item nav-link mx-3 my-1" to="/home"> <FontAwesomeIcon className='me-1 text-secondary' icon={faHome} />Home</CustomLink>
                            <CustomLink className="nav-item nav-link mx-3 my-1" to="/blogs">Blogs</CustomLink>
                            <CustomLink className="nav-item nav-link mx-3 my-1" to="/inventory">Inventory</CustomLink>
                            <CustomLink className="nav-item nav-link mx-3 my-1" to="/addItem">Add Item<span className='offer-masage'>20% off for you</span></CustomLink>
                        </Nav>
                        
                        <Nav className="ms-auto">
                        <CustomLink className="nav-item nav-link mx-3 my-2 " to="/manageItem">Manage Item</CustomLink>
                            <CustomLink className="nav-item nav-link mx-3 my-2 " to="/myItem">My Item</CustomLink>
                            <customLink className="nav-item n" to="/login"><Button style={{margin:"0"}} id='login-btn'>Login /SignIn</Button></customLink>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;