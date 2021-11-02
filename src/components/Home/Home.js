import React from 'react';
import Banners from './Banners/Banners';
import Doctors from './Doctors/Doctors';
import Services from './Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banners></Banners>
            <Services></Services>
            <Doctors> </Doctors>
        </div>
    );
};

export default Home;