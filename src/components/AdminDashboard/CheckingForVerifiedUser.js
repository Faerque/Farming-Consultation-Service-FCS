
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SpinnerLoading from '../SpinnerLoading';
import AdminSidePanel from './AdminSidePanel';

const CheckingForVerifiedUser = () => {
    const [loading, setLoading] = useState(true);
    const [userReq, setUserReq] = useState(null);
    const [users, setUser] = useState([]);
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

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
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <main>
            <div className='flex'>
                <div className='flex-none'>
                    <AdminSidePanel />
                </div>
                <div className='flex-1 w-96'>
                    <div className='flex'>
                        <div className="ml-10 mr-10 mt-5">
                            <div className='container my-14 px-6 mx-auto'>
                                {loading ? <div className='p-20'>
                                    <SpinnerLoading />
                                </div>
                                    : (<section className="border-solid border-2 p-14 rounded-lg border-sky-300  text-gray-800">
                                        <div className="flex flex-wrap">
                                            <div className="grow-0 shrink-0 basis-auto md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                                                <h2 className="text-3xl font-bold ">
                                                    User verification Request
                                                </h2>
                                                <small className="text-red-500 mb-1">
                                                    User verification is the most important part of the system. please verify the user carefully.
                                                </small>
                                                <br />
                                                <div className="flex flex-wrap">
                                                    <div className="grid grid-cols-1 gap-5 flex items-center">
                                                        <p className="font-bold">Requested User Photo:</p>
                                                        <div className="mb-3">
                                                            <img src={userReq.picture} className="max-w-full max-h-60 rounded-lg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-1 gap-5 flex items-center">
                                                        <p className="font-bold">Requested User NID:</p>
                                                        <div className="mb-3">
                                                            <img alt='user-nid' className="max-w-full h-auto rounded-lg transition-all duration-300 blur-sm hover:blur-none" src={userReq.NID} />

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                                                <form>
                                                    <div className="form-group mb-4">
                                                        <input type="text" className="form-control block
w-full
px-3
py-1.5
text-base
font-normal
text-gray-700
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                                            placeholder="Name" />
                                                    </div>
                                                    <div className="form-group mb-6">
                                                        <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                                                            placeholder="Email address" />
                                                    </div>
                                                    <label className="mb-0 block text-base font-normal text-gray-700">
                                                        Upload File
                                                    </label>

                                                    <div className="mb-2">
                                                        <input type="file" name="file" id="file" className="sr-only" />
                                                        <label
                                                            for="file"
                                                            className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                                                        >
                                                            <div>
                                                                <span className="mb-0 block text-xl font-semibold text-[#07074D]">
                                                                    Drop files here
                                                                </span>
                                                                <span className="mb-0 block text-base font-medium text-[#6B7280]">
                                                                    Or
                                                                </span>
                                                                <span
                                                                    className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                                                                >
                                                                    Browse
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="form-group mb-2">
                                                        <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                                                    </div>
                                                    <button type="submit" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-blue-800 active:shadow-lg
transition
duration-150
ease-in-out">Send</button>
                                                </form>
                                            </div>
                                        </div>
                                        <button className='btn btn-primary' onClick={handleVerifyUser}> Verifed</button>
                                    </section>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default CheckingForVerifiedUser;