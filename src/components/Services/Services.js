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
    }, []);

    return (
        <div className=''>

            <div className=''>
                <div className=''>
                    <div className='flex m-32 grid grid-rows-3 grid-flow-col gap-2'>
                        {serviceData.map((service) => <Service key={service.id} service={service} />)}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;