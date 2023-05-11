import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Time from '../../Time/Time';
import Product from '../../Product/Product';
import Team from '../../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Time></Time>
            <Product></Product>
            <Team></Team>
        </div>
    );
};

export default Home;