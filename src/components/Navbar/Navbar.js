import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
        <main className="navbar bg-base-100">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/marketPlace">Market Place</Link></li>
                    <li >
                        <Link to="/informationAndLatestNews">News and Update</Link>
                    </li>
                    <li><Link to='/services'>Services</Link></li>
                </ul>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            {userInfo ? <img alt='userImage' src={userInfo.picture} /> : null}
                        </div>
                    </label>
                    {userInfo ? <div>
                        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
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
                            <li><button onClick={logoutHandler} >Logout</button></li>
                        </ul>
                    </div> : <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52" >
                        <li><Link to='/login'>Login</Link></li>
                    </ul>}
                </div>
            </div>
        </main >
    );
};

export default Navbar;