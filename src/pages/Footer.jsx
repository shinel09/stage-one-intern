import React from 'react';
import '../css/footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="foot-head">
        <div className="foot-logo">
          <img src="../assets/logo-1.png" alt="JohnDev Logo" />
          <h3>JohnDev,</h3>
        </div>
        <div className="home">
          <a href="/src/pages/Portfolio.jsx">Home</a>
          <a href="/src/pages/Header.jsx">Portfolio</a>
          <a href="/src/pages/About.jsx">About me</a>
          <a href="/src/pages/Contact.jsx">Contact</a>
          <a href="/src/pages/Testimonial.jsx">Testimonials</a>
        </div>
        <div className="socials">
          <div className="social1">
            <img src="../assets/Vector (1).png" alt="Social 1" />
          </div>
          <div className="social2">
            <img src="../assets/Vector (2).png" alt="Social 2" />
          </div>
          <div className="social3">
            <img src="../assets/Vector.jpg" alt="Social 3" />
          </div>
          <div className="social4">
            <img src="../assets/Vector (4).png" alt="Social 4" />
          </div>
        </div>
      </div>
      <div className="foot-middle"></div>
      <div className="foot-bottom">
        <img src="../assets/Made with 💖.png" alt="Made with Love" />
        <p>by ShinelDev</p>
        <div className="last">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies Settings</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
