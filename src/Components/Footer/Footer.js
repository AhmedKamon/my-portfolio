import React from 'react';
import './Footer.css'
import facebook from '../../images/f.webp'
import gitHub from '../../images/gtiHub.png'
import linkedIn from '../../images/linkedin.png'


const Footer = () => {
    return (
        <div class="footer-dark mt-5">
            <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">React</a></li>
                            <li><a href="#">Javascript</a></li>
                            <li><a href="#">Node</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Employee</a></li>
                            <li><a href="#">Build A Team</a></li>
                            <li><a href="#">Awards</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h5>Searching for an Employee ? <br/> Your are in a perfect place to <span style={{color:'orange', fontWeight:'bold'}}>HIRE</span> an Employee. <br/></h5>
                    </div>
                    <div class="col item social"><a target='_blank' href="https://www.facebook.com/profile.php?id=100006102675365"><i class="icon ion-social-facebook"><img style={{height:'100%'}} src={facebook} alt=""/></i></a><a target='_blank' href="https://github.com/AhmedKamon?tab=repositories"><i class="icon ion-social-twitter"><img style={{height:'100%', borderRadius:'50px'}} src={gitHub} alt=""/></i></a><a target='_blank' href="https://www.linkedin.com/in/kamon-ahmed-669250196/"><i class="icon ion-social-snapchat"><img style={{height:'80%', borderRadius:'50px'}} src={linkedIn} alt=""/></i></a></div>
                </div>
                <p style={{fontWeight:'bold'}} class="copyright">ahmedkamon3@gmail.com © 2021</p>
            </div>
        </footer>
        </div>
    );
};

export default Footer;