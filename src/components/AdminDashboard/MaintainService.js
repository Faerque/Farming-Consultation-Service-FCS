import React from 'react';
import AdminSidePanel from './AdminSidePanel';
import { useState, useEffect } from 'react';
import FooterSm from '../Footer/FooterSm';
import SpinnerLoading from '../SpinnerLoading';

const MaintainService = () => {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    // fetching services from server
    useEffect(() => {
        fetch('https://server-fcs.onrender.com/api/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
            .catch(error => console.log(error));

    }, []);
    console.log(services);
    return (
        <section className='mt-8' >
            <div className='flex'>
                <div className='flex-none'>
                    <AdminSidePanel />

                </div>
                <div className='flex-1 w-96'>
                    <div className='flex'>
                        <div class="ml-24 mr-24 mt-20">
                            <div>
                                {loading ? <div className='p-48 ml-96'><SpinnerLoading /></div> : <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
                                    <div className='bg-white shadow sm:rounded-lg' >
                                        <div class="px-4 py-5 sm:px-6">
                                            <h3 class="text-lg font-medium leading-6 text-gray-900">All Consultation available listed here</h3>
                                            <p class="mt-1 max-w-2xl text-sm text-gray-500">Consultation Details</p>
                                        </div>
                                        <div class="border-t border-gray-200">
                                            <div class="overflow-x-auto">
                                                <table class="table w-full">
                                                    <thead>
                                                        <tr>
                                                            <th>Index</th>
                                                            <th>Id</th>
                                                            <th>Name</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {services.map((services, index) => <tr key={services._id}>
                                                            <td>{index + 1}</td>
                                                            <td>{services._id}</td>
                                                            <td>{services.name}</td>

                                                        </tr>)}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default MaintainService;