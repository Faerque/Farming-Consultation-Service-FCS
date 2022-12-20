
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import AdminSidePanel from './AdminSidePanel';
import Loading from '../Loading';

const AddService = () => {
    const [serviceName, setServiceName] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const serviceHandler = async (e) => {
        e.preventDefault();
        console.log(serviceName, serviceDescription);
        const ServiceData = {
            name: serviceName,
            description: serviceDescription
        };
        setLoading(true);
        setButtonDisabled(true);
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            await axios.post('https://server-fcs.onrender.com/api/services/addService', ServiceData, config);
            setTimeout(() => {
                setLoading(false);
                setSuccess(true);
                setButtonDisabled(false);
                // needs to clear the input field
                setServiceName('');
                setServiceDescription('');
            }, 2000);

        } catch (error) {
            setError(error.response.data);
            setLoading(false);
            setButtonDisabled(false);
            setTimeout(() => {
                setError('');
            }, 1000);
        }

    }


    return (
        <div className='flex mt-8'>
            <div className='flex-none'>
                <AdminSidePanel />
            </div>
            <div className='flex-1 w-64'>
                <div className='flex'>
                    <div className='container mt-4'>
                        <div class="flex items-center justify-center p-12">

                            <div class="mx-auto rounded-lg w-full max-w-[550px] bg-white">
                                <form
                                    class="py-6 px-9"
                                    onSubmit={serviceHandler}
                                >
                                    <div class="mb-5">
                                        <label
                                            for="email"
                                            class="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Enter the consultation name
                                        </label>
                                        <input
                                            type="name"

                                            placeholder="Consultation Name"
                                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            value={serviceName}
                                            onChange={(e) => setServiceName(e.target.value)}
                                        />
                                    </div>
                                    <label
                                        for="Service Description"
                                        class="mb-3 block text-base font-medium text-[#07074D]"
                                    >
                                        Consultation Description
                                    </label>
                                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Describe the service briefly"
                                        // {/* // needs this text area value */}
                                        value={serviceDescription}
                                        onChange={(e) => setServiceDescription(e.target.value)}
                                    ></textarea>
                                    <div class="mb-4 pt-4">


                                        {/* <div class="mb-6">
                                            <input type="file" name="file" id="file" class="sr-only" />
                                            <label
                                                for="file"
                                                class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                                            >
                                                <div>
                                                    <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                                                        Drop files here
                                                    </span>
                                                    <span class="mb-2 block text-base font-medium text-[#6B7280]">
                                                        Or
                                                    </span>
                                                    <span
                                                        class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                                                    >
                                                        Browse
                                                    </span>
                                                </div>
                                            </label>
                                        </div> */}
                                        {loading && <Loading />}
                                        {success && <div class="alert alert-success shadow-lg">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>Consultation has been published for User</span>
                                            </div>
                                        </div>}
                                        {error && <div class="alert alert-error shadow-lg">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                <span>Error Occurred, try again</span>
                                            </div>
                                        </div>}
                                    </div>
                                    <div className='place-content-center' >
                                        <button disabled={buttonDisabled} type="submit" className="flex w-full justify-center btn btn-outline btn-success">
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                            </span>
                                            Release the Consultation
                                        </button>
                                    </div>
                                    <div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;