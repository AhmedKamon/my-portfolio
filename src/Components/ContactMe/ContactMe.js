import React from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css'
import Navbar from '../Home/Navbar/Navbar';

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ytwkxnf', 'template_8k9ysgs', e.target, 'user_XaptEMR8wW0YlEmdqVPEh')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }); 
        e.target.reset()
}

const ContactMe = () => {


    return (
        <div className='contact-bg'>
            <Navbar></Navbar>
            <div className=' container p-5  m-3 '>
                <form className="contact-form pl-2 ms-5 p-2 form-bg" onSubmit={sendEmail}>
                    <label className='text-start' >Name</label>
                    <input className='form-control  ' placeholder='Name Here' type="text" name="user_name" /><br/><br/>
                    <label>Email</label>
                    <input className='form-control' placeholder='omuk@gmail.com' type="email" name="user_email" /><br/><br/>
                    <label>Message</label>
                    <textarea className='form-control  ' placeholder='Write what you want here' name="message" /><br/><br/>
                    <input  className='form-control bg-dark text-white'  type="submit"  value="Send" /><br/>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;