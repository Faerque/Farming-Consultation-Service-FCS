
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
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`/api/userVerificationProcess/checkingVerification/${id}`);
                setUserReq(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [id]);

    useEffect(() => {
        axios.get('api/users/allUsers')
            .then(res => {
                setUser(res.data);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, []);

    // if userReq and user's email is matched then show the user's data
    const filterUser = users.find(user => user.email === userReq?.email);
    console.log(filterUser);
    // console.log(userReq.NID);
    // now we need to update the filter users existing data if admin clicked on button to verify the user for that we need to fetch the data from server again and update the data
    const handleVerifyUser = async () => {
        try {
            await fetch(`/api/users/updateUser/${filterUser._id}`, {
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
                        <div className="ml-24 mr-24 mt-20">
                            <div className='container my-14 px-6 mx-auto'>
                                {loading ? <div className='p-20'>
                                    <SpinnerLoading />
                                </div>
                                    : (<section class="border-solid border-2 p-14 rounded-lg border-sky-300  text-gray-800">
                                        <div class="flex flex-wrap">
                                            <div class="grow-0 shrink-0 mt-0 mb-0 basis-auto md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                                                <h2 class="text-3xl font-bold mb-3"></h2>
                                                <div class="grid grid-cols-1 gap-4 flex items-center">
                                                    <div class="mb-3">
                                                        <img src="https://mdbootstrap.com/img/new/standard/city/047.jpg" class="max-w-full max-h-60 rounded-lg" alt="" />
                                                    </div>
                                                </div>
                                                <p class="text-gray-500 mb-3">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Laudantium, modi accusantium ipsum corporis quia asperiores
                                                    dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
                                                    autem omnis fugiat perspiciatis? Ad, veritatis.
                                                </p>
                                                <div class="flex flex-wrap">
                                                    <div class="mb-4 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                                        <div class="flex items-start">
                                                            <div class="shrink-0">
                                                                <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" class="w-5 text-white"
                                                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                        <path fill="currentColor"
                                                                            d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                                                                        </path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div class="grow ml-6">
                                                                <p class="font-bold ">Technical support</p>
                                                                <p class="text-gray-500">support@example.com</p>
                                                                <p class="text-gray-500">+1 234-567-89</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="mb-4 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                                        <div class="flex items-start">
                                                            <div class="shrink-0">
                                                                <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign"
                                                                        class="w-3 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512">
                                                                        <path fill="currentColor"
                                                                            d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z">
                                                                        </path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div class="grow ml-6">
                                                                <p class="font-bold ">Sales questions</p>
                                                                <p class="text-gray-500">sales@example.com</p>
                                                                <p class="text-gray-500">+1 234-567-89</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="mb-4 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                                        <div class="flex align-start">
                                                            <div class="shrink-0">
                                                                <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper"
                                                                        class="w-5 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                        <path fill="currentColor"
                                                                            d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z">
                                                                        </path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div class="grow ml-6">
                                                                <p class="font-bold ">Press</p>
                                                                <p class="text-gray-500">press@example.com</p>
                                                                <p class="text-gray-500">+1 234-567-89</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="mb-4 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                                        <div class="flex align-start">
                                                            <div class="shrink-0">
                                                                <div class="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bug" class="w-5 text-white"
                                                                        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                                        <path fill="currentColor"
                                                                            d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z">
                                                                        </path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                            <div class="grow ml-6">
                                                                <p class="font-bold ">Bug report</p>
                                                                <p class="text-gray-500">bugs@example.com</p>
                                                                <p class="text-gray-500">+1 234-567-89</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                                                <form>
                                                    <div class="form-group mb-4">
                                                        <input type="text" class="form-control block
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
                                                    <div class="form-group mb-6">
                                                        <input type="email" class="form-control block
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                                                            placeholder="Email address" />
                                                    </div>
                                                    <label class="mb-0 block text-base
font-normal
text-gray-700">
                                                        Upload File
                                                    </label>

                                                    <div class="mb-2">
                                                        <input type="file" name="file" id="file" class="sr-only" />
                                                        <label
                                                            for="file"
                                                            class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                                                        >
                                                            <div>
                                                                <span class="mb-0 block text-xl font-semibold text-[#07074D]">
                                                                    Drop files here
                                                                </span>
                                                                <span class="mb-0 block text-base font-medium text-[#6B7280]">
                                                                    Or
                                                                </span>
                                                                <span
                                                                    class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                                                                >
                                                                    Browse
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div class="form-group mb-2">
                                                        <textarea class="
form-control
block
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
" id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                                                    </div>
                                                    <button type="submit" class="
w-full
px-6
py-2.5
bg-blue-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-blue-700 hover:shadow-lg
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