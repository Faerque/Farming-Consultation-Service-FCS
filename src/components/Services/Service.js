
import React from 'react';
import { useNavigate } from 'react-router-dom';
import consulationSvg from '../../assets/consultations.svg';
const Service = ({ service }) => {
    const navigate = useNavigate();
    console.log(service);
    const { _id, name, description, available, picture } = service;
    const handleNext = (_id) => {
        console.log(_id);
        navigate({ pathname: "/takeConsultation", search: `?id=${_id}` });
    }

    return (

        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
                class="mb-8 rounded-md bg-white p-10 shadow-xl hover:shadow-lg md:px-7 xl:px-10"
            >
                <div
                    class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-md"
                >
                    <img className='p-4' src={consulationSvg} alt='userConsulationSvg' />
                </div>
                <h4 class="text-dark mb-3 text-xl font-semibold">
                    {name}
                </h4>

                <button onClick={() => handleNext(_id)} class="flex justify-center rounded-md btn btn-outline btn-success">
                    সেবাটি নিন
                    <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
        </div>


    );
};

export default Service;