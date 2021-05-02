import React from 'react';
import Footer from '../../Footer/Footer';
import HomeContact from '../HomeContact/HomeContact';
import HomeProject from '../HomeProject/HomeProject';
import MainHeader from '../MainHeader/MainHeader';
import Navbar from '../Navbar/Navbar';
import Skills from '../Skills/Skills';
import './Home.css'
const Home = () => {
    return (
        <div className='main-header'>
            <Navbar></Navbar>
            <MainHeader></MainHeader>
            <Skills></Skills>
            <HomeProject></HomeProject>
            <div className='home-contact'>
            <HomeContact></HomeContact>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;