import React from 'react';
import FooterMain from '../Footer/FooterMain';
import FooterSm from '../Footer/FooterSm';

const PataMoranuRog = () => {
    return (
        <div>
            <main className='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased font-sans'>
                <div className='flex justify-between px-4 mx-auto max-w-screen-xl'>
                    <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue '>
                        <header className='mb-4 lg:mb-6 not-format'>
                            <address className='flex items-center mb-6 not-italic'>
                                <div className='inline-flex items-center mr-3 text-sm text-gray-900 '>
                                    <img class="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
                                    <div>
                                        <a href="#" rel="author" class="text-xl font-bold text-gray-900">Jese Leos</a>
                                        <p class="text-base font-light text-gray-500">Graphic Designer, educator & CEO Flowbite</p>
                                        <p class="text-base font-light text-gray-500"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                                    </div>
                                </div>
                            </address>
                            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">আম গাছে লাল মরিচা (Red Rust) রোগ</h1>
                        </header>
                        <p class="lead mb-1">আম গাছে লাল মরিচা (Red rust) রোগটি সেফালিউরস ভাইরেসসেন্স (Cephaleuros virescens) ও সেফালিউরস প্যারাসাইটিকাস (Cephaleuros parasiticus) নামক শৈবালের আক্রমণে এ রোগ হয়ে থাকে। গাছ ঘন করে লাগালে এ রোগ বেশী হয়। স্যাঁতস্যাঁতে আবহাওয়ায় শৈবাল স্পোরাঞ্জিয়াম ও স্পোর উৎপন্ন করে এবং গাছকে নতুনভাবে আক্রমণ করে। আক্রান্ত পাতা থেকে রোগ ছড়ায়। বনজ ও ফলজ গাছ রোগটির বিকল্প পোষক হিসেবে কাজ করে।</p>

                        <figure className='text-center italic'>
                            <img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt="" />
                            <figcaption className='text-sm'>Digital art by Anonymous</figcaption>
                        </figure>

                        <h3 className='mt-2 mb-1 text-xl font-bold leading-tight text-gray-900 lg:mb-6 lg:text-2xl '>লক্ষণঃ</h3>
                        <ul className='list-disc list-inside mb-6'>
                            <li className='mb-1'>Cephaleuros virescens ও Cephaleuros paraciticus নামক ছত্রাক এর কারণে এই রোগ হয়। এতে কাণ্ডে, পাতায় লাল মরিচার মতন উচু দাগ পড়ে।</li>
                            <li className='mb-1'>দাগগুলি প্রথমে ধূসর সবুজ রং বিশিষ্ট হয়ে থাকে|</li>
                            <li className='mb-1'>দাগগুলি গোলাকৃতির হয় এবং এগুলো ক্রমান্বয়ে বৃদ্ধি পেয়ে একত্রে মিশে বিভিন্ন আকৃতির দাগের সৃষ্টি করে।</li>
                            <li className='mb-1'>পাতার আক্রান্ত অংশের কোষগুলো মরে যায়।</li>
                            <li className='mb-1'>প্রচুর পরিমান লাল মরিচা দাগে পাতা আবৃত হলে সালোক-সংশ্লেষনে অসুবিধা হয়।</li>
                        </ul>
                        <h3 className='mt-2 mb-1 text-xl font-bold leading-tight text-gray-900 lg:mb-6 lg:text-2xl '>প্রতিকারঃ</h3>
                        <ul className='list-disc list-inside mb-6'>
                            <li className='mb-1'>অপেক্ষাকৃত বেশী দূরত্বে গাছ লাগিয়ে শৈবালের আক্রমন এড়ানো যায়।</li>
                            <li className='mb-1'>কপার অক্সিক্লোরাইড গ্রুপের কীটনাশক (যেমন-কুপ্রাভিট ৫০ ডব্লিউপি) প্রতি লিটার পানিতে ৫ গ্রাম হারে মিশিয়ে ১০-১৫ দিন পরপর ২-৩ বার স্প্রে করতে হবে।</li>
                            <li className='mb-1'>রোগাক্রান্ত ঝরা পাতা সংগ্রহ করে পুড়ে ফেলতে হবে।।</li>

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

export default PataMoranuRog;