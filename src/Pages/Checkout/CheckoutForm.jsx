import React from 'react';
import banner from '../../assets/images/checkout/checkout.png'
import { Link } from 'react-router-dom';

const CheckoutForm = () => {
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
            <div className='bg-[#F3F3F3] p-36 rounded-xl'>
                <div className='flex justify-between'>
                    <div className="form-control w-full max-w-md">
                        <input type="text" placeholder="First Name" className="input input-bordered w-full max-w-md" />
                    </div>
                    <div className="form-control w-full max-w-md">
                        <input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-md" />
                    </div>
                </div>
                <div className='flex justify-between mt-10'>
                    <div className="form-control w-full max-w-md">
                        <input type="text" placeholder="First Name" className="input input-bordered w-full max-w-md" />
                    </div>
                    <div className="form-control w-full max-w-md">
                        <input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-md" />
                    </div>
                </div>
                <textarea placeholder="Your Message" className="textarea textarea-bordered mt-10 textarea-lg w-full max-w-full h-[250px]" ></textarea>
                <Link><button className='btn btn-primary text-white w-full mt-10'>Order Confirm</button></Link>
            </div>
        </div>
    );
};

export default CheckoutForm;