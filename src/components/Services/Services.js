import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SpinnerLoading from '../SpinnerLoading';
import Service from './Service';
import FooterMain from '../Footer/FooterMain';
import FooterSm from '../Footer/FooterSm';

const Services = () => {

    const [serviceData, setServiceData] = useState([]);
    console.log(serviceData);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // fetch data from server
        const fetchData = async () => {
            try {

                await axios.get('https://server-fcs.onrender.com/api/services')
                    .then(res => {
                        console.log(res.data);
                        setServiceData(res.data);
                        setLoading(false);
                    })
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    <SpinnerLoading />
    return (
        <div>
            <div class="pt-8 pb-2 lg:pt-[60px] lg:pb-[90px]">
                <div class="container mx-auto">
                    {loading ? <SpinnerLoading /> :
                        <div>
                            <div class="-mx-4 flex flex-wrap">
                                <div class="w-full px-4">
                                    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                                        <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                                            <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Market Place</h2>
                                            <p class="mt-4 text-center text-xl text-gray-500">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
                                        </div>
                                    </div>
                                    <div class="-mx-4 flex flex-wrap">
                                        {
                                            loading === true ? <SpinnerLoading /> : serviceData.map(service => <Service key={service._id} service={service} />)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>


            </div>
            <div style={{
                position: "absolute", width: "100%"
            }}>
                <FooterMain />
                <FooterSm />
            </div>
        </div>
    );
};

export default Services;