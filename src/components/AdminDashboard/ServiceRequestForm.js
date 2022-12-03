import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import dateFormat from "dateformat";
import ReactImageMagnify from 'react-image-magnify';
import Zoom from 'react-img-zoom'
import PinchZoomPan from "react-responsive-pinch-zoom-pan";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

    },
};



Modal.setAppElement('#root');

const ServiceRequestForm = ({ modalData, modalIsOpen, closeModal }) => {
    const [ConsultationDes, setConsultationDes] = useState(" ");
    const { userName,
        userEmail,
        consultationDescription,
        consultationDescriptionByAdmin,
        consultationImgUrl,
        consultationName,
        consultationStatus,
        consultationRequestTime,
        userPhone } = modalData;


    console.log(consultationDescriptionByAdmin);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            consultationDescriptionByAdmin: ConsultationDes,
            consultationStatus: "Done"
        }
        try {
            await fetch(`https://server-fcs.onrender.com/api/userConsultation/updateConsultation/${modalData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        } catch {

        }
    }
    const handleZoom = {
        zoomButtons: true,
        doubleTapBehavior: "zoom",
    }
    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"

            >
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-grow rounded-sm place-items-center">
                        <div className='p-2'>
                            <label className="block text-md font-medium text-gray-900">Consultation information:</label>
                            <p className="divider lg:divider-vertical"></p>

                            <div className='grid mb-2 grid-cols-6 gap-6'>
                                <div className='col-span-6 sm:col-span-3'>
                                    <label className='block text-sm font-medium text-gray-700'>
                                        Consultation Name:
                                    </label>
                                    <label className='block text-sm font-normal text-gray-500'>
                                        {consultationName}
                                    </label>
                                </div>
                                <div className='col-span-6 sm:col-span-3'>
                                    <label className='block text-sm font-medium text-gray-700'>
                                        Consultation Status:
                                    </label>
                                    <label className='block text-sm font-normal text-gray-500'>
                                        {consultationStatus}
                                    </label>
                                </div>
                                <div className='col-span-6 sm:col-span-3'>
                                    <label className='block text-sm font-medium text-gray-700'>
                                        Consultation Request Time:
                                    </label>
                                    <label className='block text-sm font-normal text-gray-500'>
                                        {dateFormat(consultationRequestTime, "dddd, mmmm dS, yy ")}
                                    </label>
                                </div>
                                <div className='col-span-6 sm:col-span-3'>
                                    <label className='block text-sm font-medium text-gray-700'>
                                        Consultation Description:

                                    </label>
                                    <label style={{ maxWidth: 300 }} className='block text-sm font-normal text-gray-500'>
                                        {consultationDescription}
                                    </label>
                                </div>
                            </div>

                            <PinchZoomPan {...handleZoom} >
                                <img className="object-cover rounded-sm h-64 w-full" src={consultationImgUrl} alt="" />
                            </PinchZoomPan>
                            {/* <img className="object-cover rounded-sm h-64 w-full" src={consultationImgUrl} alt="" /> */}

                        </div>
                    </div>

                    <div className="divider lg:divider-horizontal"></div>
                    <div className="grid flex-grow rounded-sm ">
                        <div className='p-2'>
                            <label className="block text-md font-medium text-gray-900">User information:</label>
                            <p className="divider lg:divider-vertical"></p>

                            <div className='grid grid-cols-6 gap-6"'>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-md font-medium text-gray-700">Name:</label>
                                    <label style={{ maxWidth: 100 }} className="block text-md font-normal text-gray-500">{userName}</label>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-md font-medium text-gray-700">Phone:</label>
                                    <label className="block text-sm font-normal text-gray-500">{userPhone}</label>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block text-md font-medium text-gray-700">Email:</label>
                                    <label className="block text-sm font-normal text-gray-500">{userEmail}</label>
                                </div>


                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Consultation Description By Admin</span>
                                    </label>
                                    <textarea
                                        className="textarea rounded-md h-24 textarea-bordered"
                                        placeholder="Consultation Description By Admin"
                                        value={ConsultationDes}
                                        onChange={(e) => setConsultationDes(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className="mt-1 rounded-sm form-control">
                                    <button className="flex w-full justify-center btn btn-outline btn-success">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ServiceRequestForm;