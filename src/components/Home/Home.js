import React from 'react';
import FooterMain from '../Footer/FooterMain';

import Feature from './Feature';
import Header from './Header';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <>
            <div className='grid h-screen place-items-center'>
                <Header />
                <Feature />
                <Testimonials />
                <FooterMain />
            </div>
        </>
    );
};

export default Home;