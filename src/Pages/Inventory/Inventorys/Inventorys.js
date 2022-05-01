import { faAdd, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import './Inventorys.css';

const Inventorys = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handelDelete = id => {
        const url = `http://localhost:5000/toys/${id}`;
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
return (
    <div className='productContainer'>
        <h1 className='text-center text-secondary'>Manage All Item</h1>
        <hr className='w-50 mx-auto text-primary mb-4' />
        <div className="products container">
            {
                toys.map(toy => (
                    <div className='singeleProduct'>
                        <h4 className="text-primary text-center py-2">{toy.name}</h4>
                        <p>{toy.description}</p>
                        <div className="singeleProductImg"><img src={toy.image} alt="img" /></div>
                        <div className="d-flex">
                            <h5><span className='text-peimary text-smal'>Price:</span> {toy.price}$</h5>
                            <h5 className=' ms-auto'><span className='text-peimary text-smal'>Quantity:</span> {toy.quantity}</h5>
                        </div>
                        <hr />
                        <p>Supplier Name: {toy.supplierName}</p>
                        <button onClick={() => handelDelete(toy._id)} className='singeleProduct-delete-btn singeleProduct-btn text-danger me-4'>  <FontAwesomeIcon className='me-1' icon={faTrash} size='lg' color='gray'></FontAwesomeIcon>Delete</button>
                        <button className='singeleProduct-delete-btn singeleProduct-btn text-primary'>  <FontAwesomeIcon className='me-1' icon={faAdd} size='lg' color='gray'></FontAwesomeIcon>Add</button>
                    </div>
                ))
            }
        </div>
        <Link to='/addItem'> <Button className='d-block mx-auto btn-xxl mt-4'>Add New Item</Button>  </Link>
    </div >
);
};

export default Inventorys;