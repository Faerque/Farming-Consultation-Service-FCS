import React from 'react';
import FooterMain from '../Footer/FooterMain';
import FooterSm from '../Footer/FooterSm';
import LeafBlast from './Assets/LeafBlast.jpg';
const BlastRog = () => {
    return (
        <div>
            <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased font-sans'>
                <div className='flex justify-between px-4 mx-auto max-w-screen-xl'>
                    <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue '>
                        <header className='mb-4 lg:mb-6 not-format'>
                            <address className='flex items-center mb-6 not-italic'>
                                <div className='inline-flex items-center mr-3 text-sm text-gray-900 '>
                                    <img class="mr-4 w-16 h-16 rounded-full" src="https://www.svgrepo.com/show/65676/avatar.svg" alt="Syeda Sirjum Munira" />
                                    <div>
                                        <p rel="author" class="text-xl font-bold text-gray-900">Syeda Sirjum Munira</p>
                                        <p class="text-base font-light text-gray-500"><time pubdate datetime="2022-12-04" >Dec. 4, 2022</time></p>
                                    </div>
                                </div>
                            </address>
                            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">ধানের ব্লাস্ট রোগ</h1>
                        </header>
                        <p class="lead mb-1">ধানের ব্লাস্ট একটি ছত্রাকজনিত মারাত্মক ক্ষতিকারক রোগ। বোরো ও আমন মৌসুমে সাধারণত ব্লাস্ট রোগ হয়ে থাকে। অনুকুল আবহাওয়ায় এ রোগের আক্রমণে ফলন শতভাগ পর্যন্ত কমে যেতে পারে। চারা অবস্থা থেকে শুরু করে ধান পাকার আগ পর্যন্ত যে কোন সময় রোগটি দেখা দিতে পারে। এটি ধানের পাতা, গিঁট এবং নেক বা শীষে আক্রমণ করে থাকে। সে অনুযায়ী রোগটি পাতা ব্লাস্ট, গিঁট ব্লাস্ট ও নেক ব্লাস্ট নামে পরিচিত।</p>

                        <figure className='text-center italic'>
                            <img src={LeafBlast} className='rounded-md' alt="" />
                            <figcaption className='text-sm'>ধানের ব্লাস্ট রোগ</figcaption>
                        </figure>

                        <h3 className='mt-2 mb-1 text-xl font-bold leading-tight text-gray-900 lg:mb-6 lg:text-2xl '>লক্ষণঃ</h3>
                        <ul className='list-disc list-inside mb-6'>
                            <li className='mb-1'>প্রথমে পাতায় ডিম্বাকৃতির  বাদামী দাগ পড়ে। পাতা, কাণ্ড, শীর্ষ বেশি আক্রান্ত হয়।</li>
                            <li className='mb-1'>রাতে শিশির পড়লে অথবা দিনে বেশি গরম পড়লে এই রোগের প্রকোপ বেড়ে যায়।</li>
                            <li className='mb-1'>অনেকগুলি দাগ দেখা দিলে পাতা মরে যেতে থাকে।</li>

                        </ul>
                        <h3 className='mt-2 mb-1 text-xl font-bold leading-tight text-gray-900 lg:mb-6 lg:text-2xl '>প্রতিকারঃ</h3>
                        <ul className='list-disc list-inside mb-6'>
                            <li className='mb-1'>জমিতে সর্বদা পর্যাপ্ত পরিমাণে  পানি ধরে রাখা।</li>
                            <li className='mb-1'>চারা অবস্থায় রোগ দেখা দিলে বিধা প্রতি ৫ কেজি পটাশ সার ছিটিয়ে দিয়ে এরপর সেচ দেওয়া। </li>
                            <li className='mb-1'>পূর্ণবয়স্ক চারার ক্ষেত্রে প্রতি লিটার পানিতে ট্রাইসাইক্লাজল গ্রুপের ছত্রাকনাশক যেমনঃ ট্রপার ৭৫ ডব্লিউপি ০.৮১ গ্রাম পানিতে মিশিয়ে বিকালে স্প্রে করা।</li>
                        </ul>
                        <h3 className='mt-2 mb-1 text-xl font-bold leading-tight text-gray-900 lg:mb-6 lg:text-2xl '>প্রতিরোধঃ</h3>
                        <ul className='list-disc list-inside mb-6'>
                            <li className='mb-1'>ধান কাটার পর অবশ্যই উচ্ছিষ্ট পুড়িয়ে ফেলতে হবে।</li>
                            <li className='mb-1'>জমিতে পটাশ সার ২ বারে প্রয়োগ করতে হবে। (জমি তৈরির সময় অর্ধেক আর চারা লাগানোর ৩০ দিন পরপর অর্ধেক)।</li>

                        </ul>
                        <p className='mt-2 text-md leading-tight text-gray-600 lg:text-2xl '>এই বিষয়ে একজন অভিজ্ঞ এর পরামর্শ নিতে এখানে <span className='text-blue-500'>
                            ক্লিক করুন।
                        </span></p>

                    </article>

                </div>

            </main>
            <FooterMain />
            <FooterSm />
        </div>
    );
};

export default BlastRog;