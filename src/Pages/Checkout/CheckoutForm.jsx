import React, { useContext } from 'react';
import banner from '../../assets/images/checkout/checkout.png'
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const CheckoutForm = () => {
    const items = useLoaderData()
    const { price, _id, title, img } = items
    const { user } = useContext(AuthContext)
    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email;
        const date = form.date.value;
        const name = form.name.value;
        const message = form.message.value;
        const booking = {
            customerName: name,
            email,
            date,
            service: title,
            img,
            service_id: _id,
            price: price,
            customerMassage: message,
        }
        console.log(booking);

        fetch('http://localhost:3000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('booked successfully')
                }
            })
    }

    return (
        <div className='mt-[50px] mb-[130px]'>
            <div className='mb-[130px] relative rounded-xl border border-primary'>
                <img className='w-full' src={banner} alt="" />
                <div className='absolute rounded-xl inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-20'>
                    <h1 className='text-[45px] mt-10 text-white font-bold'>Service Details</h1>
                    <div className='absolute bottom-0 left-[40%] bg-primary py-2 px-20' style={{ clipPath: 'polygon(15% 0, 85% 0%, 100% 100%, 0% 100%)' }}>
                        <p className='text-white text-xl'>Home/Checkout</p>
                    </div>
                </div>
            </div>
            <form onSubmit={handleFormSubmit} className='bg-[#F3F3F3] p-36 rounded-xl'>
                <div className='flex justify-between'>
                    <div className="form-control w-full max-w-md">
                        <input type="text" name='name' placeholder="Name" defaultValue={user?.displayName} className="input input-bordered w-full max-w-md" />
                    </div>
                    <div className="form-control w-full max-w-md">
                        <input type="date" name='date' placeholder="Date" className="input input-bordered w-full max-w-md" />
                    </div>
                </div>
                <div className='flex justify-between mt-10'>
                    <div className="form-control w-full max-w-md">
                        <input type="text" name='price' placeholder="Price" defaultValue={price} className="input input-bordered w-full max-w-md" />
                    </div>
                    <div className="form-control w-full max-w-md">
                        <input type="email" name='email' defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full max-w-md" />
                    </div>
                </div>
                <textarea placeholder="Your Message" name='message' className="textarea textarea-bordered mt-10 textarea-lg w-full max-w-full h-[250px]" ></textarea>
                <input type="submit" value="Confirm Order" className='btn btn-primary text-white w-full mt-10' />
            </form>
        </div>
    );
};

export default CheckoutForm;