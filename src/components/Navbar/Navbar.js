import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import logo from '../../assets/Logo.png'



const Navbar = () => {
    const navigate = useNavigate();
    // getting user info from local storage
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));



    // logout function
    const logoutHandler = () => {
        localStorage.removeItem('userInfo');
        window.location.reload();
        navigate('/');

    }


    console.log(userInfo);
    return (
        <div>
            {!isMobile ? <div>
                <nav class="bg-neutral">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                        <a href="https://flowbite.com" class="flex items-center">
                            <img src={logo} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                            <label class="self-center text-xl font-semibold whitespace-nowrap text-white">Farming Consultation Services</label>
                        </a>
                        <div>
                        </div>
                        <div class="flex items-center">
                            <a href="tel:5541251234" class="mr-6 text-lg font-medium text-gray-500 text-white hover:underline">(555) 412-1234</a>
                            {!userInfo ? <div>

                                <Link to="/login" class="text-xl font-medium text-blue-600  hover:underline">লগইন</Link>
                            </div> :
                                <div class="dropdown dropdown-end">
                                    <label tabIndex="0" class="btn btn-ghost btn-circle avatar">
                                        <div class="w-10 rounded-full">
                                            {userInfo.picture ? <img alt='userImage' src={userInfo.picture} /> : null}
                                        </div>
                                    </label>
                                    {userInfo ? <div>
                                        <ul tabIndex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-md w-52">
                                            <li>
                                                <Link to='dashboard' className="justify-between">
                                                    {userInfo.name}
                                                </Link>
                                            </li>
                                            <li>
                                                {userInfo.isAdmin ? <Link to='F7d32fab841334cdb7b6' className="justify-between">
                                                    Got to Admin Dashboard
                                                </Link> : null}
                                            </li>
                                            <li><button onClick={logoutHandler} >লগআউট</button></li>
                                        </ul>
                                    </div> : " "}
                                </div>}
                        </div>
                    </div>
                </nav>
                <nav class="bg-primary">
                    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                        <div class="flex items-center">
                            <ul class="flex flex-row  mt-0 mr-6 space-x-8 text-sm font-medium">
                                <li>
                                    <Link to="/" class="text-white text-lg  hover:underline" aria-current="page">হোম</Link>
                                </li>
                                <li>
                                    <Link to="/marketPlace" class="text-white text-lg  hover:underline">বেচা কেনা</Link>
                                </li>
                                <li>
                                    <Link to="/informationAndLatestNews" class="text-white text-lg  hover:underline">জানুন এবং শিখুন</Link>
                                </li>
                                <li>
                                    <Link to="/services" class="text-white text-lg  hover:underline">পরামর্শ নিন</Link>
                                </li>
                                <li>
                                    <Link to="/faq" class="text-white text-lg  hover:underline">
                                        সচরাচর প্রশ্ন
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
                :
                <div>
                    <nav class="bg-neutral">
                        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                            <p class="flex items-center">
                                <img src={logo} class="h-6 mr-3 sm:h-9" alt="FCS Logo" />
                            </p>
                            <div class="flex items-center">
                                <a href="tel:5541251234" class="mr-6 text-sm font-medium text-white hover:underline">(555) 412-1234</a>
                                {!userInfo ? <div>

                                    <Link to="/login" class="text-sm font-medium text-blue-600  hover:underline">লগইন</Link>
                                </div> :
                                    <div class="dropdown dropdown-end">
                                        <label tabIndex="0" class="btn btn-ghost btn-circle avatar">
                                            <div class="w-10 rounded-full">
                                                {userInfo ? <img alt='userImage' src={userInfo.picture} /> : null}
                                            </div>
                                        </label>
                                        {userInfo ? <div>
                                            <ul tabIndex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-md w-52">
                                                <li>
                                                    <Link to='dashboard' className="justify-between">
                                                        {userInfo.name}
                                                    </Link>
                                                </li>
                                                <li>
                                                    {userInfo.isAdmin ? <Link to='F7d32fab841334cdb7b6' className="justify-between">
                                                        Got to Admin Dashboard
                                                    </Link> : null}
                                                </li>
                                                <li><button onClick={logoutHandler} >লগআউট</button></li>
                                            </ul>
                                        </div> : " "}
                                    </div>}
                            </div>
                        </div>
                    </nav>
                    <nav class="bg-primary">
                        <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                            <div class="flex items-center">
                                <ul class="flex flex-row  mt-0 mr-6 space-x-8 text-sm font-small">
                                    <li>
                                        <Link to="/" class="text-white text-sm  hover:underline" aria-current="page">হোম</Link>
                                    </li>
                                    <li>
                                        <Link to="/marketPlace" class="text-white text-sm  hover:underline">বেচা কেনা</Link>
                                    </li>
                                    <li>
                                        <Link to="/informationAndLatestNews" class="text-white text-sm  hover:underline">জানুন এবং শিখুন</Link>
                                    </li>
                                    <li>
                                        <Link to="/services" class="text-white text-sm  hover:underline">পরামর্শ নিন</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>}

        </div>
    );
};

export default Navbar;