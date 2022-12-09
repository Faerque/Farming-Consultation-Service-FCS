import React from 'react';
import { Link } from 'react-router-dom';
import FooterMain from '../Footer/FooterMain';
import FooterSm from '../Footer/FooterSm';
import LeafBlastImg from './Assets/LeafBlast.jpg';
import RedBlastImg from './Assets/RedRust.jpg';
import PataMoranuImg from './Assets/PataMoranuRog.jpg';
const Articles = () => {
    return (
        <div>

            <div class="container my-18 px-6 mx-auto">
                <section class="mb-32 text-gray-800 text-center md:text-left">

                    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                        <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                            <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">জানুন এবং শিখুন</h2>
                            <p class="mt-4 text-center text-xl text-gray-500">
                                ফসলের বিভিন্ন রোগবালাই এবং প্রতিকার, জমিতে ফসল চাষ করার উত্তম সময় এবং বিভিন্ন বিষয় নিয়ে জানুন।
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-wrap mb-6">
                        <div class="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                            <div
                                class="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                                data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img src={LeafBlastImg}
                                    class="w-full" alt="Louvre" />
                                <Link to='/blastRog'>
                                    <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                </Link>
                            </div>
                        </div>

                        <div class="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                            <h5 class="text-lg font-bold mb-3">ধানের ব্লাস্ট রোগ</h5>
                            <div class="mb-3 text-red-600 font-medium text-sm flex items-center justify-center md:justify-start">

                            </div>
                            <p class="text-gray-500 mb-6">
                                <small>Published <u>12.04.2022</u> by
                                    Syeda Sirajum Munira</small>
                            </p>
                            <p class="text-gray-500">
                                ধানের ব্লাস্ট একটি ছত্রাকজনিত মারাত্মক ক্ষতিকারক রোগ। বোরো ও আমন মৌসুমে সাধারণত ব্লাস্ট রোগ হয়ে থাকে। অনুকুল আবহাওয়ায় এ রোগের আক্রমণে ফলন শতভাগ পর্যন্ত কমে যেতে পারে।
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-wrap mb-6">
                        <div class="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                            <div
                                class="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                                data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img src={PataMoranuImg}
                                    class="w-full" alt="Pata Moranu Rog" />
                                <Link to='/pataMoranuRog'>
                                    <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                </Link>
                            </div>
                        </div>

                        <div class="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                            <h5 class="text-lg font-bold mb-3">আমন ধানের পাতা মোড়ানো রোগ</h5>
                            <div class="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center md:justify-start">

                            </div>
                            <p class="text-gray-500 mb-6">
                                <small>Published <u>12.04.2022</u> by
                                    Syeda Sirajum Munira</small>
                            </p>
                            <p class="text-gray-500">
                                Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                                placerat vulputate. Ut vulputate est non quam dignissim
                                elementum. Donec a ullamcorper diam.
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-wrap mb-6">
                        <div class="grow-0 shrink-0 basis-auto w-full md:w-3/12 px-3 mb-6 md:mb-0 ml-auto">
                            <div
                                class="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg mb-6"
                                data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img src={RedBlastImg}
                                    class="w-full" alt="Louvre" />
                                <Link to='/redRustRog' href="#!">
                                    <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }} ></div>
                                </Link>
                            </div>
                        </div>

                        <div class="grow-0 shrink-0 basis-auto w-full md:w-9/12 xl:w-7/12 px-3 mb-6 md:mb-0 mr-auto">
                            <h5 class="text-lg font-bold mb-3">আম গাছের লাল মরিচা রোগ</h5>
                            <div class="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center md:justify-start">

                            </div>
                            <p class="text-gray-500 mb-6">
                                <small>Published <u>12.04.2022</u> by
                                    Syeda Sirajum Munira</small>
                            </p>
                            <p class="text-gray-500">
                                লাল মরিচা রোগ প্রধানত আম গাছের পাতায় দেখা যায়, তবে কোন কোন সময় পাতার বোঁটা বা কচি কান্ডে দেখা দিতে পারে।
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <FooterMain />
            <FooterSm />
        </div>
    );
};

export default Articles;