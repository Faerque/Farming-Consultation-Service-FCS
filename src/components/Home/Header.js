import React from 'react';

const Header = () => {
    return (
        <div>
            <section class="mt-2 mb-20">
                <div class="relative overflow-hidden rounded-md bg-no-repeat bg-cover" style={{ backgroundPosition: "50%", backgroundImage: `URL('https://mdbootstrap.com/img/new/textures/full/142.jpg')`, height: "500px" }}></div>
                <div class="container mx-auto px-6 md:px-12 xl:px-32">
                    <div class="text-center text-gray-800">
                        <div class="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12" style={{ marginTop: "-170px", background: "hsla(0, 0%, 100%, 0.7)", backdropFilter: "blur(30px)" }}>
                            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">The best offer on the market <br /><span class="text-primary">for your business</span></h1>
                            <a class="btn btn-outline btn-primary" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Header;