import React from 'react';
import icon1 from '../../assets/icons/check.svg'
import icon2 from '../../assets/icons/Wrench.svg'
import icon3 from '../../assets/icons/group.svg'
import icon4 from '../../assets/icons/person.svg'
import icon5 from '../../assets/icons/Group 38729.svg'
import icon6 from '../../assets/icons/deliveryt.svg'

const Features = () => {
    return (
        <div className='mb-[130px]'>
            <div className='text-center'>
                <h4 className='text-primary text-xl font-bold'>Core Features</h4>
                <h1 className='text-4xl font-medium my-5'>Why Choose Us</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid md:grid-cols-6 grid-cols-2 gap-[20px] mt-10 mb-10'>
                <div className='border p-7 flex flex-col rounded-lg justify-center items-center'>
                    <img className='w-auto h-auto' src={icon6} alt="" />
                    <h2 className='text-[18px] mt-5 font-semibold text-gray-700'>Timely Delivery</h2>
                </div>
                <div className='border p-7 flex flex-col bg-primary rounded-lg justify-center items-center'>
                    <img className='w-auto h-auto' src={icon5} alt="" />
                    <h2 className='text-[18px] mt-5 font-semibold text-white'>Timely Delivery</h2>
                </div>
                <div className='border p-7 flex flex-col rounded-lg justify-center items-center'>
                    <img className='w-auto h-auto' src={icon4} alt="" />
                    <h2 className='text-[18px] mt-5 font-semibold text-gray-700'>24/7 Support</h2>
                </div>
                <div className='border p-7 flex flex-col rounded-lg justify-center items-center'>
                    <img className='w-auto h-auto' src={icon3} alt="" />
                    <h2 className='text-[18px] mt-5 font-semibold text-gray-700'>Expert Team</h2>
                </div>
                <div className='border p-7 flex flex-col rounded-lg justify-center items-center'>
                    <img className='w-auto h-auto' src={icon2} alt="" />
                    <h2 className='text-[18px] mt-5 font-semibold text-gray-700'>Best Equipment</h2>
                </div>
                <div className='border p-7 flex flex-col rounded-lg justify-center items-center'>
                    <img className='w-auto h-auto' src={icon1} alt="" />
                    <h2 className='text-[18px] mt-5 font-semibold text-gray-700'>100% Guranty</h2>
                </div>
            </div>
        </div>
    );
};

export default Features;