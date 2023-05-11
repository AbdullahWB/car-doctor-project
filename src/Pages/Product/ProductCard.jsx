import React from 'react';

const ProductCard = ({ product }) => {
    const { img, price, _id, name } = product;
    return (
        <div>
            <div className="card w-full p-5 h-full bg-base-100 shadow-xl">
                <div className='bg-[#F3F3F3] h-[250px] flex items-center justify-center rounded-lg'>
                    <figure><img src={img} className='w-[196px] object-cover h-auto' alt="Shoes" /></figure>
                </div>
                <div className="card-body p-0 py-5 flex flex-col justify-center items-center">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h2 className="card-title text-gray-700 font-semibold text-3xl">{name}</h2>
                    <p className='text-primary font-bold text-xl'>Price: {price}.00$</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;