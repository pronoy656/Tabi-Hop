import React from 'react';
import HomeNavbar from './HomeNavbar';
import HomeFooter from './HomeFooter';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
           <HomeNavbar />
           <Outlet />
           <HomeFooter />
        </div>
    );
};

export default HomeLayout;