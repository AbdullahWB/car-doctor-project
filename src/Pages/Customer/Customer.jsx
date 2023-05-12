import React from 'react';
import person from '../../assets/images/Testimonial/Ellipse 2.png'
import person2 from '../../assets/images/Testimonial/Ellipse 3.png'
import icon from '../../assets/images/Testimonial/quote 1.png'

const Customer = () => {
    return (
        <div className='mb-[130px]'>
            <div className='text-center mb-10'>
                <p className='text-primary font-bold'>Testimonial</p>
                <h1 className='text-[45px] font-bold text-black'>What Customer Says</h1>
                <h2 className='text-gray-800'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </h2>
            </div>
            <div className="carousel w-full h-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='grid grid-cols-2 gap-10 w-full'>
                        <div className="card w-full p-14 h-full bg-base-100 border-2">
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <figure><img src={person} className='w-auto object-cover' alt="Shoes" /></figure>
                                    <div className='ml-5'>
                                        <h1 className='font-bold text-xl text-gray-700'>Awlad Hossain</h1>
                                        <p>Businessman</p>
                                    </div>
                                </div>
                                <img src={icon} alt="" />
                            </div>
                            <div className="card-body p-0 py-5">
                                <p className='mb-5 text-xl text-gray-400 font-semibold'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                        <div className="card w-full p-14 h-full bg-base-100 border-2">
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <figure><img src={person2} className='w-auto object-cover' alt="Shoes" /></figure>
                                    <div className='ml-5'>
                                        <h1 className='font-bold text-xl text-gray-700'>Awlad Hossain</h1>
                                        <p>Businessman</p>
                                    </div>
                                </div>
                                <img src={icon} alt="" />
                            </div>
                            <div className="card-body p-0 py-5">
                                <p className='mb-5 text-xl text-gray-400 font-semibold'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
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

export default Customer;