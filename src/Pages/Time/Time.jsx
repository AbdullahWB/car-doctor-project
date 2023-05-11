import React from 'react';
import day from '../../assets/icons/day.png'
import call from '../../assets/icons/call.png'
import map from '../../assets/icons/map.png'

const Time = () => {
    return (
        <div className='bg-[#151515] grid md:grid-cols-3 grid-cols-1 mb-[130px] gap-[61px] p-16 rounded-lg'>
            <div className='flex text-white'>
                <img className='w-auto h-auto' src={day} alt="" />
                <div className='ml-7'>
                    <h1 className=''>We are open monday-friday</h1>
                    <h2 className='text-2xl font-semibold'>7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className='flex text-white'>
                <img className='w-auto h-auto' src={call} alt="" />
                <div className='ml-7'>
                    <h1 className=''>Have a question?</h1>
                    <h2 className='text-2xl font-semibold'>+2546 251 2658</h2>
                </div>
            </div>
            <div className='flex text-white'>
                <img className='w-auto h-auto' src={map} alt="" />
                <div className='ml-7'>
                    <h1 className=''>Need a repair? our address</h1>
                    <h2 className='text-2xl font-semibold'>Liza Street, New York</h2>
                </div>
            </div>
        </div>
    );
};

export default Time;