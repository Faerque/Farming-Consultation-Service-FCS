import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RightArrow from '../../assets/right-arrow.svg';
import FooterMain from '../Footer/FooterMain';
const MarketPlace = () => {
    const [searchResult, setSearchResult] = useState("all");
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const { isVerified } = userInfo || {};


    console.log(searchResult);
    return (
        <main >
            {!isVerified ? <div class="w-80 mx-auto rounded-md alert mt-8 alert-warning shadow-sm">
                <div className='flex item-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span >Please Verify yourself to access buy and sell. </span><Link to="/VerificationProcess">Verify Now <img className='stroke-current flex-shrink-0 h-5 w-6' alt="Arrow" src={RightArrow} /></Link>
                </div>
            </div> : null
            }
            <div>
                <div class="bg-white">
                    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                        <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                            <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Market Place</h2>
                            <p class="mt-4 text-center text-xl text-gray-500">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
                        </div>
                    </div>
                    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div class="flex justify-center">
                            <div class="mb-3 w-full xl:w-96">

                                <input
                                    type="search"
                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                                    onChange={e => setSearchResult(e.target.value)}
                                    placeholder="Search by name, category, price, or location"
                                />
                            </div>

                        </div>
                        <p class="text-left text-md text-gray-900 sm:text-xl">Showing result for {searchResult} </p>
                        <p className="divider lg:divider-vertical"></p>
                        <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            <a href="#" class="group">
                                <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
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
            <FooterMain />
        </main>
    );
};

export default MarketPlace;