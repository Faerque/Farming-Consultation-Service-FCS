import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from './Service';


const Services = () => {

    const [serviceData, setServiceData] = useState([]);
    console.log(serviceData);

    useEffect(() => {
        // fetch data from server
        const fetchData = async () => {
            try {
                await axios.get('api/services')
                    .then(res => {
                        console.log(res.data);
                        setServiceData(res.data);
                    })
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [serviceData]);

    return (
        <div className='' >
            <div className='justify-self-center' >
                <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
                    {serviceData.map((service) => <Service key={service.id} service={service} />)}
                </div>
            </div>
        </div>
    );
};

export default Services;