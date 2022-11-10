import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Main = () => {
    return (
        <div className='max-w-[1440px] mx-auto bg-purple-50'>
            <Header />
            <div className=" mt-16">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;