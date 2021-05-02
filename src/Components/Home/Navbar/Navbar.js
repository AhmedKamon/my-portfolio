import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto ">
                            <li style={{fontSize:'18px' , fontWeight:'bold'}} class="nav-item">
                                <a  class="nav-link active onHover p-3" aria-current="page" href="/">Home</a>
                            </li>
                            <li style={{fontSize:'18px', fontWeight:'bold'}} class="nav-item">
                                <a class="nav-link onHover active p-3"  href="/projects">Projects</a>
                            </li>
                            <li style={{fontSize:'18px', fontWeight:'bold'}} class="nav-item">
                                <a class="nav-link onHover active p-3" href="/aboutMe">About Me</a>
                            </li>
                            <li style={{fontSize:'18px', fontWeight:'bold'}} class="nav-item">
                                <a class="nav-link onHover active p-3" href="contactMe" tabindex="-1" aria-disabled="true">Contact</a>
                            </li>
                            
                            <li style={{fontSize:'18px', fontWeight:'bold'}} class="nav-item">
                                <a class="nav-link  onHover active p-3" href="/blogs" tabindex="-1" aria-disabled="true">Blogs</a>
                            </li>
                            <li style={{fontSize:'18px', fontWeight:'bold', color:"aquamarine"}} class="nav-item ">
                                <a target='_blank' class=" text-success nav-link resume onHover active p-3" href="https://drive.google.com/file/d/1JXsA8AnYYYe36k1o94G4p4ygbzRw2FQ5/view?usp=sharing" tabindex="-1" aria-disabled="true">Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;