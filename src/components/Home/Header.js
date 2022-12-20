import React from 'react';

const Header = () => {
    return (
        <div className='m-3'>
            <section className="mt-48">
                <div className="container mx-auto px-6 md:px-12 xl:px-32">
                    <div className="text-center text-gray-800">
                        <div className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12" style={{ marginTop: "-170px", background: "hsla(0, 0%, 100%, 0.7)", backdropFilter: "blur(30px)" }}>
                            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">প্রাকৃতিকভাবে বেড়ে উঠুন, <br /> <br /><span className="text-primary">প্রাকৃতিকভাবে বাঁচুন </span></h1>
                            <a className="btn btn-outline btn-primary" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">সেবা নিন</a>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Header;