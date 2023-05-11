import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const {price, img, title, _id} = service
    return (
        <div className=''>
            <div className="card w-full p-5 h-full bg-base-100 shadow-xl">
                <figure><img src={img} className='w-full object-cover h-[210px]' alt="Shoes" /></figure>
                <div className="card-body p-0 py-5">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: {price}$</p>
                    <Link to={`/checkout/${_id}`}>
                    <button className='btn btn-primary'>Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;