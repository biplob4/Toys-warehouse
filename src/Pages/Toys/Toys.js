import React, { useEffect, useState } from 'react';
import img from '../../home.img/banner3.jpg';
import './Toys.css';

const Toys = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toysLimited')
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
                            <div className='singeleProduct'>
                                <h4 className="text-primary text-center py-2">{toy.name}</h4>
                                <p>{toy.description}</p>
                                <div className="singeleProductImg"><img src={toy.image} alt="img" /></div>
                                <h5><span className='text-peimary text-smal'>Price:</span> {toy.price}</h5>
                                <button className='singeleProduct-btn'>Please check out</button>
                            </div>
                        ))
                    }
                </div>
        </div >
    );
};
export default Toys;