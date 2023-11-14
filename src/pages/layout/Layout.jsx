import React from 'react';
import Header from '../shared/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer';

const Layout = () => {

    const location = useLocation();
    console.log(location);
    const isLogin = location.pathname.includes('login') || location.pathname.includes('register');

    return (
        <div className='max-w-screen-xl mx-auto'>
           { isLogin || <Header></Header>}
           <Outlet></Outlet>
           {isLogin || <Footer></Footer>}
        </div>
    );
};

export default Layout;