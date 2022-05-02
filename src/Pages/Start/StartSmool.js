import React from 'react';
import './StartSmool.css';
import img1 from '../../home.img/otor2-removebg-preview.png';
import img2 from '../../home.img/otor-removebg-preview (1).png';

const StartSmool = () => {
    return (
        <div className="mx-auto">
            <div div className='container-sm otor-section'>
                <div className="">
                    <h1 className=''>Start a business from small first</h1>
                    <p>Our warehouse will be very helpful for those, who have started or want to start a new business. And we also have some special benefits for newcomers.There is a 20% discount for newcomers, and this discount will last for a maximum of 1 year.</p>
                </div>
                <div className="w-100">
                    <img className='w-75 ' src={img1} alt="img" />
                </div>
            </div>
            <div div className='container-sm otor-section'>
                <div className="w-100">
                    <img className='w-75 ' src={img2} alt="img" />
                </div>
                <div className="">
                    <h1 className=''>Get unlimited support</h1>
                    <p>If you want to know something, you can follow our social media page. You can also get help by emailing our official email account. We will try our best to help you. We wish you a successful business home and we are ready to help you as much as possible.</p>
                    <a  href='#contuct'><button className='singeleProduct-btn'> Message me </button></a>
                </div>
            </div>
        </div>
    );
};

export default StartSmool;