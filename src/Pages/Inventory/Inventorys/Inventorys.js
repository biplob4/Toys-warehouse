import { faAdd, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuthState } from 'react-firebase-hooks/auth';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import './Inventorys.css';
import auth from '../../Sheard/firebase.init/Firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loadding from '../../Sheard/Loadding/Loadding';

const Inventorys = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [user, loading, error] = useAuthState(auth);

    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`https://morning-headland-26668.herokuapp.com/toys?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [page,size])

    useEffect(() => {
        fetch('https://morning-headland-26668.herokuapp.com/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 5);
                setPageCount(pages)
            })

    })

    const handelDelete = id => {
        const url = `https://morning-headland-26668.herokuapp.com/toys/${id}`;
        const agrre = window.confirm('are you sure');
        if (agrre) {
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remainning = toys.filter(toy => toy._id !== id);
                    setToys(remainning);
                })
        }
    }

    if (loading) {
        return (
            <Loadding />
        )
    }
    const hendelAdd = async data => {
        const userAndProduct = await { data, email: user?.email };
        const url = `https://morning-headland-26668.herokuapp.com/user`
        await axios.post(url, userAndProduct)
            .then(res => {
                const { data } = res;
                if (data.insertedId) {
                    toast('Your Item Is Added !!!');
                }
            })
    }

    return (
        <div className='productContainer'>
            <h1 className='text-center text-secondary'>Manage All Item</h1>
            <hr className='w-50 mx-auto text-primary mb-4' />
            <div className="products container pb-5">
                {
                    toys.map(toy => (
                        <div key={toy._id} className='singeleProduct'>
                            <h4 className="text-primary text-center py-2">{toy.name}</h4>
                            <p>{toy.description}</p>
                            <div className="singeleProductImg"><img src={toy.image} alt="img" /></div>
                            <div className="d-flex mt-2">
                                <h6><span className='text-peimary text-smal'>Price:</span> {toy.price}$</h6>
                                <h6 className=' ms-auto'><span className='text-peimary text-smal'>Quantity:</span> {toy.quantity}</h6>
                            </div>
                            <hr className='my-2' />
                            <p>Supplier Name: {toy.supplierName}</p>
                            <div className="d-flex">
                                <button onClick={() => handelDelete(toy._id)} className='singeleProduct-delete-btn singeleProduct-btn bg-danger me-4 py-1 text-light d-block'>  <FontAwesomeIcon className='me-1' icon={faTrash} size='lg'></FontAwesomeIcon>Delete</button>
                                <button onClick={() => hendelAdd(toy)} className='singeleProduct-delete-btn singeleProduct-btn bg-primary py-1 text-light d-block'>  <FontAwesomeIcon className='me-1' icon={faAdd} size='lg'></FontAwesomeIcon>Add</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='pagenation container'>
                {
                    [...Array(pageCount).keys()].map(num => <button onClick={() => setPage(num)} className={page === num ? 'selected' : "unSelected"}>{num + 1}</button>)
                }
                <select onChange={e => setSize(e.target.value)}>
                    <option value="5" selected>5</option>
                    <option value="10">10</option>
                </select>
            </div>
            <Link style={{ textDecoration: "none" }} to='/addItem'> <Button style={{ background: "tomato", border: "none" }} className='d-block mx-auto btn-xxl mt-4 w-25'>Add New Item</Button>  </Link>
        </div >
    );
};

export default Inventorys;