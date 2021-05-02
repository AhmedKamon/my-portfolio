import React from 'react';
import gentsParlour from '../../../images/Gents-parlour.jpg'
import foodValley from '../../../images/food-valley.jpg'


const gentsParlourSites = {
    serverCode: 'https://github.com/AhmedKamon/Gent-s-Parlour-server',
    clintCode: 'https://github.com/AhmedKamon/Gent-s-Parlour',
    liveSite: 'https://e-seloon.web.app/'
}

const HomeProject = () => {
    return (
        <div className='container projectBG mt-5 pt-5' >
            <h2 className='text-center pb-3 mb-2' >My Projects</h2>
            <div>
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
            <div> 
                <h2 style={{ fontWeight: 'bold', color: "aquamarine", borderBottom: '2px solid aquamarine' }} className='text-center' > Food Valley</h2>
                <div className='row mt-5 d-flex justify-content-between'>
                    <div className='col-md-6  text-center  mt-2'>
                        <h5 className='pb-5'>You can find your daily need's here.
                        Order placeable site.
    Admin can add more and more products.</h5>
                        <a target='_blank' className='link' href={gentsParlourSites.serverCode}>Server Side Code</a>
                        <a target='_blank' className='link' href={gentsParlourSites.clintCode}>Clint Side Code</a><a target='_blank' className='link' href={gentsParlourSites.liveSite}>Live Site</a>
                        {/* <a target='_blank' className='link' href={project.serverCode}>Server Side Code</a> */}
                    </div>
                    <div className='col-md-6 '>
                        <img className='' style={{ width: '70%' }} className='img-fluid' src={foodValley} alt="" />
                        <h3 className='' >Full Stack MERN Project </h3>
                    </div>
                </div>
            </div>
            <div className='text-center mt-3 mb-3 '>
            <a href="/projects"><button className='p-3' style={{fontWeight:'bold',}} className='button p-1'>More Projects</button></a>
            </div>
        </div>
    );
};

export default HomeProject;