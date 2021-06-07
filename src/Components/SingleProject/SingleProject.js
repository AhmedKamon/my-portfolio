import React from 'react';
import './SingleProject.css'

const SingleProject = ({ project }) => {
    console.log(project)

    return (
        <div className='container projectBG mt-3 pt-5 shadow p-3 mb-5 bg-body rounded' >
            <h2 style={{fontWeight:'bold', color:"aquamarine", borderBottom:'2px solid aquamarine'}} className='text-center' > {project.tittle}</h2>
            <div className='row mt-5'>
                <div className='col-md-6'>
                    <img className='text-center' style={{width:'70%'}} className='img-fluid' src={project.img} alt="" />
                    <h3 className='text-start' >{project.description}</h3>
                </div>
                <div className='col-md-6  text-center  mt-2'>
                    <h5 className='pb-5'>{project.fetchers}</h5>
                    <a target='_blank' className='link' href={project.liveSite}>Live Site</a> <a target='_blank' className='link' href={project.clintCode}>Clint Side Code</a> 
                    {/* <a target='_blank' className='link' href={project.serverCode}>Server Side Code</a> */}
                </div>
            </div>
        </div>
    );
};

export default SingleProject;