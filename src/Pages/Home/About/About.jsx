import React from 'react';
import man from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero mb-[130px]">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={man} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-[10px] border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <p className='text-primary font-bold text-xl mb-5'>About Us</p>
                    <h1 className="text-6xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <button className="btn btn-primary mt-5">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;