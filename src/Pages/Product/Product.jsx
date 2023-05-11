import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products);
    return (
        <div className='mb-[130px]'>
            <div className='text-center mb-10'>
                <p className='text-primary font-bold'>Popular Products</p>
                <h1 className='text-[45px] font-bold text-black'>Browse Our Products</h1>
                <h2 className='text-gray-800'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </h2>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className='text-center mt-10'>
                <button className='btn btn-outline btn-primary'>More Services</button>
            </div>
        </div>
    );
};

export default Product;