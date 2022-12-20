import React from 'react';
import CropsPicture from '../../assets/Crops.jpg';
// features part
const Feature = () => {
    return (
        <div className='container'>
            <div className=" mb-20 mx-auto">
                <section className="mb-32 text-gray-800">
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="flex flex-wrap items-center">
                            <div className="grow-0 shrink-0 basis-auto block w-48 lg:flex lg:w-6/12 xl:w-4/12">
                                <img src={CropsPicture} alt="CropsPicture"
                                    className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-48 lg:w-6/12 xl:w-8/12">
                                <div className="px-6 py-12 md:px-12">
                                    <h2 className="text-3xl font-bold mb-6">Why is it so great?</h2>
                                    <p className="text-gray-500 mb-6">
                                        Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque iaculis
                                        malesuada. Aenean gravida magna orci, non efficitur est porta id. Donec magna
                                        diam.
                                    </p>

                                    <div className="grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-6">
                                        <div className="mb-6">
                                            <p className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Support 24/7
                                            </p>
                                        </div>

                                        <div className="mb-6">
                                            <p className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Analytics
                                            </p>
                                        </div>

                                        <div className="mb-6">
                                            <p className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Components
                                            </p>
                                        </div>
                                        <div className="mb-6">
                                            <p className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Updates
                                            </p>
                                        </div>

                                        <div className="mb-6">
                                            <p className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Reports
                                            </p>
                                        </div>

                                        <div className="mb-6">
                                            <p className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Mobile
                                            </p>
                                        </div>
                                        <div className="mb-6">
                                            <p className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Modules
                                            </p>
                                        </div>

                                        <div className="mb-6">
                                            <p className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Blocks
                                            </p>
                                        </div>

                                        <div className="mb-6">
                                            <p className="flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path fill="currentColor"
                                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                    </path>
                                                </svg>Templates
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
};

export default Feature;