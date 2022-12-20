import React from 'react';
import FooterMain from '../Footer/FooterMain';
import FooterSm from '../Footer/FooterSm';

import Feature from './Feature';
import Header from './Header';

import TopFeature from './TopFeature';

const Home = () => {
    return (
        <>
            <div className='grid h-screen place-items-center'>
                <Header />
                <TopFeature />
                <Feature />
                <FooterMain />
                <FooterSm />
            </div>
        </>
    );
};

export default Home;