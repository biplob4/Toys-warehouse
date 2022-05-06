import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../Sheard/firebase.init/Firebase.init';
import Loadding from '../Sheard/Loadding/Loadding';
import './MyItem.css';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [userProduct, setUserProduct] = useState([]);
    const nevigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            const email = user?.email;
            const url = `https://morning-headland-26668.herokuapp.com/user?email=${email}`;

            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setUserProduct(data);
            }
            catch (error) {
                // if (error.response.status === 401 || error.response.status === 403) {
                //     signOut(auth)
                //     nevigate('/login');
                // }
            }

        }
        getUser();
    }, [user])

    const handelDelete = id => {
        const url = `https://morning-headland-26668.herokuapp.com/user/${id}`;
        const agrre = window.confirm('are you sure');
        if (agrre) {
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remainning = userProduct.filter(product => product._id !== id);
                    setUserProduct(remainning);
                })
        }
    }

    

    return (
        <div className='container my-5 py-5 userProducts'>
            {
                userProduct.map(product => (
                    <div key={product._id} className="product align-middle justify-content-between ">
                        <div className="d-flex align-middle justify-content-between">
                            <img src={product.data.image} alt="images" />
                        </div>
                        <div className="w-75 me-4 mt-3">
                            <div className="d-flex align-middle justify-content-between">
                                <p> <b className='me-3 '>{product.data.name}</b></p>
                                <p className='p-0  m-0 '>supplier-name: {product.data.supplierName}</p>
                            </div>
                            <hr className='mb-2 mt-0' />
                            <div className="d-flex align-middle justify-content-between">
                                <p>price: $<i>{product.data.price}</i></p>
                                <p onClick={() => handelDelete(product._id)} className='rounded py-1 px-2 text-light bg-danger me-2 cursor-pointer' role="button"> <FontAwesomeIcon icon={faTrash} /> Delete</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MyItem;