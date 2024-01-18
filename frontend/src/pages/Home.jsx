import React from 'react';
import HomeLogo from '../components/Home/HomeLogo';
import HomeOrder from '../components/Home/HomeOrder';
import '../assets/css/BJitemScss/HomeScss.scss'

const Home = () => {
    return (
        <div id='home'>
            <HomeLogo />
            <HomeOrder />
        </div>
    );
};

export default Home;