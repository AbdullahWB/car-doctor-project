import React from 'react';
import img1 from '../../assets/images/team/1.jpg'
import img2 from '../../assets/images/team/2.jpg'
import img3 from '../../assets/images/team/3.jpg'
import icon1 from '../../assets/images/team/inis.png'
import icon2 from '../../assets/images/team/fb.png'
import icon3 from '../../assets/images/team/link.png'
import icon4 from '../../assets/images/team/twet.png'
import { Link } from 'react-router-dom';

const Team = () => {
    return (
        <div className='mb-[130px]'>
            <div className='text-center mb-10'>
                <p className='text-primary font-bold'>Team</p>
                <h1 className='text-[45px] font-bold text-black'>Meet Our Team</h1>
                <h2 className='text-gray-800'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </h2>
            </div>
            <div className="carousel w-full h-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='grid grid-cols-3 gap-10 w-full'>
                        <div className="card w-full p-5 h-full bg-base-100 border-2">
                            <figure><img src={img1} className='w-full object-cover h-[210px]' alt="Shoes" /></figure>
                            <div className="card-body p-0 py-5 flex flex-col justify-center items-center">
                                <h2 className="card-title mb-3 text-2xl text-gray-800 font-bold">Car Engine Plug</h2>
                                <p className='mb-5 text-xl text-gray-700 font-semibold'>Engine Expert</p>
                                <div className='grid grid-cols-4 gap-5'>
                                    <Link><img src={icon1} alt="" /></Link>
                                    <Link><img src={icon2} alt="" /></Link>
                                    <Link><img src={icon3} alt="" /></Link>
                                    <Link><img src={icon4} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full p-5 h-full bg-base-100 border-2">
                            <figure><img src={img2} className='w-full object-cover h-[210px]' alt="Shoes" /></figure>
                            <div className="card-body p-0 py-5 flex flex-col justify-center items-center">
                                <h2 className="card-title mb-3 text-2xl text-gray-800 font-bold">Car Engine Plug</h2>
                                <p className='mb-5 text-xl text-gray-700 font-semibold'>Engine Expert</p>
                                <div className='grid grid-cols-4 gap-5'>
                                    <Link><img src={icon1} alt="" /></Link>
                                    <Link><img src={icon2} alt="" /></Link>
                                    <Link><img src={icon3} alt="" /></Link>
                                    <Link><img src={icon4} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full p-5 h-full bg-base-100 border-2">
                            <figure><img src={img3} className='w-full object-cover h-[210px]' alt="Shoes" /></figure>
                            <div className="card-body p-0 py-5 flex flex-col justify-center items-center">
                                <h2 className="card-title mb-3 text-2xl text-gray-800 font-bold">Car Engine Plug</h2>
                                <p className='mb-5 text-xl text-gray-700 font-semibold'>Engine Expert</p>
                                <div className='grid grid-cols-4 gap-5'>
                                    <Link><img src={icon1} alt="" /></Link>
                                    <Link><img src={icon2} alt="" /></Link>
                                    <Link><img src={icon3} alt="" /></Link>
                                    <Link><img src={icon4} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle btn-primary">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-primary">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;