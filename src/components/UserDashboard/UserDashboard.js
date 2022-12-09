import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import FooterMain from '../Footer/FooterMain';
import dateFormat from "dateformat";
import { Link } from 'react-router-dom';
import SpinnerLoading from '../SpinnerLoading';
import FooterSm from '../Footer/FooterSm';
import toast, { Toaster } from 'react-hot-toast';

const UserDashboard = () => {
    const [allUserData, setAllUserData] = useState([]);
    const [consultationData, setConsultationData] = useState([]);
    const [updatedName, setUpdatedName] = useState('');
    const [loading, setLoading] = useState(true);
    const [updatedPhone, setUpdatedPhone] = useState('');
    const [updatedAddress, setUpdatedAddress] = useState('');
    const [updatedGender, setUpdatedGender] = useState('');
    const [updatedAge, setUpdatedAge] = useState('');
    const [updatedPicture, setUpdatedPicture] = useState('');
    const [pictureUploadSuccess, setPictureUploadSuccess] = useState(false);
    const [verificationPending, setVerificationPending] = useState([]);
    const [nothingToChange, setNothingToChange] = useState(false);

    // taking data from local storage
    const user = JSON.parse(localStorage.getItem('userInfo'));
    // using useEffect to get few more data for logged in user
    useEffect(() => {
        const fetchData = async () => {
            await axios.get('https://server-fcs.onrender.com/api/users/allUsers')
                .then(res => {
                    setAllUserData(res.data);
                    setLoading(false);
                })
                .catch(error => console.log(error));
            // service used by user
            await axios.get('https://server-fcs.onrender.com/api/userConsultation/consultations')
                .then(res => {
                    setConsultationData(res.data);
                })
                .catch(error => console.log(error));

            await axios.get('https://server-fcs.onrender.com/api/userVerificationProcess/')
                .then(res => {
                    setVerificationPending(res.data);
                }).catch(error => console.log(error));
        };
        fetchData();

    }, []);


    // only data will be shown who is logged in
    const filterUser = allUserData.filter(data => data.email === user.email);
    console.log(filterUser[0]);
    const { _id, name, email, phone, address, isVerified, isAdmin, picture, gender, created_at, age, token } = filterUser[0] || [];
    // filter consultation data by logged in user
    const filterConsultation = consultationData.filter(data => data.userEmail === user.email);
    console.log(filterConsultation);
    // filter verification data by logged in user
    const filterVerification = verificationPending.filter(data => data.email === user.email && filterUser[0].isVerified === false) || [];
    console.log(filterVerification[0]);

    // update user data function
    console.log(verificationPending);
    const handleUpdate = async (e) => {
        e.preventDefault();
        if (updatedName === '' && updatedPhone === '' && updatedAddress === '' && updatedGender === '' && updatedAge === '' && updatedPicture === '') {
            toast.error('নতুন কোনো তথ্য নেই!');
        } else {
            const updatedUser = {
                _id: _id,
                name: updatedName || name,
                phone: updatedPhone || phone,
                address: updatedAddress || address,
                age: updatedAge || age,
                gender: updatedGender || gender,
                picture: updatedPicture || picture,
                email: email,
                isVerified: isVerified,
                isAdmin: isAdmin,
                token: token,
            }
            console.log(updatedUser);
            try {
                await fetch(`https://server-fcs.onrender.com/api/users/updateGeneralUser/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedUser)
                }).then(res =>
                    res.json())
                    .then(data => {
                        if (data) {
                            toast.success('আপনার তথ্য সফলভাবে আপডেট হয়েছে!');
                            localStorage.setItem('userInfo', JSON.stringify(updatedUser));
                            setTimeout(() => {
                                window.location.reload();
                                // will store data in local storage
                            }, 2000);
                        }
                    })
            } catch (error) {
                console.log(error);
            }
        }
    }
    console.log(nothingToChange)


    const uploadImage = async (e) => {
        console.log(e.target.files[0]);
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'farming');
        data.append('cloud_name', 'dybft9kel');
        const res = await fetch('https://api.cloudinary.com/v1_1/dybft9kel/image/upload', {
            method: 'POST',
            body: data
        });
        const file = await res.json();
        setUpdatedPicture(file.secure_url);
        setPictureUploadSuccess(true);

    }
    return (
        <div className='mt-8'>
            {
                loading ? <SpinnerLoading /> : <div className='container mx-auto mt-4'>
                    <div className='mt-8' >
                        <div class="md:grid md:grid-cols-3 md:gap-6">
                            <div class="md:col-span-1">
                                <div class="px-4 sm:px-0">
                                    <h3 class="text-lg font-medium leading-6 text-gray-900">প্রোফাইল</h3>
                                    <p class="mt-1 mb-1 text-sm text-gray-600">আপনার দেওয়া তথ্যগুলো এখানে উপস্থাপিত।</p>
                                    {isVerified ? <div class="bg-blue-100 rounded-sm py-5 px-6 mb-4 text-base text-blue-600 mb-3" role="alert">
                                        আপনার দেওয়া তথ্যগুলো যাচাইকৃত হয়েছে। আপনি এখন প্রোফাইল তথ্য পরিবর্তন করতে পারবেন না।
                                    </div> :
                                        <div>
                                            {filterVerification[0] ? <div class="bg-green-100 rounded-sm py-5 px-6 mb-4 text-base text-green-600 mb-3" role="alert">
                                                আপনার দেওয়া তথ্যগুলো একজন পরীক্ষক দ্বারা যাচাই করা হচ্ছে। অনুগ্রহ করে অপেক্ষা করুন।
                                            </div> : <div class="bg-yellow-100 rounded-sm py-5 px-6 mb-4 text-base text-yellow-600 mb-3" role="alert">
                                                User is not verified to the system. Can change user information.
                                                To verify, please click on verify button.
                                                <div className='mt-2'>
                                                    <Link to="/VerificationProcess" className="btn btn-outline btn-primary">verify now </Link>
                                                </div>
                                            </div>
                                            }
                                        </div>}
                                    <Toaster />
                                </div>
                            </div>
                            <div class="mt-5 md:col-span-2 md:mt-0">
                                <form onSubmit={handleUpdate}>
                                    <div class="shadow sm:overflow-hidden sm:rounded-md">
                                        <div class="space-y-6 bg-white px-4 py-5 sm:p-6">

                                            <label for="about" class="block text-lg font-medium text-gray-700">ব্যবহারকারীর দেওয়া তথ্যসমূহঃ</label>
                                            <div class="grid grid-cols-6 gap-6">
                                                <div class="col-span-3 sm:col-span-2">
                                                    <label htmlFor="name" class="block  text-md font-medium text-gray-700">নামঃ</label>
                                                    {isVerified ? <div>
                                                        <div class="flex items">
                                                            <label htmlFor="name" class="mt-1 text-sm text-gray-700">{name} </label>
                                                            <div class="flex-shrink-0">
                                                                <img alt='verified' className='m-1 w-4 h-4' src="https://img.icons8.com/color/48/null/verified-badge.png" />
                                                            </div>
                                                        </div>
                                                    </div> : <input type="text" name="name" placeholder={user.name}
                                                        value={updatedName}
                                                        onChange={(e) => setUpdatedName(e.target.value)}
                                                        id="name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />}
                                                </div>

                                                <div class="col-span-3 sm:col-span-2">
                                                    <label htmlFor="last-name" class="block text-sm font-medium text-gray-700">মোবাইল নাম্বারঃ</label>
                                                    {isVerified ? <label htmlFor="name" class="mt-1 text-sm text-gray-700">+880{phone}</label> : <input type="tel"
                                                        name="phone"
                                                        value={updatedPhone}
                                                        onChange={(e) => setUpdatedPhone(e.target.value)}
                                                        id="phone" placeholder={phone} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />}
                                                </div>
                                                <div class="col-span-3 sm:col-span-2">
                                                    <label htmlFor="last-name" class="block text-sm font-medium text-gray-700">Account Created:</label>
                                                    <label htmlFor="text" class="mt-1 text-sm text-gray-700">{dateFormat(created_at, "mmmm dS, yyyy")}</label>
                                                </div>

                                                <div class="col-span-3 sm:col-span-2">
                                                    <label for="email-address" class="block text-sm font-medium text-gray-700">ইমেইলঃ</label>
                                                    {isVerified ? <label htmlFor="email" class="mt-1 text-sm text-gray-700">{email}</label> : <input type="text" placeholder={user.email} class="mt-1 cursor-not-allowed focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" disabled />}
                                                </div>
                                                <div class="col-span-3 sm:col-span-2">
                                                    <label for="email-address" class="block text-sm font-medium text-gray-700">লিঙ্গঃ</label>
                                                    {isVerified ? <label htmlFor="text" class="mt-1 text-sm text-gray-700">{gender}</label> : <input type="text"
                                                        value={updatedGender}
                                                        onChange={(e) => setUpdatedGender(e.target.value)} placeholder={gender}
                                                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />}
                                                </div>
                                                <div class="col-span-3 sm:col-span-2">
                                                    <label for="email-address" class="block text-sm font-medium text-gray-700">বয়সঃ</label>
                                                    {isVerified ? <label htmlFor="text" class="mt-1 text-sm text-gray-700">{age} years</label> : <input type="text"
                                                        value={updatedAge}
                                                        onChange={(e) => setUpdatedAge(e.target.value)}
                                                        placeholder={age + ' years'}
                                                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />}
                                                </div>

                                                <div class="col-span-6">
                                                    <label for="street-address" class="block text-sm font-medium text-gray-700">ঠিকানাঃ</label>
                                                    {isVerified ? <label htmlFor="address" class="mt-1 text-sm text-gray-700">{address}</label> : <input type="address"
                                                        value={updatedAddress}
                                                        onChange={(e) => setUpdatedAddress(e.target.value)}
                                                        placeholder={address}
                                                        name="address" id="address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />}
                                                </div>
                                            </div>

                                            <div>
                                                <label class="block text-sm font-medium text-gray-700">ছবিঃ</label>
                                                <div class="mt-1 flex items-center">
                                                    {picture ? <img src={picture} alt="" className='h-48 w-48 rounded-sm' /> : <input type="file" className="file-input file-input-bordered w-full max-w-xs" />}
                                                </div>
                                                {
                                                    isVerified ? null : <div>
                                                        <p class="mt-1 text-sm  text-gray-700" id="file_input_help">বর্তমান ছবি পাল্টান: </p>
                                                        <input type="file" onChange={uploadImage} className="file-input file-input-bordered w-full max-w-xs" />
                                                        {pictureUploadSuccess ? <p className="text-green-500">আপনার দেওয়া ছবিটি
                                                            সার্ভারের যুক্ত হয়েছে।
                                                        </p> : <p class="mt-1 text-sm  text-gray-700" id="file_input_help">PNG or JPG </p>}
                                                    </div>
                                                }
                                            </div>


                                        </div>
                                        {isVerified ? null : <div>

                                            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                                <button type="submit" className="btn btn-outline btn-primary">তথ্য জমা দিন</button>
                                            </div>
                                        </div>}
                                        {/* <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save the info</button> */}


                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="hidden sm:block" aria-hidden="true">
                        <div class="py-5">
                            <div class="border-t border-gray-200"></div>
                        </div>
                    </div>

                    <div class="mt-10 sm:mt-0">
                        <div class="md:grid md:grid-cols-3 md:gap-6">
                            <div class="md:col-span-1">
                                <div class="px-4 sm:px-0">
                                    <h3 class="text-lg font-medium leading-6 text-gray-900">
                                        আপনার নেওয়া সেবা সমূহের তালিকাঃ
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                                </div>
                            </div>
                            <div class="mt-5 md:col-span-2 md:mt-0">

                                <div class="overflow-x-auto">

                                    <div className="m-2">
                                        <div>
                                            {
                                                filterConsultation.length === 0 ? <div>
                                                    <div className="alert rounded-md">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                            <span>আপনি এখনো এখনো কোন পরামর্শ গ্রহণ করেননি!</span>
                                                        </div>
                                                    </div>
                                                </div> : <div>
                                                    {
                                                        filterConsultation.map(consultation => <div className='mb-1'>
                                                            <div tabIndex={0} className="collapse collapse-arrow border border-base-200 bg-base-100 rounded-lg">
                                                                <div className="collapse-title text-xl  font-medium">

                                                                    <div>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                                        <span>{consultation.consultationName
                                                                        } (Tap to see.)</span>
                                                                    </div>

                                                                </div>
                                                                <div className="collapse-content">
                                                                    {/* Your Given Consultation Description: {consultation.consultationDescription}
                                                                    <br />
                                                                    Consultation Status: {consultation.consultationStatus}
                                                                    <br />
                                                                    Consultation Result: {consultation.consultationDescriptionByAdmin} */}
                                                                    <div className="grid grid-cols-2 gap-6">
                                                                        <div className='col-span-3 sm:col-span-2'>
                                                                            <label htmlFor="about" className="block text-md font-medium text-gray-700">
                                                                                আপনার দেওয়া সমস্যাটির বিবরণঃ
                                                                            </label>
                                                                            <div className="mt-1">
                                                                                <div className="flex items-center mb-3">
                                                                                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded white:bg-orange-200 white:text-orange-900">{consultation.consultationDescription}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-span-3 sm:col-span-2'>
                                                                            <label htmlFor="about" className="block text-md font-medium text-gray-700">
                                                                                সমস্যার অবস্থাঃ
                                                                            </label>

                                                                            <div className="mt-1">
                                                                                <div className="flex items-center mb-3">
                                                                                    <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded white:bg-yellow-200 white:text-yellow-900">{consultation.consultationStatus}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-span-3 sm:col-span-2'>
                                                                            <label htmlFor="about" className="block text-md font-medium text-gray-700">
                                                                                একজন অভিজ্ঞ পরামর্শদাতার দেওয়া পরামর্শঃ
                                                                            </label>

                                                                            <div className="mt-1">
                                                                                <div className="flex items-center mb-3">

                                                                                    {
                                                                                        typeof consultation.consultationDescriptionByAdmin === 'string' && consultation.consultationDescriptionByAdmin.trim().length === 0 ? <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded white:bg-blue-200 white:text-blue-900">
                                                                                            এখনো উত্তর দেওয়া হয়নি! </span> : <span className="bg-green-100 text-green-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded white:bg-green-200 white:text-green-900"> {consultation.consultationDescriptionByAdmin} </span>
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>)
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="hidden sm:block" aria-hidden="true">
                        <div class="py-5">
                            <div class="border-t border-gray-200"></div>
                        </div>
                    </div>

                    <div class="mt-10 sm:mt-0">
                        <div class="md:grid md:grid-cols-3 md:gap-6">
                            <div class="md:col-span-1">
                                <div class="px-4 sm:px-0">
                                    <div className="flex items-center mb-3">
                                        <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded white:bg-orange-200 white:text-orange-900">Beta</span>
                                    </div>
                                    <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                                    <p class="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
                                </div>
                            </div>
                            <div class="mt-5 md:col-span-2 md:mt-0">
                                <form action="#" method="POST">
                                    <div class="overflow-hidden shadow sm:rounded-md">
                                        <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                                            <fieldset>
                                                <legend class="sr-only">By Email</legend>
                                                <div class="text-base font-medium text-gray-900" aria-hidden="true">By Email</div>
                                                <div class="mt-4 space-y-4">
                                                    <div class="flex items-start">
                                                        <div class="flex h-5 items-center">
                                                            <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                        </div>
                                                        <div class="ml-3 text-sm">
                                                            <label for="comments" class="font-medium text-gray-700">Comments</label>
                                                            <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                                        </div>
                                                    </div>
                                                    <div class="flex items-start">
                                                        <div class="flex h-5 items-center">
                                                            <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                        </div>
                                                        <div class="ml-3 text-sm">
                                                            <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                                                            <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                                                        </div>
                                                    </div>
                                                    <div class="flex items-start">
                                                        <div class="flex h-5 items-center">
                                                            <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                        </div>
                                                        <div class="ml-3 text-sm">
                                                            <label for="offers" class="font-medium text-gray-700">Offers</label>
                                                            <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                            <fieldset>
                                                <legend class="contents text-base font-medium text-gray-900">Push Notifications</legend>
                                                <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                                                <div class="mt-4 space-y-4">
                                                    <div class="flex items-center">
                                                        <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                        <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700">Everything</label>
                                                    </div>
                                                    <div class="flex items-center">
                                                        <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                        <label for="push-email" class="ml-3 block text-sm font-medium text-gray-700">Same as email</label>
                                                    </div>
                                                    <div class="flex items-center">
                                                        <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                        <label for="push-nothing" class="ml-3 block text-sm font-medium text-gray-700">No push notifications</label>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                            <button type="submit" className="btn btn-outline btn-primary" disabled>Save</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            }
            <div className='mt-7' >
                <FooterMain />
                <FooterSm />
            </div>
        </div>
    );
};

export default UserDashboard;

