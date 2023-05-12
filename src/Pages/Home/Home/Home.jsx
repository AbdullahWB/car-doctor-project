import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Time from '../../Time/Time';
import Product from '../../Product/Product';
import Team from '../../Team/Team';
import Features from '../../Features/Features';
import Customer from '../../Customer/Customer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Time></Time>
            <Product></Product>
            <Team></Team>
            <Features></Features>
            <Customer></Customer>
        </div>
    );
};

export default Home;