import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './AddItem.css';

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        const url = 'https://morning-headland-26668.herokuapp.com/toys';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(regult => {
                toast("your product succesfully added");
                reset();
            })
    };
    return (
        <div className='w-50 mx-auto my-5'>
            <h1>Add a new Product</h1>
            <form className=' d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='py-2 mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='py-2 mb-2' placeholder='Description' {...register("description")} />
                <textarea className='py-2 mb-2' placeholder='SupplierName' {...register("supplierName")} />
                <input className='py-2 mb-2' placeholder='Quantity' {...register("quantity")} />
                <input className='py-2 mb-2' placeholder='price' {...register("price")} />
                <input className='py-2 mb-2' placeholder='Potho Url' {...register("image")} />
                <input type="submit" value='Add Item' />
            </form>
        </div>
    );
};

export default AddItem;