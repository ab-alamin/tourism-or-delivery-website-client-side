import React from 'react';
import Banners from './Banners/Banners';
import Hotels from './Hotels/Hotels';
import Services from './Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banners></Banners>
            <Services></Services>
            <Hotels> </Hotels>
        </div>
    );
};

export default Home;