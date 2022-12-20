
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SpinnerLoading from '../SpinnerLoading';
import AdminSidePanel from './AdminSidePanel';

const CheckingForVerifiedUser = () => {
    const [loading, setLoading] = useState(true);
    const [userReq, setUserReq] = useState(null);
    const [users, setUser] = useState([]);
    const [success, setSuccess] = useState(false);
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://server-fcs.onrender.com/api/userVerificationProcess/checkingVerification/${id}`)
            .then(res => {
                console.log(res.data);
                setUserReq(res.data);
                setLoading(false);
            })
            .catch(error => console.log(error));
        axios.get('https://server-fcs.onrender.com/api/users/allUsers')
            .then(res => {
                setUser(res.data);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [id]);

    // useEffect(() => {
    //     axios.get('https://server-fcs.onrender.com/api/users/allUsers')
    //         .then(res => {
    //             setUser(res.data);
    //             setLoading(false);
    //         })
    //         .catch(error => console.log(error));
    // }, []);

    // if userReq and user's email is matched then show the user's data
    const filterUser = users.find(user => user.email === userReq?.email);

    // console.log(userReq.age);
    // console.log(filterUser._id);
    // console.log(userReq.gender);
    const handleVerifyUser = async () => {
        try {
            await fetch(`https://server-fcs.onrender.com/api/users/updateUser/${filterUser._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: userReq.name,
                    isVerified: true,
                    isAdmin: userReq.isAdmin,
                    picture: userReq.picture,
                    NID: userReq.NID,
                    phone: userReq.phone,
                    age: userReq.age,
                    gender: userReq.gender,
                    address: userReq.address,
                    updated: new Date().toISOString()
                }),

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                        navigate('/userVerificationRequest');
                    }, 2000);
                })
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <main className='mt-8'>
            <div className='flex'>
                <div className='flex-none'>
                    <AdminSidePanel />
                </div>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid mb-10 mr-2  bg-base-200 rounded-md place-items-center">
                        <div className='p-2 '>
                            <label className="block text-lg font-medium text-gray-900">Requested Information:</label>
                            <p className="divider lg:divider-vertical"></p>
                            <div className="flex  flex-col">
                                <div className="flex  flex-row">
                                    <div className="flex flex-col m-2">
                                        <label className="block text-lg font-medium text-gray-900">Name: </label>
                                        <label className="block text-md font-medium text-gray-700">{userReq?.name}  </label>

                                    </div>
                                    <div className="flex flex-col m-2">
                                        <label className="block text-lg font-medium text-gray-900">Email: </label>
                                        <label className="block text-md font-medium text-gray-700">{userReq?.email}  </label>

                                    </div>
                                    <div className="flex flex-col m-2">
                                        <label className="block text-lg font-medium text-gray-900">Phone: </label>
                                        <label className="block text-md font-medium text-gray-700">+880{userReq?.phone}</label>

                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="flex flex-col m-2">
                                        <label className="block text-lg font-medium text-gray-900">Age:</label>
                                        <label className="block text-md font-medium text-gray-700">{userReq?.age}</label>
                                    </div>
                                    <div className="flex flex-col m-2">
                                        <label className="block text-lg font-medium text-gray-900">Gender:</label>
                                        <label className="block text-md font-medium text-gray-700">{userReq?.gender}</label>
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="flex flex-col m-2">
                                        <label className="block text-lg font-medium text-gray-900">Address:</label>
                                        <label className="block text-md font-medium text-gray-700">{userReq?.address}</label>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className="flex flex-row">
                                    <div className="flex flex-col m-2">
                                        <label className="block text-md font-medium text-gray-900">Requested user Image:</label>
                                        <img className="aspect-square rounded-sm h-48 w-48" src={userReq?.picture} alt="" />
                                        <label className="block text-md font-medium text-gray-900">Requested User NID Image:</label>
                                        <img className="w-full aspect-video rounded-sm h-48 " src={userReq?.NID} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row ml-96'>
                            <div className='flex flex-col p-2 '>
                                <a href="#my-modal-2" class="btn" className="btn rounded-md btn-primary" >Verify User</a>
                            </div>
                        </div>
                        <div class="modal" id="my-modal-2">
                            <div class="modal-box rounded-md">
                                {!success ? <div>

                                    <h3 class="font-bold text-lg">Are you sure want to verify the user?</h3>
                                    <p class="py-4">Please check the user Information again!</p>
                                    <div class="modal-action">
                                        <a onClick={handleVerifyUser} class="btn">Yes</a>
                                        <a href='#' class="btn">Not Now</a>
                                    </div>
                                </div> :
                                    <div className="alert alert-success rounded-md">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span>User Verified Successfully!</span>
                                        </div>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default CheckingForVerifiedUser;