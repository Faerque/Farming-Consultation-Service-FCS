import React from 'react';

const AdminDashboard = () => {
    return (
        <div classNameName="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <label class="btn btn-circle swap swap-rotate">

                {/* <!-- this hidden checkbox controls the state --> */}
                <input id='my-drawer' className='drawer-toggle' type="checkbox" />

                {/* <!-- hamburger icon --> */}
                <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                {/* <!-- close icon --> */}
                <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

            </label>
            <div className="drawer-content">
                <label for="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label for="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    );
};

export default AdminDashboard;