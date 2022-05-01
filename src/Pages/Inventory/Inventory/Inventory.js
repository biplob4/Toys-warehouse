import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Inventory.css';

const Inventory = () => {
    const { id } = useParams();
    const [toy, setToy] = useState({});
    const quantity = {quantity: toy.quantity - 1};
    const url = `http://localhost:5000/toys/${id}`;
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const agrre = window.confirm(`Are you sure`);
        if (agrre) {
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(regult => {
                    toast('Update your Quantity');
                    reset();
                })
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5000/toys/${id}`)
            .then(res => res.json())
            .then(data => setToy(data));
    }, [])

    return (
        <div className="quantity-container pb-5 pt-2">
            <h3 className='text-success my-5 text-center'>Please Add Quantity</h3>
            <div className='container check-out p-4'>
                <div className="text-center ">
                    <img className='mb-4 rounded w-100' src={toy.image} alt="img" />
                    <div className="d-flex mb-3">
                        <h4 className='text-primary'>{toy.name}</h4>
                        <Button onClick={()=>onSubmit(quantity)} className='btn-xll ms-auto'>Delivered</Button>
                    </div>
                    <div className="d-flex">
                        <h6><span className='text-peimary text-smal'>Price:</span> {toy.price}$</h6>
                        <h6 className='ms-auto'><span className='text-peimary text-smal'>Quantity:</span> {toy.quantity}</h6>
                    </div>
                    <hr />
                </div>
                <div className="checkOut-from">
                    <div className="">
                        <form className='d-flex' onSubmit={handleSubmit(onSubmit)}>
                            <input type="text"  {...register("quantity")} placeholder='Type Quantity' />
                            <input className='w-25 bg-primary text-light' type="submit" value="Add" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;