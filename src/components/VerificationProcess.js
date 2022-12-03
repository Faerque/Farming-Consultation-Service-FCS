import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FooterMain from './Footer/FooterMain';
import Loading from './Loading';

const VerificationProcess = () => {

    // user info from local storage
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const [name, setName] = useState("");
    const [email, setEmail] = useState(userInfo.email)
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [picture, setPictureURL] = useState(null);
    const [pictureUploadSuccess, setPictureUploadSuccess] = useState(false);
    const [nidUploadSuccess, setNidUploadSuccess] = useState(false);
    const [NID, setNIDURL] = useState(null);
    console.log(picture);
    console.log(NID);
    const Navigate = useNavigate();
    console.log(email);

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            setLoading(true);
            setButtonDisabled(true);
            const { data } = await axios.post('https://server-fcs.onrender.com/api/userVerificationProcess/addVerification',
                { name, email, address, phone, gender, age, picture, NID },
                config)
            setLoading(false);
            setButtonDisabled(false);
            setSuccess(true);
            Navigate('/dashboard');
            // response from server

            console.log(data);
        } catch (error) {
            setError(error.response.data);
            console.log(error.response.data);
            setLoading(false);
            setButtonDisabled(false);
        }

    }

    // upload image to cloudinary
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
        setPictureURL(file.secure_url);
        setPictureUploadSuccess(true);

    }

    const uploadNID = async (e) => {
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
        setNIDURL(file.secure_url);
        setNidUploadSuccess(true);

    }




    return (
        <div>
            <div className='container my-10 mx-auto'>

                <section class="rounded-md border-green-300  text-gray-800">
                    <div class="flex flex-wrap">
                        <div class="grow-0 shrink-0 mt-0 mb-0  md:mb-0 w-full md:w-6/12 px-3 ">
                            <h2 class="text-3xl font-bold mb-3">User Verification Process</h2>
                            <div className="divider"></div>
                            <p class="text-gray-500 mb-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Laudantium, modi accusantium ipsum corporis quia asperiores
                                dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
                                autem omnis fugiat perspiciatis? Ad, veritatis.
                            </p>
                            <div class="subpixel-antialiased">
                                <form onSubmit={submitHandler}>
                                    <div class="form-group mb-2">
                                        <label class="font-medium text-gray-900" htmlFor="name">Enter Full Name</label>
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
              focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" id="exampleInput7"
                                            placeholder={userInfo.name}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-group mb-2">
                                        <label class="font-medium text-gray-900" htmlFor="email">Your Email Address </label>
                                        <br />
                                        <span className='text-xs text-red-500'>*Email Address Can't be change</span>
                                        <input disabled type="email " class="disabled form-control block
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
              focus:text-gray-700 cursor-not-allowed focus:bg-white focus:border-green-600 focus:outline-none" id="disabled-input"
                                            aria-label="disabled input"
                                            placeholder={userInfo.email}
                                        />
                                    </div>
                                    <div class="form-group mb-2">
                                        <label class="font-medium text-gray-900" htmlFor="number">Enter your phone number</label>
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
              focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" id="exampleInput8"
                                            placeholder="Enter your phone number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>



                                    <div class="form-group mb-2">
                                        <label class="font-medium text-gray-900" htmlFor="text">Enter Gender</label>
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
              focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" id="exampleInput8"
                                            placeholder="Enter Gender"
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-group mb-2">
                                        <label class="font-medium text-gray-900" htmlFor="age">Enter Age</label>
                                        <input type="number" class="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" id="exampleInput8"
                                            placeholder="Enter Age"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-group mb-2">
                                        <label class="font-medium text-gray-900" htmlFor="address">Enter Full Address</label>
                                        <input type="address" class="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" id="exampleInput8"
                                            placeholder="Enter full address"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>

                                    <div class="mb-2">
                                        <label class="font-medium text-gray-900">
                                            Upload your Passport Size Photo
                                        </label>

                                        <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-sm border  cursor-pointer" aria-describedby="file_input_help" id="file_input" type="file"
                                            onChange={uploadImage}
                                        />
                                        {pictureUploadSuccess ? <p className="text-green-500">Image Uploaded Successfully</p> : <p class="mt-1 text-sm  text-gray-700" id="file_input_help">PNG or JPG </p>}

                                    </div>
                                    <div class="mb-2">
                                        <label class="font-medium text-gray-900">
                                            Upload Your National ID card
                                        </label>

                                        <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-sm border  cursor-pointer" aria-describedby="file_input_help" id="file_input" type="file"
                                            onChange={uploadNID}
                                        />
                                        {nidUploadSuccess ? <p class="mt-1  text-green-500" id="file_input_help">Nid upload successfully</p> : <p class="mt-1 text-sm  text-gray-700" id="file_input_help">PNG or JPG</p>}

                                    </div>
                                    {loading && <div className='w-full'>
                                        <Loading />
                                    </div>}
                                    {success && <div class="alert alert-success shadow-lg">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span>Verification Request has been sent!</span>
                                        </div>
                                    </div>}
                                    {error && <div class="alert alert-error shadow-lg">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span> Error occurred</span>
                                        </div>
                                    </div>}
                                    <div className='place-content-center' >
                                        <button disabled={buttonDisabled} type="submit" className="w-full justify-center rounded-md btn btn-outline btn-success">
                                            Send Request
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3">

                            <h2 class="text-3xl font-bold  mb-3">FAQ</h2>
                            <div className="divider"></div>
                            <div tabIndex={0} className="collapse mb-1 collapse-plus border border-base-200 bg-base-100 rounded-md">
                                <div className="collapse-title text-xl font-medium">
                                    কেমন নাম গ্রহণযোগ্য?
                                </div>
                                <div className="collapse-content">
                                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse mb-1 collapse-plus border border-base-200 bg-base-100 rounded-md">
                                <div className="collapse-title text-xl font-medium">
                                    ইমেইল এড্রেস পরিবর্তন করা যায় না কেন?
                                </div>
                                <div className="collapse-content">
                                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse mb-1 collapse-plus border border-base-200 bg-base-100 rounded-md">
                                <div className="collapse-title text-xl font-medium">
                                    ভেরিফিকেশন রিকুয়েস্ট দেওয়ার কতদিন পর উত্তর পাওয়া যায়?
                                </div>
                                <div className="collapse-content">
                                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse mb-1 collapse-plus border border-base-200 bg-base-100 rounded-md">
                                <div className="collapse-title text-xl font-medium">
                                    কোনো উত্তর ভুল দিলে বা ভুল ফিলআপ করলে কি হবে?
                                </div>
                                <div className="collapse-content">
                                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse mb-1 collapse-plus border border-base-200 bg-base-100 rounded-md">
                                <div className="collapse-title text-xl font-medium">
                                    জাতীয় পরিচয় পত্রের ছবি কেন নেওয়া হচ্ছে ?
                                </div>
                                <div className="collapse-content">
                                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <div className='p-3 mt-1'>
                    <Link to='/' className='btn rounded-md btn-active'>Back To home</Link>
                </div>
            </div>
            <div className='mt-4'>
                <FooterMain />
            </div>
        </div>
    );
};

export default VerificationProcess;