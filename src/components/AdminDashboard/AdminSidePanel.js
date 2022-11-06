import React from 'react';
import { Link } from 'react-router-dom';


const AdminSidePanel = () => {
    return (
        <main>

            <aside className="mx-2 mt-20 rounded-lg shadow w-52 " aria-label="Sidebar">
                <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded-lg white:bg-gray-800">
                    <ul className="space-y-2">

                        <li>
                            <Link to="/serviceRequest" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg white:text-gray hover:bg-gray-100 white:hover:bg-gray-700">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 white:text-gray-400 group-hover:text-gray-900 white:group-hover:text-gray" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Service</span>
                                <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full white:bg-blue-900 white:text-blue-200">3</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/userData' className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg white:text-gray hover:bg-gray-100 white:hover:bg-gray-700">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 white:text-gray-400 group-hover:text-gray-900 white:group-hover:text-gray" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/maintainService" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg white:text-gray hover:bg-gray-100 white:hover:bg-gray-700">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 white:text-gray-400 group-hover:text-gray-900 white:group-hover:text-gray" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Maintain Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/userVerificationRequest" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg white:text-gray hover:bg-gray-100 white:hover:bg-gray-700">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 white:text-gray-400 group-hover:text-gray-900 white:group-hover:text-gray" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Verification Request</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg white:text-gray hover:bg-gray-100 white:hover:bg-gray-700">
                                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 white:text-gray-400 group-hover:text-gray-900 white:group-hover:text-gray" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Add a Service</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="p-4 mt-6 bg-blue-50 rounded-lg white:bg-blue-900" role="alert">
                        <div className="flex items-center mb-3">
                            <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded white:bg-orange-200 white:text-orange-900">Beta</span>

                        </div>
                        <p className="bottom-0 mb-3 text-sm text-blue-900 white:text-blue-400">
                            Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
                        </p>

                    </div>
                </div>
            </aside>
        </main>

    );
};

export default AdminSidePanel;