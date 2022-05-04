import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Sheard/firebase.init/Firebase.init';
import Loadding from '../../Sheard/Loadding/Loadding';
import UseToken from '../../Sheard/UseToken/UseToken';
import './SocialLogin.css';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [token] = UseToken(user);

    if(loading){
        return(
            <Loadding/>
        )
    }
    if(token){
        navigate (from, { replace: true });
    }

    return (
        <div>
            <div className="d-flex alignItem-center justify-content-center my-2">
                <div style={{ width: "100%" }} className=""> <hr style={{ height: "2px" }} /> </div>
                <div className="mx-1">or</div>
                <div style={{ width: "100%" }} className=""> <hr style={{ height: "2px" }} /> </div>
            </div>
            {/* <p className='text-secondary text-center'>Sign in with your google account</p> */}
            <Button style={{ background: "#DF4930", border: "none" }} className='w-100 py-2' onClick={() => signInWithGoogle()}> <FontAwesomeIcon style={{ top: "62%", left: "10%" }} icon={faGoogle} color='#fff' size='xl'></FontAwesomeIcon> With Google</Button>
        </div>
    );
};

export default SocialLogin;