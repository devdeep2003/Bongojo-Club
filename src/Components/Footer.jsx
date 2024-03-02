import React from 'react';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import '../index.css';


const GlassmorphicFooter = () => {
  const form = useRef();

  const submit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_h7f42kf', 'template_j7ohbr8', form.current, {
      publicKey: 'cOJnKlnnRZphIZbnA',
    })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...');
        },
      );

    e.target.reset()
  };



  return (
    <footer className="glassmorphic-footer">
      <div className="collaboration-details">
        <h2>Want to Collaborate?</h2>
        <div className="newsletter">
          
          <label htmlFor="text">Email us : <b>bongojo@gmail.com</b> </label>
          <label htmlFor="text"> Call us  : <b>6301765790</b> </label>
          <label htmlFor="text">Message us : <b>8374002720</b> </label>
      
          
        </div>
      </div>

      <div className='slogan'>
        <p>মনে প্রাণে বাঙালি</p>
        <div className="social-handles">
        <p>Developed by<a href="https://github.com/devdeep2003"><FontAwesomeIcon icon={faGithub} size="3x" /></a> </p>
        </div>
      </div>
      <div className="rights-reserved">
        <div className="social-handles">
          Our Social Handles <br /> <br /><a href=""><FontAwesomeIcon icon={faWhatsapp} size="3x" /></a><a href="https://www.instagram.com/bongojo_.vitap/"><FontAwesomeIcon icon={faInstagram} size="3x" /></a>
          
        </div> <br />
        
        <p>&copy; 2023  Bongojo. All Rights Reserved</p>
        

      </div>
    </footer>
  );
};

export default GlassmorphicFooter;
