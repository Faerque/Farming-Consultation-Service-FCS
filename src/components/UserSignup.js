
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserAvatar from '../assets/UserAvatar.svg';
import ErrorMessage from './ErrorMessage';
import FooterSm from './Footer/FooterSm'
import Loading from './Loading';
import Logo from '../assets/Logo.png';

const UserSignup = () => {

    const [isCapsLockIsOn, setCapsLockIsOn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [picture, setPicture] = useState();
    const [message, setMessage] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [SignUpSuccess, setSignUpSuccess] = useState(false);

    // function to detect caps lock is on or not
    const handleCapsLock = (e) => {
        if (e.getModifierState("CapsLock")) {
            setCapsLockIsOn(true);
        } else {
            setCapsLockIsOn(false);
        }
    }
    const navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
        } else {
            setMessage(null);
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                setLoading(true);
                const { data } = await axios.post('https://server-fcs.onrender.com/api/users/register',
                    { name, email, password, }, config);
                setLoading(false);
                setSignUpSuccess(true);
                setTimeout(() => {
                    setSignUpSuccess(false);
                    localStorage.setItem('userInfo', JSON.stringify(data));
                    navigate('/');
                    window.location.reload();
                }, 2000);
            } catch (error) {
                setError(error.response.data);
                console.log(error.response.data);
                setLoading(false);
            }
        }
        // console.log(email, password, name);
    }

    // useEffect(() => {
    //     const userInfo = localStorage.getItem('userInfo');
    //     if (userInfo > 0) {
    //         navigate('/');
    //     }
    // }, [navigate]);


    return (
        <section  >
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img className="mx-auto h-20 w-auto" src={Logo} alt="FCS" />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-neutral">Have an account ?</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            <Link to="/login" className="font-medium text-2xl text-primary-focus hover:text-primary">Sign in now</Link>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={submitHandler}>
                        <input type="hidden" name="remember" value="true" />

                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label for="name" className="sr-only">Name</label>
                                <input id="name" name="name" type="name" autocomplete="name" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Name "
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}

                                />
                            </div>
                            <div>
                                <label for="email-address" className="sr-only">Email address</label>
                                <input id="email-address" name="email" type="email" autocomplete="email" required className="relative block w-full border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label for="password" className="sr-only">Password</label>
                                <input onKeyUp={handleCapsLock} id="password" name="password" type="password" required className="relative block w-full appearance-none rounded-none rounded- border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Create an unique password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {isCapsLockIsOn === true ? <small className="text-sx text-red-500">Caps lock is on</small> : null}
                            </div>
                            <div>
                                <label for="Confirm_Password" className="sr-only">Confirm Password</label>
                                <input onKeyUp={handleCapsLock} id="Enter_password" name="password" type="password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter your password again"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {isCapsLockIsOn === true ? <small className="text-sx text-red-500">Caps lock is on</small> : null}
                            </div>

                            {loading === true && <div className='flex w-full justify-center' ><Loading /></div>}
                        </div>
                        {error > 0 && <div class="alert alert-warning shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <span>{error}</span>
                            </div>
                        </div>}
                        {SignUpSuccess === true && <div class="alert alert-success shadow-lg"> <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>User Created Successfully</span>
                        </div>
                        </div>
                        }
                        <div className='place-content-center' >
                            <button type="submit" className="flex w-full justify-center btn btn-outline btn-success">

                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default UserSignup;