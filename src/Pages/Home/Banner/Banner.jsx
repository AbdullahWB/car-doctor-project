import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='mb-[130px] mt-[50px]'>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full rounded-xl">
                    <img src={img1} className="w-full object-cover" />
                    <div className="absolute inset-0 rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='space-y-7 w-1/2 ml-20 text-white'>
                            <h1 className='text-7xl font-bold text-white'>
                                Affordable Price For Car Servicing
                            </h1>
                            <p>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div>
                                <Link className='btn btn-primary mr-5'>Discover More</Link>
                                <Link className='btn btn-outline btn-primary'>Latest Project</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-primary text-white rounded-full w-[60px] h-[60px] mr-5">❮</a>
                        <a href="#slide2" className="btn btn-primary rounded-full w-[60px] h-[60px] mr-5 text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full rounded-xl">
                <img src={img2} className="w-full object-cover" />
                    <div className="absolute inset-0 rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='space-y-7 w-1/2 ml-20 text-white'>
                            <h1 className='text-7xl font-bold text-white'>
                                Affordable Price For Car Servicing
                            </h1>
                            <p>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div>
                                <Link className='btn btn-primary mr-5'>Discover More</Link>
                                <Link className='btn btn-outline btn-primary'>Latest Project</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-primary text-white rounded-full w-[60px] h-[60px] mr-5">❮</a>
                        <a href="#slide3" className="btn btn-primary rounded-full w-[60px] h-[60px] mr-5 text-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full rounded-xl">
                <img src={img3} className="w-full object-cover" />
                    <div className="absolute inset-0 rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='space-y-7 w-1/2 ml-20 text-white'>
                            <h1 className='text-7xl font-bold text-white'>
                                Affordable Price For Car Servicing
                            </h1>
                            <p>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div>
                                <Link className='btn btn-primary mr-5'>Discover More</Link>
                                <Link className='btn btn-outline btn-primary'>Latest Project</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-primary text-white rounded-full w-[60px] h-[60px] mr-5">❮</a>
                        <a href="#slide4" className="btn btn-primary rounded-full w-[60px] h-[60px] mr-5 text-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full rounded-xl">
                <img src={img4} className="w-full object-cover" />
                    <div className="absolute inset-0 rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='space-y-7 w-1/2 ml-20 text-white'>
                            <h1 className='text-7xl font-bold text-white'>
                                Affordable Price For Car Servicing
                            </h1>
                            <p>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div>
                                <Link className='btn btn-primary mr-5'>Discover More</Link>
                                <Link className='btn btn-outline btn-primary'>Latest Project</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-primary text-white rounded-full w-[60px] h-[60px] mr-5">❮</a>
                        <a href="#slide1" className="btn btn-primary rounded-full w-[60px] h-[60px] mr-5 text-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full rounded-xl">
                <img src={img5} className="w-full object-cover" />
                    <div className="absolute inset-0 rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='space-y-7 w-1/2 ml-20 text-white'>
                            <h1 className='text-7xl font-bold text-white'>
                                Affordable Price For Car Servicing
                            </h1>
                            <p>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div>
                                <Link className='btn btn-primary mr-5'>Discover More</Link>
                                <Link className='btn btn-outline btn-primary'>Latest Project</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-primary text-white rounded-full w-[60px] h-[60px] mr-5">❮</a>
                        <a href="#slide6" className="btn btn-primary rounded-full w-[60px] h-[60px] mr-5 text-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full rounded-xl">
                <img src={img6} className="w-full object-cover" />
                    <div className="absolute inset-0 rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='space-y-7 w-1/2 ml-20 text-white'>
                            <h1 className='text-7xl font-bold text-white'>
                                Affordable Price For Car Servicing
                            </h1>
                            <p>
                                There are many variations of passages of  available, but the majority have suffered alteration in some form
                            </p>
                            <div>
                                <Link className='btn btn-primary mr-5'>Discover More</Link>
                                <Link className='btn btn-outline btn-primary'>Latest Project</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn btn-primary text-white rounded-full w-[60px] h-[60px] mr-5">❮</a>
                        <a href="#slide1" className="btn btn-primary rounded-full w-[60px] h-[60px] mr-5 text-white">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;