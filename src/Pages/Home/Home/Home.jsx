import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Time from '../../Time/Time';
import Product from '../../Product/Product';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Time></Time>
            <Product></Product>
        </div>
    );
};

export default Home;