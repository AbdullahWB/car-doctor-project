import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";

const ServicesCard = ({ service }) => {
    const { price, img, title, _id } = service
    return (
        <div className=''>
            <div className="card w-full p-5 h-full bg-base-100 shadow-xl">
                <figure><img src={img} className='w-full object-cover h-[210px]' alt="Shoes" /></figure>
                <div className="card-body p-0 py-5">
                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                    <div className='flex justify-between mt-5 items-center'>
                        <p className='text-xl font-semibold text-primary'>Price: {price}$</p>
                        <Link to={`/checkout/${_id}`}>
                            <button className='btn btn-outline btn-primary rounded-full p-0 h-[30px] text-white w-[50px]'><FaArrowCircleRight className='hover:text-white text-2xl'></FaArrowCircleRight></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;