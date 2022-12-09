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
            <div className="pt-8 pb-2 lg:pt-[60px] lg:pb-[90px]">
                <div className="container mx-auto">
                    {loading ? <SpinnerLoading /> :
                        <div>
                            <div className="-mx-4 flex flex-wrap">
                                <div className="w-full px-4">
                                    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                                        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                                            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">পরামর্শ নিন </h2>
                                            <p className="mt-4 text-center text-xl text-gray-500">
                                                আপনার সমস্যার সমাধানের জন্য আমাদের সেবা গ্রহন করুন।
                                            </p>
                                        </div>
                                    </div>
                                    <div className="-mx-4 flex flex-wrap">
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