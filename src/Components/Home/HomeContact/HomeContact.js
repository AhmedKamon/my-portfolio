import React from 'react';
import emailjs from 'emailjs-com';
import './HomeContact.css'

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ytwkxnf', 'template_8k9ysgs', e.target, 'user_XaptEMR8wW0YlEmdqVPEh')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset()
    alert('massage sent successfully')
}

const HomeContact = () => {
    return (
        <div className='row  mt-5 pt-5 m-1'>
             <h2 style={{fontWeight:'bold'}} className='text-center mt-5 mb-2 pb-3 mb-2 tada-name' >Contact Me</h2>
            <div className='col-md-6 mt-2 pt-2 pl-2'>
                <h1 style={{fontWeight:'bold', color:'orange'}}>HELLO SIR,</h1>
                <h2 style={{fontWeight:'bold'}}>LET ME KNOW WHAT YOU THINK,</h2>
                <h2 style={{fontWeight:'bold'}}>LET'S GET CONNECTED.</h2>
            </div>
            <div className='col-md-6'>
                <form className="contact-form pl-2 ms-5 p-2 form-bg" onSubmit={sendEmail}>
                    <label className='text-start' >Name</label>
                    <input className='form-control  ' placeholder='Name Here' type="text" name="user_name" /><br />
                    <label>Email</label>
                    <input className='form-control' placeholder='Example@gmail.com' type="email" name="user_email" /><br />
                    <label>Message</label>
                    <textarea className='form-control  ' placeholder='Write what you want here' name="message" /><br />
                    <input className='form-control bg-dark text-white' type="submit" value="Send" /><br />
                </form>
            </div>
        </div>
    );
};

export default HomeContact;