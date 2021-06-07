import React from 'react';
import gentsParlour from '../../../images/Gents-parlour.jpg'
import foodValley from '../../../images/food-valley.jpg'
import ScrollAnimation from 'react-animate-on-scroll';
import redux from '../../../images/redux.png'


const gentsParlourSites = {
    serverCode: 'https://github.com/AhmedKamon/Gent-s-Parlour-server',
    clintCode: 'https://github.com/AhmedKamon/Gent-s-Parlour',
    liveSite: 'https://e-seloon.web.app/'
}

const HomeProject = () => {
    return (
        <div className='container projectBG mt-5 pt-5 shadow-sm p-3 mb-5 bg-body rounded' >
            <h2 style={{ fontWeight: 'bold' }} className='text-center pb-3 mb-2 tada-name' >My Projects</h2>
            <ScrollAnimation delay='50' animateIn="fadeIn">
                <div className='pt-5 '>
                    <h2 style={{ fontWeight: 'bold', color: "aquamarine", borderBottom: '2px solid aquamarine' }} className='text-center' > Gents Parlour</h2>
                    <div className='row mt-5'>
                        <div className='col-md-6'>
                            <img className='text-center' style={{ width: '70%' }} className='img-fluid' src={gentsParlour} alt="" />
                            <h3 className='text-start' >Full Stack MERN Project </h3>
                        </div>
                        <div className='col-md-6  text-center  mt-2'>
                            <h5 className='pb-5'>Different options for different user. you have to submit your mobile number and address to place an order. Services and reviews are dynamic. Viewers can add there own review here</h5>
                            <a target='_blank' className='link' href={gentsParlourSites.serverCode}>Server Side Code</a>
                            <a target='_blank' className='link' href={gentsParlourSites.clintCode}>Clint Side Code</a><a target='_blank' className='link' href={gentsParlourSites.liveSite}>Live Site</a>
                            {/* <a target='_blank' className='link' href={project.serverCode}>Server Side Code</a> */}
                        </div>
                    </div>
                </div>
            </ScrollAnimation>

            <div className='pt-5 shadow-sm p-3 mb-5 bg-body rounded'>
                <h2 style={{ fontWeight: 'bold', color: "aquamarine", borderBottom: '2px solid aquamarine' }} className='text-center' > Food Valley</h2>
                <div className='row mt-5 d-flex justify-content-between'>
                    <div className='col-md-6  text-center  mt-2'>
                        <h5 className='pb-5'>You can find your daily need's here.
                        Order placeable site.
                          Admin can add more and more products.</h5>
                        <a target='_blank' className='link' href='https://github.com/AhmedKamon/FOOD-VALLEY'>Clint Side Code</a><a target='_blank' className='link' href='https://fresh-food-e1d00.firebaseapp.com/'>Live Site</a>
                        {/* <a target='_blank' className='link' href={project.serverCode}>Server Side Code</a> */}
                    </div>
                    <div className='col-md-6 '>
                        <img className='' style={{ width: '70%' }} className='img-fluid' src={foodValley} alt="" />
                        <h3 className='' >Full Stack MERN Project </h3>
                    </div>
                </div>
            </div>
            <div className='pt-5 pb-5 shadow-sm p-3 mb-5 bg-body rounded'>
                    <h2 style={{ fontWeight: 'bold', color: "aquamarine", borderBottom: '2px solid aquamarine' }} className='text-center' > Dev Town</h2>
                    <div className='row mt-5'>
                        <div className='col-md-6'>
                            <img className='text-center' style={{ width: '70%' }} className='img-fluid' src={redux} alt="" />
                            <h3 className='text-start' >React Redux Project.</h3>
                        </div>
                        <div className='col-md-6  text-center  mt-2'>
                            <h5 className='pb-5'>Responsive web project using react redux.  Add developers on cart. Make a professional developers team using Dev Town. </h5>
                            <a target='_blank' className='link' href='https://github.com/AhmedKamon/Dev-town'>GitHub Code</a>
                            <a target='_blank' className='link' href='https://elegant-raman-ce9abf.netlify.app/'>Live Site</a>
                            {/* <a target='_blank' className='link' href={project.serverCode}>Server Side Code</a> */}
                        </div>
                    </div>
                </div>
            <div className='text-center mt-3 mb-3  pt-5'>
                <a href="/projects"><button className='p-3' style={{ fontWeight: 'bold', }} className='button p-1'>More Projects</button></a>
            </div>
        </div>
    );
};

export default HomeProject;