import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SpinnerLoading from '../SpinnerLoading';
import AdminSidePanel from './AdminSidePanel';
import CheckingForVerifiedUser from './CheckingForVerifiedUser';

const VerificationRequest = () => {
    const [loading, setLoading] = useState(true);
    const [verificationRequest, setVerificationRequest] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('/api/userVerificationProcess/')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setVerificationRequest(data);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, []);

    const handleNext = (id) => {
        console.log(id);
        navigate({ pathname: '/checkingForVerifiedUser', search: `?id=${id}` });
    };

    return (
        <section>
            <div className='flex'>
                <div className='flex-none'>
                    <AdminSidePanel />
                </div>
                <div className='flex-1 w-96'>
                    <div className='flex'>
                        <div className="ml-24 mr-24 mt-20">
                            <div>
                                {loading ? <div className='p-48 ml-96'><SpinnerLoading /></div> : <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
                                    <div className='bg-white shadow sm:rounded-lg' >
                                        <div class="px-4 py-5 sm:px-6">
                                            <h3 class="text-lg font-medium leading-6 text-gray-900">All Requested User will appear here</h3>
                                            <p class="mt-1 max-w-2xl text-sm text-gray-500">Request Details</p>
                                        </div>
                                        <div class="border-t border-gray-200">
                                            <div class="overflow-x-auto">
                                                <table class="table w-full">
                                                    <thead>
                                                        <tr>
                                                            <th>Index</th>
                                                            <th>Id</th>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Phone</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {verificationRequest.map((request, index) => <tr key={request._id}>
                                                            <td>{index + 1}</td>
                                                            <td>{request._id}</td>
                                                            <td>{request.name}</td>

                                                            <td>{request.email}</td>
                                                            <td>{request.phone}</td>
                                                            <td><button onClick={() => handleNext(request._id)}>Verify now</button></td>
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

export default VerificationRequest;