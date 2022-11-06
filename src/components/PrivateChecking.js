import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from './useAuth';

export default function PrivateChecking() {
    const auth = useAuth();

    return auth ? <Outlet /> : <Navigate to="/login" />;
};

