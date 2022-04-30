import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../../../icon/icon2-removebg-preview.png';
import './Fotter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGoogle, faGithub, faLinkedin, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeCircleCheck, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    var todayDate = new Date().toISOString().slice(0, 10);
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 col-xs-12">
                            <div className="first text-start">
                                <h3 className='text-center'> <img className='w-25' src={footerImg} alt="img" /> </h3>
                                <h1 ><h5>Aboute this warehouse</h5></h1>
                                <p className=''> It was originally designed for those who want to do business with toys. All kinds of toys are stored here. You can store toys here if you want. This will improve your business. Hope you understand, thank you for our target.</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-xs-12">
                            <div className="first">
                                <h4>Nevigate</h4>
                                <Link to='/home' className='d-block my-2 link'> Home</Link>
                                <Link to='/manageItem' className='d-block my-2 link'> Manage Item</Link>
                                <Link to='/addItem' className='d-block my-2 link'> Add Item</Link>
                                <Link to='/blogs' className='d-block my-2 link'> Blogs</Link>
                                <Link to='/myAccount' className='d-block my-2 link'> My Account</Link>
                                <Link to='/myItem' className='d-block my-2 link'> My Item</Link>
                            </div>
                        </div>

                        <div className="col-md-4 col-xs-12">
                            <div className="first text-start">
                                <h4 className='text-center'>Contuct</h4>
                                <p> <FontAwesomeIcon icon={faPhone} color='#09AEEC' size='xl'></FontAwesomeIcon> Phone : 0 1 7 5 4 - 1 0 2 7 2 6</p>
                                <p> <FontAwesomeIcon icon={faEnvelopeCircleCheck} color='green' size="xl"></FontAwesomeIcon> Email : biplobhossen6020@gmail.com</p>
                                <p> <FontAwesomeIcon icon={faFacebook} size="xl" color='#528BFF' /> Facebook : https://www.facebook.com/mdbiplob.hossen.3323/</p>
                                <p> <FontAwesomeIcon icon={faInstagram} size="xl" color='#5F6D9E' /> Instragrme : https://www.instagram.com/mdbiplob462/</p>
                            </div>
                        </div>

                        <div className="col-md-4 col-xs-12">

                        </div>



                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="line"></div>
                            <div className="fotter-icon">
                                <div> <p className="copyright">Toys warehouse &#169; {todayDate}</p></div>
                                <div className="socialbtns">
                                    <p>Fllow Us</p>
                                    <a href="https://mail.google.com/mail/u/0/#inbox" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className='iconSocial' color='#DD4B39' icon={faGoogle} size='xxl'></FontAwesomeIcon></a>

                                    <a href="https://www.facebook.com/mdbiplob.hossen.3323/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className='iconSocial' color='#1877F2' icon={faFacebook} size='xxl'></FontAwesomeIcon></a>

                                    <a href="https://www.instagram.com/mdbiplob462/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className='iconSocial' color='#784CAC' icon={faInstagram} size='xxl'></FontAwesomeIcon></a>

                                    <a href="https://github.com/biplob4" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className='iconSocial' color='#009AD5' icon={faGithub} size='xxl'></FontAwesomeIcon></a>

                                    <a href="http://www.google.com" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className='iconSocial' color='#E4405F' icon={faYoutube} size='xxl'></FontAwesomeIcon></a>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;