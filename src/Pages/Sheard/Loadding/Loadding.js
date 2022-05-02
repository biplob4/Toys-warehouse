import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loadding.css'

const Loadding = () => {
    return (
        <div className='lodding py-5 mx-auto'>
              <Spinner animation="border" />
        </div>
    );
};

export default Loadding;