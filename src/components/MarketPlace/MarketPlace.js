import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RightArrow from '../../assets/right-arrow.svg';

const MarketPlace = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const { isVerified } = userInfo || {};



    return (
        <div >
            {!isVerified ? <div class="w-80 mx-auto alert alert-warning shadow-sm">
                <div className='flex item-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span >Please Verify yourself to access buy and sell. </span><Link to="/VerificationProcess">Verify Now <img className='stroke-current flex-shrink-0 h-5 w-6' alt="Arrow" src={RightArrow} /></Link>
                </div>
            </div> : null
            }
            <div class="bg-white">
                <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 class="sr-only">Products</h2>

                    <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <a href="#" class="group">
                            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                            <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
                        </a>

                        <a href="#" class="group">
                            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
                            <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
                        </a>

                        <a href="#" class="group">
                            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
                            <p class="mt-1 text-lg font-medium text-gray-900">$89</p>
                        </a>

                        <a href="#" class="group">
                            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
                            <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketPlace;