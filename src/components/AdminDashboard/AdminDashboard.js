import React from 'react';
import { isMobile } from 'react-device-detect';
import MobileAdminWarning from '../MobileAdminWarning';
import AdminHome from './AdminHome';

const AdminDashboard = () => {

    return (
        <>
            {isMobile === true ? <MobileAdminWarning /> :
                <div>
                    <AdminHome />
                </div>}
        </>
    );
};

export default AdminDashboard;