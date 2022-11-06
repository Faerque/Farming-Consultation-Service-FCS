import React from 'react';
import FooterSm from '../Footer/FooterSm';
import AdminSidePanel from './AdminSidePanel';

const AdminHome = () => {
    return (
        <section>
            <div class="flex">
                <div class="flex-none ...">
                    <AdminSidePanel />
                </div>
                <div class="flex-1 w-64 ...">
                    <div className='flex'>
                        <div className='mx-10'>this is Dashboard</div>
                    </div>
                </div>
            </div>
            <FooterSm />
        </section>
    );
};

export default AdminHome;