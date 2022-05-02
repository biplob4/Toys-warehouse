import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './AddItem.css';

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        const url = 'https://toys-server-headland-26668.herokuapp.com/toys';
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
        <div className="add py-5">
            <div className='mx-auto my-5' id='contuct'>
                <h1 className='pt-4'>Add a new Product</h1>
                <form className=' d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='ps-3  mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='ps-2 mb-3' placeholder='Description' {...register("description")} />
                    <input className='ps-3  mb-3' placeholder='SupplierName' {...register("supplierName")} />
                    <input className='ps-3  mb-3' placeholder='Quantity' {...register("quantity")} />
                    <input className='ps-3  mb-3' placeholder='price' {...register("price")} />
                    <input className='ps-3  mb-3' placeholder='Potho Url' {...register("image")} />
                    <input className='w-50 btn bg-primary text-light d-block mx-auto ps-auto' type="submit" value='Add Item' />
                </form>
            </div>
        </div>
    );
};

export default AddItem;