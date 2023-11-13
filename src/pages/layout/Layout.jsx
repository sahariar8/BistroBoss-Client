import React from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const Layout = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
           <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Layout;