import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RightArrow from '../../assets/right-arrow.svg';
import FooterMain from '../Footer/FooterMain';
import FooterSm from '../Footer/FooterSm';
import data from './Data';
import Product from './Product';


const MarketPlace = () => {
    const [searchResult, setSearchResult] = useState("সবগুলো");
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const { isVerified } = userInfo || {};

    const filterSearch = (data) => {
        if (searchResult === 'সবগুলো' || searchResult === ' ') {
            return data;
        } else if (data.name.includes(searchResult)) {
            return data;
        } else if (data.price.includes(searchResult)) {
            return data;
        } else if (data.location.includes(searchResult)) {
            return data;
        }
    }

    return (
        <main >
            {!isVerified ? <div class="w-80 mx-auto rounded-md alert mt-8 alert-warning shadow-sm">
                <div className='flex item-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span className='text-sm'>দুঃখিত! আপনি এখনো কৃষি বিষয়ক পরামর্শ সেবার একজন প্রতিপন্ন গ্রাহক নন!</span><Link to="/VerificationProcess" className='text-sm'>প্রতিপন্ন গ্রাহক হউন<img className='stroke-current flex-shrink-0 h-5 w-6' alt="Arrow" src={RightArrow} /></Link>
                </div>
            </div> : null
            }
            <div>
                <div class="bg-white">
                    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                        <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                            <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl"> বেচা কেনা </h2>
                            <p class="mt-4 text-center text-xl text-gray-500">
                                পাইকারি দামে আপনার সবজি বিক্রি করুন অথবা কিনুন।
                            </p>
                        </div>
                    </div>
                    <div class="mx-auto max-w-2xl px-4 sm:py-24 mb-4 sm:px-4 lg:max-w-7xl lg:px-4">
                        <div class="flex justify-center">
                            <div class="mb-3 w-full xl:w-96">
                                <input
                                    type="search"
                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                                border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                                    onChange={e => setSearchResult(e.target.value)}
                                    placeholder="নাম, মূল্য বা অবস্থান দ্বারা অনুসন্ধান করুন"
                                />
                            </div>

                        </div>
                        <p class="text-left text-md text-gray-900 sm:text-xl">ফলাফল দেখানো হচ্ছে {searchResult + ' এর জন্যে'} </p>
                        <p className="divider lg:divider-vertical"></p>
                        <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {
                                data.filter((data) => filterSearch(data))
                                    .map(data => <Product key={data.id} isVerified={isVerified} data={data} ></Product>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <FooterMain />
            <FooterSm />
        </main>
    );
};

export default MarketPlace;