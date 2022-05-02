import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faKey, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Sheard/firebase.init/Firebase.init';
import Loadding from '../../Sheard/Loadding/Loadding';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Loign.css';

const Login = () => {
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let badError ;

    
    if (user) {
        navigate(from, { replace: true });
        toast('successfully Sign in');
    }
    if(loading){
        return(
            <Loadding/>
        )
    }
    if (error) {
        badError = <p className='text-center text-danger m-1'>Error: {error.message}</p>
      }

    const handleRegister = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.trems.checked; 
        await signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='login-from py-5'>
            <form className='py-5' onSubmit={handleRegister}>
                <h5 className='text-secondary text-center pb-3'>Please Login your Account</h5>
                <div className="">
                    <input name='email' placeholder='Email' required /><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></div>
                <div className="">
                    <input type='password' name='password'  placeholder='Password' required /><FontAwesomeIcon icon={faKey}></FontAwesomeIcon></div>
                <div className="">
                    <input className='login-from-btn rounded' type="submit" value='Login' /><FontAwesomeIcon style={{ left: "40%" }} icon={faSignIn} color='#fff'></FontAwesomeIcon>
                </div>
                {badError}
                <div className="d-flex text-secondary">
                    <p style={{ cursor: 'pointer', fontWeight: "500" }} className='mb-0 mt-3  px-1'>Forget Password</p>
                    <Link className='ms-auto px-2' to='/signIn'><p style={{ cursor: 'pointer', fontWeight: "500" }} className='mb-0 mt-3'>SignIn</p></Link>
                </div>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Login;