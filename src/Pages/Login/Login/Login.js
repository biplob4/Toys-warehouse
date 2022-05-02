import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faKey, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Loign.css';

const Login = () => {
    const handleLogin = () => {

    }
    return (
        <div className='login-from py-5'>
            <form className='py-5' onSubmit={handleLogin}>
                <h5 className='text-secondary text-center pb-3'>Please Login your Account</h5>
                <div className="">
                    <input name='name' placeholder='Name' required /><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></div>
                <div className="">
                    <input name='email' placeholder='Email' required /><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></div>
                <div className="">
                    <input name='password' placeholder='Password' required /><FontAwesomeIcon icon={faKey}></FontAwesomeIcon></div>
                <div className="">
                    <input className='login-from-btn rounded' type="submit" value='SignIn' /><FontAwesomeIcon style={{ left: "40%" }} icon={faSignIn} color='#fff'></FontAwesomeIcon>
                </div>
                <div className="d-flex text-danger">
                    <p style={{ cursor: 'pointer', fontWeight: "500" }} className='mb-0 mt-3  px-1'>Forget Password</p>
                    <Link className='ms-auto px-2' to='/signIn'><p style={{ cursor: 'pointer', fontWeight: "500" }} className='mb-0 mt-3'>LOGIN</p></Link>
                </div>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Login;