import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Main = () => {
    return (
        <div className='max-w-[1140px] mx-auto bg-gray-100'>
            <Header />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;