import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ForgetPassword from './ForgetPassword';
import UserAvatar from '../assets/UserAvatar.svg'
import FooterSm from './Footer/FooterSm';
import axios from 'axios';
import Loading from './Loading';
import Logo from '../assets/Logo.png';

const UserLogin = () => {

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showError, setShowError] = useState(false);
    const [isCapsLockIsOn, setCapsLockIsOn] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);

    // function Caps lock is on or not
    const handleCapsLock = (e) => {
        if (e.getModifierState("CapsLock")) {
            setCapsLockIsOn(true);
        } else {
            setCapsLockIsOn(false);
        }
    }

    function handleModalShow() {
        setShowModal(true);
    }

    const submitHandler = async (e) => {

        console.log(email, password);
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            setLoading(true);
            const { data } = await axios.post('https://server-fcs.onrender.com/api/users/login', { email, password }, {
                email,
                password
            }, config);
            const signInUser = {
                isSignedIn: true,
                ...data
            }
            const userVerified = data.isVerified;
            // here we set it into local storage in object format because we can't set it in string format in local storage
            localStorage.setItem('userInfo', JSON.stringify(signInUser));
            localStorage.setItem('userVerified', JSON.stringify(userVerified));

            setLoading(false);
            // giving a delay of 1 second to show the loading screen
            setLoginSuccess(true);
            setTimeout(() => {
                setLoginSuccess(false);
                navigate('/');
                window.location.reload();
            }, 1000);

        } catch (error) {
            setError(error.response.data.message);
            setLoading(false);
            setShowError(true);
        }
    }

    return (
        <section  >
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img className="mx-auto h-20 w-auto" src={Logo} alt="FCS" />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-neutral">Sign in to your account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or <br />
                            <Link to="/signup" className="font-medium text-2xl text-primary-focus hover:text-primary">Create an account</Link>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={submitHandler} >
                        <input type="hidden" name="remember" value="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label for="email-address" className="sr-only">Email address</label>
                                <input id="email-address" name="email" type="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label for="password" className="sr-only">Password</label>
                                <input onKeyUp={handleCapsLock} id="password" name="password" type="password" autocomplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {isCapsLockIsOn === true ? <small className="text-sx text-red-500">Caps lock is on</small> : null}
                            </div>
                        </div>
                        {/* <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input onClick={setRememberMe} id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label for="remember-me" className="ml-2 block">Remember Me</label>
                            </div>
                        </div> */}

                        {loading === true && <div className='flex w-full justify-center' ><Loading /></div>}
                        {showError === true && <div class="alert rounded-md alert-error shadow-md">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{error}</span>
                            </div>
                        </div>}
                        {loginSuccess === true && <div class="alert rounded-md alert-success shadow-md">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Successfully login</span>
                            </div>
                        </div>}
                        <div className='place-content-center'>
                            <button type="submit" className="flex w-full justify-center btn btn-outline btn-success">
                                Sign in
                            </button>
                        </div>
                    </form>
                    <button className="font-medium text-primary-focus hover:text-red-500" onClick={handleModalShow} >Forgot your password?</button>
                    {showModal && <ForgetPassword setShowModal={setShowModal} />}
                </div>
            </div>

        </section>
    );
};

export default UserLogin;