import React from 'react';
import FooterSm from '../Footer/FooterSm';
import AdminSidePanel from './AdminSidePanel';

const ServiceRequest = () => {
    return (
        <section>
            <div class="flex">
                <div class="flex-none">
                    <AdminSidePanel />
                </div>
                <div class="flex-1 w-64 ">
                    <div className='flex'>
                        <div className='ml-24 mr-24 mt-20 '>
                            <div class="overflow-hidden bg-white shadow sm:rounded-lg">
                                <div>

                                    {/* <!-- Card is full width. Use in 8 col grid for best view. -->
            <!-- Card code block start --> */}
                                    <div class="mx-auto bg-white dark:bg-gray-800 shadow rounded w-full">
                                        <div class="py-6 xl:px-8 lg:px-8 md:px-8 px-4 flex justify-between items-center">
                                            <p class="font-bold text-sm xl:text-lg lg:text-lg md:text-lg text-gray-800 dark:text-gray-100">23 December, <span class="text-gray-500">Sunday</span></p>
                                            <div class="relative">
                                                <button aria-label="dropdown" class="focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 relative z-0 bg-gray-100 dark:bg-gray-700 flex items-center justify-between w-full cursor-pointer text-xs form-select text-gray-600 dark:text-gray-400 md:p-3 p-2 rounded bg-transparent" data-menu>
                                                    <p class="leading-3 tracking-normal font-normal text-sm">
                                                        Show:
                                                        <span class="text-indigo-700 dark:text-indigo-600 mr-2">This week</span>
                                                    </p>
                                                    <div class="cursor-pointer">
                                                        <img class="hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/8_col_listing_card_with_stats_and_filters-svg1.svg" alt="arrow up" />
                                                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/8_col_listing_card_with_stats_and_filters-svg2.svg" alt="arrow down" />


                                                    </div>
                                                </button>
                                                <ul class="invisible z-10 transition duration-300 opacity-0 bg-white dark:bg-gray-700 shadow rounded mt-2 w-40 py-1 absolute">
                                                    <a href="#" class="focus:outline-none focus:underline"><li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Previous week</li></a>
                                                    <a href="#" class="focus:outline-none focus:underline"><li class="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal">Next week</li></a>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="xl:px-8 lg:px-8 md:px-8 px-4 py-4 bg-white dark:bg-gray-800">
                                            <div class="xl:flex lg:flex md:flex sm:flex">
                                                <div class="xl:w-1/4 w-full mb-2 xl:mb-0">
                                                    <p class="text-sm text-gray-600 dark:text-gray-400 font-bold">Tasks Scheduled: 24</p>
                                                </div>
                                                <div class="xl:w-1/4 w-full mb-2 xl:mb-0">
                                                    <p class="text-sm text-gray-600 dark:text-gray-400 font-bold">Tasks Pending: 15</p>
                                                </div>
                                                <div class="xl:w-1/4 w-full mb-2 xl:mb-0">
                                                    <p class="text-sm text-gray-600 dark:text-gray-400 font-bold">Tasks Completed: 09</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="xl:px-8 lg:px-8 md:px-8 px-4 py-6 bg-white dark:bg-gray-800">
                                            <div class="p-5 flex justify-between rounded mb-6 bg-gray-100 dark:bg-gray-700">
                                                <div class="w-3/5">
                                                    <a href="#" class="text-gray-800 dark:text-gray-100 focus:text-gray-600 hover:text-gray-600 focus:underline focus:outline-none"><p class="mb-2 text-sm font-bold ">UX Team Skype Session</p></a>
                                                    <ul>
                                                        <li class="mb-2 text-xs text-gray-600 dark:text-gray-400">- Create a competitive analysis report, create personas and also design UX research reports.</li>
                                                        <li class="text-xs text-gray-600 dark:text-gray-400">- Sitemap and information architecture visualizing the organized model of all the components and information contained in product.</li>
                                                    </ul>
                                                </div>
                                                <div class="w-3/12 flex flex-col items-end justify-between">
                                                    <p class="text-xs text-gray-600 dark:text-gray-400">9am - 10am</p>
                                                    <div class="bg-indigo-100 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                                                        <span class="text-xs text-indigo-700 dark:text-gray-400 font-normal">Meeting</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="p-5 flex justify-between rounded mb-6 bg-gray-100 dark:bg-gray-700">
                                                <div class="w-3/5">
                                                    <a href="#" class="text-gray-800 dark:text-gray-100 focus:text-gray-600 hover:text-gray-600 focus:underline focus:outline-none"><p class="mb-4 text-sm font-bold ">UX Team Skype Session</p></a>
                                                    <ul class="mb-5">
                                                        <li class="mb-2 text-xs text-gray-600 dark:text-gray-400">- Create a competitive analysis report, create personas and also design UX research reports.</li>
                                                        <li class="text-xs text-gray-600 dark:text-gray-400">- Sitemap and information architecture visualizing the organized model of all the components and information contained in product.</li>
                                                    </ul>
                                                    <div class="flex flex-wrap items-center">
                                                        <div class="w-6 h-6 bg-cover bg-center rounded-full border border-white relative shadow">
                                                            <img class="h-full w-full object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card21.jpg" alt="" />
                                                        </div>
                                                        <div class="w-6 h-6 bg-cover rounded-full -ml-1 border border-white shadow">
                                                            <img class="h-full w-full object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card22.jpg" alt="" />
                                                        </div>
                                                        <div class="w-6 h-6 bg-cover rounded-full bg-center -ml-1 border border-white shadow">
                                                            <img class="h-full w-full object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card23.jpg" alt="" />
                                                        </div>
                                                        <a href="#" class="text-gray-800 dark:text-gray-100 focus:text-gray-600 hover:text-gray-600 focus:underline focus:outline-none"><p class="text-xs ml-1 ">+3 attendees</p></a>
                                                    </div>
                                                </div>
                                                <div class="w-3/12 flex flex-col items-end justify-between">
                                                    <p class="text-xs text-gray-600 dark:text-gray-400">9am - 10am</p>
                                                    <div class="bg-red-100 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                                                        <span class="text-xs text-red-700 font-normal">Urgent</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="p-5 flex justify-between rounded mb-6 bg-gray-100 dark:bg-gray-700">
                                                <div class="w-3/5">
                                                    <a href="#" class="text-gray-800 dark:text-gray-100 focus:text-gray-600 hover:text-gray-600 focus:underline focus:outline-none"><p class="mb-4 text-sm font-bold ">UX Team Skype Session</p></a>
                                                    <ul class="mb-5">
                                                        <li class="mb-2 text-xs text-gray-600 dark:text-gray-400">- Create a competitive analysis report, create personas and also design UX research reports.</li>
                                                        <li class="text-xs text-gray-600 dark:text-gray-400">- Sitemap and information architecture visualizing the organized model of all the components and information contained in product.</li>
                                                    </ul>
                                                    <div class="flex flex-wrap items-center">
                                                        <div class="w-6 h-6 bg-cover bg-center rounded-full border border-white relative shadow">
                                                            <img class="h-full w-full object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card21.jpg" alt="" />
                                                        </div>
                                                        <div class="w-6 h-6 bg-cover rounded-full -ml-1 border border-white shadow">
                                                            <img class="h-full w-full object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card22.jpg" alt="" />
                                                        </div>
                                                        <div class="w-6 h-6 bg-cover rounded-full bg-center -ml-1 border border-white shadow">
                                                            <img class="h-full w-full object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card23.jpg" alt="" />
                                                        </div>
                                                        <a href="#" class="text-gray-800 dark:text-gray-100 focus:text-gray-600 hover:text-gray-600 focus:underline focus:outline-none"><p class="text-xs ml-1 ">+3 attendees</p></a>
                                                    </div>
                                                </div>
                                                <div class="w-3/12 flex flex-col items-end justify-between">
                                                    <p class="text-xs text-gray-600 dark:text-gray-400">9am - 10am</p>
                                                    <div class="bg-yellow-100 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                                                        <span class="text-xs text-yellow-700 font-normal">Personal</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="p-5 flex justify-between rounded bg-gray-100 dark:bg-gray-700">
                                                <div class="w-3/5">
                                                    <a href="#" class="text-gray-800 dark:text-gray-100 focus:text-gray-600 hover:text-gray-600 focus:underline focus:outline-none"><p class="mb-4 text-sm font-bold ">UX Team Skype Session</p></a>
                                                    <ul class="mb-5">
                                                        <li class="mb-2 text-xs text-gray-600 dark:text-gray-400">- Create a competitive analysis report, create personas and also design UX research reports.</li>
                                                        <li class="text-xs text-gray-600 dark:text-gray-400">- Sitemap and information architecture visualizing the organized model of all the components and information contained in product.</li>
                                                    </ul>
                                                </div>
                                                <div class="w-3/12 flex flex-col items-end justify-between">
                                                    <p class="text-xs text-gray-600 dark:text-gray-400">9am - 10am</p>
                                                    <div class="bg-indigo-100 h-6 w-20 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                                                        <span class="text-xs text-indigo-700 dark:text-gray-400 font-normal">Meeting</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Card code block end --> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSm />
        </section>
    );
};

export default ServiceRequest;