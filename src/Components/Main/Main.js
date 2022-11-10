import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';

const Main = () => {
    return (
        <div>
            <Header></Header>
           <Outlet></Outlet>
          
          <Footer></Footer>
        </div>
    );
};

export default Main;