import React from 'react';
import './ForOFor.css';
import img from '../../../home.img/pageNotPound.jpg';

const ForOFor = () => {
    return (
        <div className='fotter'>
            <h1>Page Not Found: <strong className='text-danger'>4O4</strong></h1>
            <img className='w-100' src={img} alt="" />
        </div>
    );
};

export default ForOFor;