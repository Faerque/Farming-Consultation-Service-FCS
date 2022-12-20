import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import SpinnerLoading from './SpinnerLoading';
import consultationImg from '../../src/assets/consulationTaken.jpg';
const TakeConsultation = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    // console.log(id);
    const [loading, setLoading] = useState(true);
    const [consultationById, setConsultationById] = useState(' ');
    const [imageUrl, setImageUrl] = useState(' ');
    const [userPhoneNumber, setUserPhoneNumber] = useState("");
    const [consultationDescription, setConsultationDescription] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const { name, email } = userInfo;
    console.log(userInfo);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`https://server-fcs.onrender.com/api/services/selectService/${id}`);
                setConsultationById(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();

    }, [id]);
    console.log(consultationById);

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
        setImageUrl(file.secure_url);

    }
    console.log(imageUrl);
    console.log(consultationDescription);
    // consult form submit 
    console.log(consultationById.name);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const consultData = {
            userPhone: userPhoneNumber,
            consultationDescription: consultationDescription,
            consultationImgUrl: imageUrl,
            userName: name,
            userEmail: email,
            consultationName: consultationById.name
        };
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const { data } = await axios.post('https://server-fcs.onrender.com/api/userConsultation/addConsultation', { ...consultData }, config);
            console.log(data);
            setTimeout(() => {
                setSuccess(true);
            }, 2000);
            // redirect to home page
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 3000);
        } catch (error) {
            console.log(error)
        }
        console.log(consultData);
    };

    // console.log(consultation.name);
    return (
        <div className=''>

            <div class="container my-10 px-6 mx-auto">
                {success ? <div>
                    <div className="alert alert-success shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>সমস্যাটি সম্পর্কিত আপনার দেওয়া বিবরণ নেওয়া হয়েছে! অনুগ্রহ করে উত্তরের অপেক্ষা করুন।</span>
                        </div>
                    </div>
                </div> : <div>
                    {loading ? <div className='p-20'>

                        <SpinnerLoading />
                    </div>
                        : (<section class="border-solid border-2 p-0 rounded-md border-primary  text-gray-800">
                            <div class="flex flex-wrap">
                                <div class="grow-0 shrink-0 mt-4 mb-0 basis-auto md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                                    <h2 class="text-3xl font-bold mb-3">{consultationById.name}</h2>
                                    <div class="grid grid-cols-1 gap-4 flex items-center">
                                        <div class="mb-3">
                                            <img src={consultationImg} class="max-w-full max-h-60 rounded-md" alt="consultationImg" />
                                        </div>
                                    </div>
                                    <p class="text-gray-500 mb-3">
                                        {
                                            consultationById.description
                                        }
                                    </p>
                                    <div class="flex w-4/5 flex-wrap">
                                        <div class="grow-0 shrink-0 basis-auto w-full  ">
                                            <div class="flex mb-2 items-start">
                                                <div tabIndex={0} className="collapse rounded-md  collapse-arrow border border-base-300 bg-base-100 rounded-box">
                                                    <div className="collapse-title text-xl font-medium">
                                                        সেবা নেওয়ার কত দিন পর উত্তর পাওয়া যায় ?
                                                    </div>
                                                    <div className="collapse-content">
                                                        <p>৩-৪দিন পর।</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex mb-2 items-start">
                                                <div tabIndex={0} className="collapse rounded-md collapse-arrow border border-base-300 bg-base-100 rounded-box">
                                                    <div className="collapse-title text-xl font-medium">
                                                        আমার নেওয়া সেবাটির উত্তর কোথায় দেখতে পাব?
                                                    </div>
                                                    <div className="collapse-content">
                                                        <p>গ্রাহকের ড্যাশবোর্ডে দেখতে পাওয়া যাবে।</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex mb-2 items-start">
                                                <div tabIndex={0} className="collapse rounded-md collapse-arrow border border-base-300 bg-base-100 rounded-box">
                                                    <div className="collapse-title text-xl font-medium">
                                                        ছবি এবং ফোন নাম্বার কেন নেওয়া হচ্ছে?
                                                    </div>
                                                    <div className="collapse-content">
                                                        <p >ছবি নেওয়া হচ্ছে যাতে একজন পরিক্ষক আপনার সমস্যার বিবরণের পাশাপাশি ছবি দেখে সমস্যাটি সমাধান করতে পারেন। এবং ফোন নাম্বার নেওয়া হচ্ছে যাতে আপনার সাথে যোগাযোগ করা যায়। </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="grow-0 shrink-0 basis-auto mt-4 mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                                    <form onSubmit={handleSubmit} >


                                        <label class="mb-0 block text-base
font-normal
text-gray-700">
                                            আপনার বর্ণিত সমস্যা সম্পর্কিত একটি স্পষ্ট ছবি দিনঃ
                                        </label>

                                        <div class="mb-2">
                                            <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-sm border  cursor-pointer" aria-describedby="file_input_help" id="file_input" type="file"
                                                onChange={uploadImage}
                                            />
                                        </div>
                                        <div class="form-group mb-2">
                                            <label class="text-gray-700" htmlFor="phone">আপনার একটি সচল ফোন নাম্বার দিনঃ</label>
                                            <input type="tel" class="form-control block
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
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="phone"
                                                placeholder="ফোন নাম্বারটি লিখুন"
                                                name='phone'
                                                value={userPhoneNumber}
                                                onChange={(e) => setUserPhoneNumber(e.target.value)}
                                            />
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
" id="exampleFormControlTextarea13" rows="3" value={consultationDescription} onChange={
                                                    (e) => setConsultationDescription(e.target.value)
                                                } placeholder="অনুগ্রহ করে আপনার সমস্যাটির একটি সুস্পষ্ট বর্ণনা দিন..."></textarea>
                                        </div>
                                        <button type="submit" class="
w-full
btn btn-outline btn-primary rounded-md">আমাদের কাছে পাঠিয়ে দিন</button>
                                    </form>
                                </div>
                            </div>

                        </section>)}
                    <Link to='/services' className='mt-1 rounded-md btn btn-outline'>অন্য সেবা নিন</Link>
                </div>}
            </div>
        </div>
    );
};

export default TakeConsultation;