import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignOut } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../../../CustomLink';
import Logo from '../../../icon/icon1.jpg';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init/Firebase.init';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div>
            <Navbar className='navber py-0 shadow-sm' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className='nav-brand' as={Link} to='/home'><h3><img src={Logo} alt="imaige" /><strong className='ms-0'>T</strong>oys</h3></Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <CustomLink className="nav-item nav-link mx-3 my-1" to="/home"> <FontAwesomeIcon className='me-1 text-secondary' icon={faHome} />Home</CustomLink>
                            <CustomLink className="nav-item nav-link mx-3 my-1" to="/blogs">Blogs</CustomLink>
                            <CustomLink className="nav-item nav-link mx-3 my-1" to="/addItem">Add Item<span className='offer-masage'>20% off for you</span></CustomLink>
                        </Nav>

                        <Nav className="ms-auto">
                            <CustomLink className="nav-item nav-link mx-3 my-2 " to="/manageInventorys">Manage Inventory</CustomLink>
                            <CustomLink className="nav-item nav-link mx-3 my-2 " to="/myItem">My Item</CustomLink>
                            {
                              !user ? <CustomLink className="nav-item ms-3" to="/login"><Button style={{ margin: "0" }} id='login-btn'> Login /SignIn</Button></CustomLink> :
                                <p onClick={()=>signOut(auth)} className="nav-item ms-3"><Button style={{ margin: "0" }} id='login-btn'><FontAwesomeIcon style={{left:"40%",marginRight:"10px"}} icon={faSignOut} color='#fff'></FontAwesomeIcon>Log Out</Button></p>
                            }
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;