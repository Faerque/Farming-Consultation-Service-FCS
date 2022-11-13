import React from 'react';
import FooterSm from '../Footer/FooterSm';
import AdminSidePanel from './AdminSidePanel';
// import Fade from 'react-reveal/Slide';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SpinnerLoading from '../SpinnerLoading';


const UserData = () => {
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selects, setSelects] = useState(" ");

    // fetching users data from server
    useEffect(() => {
        setLoading(true);
        axios.get('api/users/allUsers')
            .then(res => {
                setUser(res.data);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, []);
    console.log(users.email);

    const sortedUser = (user) => {
        if (selects === "Admin") {
            return user.isAdmin === true
        } if (selects === "Verified") {
            return user.isVerified === true
        }
        if (selects === "Not Verified") {
            return user.isVerified === false
        }

        else {
            return user
        }
    }

    // formating date which got from server
    const formatDate = (date) => {
        const newDate = new Date(date);

        return newDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }


    return (
        <main>
            <div class="flex">
                <div class="flex-none">
                    <AdminSidePanel />
                </div>
                <div class="flex-1 w-64">
                    <div className='flex'>
                        <div className='ml-24 mr-24 mt-20 '>
                            <div>
                                {loading ? <div className='p-48 ml-96'>
                                    <SpinnerLoading />
                                </div> :
                                    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                                        <div className='bg-white shadow sm:rounded-lg' >
                                            <div class="px-4 py-5 sm:px-6">
                                                <h3 class="text-lg font-medium leading-6 text-gray-900">All the user available listed here</h3>
                                                <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details of users</p>
                                            </div>
                                            <select value={selects} onChange={e => setSelects(e.target.value)}
                                                className="select my-2 mb-1 select-ghost w-48 max-w-xs">
                                                <option disabled selected>Sort by:</option>
                                                <option>All</option>
                                                <option>Admin</option>
                                                <option>Verified</option>

                                                <option>Not Verified</option>
                                            </select>

                                            <div class="border-t border-gray-200">
                                                <div class="overflow-x-auto">
                                                    <table class="table w-full">
                                                        <thead>
                                                            <tr>
                                                                <th>Index</th>
                                                                <th>Id</th>
                                                                <th>Name</th>
                                                                <th>Phone</th>
                                                                <th>Email</th>
                                                                <th>Verified</th>
                                                                <th>Role</th>
                                                                <th>Account created at</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {users
                                                                .filter(user => sortedUser(user))
                                                                .map((user, index) =>
                                                                    <tr key={user._id}>
                                                                        <td>{index + 1}</td>
                                                                        <td>{user._id}</td>
                                                                        <td>{user.name}</td>
                                                                        {user.phone === " " || user.phone === 'Nothing' ? <td>Not Provided</td> : <td>{"0" + user.phone}</td>}
                                                                        <td>{user.email}</td>
                                                                        {user.isVerified ? <td className='text-green-600'>Verified</td> : <td className='text-red-600'>Not Verified</td>}
                                                                        {user.isAdmin ? <td className='text-green-500'>Admin</td> : <td>Not Admin</td>}

                                                                        <td>{user.created_at}</td>
                                                                    </tr>)}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                    </div>}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <FooterSm />
            </div>
        </main >
    );
};

export default UserData;