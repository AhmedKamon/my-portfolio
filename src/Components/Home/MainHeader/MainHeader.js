import React from 'react';
import kamon from '../../../images/kamon1.png'
import './MainHeader.css'
import Tada from 'react-reveal/Tada';
import myFile from '../../../images/kamon.pdf'


const MainHeader = () => {
    return (
        <div className='row '>
            <div className='col-md-6'>
                <img className='imag-fluid header-img' style={{width:'70%'}} src={kamon} alt="" />
            </div>
            
            <div className='col-md-6 mt-5 pt-5 container text-center'>
                <br/>
               <h2 className='' style={{letterSpacing: '2px', marginRight:'10%'}} >Hello, It's Me</h2>
               
                <Tada><h2 className='line anim-typewriter' style={{letterSpacing: '3px', marginRight:'10%'}}><span className='tada-name' style={{fontWeight:"bold", fontSize:'50px'}}><span style={{color:'aquamarine'}}>K</span>amon
                Ahmed</span> </h2> </Tada>
                <h4 className='text-center' style={{marginRight:'10%'}}>Junior front-end Web Developer</h4>
                <h5 className='text-center' style={{marginRight:'10%',letterSpacing: '3px'}}>“I don't sleep when i am tired, i sleep when i'm done”</h5>
                <a href={myFile} download='kamon.pdf'><button className='button p-1'>Download Resume</button></a>
               
            </div>
            
        </div>
    );
};

export default MainHeader;