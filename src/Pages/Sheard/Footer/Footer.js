import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../../../icon/icon2-removebg-preview.png';
import { faVoicemail} from '@fortawesome/free-solid-svg-icons';
import './Fotter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div>
            <div class="footer">
                <div class="container">
                    <div class="row">

                        <div class="col-md-3 col-xs-12">
                            <div class="first text-start">
                                <h3 className='text-center'> <img className='w-50' src={footerImg} alt="img" /> </h3>
                                <h1 ><h5>Aboute this warehouse</h5></h1>
                                <p className=''> It was originally designed for those who want to do business with toys. All kinds of toys are stored here. You can store toys here if you want. This will improve your business. Hope you understand, thank you for our target.</p>
                            </div>
                        </div>

                        <div class="col-md-3 col-xs-12">
                            <div class="first">
                                <h4>Nevigate</h4>
                                <Link to='/home' className='d-block my-2 link'> Home</Link>
                                <Link to='/manageItem' className='d-block my-2 link'> Manage Item</Link>
                                <Link to='/addItem' className='d-block my-2 link'> Add Item</Link>
                                <Link to='/blogs' className='d-block my-2 link'> Blogs</Link>
                                <Link to='/myAccount' className='d-block my-2 link'> My Account</Link>
                            </div>
                        </div>

                        <div class="col-md-3 col-xs-12">
                            <div class="first">
                                <h4>Contuct</h4>
                                <p> <FontAwesomeIcon icon={faVoicemail}></FontAwesomeIcon> Email : biplobhossen6020@gmail.com</p>
                                <p> Facebook : https://www.facebook.com/mdbiplob.hossen.3323/</p>
                                <p> Phone : 0 1 7 5 4 - 1 0 2 7 2 6</p>
                                <p> Instragrme : https://www.instagram.com/mdbiplob462/</p>
                            </div>
                        </div>

                        <div class="col-md-3 col-xs-12">
                            <div class="first">
                                <h4>Fllow Us</h4>
                                <p> Analytical Skills</p>
                                <p> Problem-solving skills</p>
                                <p> Critical-thinking skills</p>
                                <p> Detail-oriented</p>
                                <p> Multitasking</p>
                                <p> Self-motivated</p>
                                <p> Self-motivated</p>
                            </div>
                        </div>

                       

                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="line"></div>
                            <div class="second2">
                                {/* <a href="https://codepen.io/AndreeaBunget" target="_blank"> <i class="fab fa-codepen fa-2x margin"></i></a>
                                <a href="https://github.com/WebDeveloperCodeRep" target="_blank"> <i class="fab fa-github fa-2x margin"></i></a>
                                <a href="https://www.linkedin.com/in/andreea-mihaela-bunget-a4248812b/" target="_blank"> <i class="fab fa-linkedin fa-2x margin"></i></a>
                                <a href="https://www.youtube.com/channel/UCX674BUbomzBCakbb75lhfA?view_as=subscriber" target="_blank"><i class="fab fa-youtube fa-2x margin" ></i></a> */}
                                 <p class="copyright">Toys warehouse © 2022</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;