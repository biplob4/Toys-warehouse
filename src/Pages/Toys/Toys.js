import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './Toys.css';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Toys = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('https://morning-headland-26668.herokuapp.com/toysLimited')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div className='productContainer'>
            <h1 className='text-center text-secondary'>Some toys</h1>
            <hr className='w-50 mx-auto text-primary mb-4' />
            <div className="products container">
                {
                    toys.map(toy => (
                        <div key={toy._id} className='singeleProduct'>
                            <h4 className="text-primary text-center py-2">{toy.name}</h4>
                            <p>{toy.description}</p>
                            <div className="singeleProductImg"><img src={toy.image} alt="img" /></div>
                            <div className="d-flex">
                                <h5><span className='text-peimary text-smal'>Price:</span> {toy.price}$</h5>
                                <h5 className=' ms-auto'><span className='text-peimary text-smal'>Quantity:</span> {toy.quantity}</h5>
                            </div>
                            <hr />
                            <p>Supplier Name: {toy.supplierName}</p>
                            <Link to={`/inventory/${toy._id}`}><button className='singeleProduct-btn'> Update <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></button></Link>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};
export default Toys;