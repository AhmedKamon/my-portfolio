import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './AboutMe.css'
import aboutMe from '../../images/my-bg-copy.png'

const AboutMe = () => {
    return (
        <div className='about-cover' >
            <Navbar></Navbar>
            <div>

            </div>
            <div className=" container  row mt-5 pb-5">
                <div className='col-md-6'>
                    <img style={{ width: '70%' }} className='img-fluid' src={aboutMe} alt="" />
                </div>
                <div className='col-md-6'>
                    <h5 className='text-center pt-5'>
                        <span style={{fontSize:'300%'}}>“</span> Hi, I’m <span style={{ fontWeight: 'bold', fontSize: '200%', borderBottom: '3px solid #ffc121' }}>Kamon  <span style={{ color: '#fb6857' }}>A</span>hmed</span>. I live in Rangamati,  Bangladesh. I love creating something new. I’m the happiest when I’m designing , creating something new that never exist. I always wanted to work as a web developer. That's why i learned as much as possible to build myself as a developer. Still learning and i will continue learning. I would love to know about you.
                </h5>
                </div>

                <div className='row mt-5 pt-5 m-5 p-3 text-center about-data'>
                    <div className='col-md-6'>
                        <h3 style={{ fontWeight: 'bold', borderBottom: '3px solid #ffc121' }}>Comfortable With</h3>
                        <h6 className='pt-2 pb-2' >JavaScript, ES6, React, Node.js, Rest API, Material-UI, MongoDB, Bootstrap4, React Bootstrap,JSON, HTML, CSS, Photoshop.</h6>
                        <h3 style={{ fontWeight: 'bold', fontSize: '200%', borderBottom: '3px solid #ffc121' }}>Familiar With</h3>
                        <h6 className='pt-2 pb-2'>Redux,TypeScript, Express.js, Illustrator, NPM, VS Code, Notepad++, Chrome Dev.</h6>
                        <h3 style={{ fontWeight: 'bold', fontSize: '200%', borderBottom: '3px solid #ffc121' }}>Tools</h3>
                        <h6 className='pt-2 pb-2'>Heroku, Netlify, Firebase, Postman.</h6>
                    </div>
                    <div className='col-md-6 text-center pl-2'>
                        <h4>Mobile: 01878278574</h4>
                        <h4>Email: ahmedkamon3@gmail.com</h4>
                       <div className='pt-2'>
                       <a target='_blank' className='link' href="https://github.com/AhmedKamon?tab=repositories">GitHub</a> <a target='_blank' className='link' href="https://www.linkedin.com/in/kamon-ahmed-669250196/">LinkedIn</a>  <a  target='_blank' className='link' href="https://www.facebook.com/profile.php?id=100006102675365">Facebook</a>
                       </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;