import React from 'react';
import FacebookImage from './fa.png';
import TwitterImage from './tw.png';
import InstagramImage from './in.png';

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Phone: </p>
        <p></p>
      <p> 
        <a href="https://www.facebook.com/yourusername">
          <img src={FacebookImage} alt="Facebook" />
        </a>
        <a href="https://www.twitter.com/yourusername">
          <img src={TwitterImage} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/yourusername">
          <img src={InstagramImage} alt="Instagram" />
        </a>
      </p>
      
      <p>Location: </p>
      <p></p>
      <p>Email: </p>
    </div>
  );
};

export default Contact;
