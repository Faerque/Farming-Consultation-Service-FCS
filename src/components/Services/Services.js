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
        <section class="pt-10 pb-8 lg:pt-[120px] lg:pb-[90px]">
            <div class="container mx-auto">
                <div class="-mx-4 flex flex-wrap">
                    <div class="w-full px-4">
                        <div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                            <span class="text-primary mb-2 block text-lg font-semibold">
                                Our Services
                            </span>
                            <h2
                                class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
                            >
                                What We Offer
                            </h2>
                            <p class="text-body-color text-base">
                                There are many variations of passages of Lorem Ipsum available but
                                the majority have suffered alteration in some form.
                            </p>
                        </div>
                        <div class="-mx-4 flex flex-wrap">
                            {
                                serviceData.map(service => <Service service={service} />)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;