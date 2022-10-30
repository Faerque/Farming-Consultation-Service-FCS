import React from 'react';
import FooterMain from '../Footer/FooterMain';

import Feature from './Feature';
import Header from './Header';
import Stext from './Stext';
const Home = () => {
    return (
        <>
            <div className='grid h-screen place-items-center'>
                <Header />
                <Feature />
                <Stext />
                <FooterMain />
            </div>
        </>
    );
};

export default Home;