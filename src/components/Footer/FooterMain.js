import React from 'react';
import { Link } from 'react-router-dom';
import FooterSm from './FooterSm';

const FooterMain = () => {
    return (

        <footer className="place-items-center bg-primary footer p-10 bg-base-200 text-base-content">
            <div>
                <span className="footer-title text-white">সেবা সমূহঃ</span>
                <Link to='/marketplace' className="text-white link link-hover">বেচা কেনা</Link>
                <Link to='/services' className="text-white link link-hover">পরামর্শ নিন</Link>
                <Link to='/informationAndLatestNews' className="text-white link link-hover">জানুন এবং শিখুন</Link>

            </div>
            <div>
                <span className="footer-title text-white">কৃষি বিষয়ক পরামর্শ সেবা</span>
                <Link to='' className="text-white link link-hover">আমাদের সম্পর্কে জানুন</Link>
                <Link to='' className="text-white link link-hover">যোগাযোগ করুন</Link>
                <Link to='' className="text-white link link-hover">আমাদের সাথে যোগ দিন</Link>

            </div>
            <div>
                <span className="text-white footer-title">আইনসংক্রান্ত</span>
                <Link to='/privacyPolicy' className="text-white link link-hover">নিয়মাবলি</Link>
                <Link to='/faq' className="text-white link link-hover">সচরাচর জিজ্ঞাস্য</Link>

            </div>

        </footer>


    );
};

export default FooterMain;