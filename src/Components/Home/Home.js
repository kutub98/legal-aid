import React from 'react';

import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import ClientSatisfied from './ClientSatisfied/ClientSatisfied';
import CompiledWith from './CompliedWith/CompiledWith';
import News from './News/News';
const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <News></News>
            <ClientSatisfied></ClientSatisfied>
            <CompiledWith></CompiledWith>
        </div>
    );
};

export default Home;