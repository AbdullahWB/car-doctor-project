import React from 'react';

const ServicesCard = ({ service }) => {
    const {price, img, title} = service
    return (
        <div className=''>
            <div className="card w-full p-5 h-full bg-base-100 shadow-xl">
                <figure><img src={img} className='w-full object-cover h-[210px]' alt="Shoes" /></figure>
                <div className="card-body p-0 py-5">
                    <h2 className="card-title">{title}</h2>
                    <p>Price: {price}$</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;