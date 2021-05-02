import React from 'react';
import './SingleSkill.css'

const SingleSkill = ({data}) => {
    console.log(data)
    return (
        <div className='col-md-3 mt-2 pt-2 text-center'>
            <div className='skill-bg m-3'>
                <img className='p-2 skill-img' style={{width:'150px'}} src={data.img} alt=""/>
                <h2 className='p-4 data-name' style={{}}> {data.name}</h2>
            </div>
        </div>
    );
};

export default SingleSkill;