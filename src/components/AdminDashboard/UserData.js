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
                                                                <th>Address</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {users.map((user, index) => <tr key={user._id}>
                                                                <td>{index + 1}</td>
                                                                <td>{user._id}</td>
                                                                <td>{user.name}</td>
                                                                <td className='text-rose-600' >No phone Number Provided</td>
                                                                <td>{user.email}</td>
                                                                <td className='text-rose-600'>Not Verified</td>
                                                                {user.isAdmin === true ? <td className='text-green-500'>Admin</td> : <td>Not Admin</td>}
                                                                <td>Address</td>
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
        </main>
    );
};

export default UserData;