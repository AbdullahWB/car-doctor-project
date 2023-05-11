import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mb-[130px]'>
            <div className='text-center'>
                <h4 className='text-primary text-xl'>Service</h4>
                <h1 className='text-4xl font-medium'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-3 gap-7 mt-10 mb-10'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className='text-center'>
                <button className='btn btn-outline btn-primary'>More Services</button>
            </div>
        </div>
    );
};

export default Services;