import React from 'react';
import '../css/header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="content">
        <div className="content-one">
          <h4>Hey, I Am Shinel</h4>
        </div>
        <div className="content-two">
          <h1>I develop dynamic and User-Centered Web Applications</h1>
          <p>My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs.</p>
          <a href="#contact" className="hero-button">Get In Touch</a>
        </div>
      </div>
      <div className="header-img">
        <img src="/src/assets/header img.png" alt="header-img" />
      </div>
    </div>
  );
};

export default Header;






// import React from 'react'
// import '../css/header.css'

// const Header = () => {
//   return (
//       <div className="header">
//         <div className="content">
//           <div className="content-one">
//             <h4>Hey, I Am Shinel</h4>
//           </div>
//           <div className="content-two">
//             <h1> I developed dynamic and User-Centered Web Applications</h1>

//             <p>My experties spans both front-end and back-end development enabling me to build comprehensive solutions that meet diverse client needs</p>
//           </div>
//         </div>
//         <div className="header-img">
//           <img src="/src/assets/header img.png" alt="header-img" />
//         </div>
//       </div>
//   )
// }

// export default Header