import React from 'react';
import './Skills.css'
import reactPic from '../../../images/react.png'
import jsPic from '../../../images/js.png'
import nodePic from '../../../images/node.png'
import mongoPic from '../../../images/mongodb.png'
import bootstrapPic from '../../../images/boostrep.png'
import htmlPic from '../../../images/html.png'
import cssPic from '../../../images/css.png'
import SingleSkill from '../SingleSkill/SingleSkill';
import es6 from '../../../images/es6.png'
import TextLoop from "react-text-loop";

const fakeInfo = [{
    name: 'React.js',
    img: reactPic
},
{
    name: 'JavasScript',
    img: jsPic
},
{
    name: 'Node.js',
    img: nodePic
},
{
    name: 'es6',
    img: es6
},
{
    name: 'MongoDB',
    img: mongoPic
},
{
    name: 'Bootstrap',
    img: bootstrapPic
},
{
    name: 'HTML',
    img: htmlPic
},
{
    name: 'CSS',
    img: cssPic
}
]

const Skills = () => {
    return (
        <div className='row mt-5 pt-5'>
            {/* <h3 className='name text-center' style={{ fontWeight: 'bold' }}> <span style={{ borderBottom: "3px solid aquamarine" }}>MY SKILL'S</span></h3> */}
            <div className='text-center'>
            <TextLoop interval={1000}  springConfig={{  stiffness: 300, damping: 8 }} >
                <span ><h2 style={{fontWeight:'bold'}}>My <span style={{color:"aquamarine"}}>S</span>kills</h2></span>
                <span ><h2 style={{fontWeight:'bold'}}> <span style={{color:"aquamarine"}}>R</span>eact.js</h2></span>
                <span ><h2 style={{fontWeight:'bold'}}> <span style={{color:"aquamarine"}}>N</span>ode</h2></span>
                <span ><h2 style={{fontWeight:'bold'}}> <span style={{color:"aquamarine"}}>J</span>avascript</h2></span>
                <span ><h2 style={{fontWeight:'bold'}}> <span style={{color:"aquamarine"}}>E</span>S6</h2></span>
                <span ><h2 style={{fontWeight:'bold'}}> <span style={{color:"aquamarine"}}>M</span>ongoDB</h2></span>
                <span ><h2 style={{fontWeight:'bold'}}> <span style={{color:"aquamarine"}}>H</span>TML</h2></span>
                <span ><h2 style={{fontWeight:'bold'}}> <span style={{color:"aquamarine"}}>C</span>SS</h2></span>
            </TextLoop>
            </div>
            {
                fakeInfo.map(data => <SingleSkill data={data}></SingleSkill>)
            }
        </div>
    );
};

export default Skills;