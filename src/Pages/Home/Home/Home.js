import React from 'react';
import Toys from '../../Toys/Toys';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Toys/>
        </div>
    );
};

export default Home;