import React, { useState } from 'react'
import './Contact.css'
import email from '../../email.png'
import call from '../../phone.png'
import location from '../../location.png'

//Storing in local storage
// const Contact = () => {

// const [name,setName] = useState('');
// const [emailid,setEmailid] = useState('');
// const [message,setMessage] = useState('');

// const handleSubmit=(e) =>{
//   e.preventDefault();

//   const data = { name, emailid, message };
//   localStorage.setItem('contactData', JSON.stringify(data));

//   alert('Message saved successfully!');
//   console.log(data);

  // clear form
  // setName('');
  // setEmailid('');
  // setMessage('');
  // };

  // return (
  //   <div id="contact" className='contact'>
  //       <div className="contact-title">
  //     <h1>Get in Touch</h1>
  //   </div>
  //   <div className="contact-section">
  //       <div className="contact-left">
  //           <h1>Let's talk</h1>
  //           <p>Submit the form to get in touch with me.</p>
  //           <div className="contact-details">
  //               <div className="contact-detail">
  //                   <img src={email} alt="" /><p>spandymayank@gmail.com</p>
  //               </div>
  //               <div className="contact-detail">
  //                    <img src={call} alt="" /><p>9066545809</p>
  //               </div>
  //               <div className="contact-detail">
  //                     <img src={location} alt="" /><p>Bangalore, Karnataka</p>
  //               </div>
  //           </div>
  //       </div>
  //       <form className='contact-right' onSubmit={handleSubmit}>
  //           <label htmlFor="">Your Name</label>
  //           <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />

  //           <label htmlFor="">Your Email ID</label>
  //           <input type="text" placeholder="Enter your email id" value={emailid} onChange={(e) => setEmailid(e.target.value)} />

  //           <label>Write your meassage here</label>
  //           <textarea value={message} rows="8" placeholder='Enter your message' onChange={(e) => setMessage(e.target.value)} ></textarea>
  //           <button type='submit' className='contact-submit'>Submit now!</button>
  //       </form>
  //   </div>
  //   </div>


const Contact = () => {
  const [name, setName] = useState('');
  const [emailid, setEmailid] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div id="contact" className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Submit the form to get in touch with me.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={email} alt="" /><p>spandymayank@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="" /><p>9066545809</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="" /><p>Bangalore, Karnataka</p>
            </div>
          </div>
        </div>

        {/*This form sends data directly to your email via Formspree */}
        <form
          action="https://formspree.io/f/xqagvgjn"  // <-- Replace with your Formspree link
          method="POST"
          className='contact-right'
        >
          <label>Your Name</label>
          <input type="text" name="name"placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required pattern="^[A-Za-z\s]+$"
    title="Name should only contain letters and spaces" />

          <label>Your Email ID</label>
          <input type="email" name="emailid" placeholder="Enter your email id" value={emailid} onChange={(e) => setEmailid(e.target.value)} required
    title="Enter a valid email address" />

          <label>Your Message</label>
          <textarea name="message" rows="8" placeholder='Enter your message' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

          <button type='submit' className='contact-submit'>Submit now!</button>
        </form>
      </div>
    </div>

  );
}

export default Contact;
