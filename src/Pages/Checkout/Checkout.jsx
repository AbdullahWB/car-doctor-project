import React from 'react';
import banner from '../../assets/images/checkout/checkout.png'
import banner1 from '../../assets/images/banner/3.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import { FaArrowRight, FaFileAlt, FaPlayCircle } from "react-icons/fa";
import logo from '../../assets/logo.svg'
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const books = useLoaderData()
    console.log(books);
    const {_id, price, title, img} = books
    return (
        <div className='mt-[50px]'>
            <div className='mb-[130px] relative rounded-xl border border-primary'>
                <img className='w-full' src={banner} alt="" />
                <div className='absolute rounded-xl inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-20'>
                    <h1 className='text-[45px] mt-10 text-white font-bold'>Service Details</h1>
                    <div className='absolute bottom-0 left-[40%] bg-primary py-2 px-20' style={{ clipPath: 'polygon(15% 0, 85% 0%, 100% 100%, 0% 100%)' }}>
                        <p className='text-white text-xl'>Home/Service Details</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <div>
                        <img className='h-[400px] w-full object-cover rounded-xl mb-[100px]' src={img} alt="" />
                    </div>
                    <div>
                        <h1 className='text-[45px] font-bold text-gray-900 mb-5'>{title}</h1>
                        <p className='text-gray-400 tracking-widest text-[16px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                        <div className='grid grid-cols-2 gap-8 mt-10 mb-10'>
                            <div className="card w-full py-10 px-5 border-t-4 border-primary bg-[#F3F3F3]">
                                <div className="card-body">
                                    <h2 className="card-title">Instant Car Services</h2>
                                    <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                                </div>
                            </div>
                            <div className="card w-full py-10 px-5 border-t-4 border-primary bg-[#F3F3F3]">
                                <div className="card-body">
                                    <h2 className="card-title">24/7 Quality Service</h2>
                                    <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                                </div>
                            </div>
                            <div className="card w-full py-10 px-5 border-t-4 border-primary bg-[#F3F3F3]">
                                <div className="card-body">
                                    <h2 className="card-title">Easy Customer Service</h2>
                                    <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                                </div>
                            </div>
                            <div className="card w-full py-10 px-5 border-t-4 border-primary bg-[#F3F3F3]">
                                <div className="card-body">
                                    <h2 className="card-title">Quality Cost Service</h2>
                                    <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                                </div>
                            </div>
                        </div>
                        <p className='text-gray-400 tracking-widest text-[16px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-[45px] font-bold text-gray-900 mb-5'>3 Simple Steps to Process</h1>
                        <p className='text-gray-400 tracking-widest text-[16px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                        <div className='grid grid-cols-3 gap-8 mt-10 mb-10'>
                            <div className='border-2 flex flex-col justify-center items-center text-center py-10 px-5 rounded-lg'>
                                <h1 className='w-12 h-12 rounded-full text-white bg-primary flex justify-center items-center text-2xl'>1</h1>
                                <h2 className='text-2xl text-gray-900 my-5 font-semibold'>Step One</h2>
                                <p className='text-xl text-gray-800'>It uses a dictionary <br /> of over 200 .</p>
                            </div>
                            <div className='border-2 flex flex-col justify-center items-center text-center py-10 px-5 rounded-lg'>
                                <h1 className='w-12 h-12 rounded-full text-white bg-primary flex justify-center items-center text-2xl'>2</h1>
                                <h2 className='text-2xl text-gray-900 my-5 font-semibold'>Step Two</h2>
                                <p className='text-xl text-gray-800'>It uses a dictionary <br /> of over 200 .</p>
                            </div>
                            <div className='border-2 flex flex-col justify-center items-center text-center py-10 px-5 rounded-lg'>
                                <h1 className='w-12 h-12 rounded-full text-white bg-primary flex justify-center items-center text-2xl'>3</h1>
                                <h2 className='text-2xl text-gray-900 my-5 font-semibold'>Step Three</h2>
                                <p className='text-xl text-gray-800'>It uses a dictionary <br /> of over 200 .</p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-[130px] relative'>
                        <img className='rounded-lg' src={banner2} alt="" />
                        <div className='w-full h-full absolute inset-0 flex justify-center items-center'>
                            <FaPlayCircle className='text-[100px] text-primary cursor-pointer'></FaPlayCircle>
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className='bg-[#F3F3F3] w-full p-10 rounded-lg'>
                        <h1 className='text-2xl font-bold mb-5'>Services</h1>
                        <div className='grid grid-rows-5 gap-5'>
                        <div className='flex w-full bg-white p-3 rounded-lg justify-between font-semibold items-center hover:bg-primary hover:text-white'>
                            <h1>Full Car Repair</h1>
                            <FaArrowRight></FaArrowRight>
                        </div>
                        <div className='flex w-full bg-white p-3 rounded-lg justify-between font-semibold items-center hover:bg-primary hover:text-white'>
                            <h1>Engine Repair</h1>
                            <FaArrowRight></FaArrowRight>
                        </div>
                        <div className='flex w-full bg-white p-3 rounded-lg justify-between font-semibold items-center hover:bg-primary hover:text-white'>
                            <h1>Automatic Services</h1>
                            <FaArrowRight></FaArrowRight>
                        </div>
                        <div className='flex w-full bg-white p-3 rounded-lg justify-between font-semibold items-center hover:bg-primary hover:text-white'>
                            <h1>Engine Oil Change</h1>
                            <FaArrowRight></FaArrowRight>
                        </div>
                        <div className='flex w-full bg-white p-3 rounded-lg justify-between font-semibold items-center hover:bg-primary hover:text-white'>
                            <h1>Battery Charge</h1>
                            <FaArrowRight></FaArrowRight>
                        </div>
                        </div>
                    </div>
                    <div className='p-10 bg-[#151515] text-white mt-10 rounded-lg'>
                        <h1 className='text-2xl font-bold mb-5'>Download</h1>
                        <div className='grid grid-rows-2 gap-8'>
                            <div className='flex justify-between items-center'>
                                <FaFileAlt className='text-2xl'></FaFileAlt>
                                <div>
                                    <h1 className='text-xl'>Our Brochure</h1>
                                    <p>Download</p>
                                </div>
                                <FaArrowRight className='text-2xl text-primary'></FaArrowRight>
                            </div>
                            <div className='flex justify-between items-center'>
                                <FaFileAlt className='text-2xl'></FaFileAlt>
                                <div>
                                    <h1 className='text-xl'>Company Details</h1>
                                    <p>Download</p>
                                </div>
                                <FaArrowRight className='text-2xl text-primary'></FaArrowRight>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#151515] mt-10 rounded-lg px-10 py-20 flex flex-col text-center justify-center items-center text-white'>
                        <img src={logo} alt="" />
                        <h1 className='mt-5 text-2xl font-semibold'>Need Help? We Are Here <br /> To Help You</h1>
                        <div className='mt-6 bg-white p-5 rounded-lg relative'>
                            <h2 className='text-xl text-gray-900 font-semibold'><span className='font-bold text-primary'>Car Doctor</span> Special</h2>
                            <p className='text-gray-700 pb-10 mt-3'>Save up to <span className='text-primary font-bold'>60% off</span></p>
                            <Link><button className='btn btn-primary text-white absolute -bottom-5 left-1/4'>Get A Quote</button></Link>
                        </div>
                    </div>
                    <h2 className='text-gray-900 font-bold text-[45px] mt-5'>Price ${price}</h2>
                    <Link to={`/checkoutForm/${_id}`}><button className='btn btn-primary w-full text-white mt-5'>Proceed Checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;