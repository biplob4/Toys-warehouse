import React from 'react';
import Contuct from '../../Contuct/Contuct';
import StartSmool from '../../Start/StartSmool';
import Toys from '../../Toys/Toys';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner />
            <Toys />
            <StartSmool />
            <Contuct />
        </div>
    );
};

export default Home;