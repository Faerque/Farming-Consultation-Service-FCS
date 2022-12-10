import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import FooterSm from '../Footer/FooterSm';
import AdminSidePanel from './AdminSidePanel';
import dateFormat from "dateformat";
import ServiceRequestForm from './ServiceRequestForm';
// 


const ServiceRequest = () => {
    const [serviceRequest, setServiceRequest] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const [selects, setSelects] = useState(" ");
    const [searchResult, setSearchResult] = useState("");
    console.log(serviceRequest);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://server-fcs.onrender.com/api/userConsultation/consultations');
                setServiceRequest(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    console.log(showModal);
    console.log(modalData);

    const closeModal = () => {
        setShowModal(false);
    }

    console.log(serviceRequest);
    const filterBySearch = (service) => {
        if (searchResult === " ") {
            return service;
        } else if (service.consultationName.toLowerCase().includes(searchResult.toLowerCase())) {
            return service;
        } else if (service.userName.toLowerCase().includes(searchResult.toLowerCase())) {
            return service;
        }
    }

    return (
        <section className='mt-8'>
            <div class="flex">
                <div class="flex-none">
                    <AdminSidePanel />
                </div>
                <div class="flex-1 w-64 ">
                    <div className='flex'>
                        <div className='m-20'>
                            <div class="overflow-hidden bg-white shadow sm:rounded-lg">

                                <div class="overflow-x-auto relative  sm:rounded-lg">

                                    <div className='m-0'>
                                        <select value={selects} onChange={e => setSelects(e.target.value)}
                                            className="select rounded-sm m-2 mb-1 select-ghost w-48 max-w-xs">
                                            <option disabled selected>Sort by:</option>
                                            <option>Request</option>
                                            <option>New Request</option>
                                        </select>
                                        <div class="flex justify-center">
                                            <div class="mb-3 xl:w-96">
                                                <input
                                                    type="search"
                                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                    value={searchResult}
                                                    onChange={e => setSearchResult(e.target.value)}
                                                    placeholder="Search by consultation name or user name"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <table class=" w-full text-sm text-left text-gray-500 ">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                                            <tr>
                                                <th scope="col" class="py-3 px-6">
                                                    Index
                                                </th>
                                                <th scope="col" class="py-3 px-6">
                                                    Service Name
                                                </th>
                                                <th scope="col" class="py-3 px-6">
                                                    Service Request by user
                                                </th>
                                                <th scope="col" class="py-3 px-6">
                                                    User Phone Number
                                                </th>
                                                <th scope="col" class="py-3 px-6">
                                                    Consultation Status
                                                </th>
                                                <th scope="col" class="py-3 px-6">
                                                    Service Requested Date
                                                </th>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            {
                                                serviceRequest
                                                    .sort((a, b) => {
                                                        if (selects === "New Request") {
                                                            return new Date(b.consultationRequestTime
                                                            ) - new Date(a.consultationRequestTime
                                                            )
                                                        }
                                                        if (selects === "Request") {
                                                            return new Date(a.consultationRequestTime
                                                            ) - new Date(b.consultationRequestTime
                                                            )
                                                        }
                                                        return serviceRequest;

                                                    })
                                                    .filter((service) => filterBySearch(service))
                                                    .map((service, index) =>
                                                        <tr onClick={() => {
                                                            setShowModal(true);
                                                            setModalData(service);
                                                        }} key={service._id} class=" bg-white border-b cursor-pointer dark:border-gray-700 hover:bg-gray-200 ">
                                                            <th scope="row" class="py-4 px-6 font-medium text-gray-1200 whitespace-nowrap 1200">
                                                                {index + 1}
                                                            </th>
                                                            <td class="py-4 px-6">
                                                                {service.consultationName}
                                                            </td>
                                                            <td class="py-4 px-6">
                                                                {service.userName}
                                                            </td>
                                                            <td class="py-4 px-6">
                                                                {service.userPhone}
                                                            </td>
                                                            <td class="py-4 px-6">
                                                                {service.consultationStatus.charAt(0).toUpperCase() + service.consultationStatus.slice(1)}
                                                            </td>
                                                            <td class="py-4 px-6">
                                                                {dateFormat(service.consultationRequestTime, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
                                                            </td>
                                                        </tr>
                                                    )
                                            }
                                        </tbody>
                                    </table>
                                </div>

                                <ServiceRequestForm modalData={modalData} modalIsOpen={showModal} closeModal={closeModal} ></ServiceRequestForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ServiceRequest;