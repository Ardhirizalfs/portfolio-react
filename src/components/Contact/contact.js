import React, { useRef } from "react";
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6tk38q1', 'template_l7tev16', form.current, '_CKmi-mi9UHMdXIJ0')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert ('Email Sent !')
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
        <section id="contactPage">
          <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                i have had to the opportunity to works with a diverse group of companies.
                Some og the notable companies i have worked with includes
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="Client" className="clientImg" />
                <img src={Adobe} alt="Client" className="clientImg" />
                <img src={Microsoft} alt="Client" className="clientImg" />
                <img src={Facebook} alt="Client" className="clientImg" />
            </div>
          </div>
          <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name='from_name'/>
                <input type="email" className="email" placeholder="Your Email" name="your_email"/>
                <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                <button type="submit" value='send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link"/>
                    <img src={TwitterIcon} alt="Twitter" className="link"/>
                    <img src={YoutubeIcon} alt="Youtube" className="link"/>
                    <img src={InstagramIcon} alt="Instagram" className="link"/>
                </div>
            </form>
          </div>
        </section> 
    );
}
export default Contact