import React from 'react';
import FooterMain from '../Footer/FooterMain';

import Feature from './Feature';
import Header from './Header';
import Testimonials from './Testimonials';
import TopFeature from './TopFeature';

const Home = () => {
    return (
        <>
            <div className='grid h-screen place-items-center'>
                <Header />
                <TopFeature />
                <Feature />
                <Testimonials />
                <FooterMain />
            </div>
        </>
    );
};

export default Home;