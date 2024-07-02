import React from 'react';
import '../css/about.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-img">
        <img src="/src/assets/me.png" alt="about-img" />
      </div>

      <div className="about-content">
        <p className="about-label">About</p>
        <h4>About Me</h4>
        <p className="about-description">
          I am a passionate software developer with a proven track record of delivering high-quality, user-centered applications. I have a keen eye for detail and an uncanny ability to simplify complex concepts into understandable, engaging experiences.
        </p>
      </div>
    </div>
  );
}

export default About;





// import React from 'react'
// import '../css/about.css'

// const About = () => {
//   return (
//     <div className='about'>
//       <div className="about-img">
//         <img src="/src/assets/me.png" alt="about-img" />
//       </div>

//       <div className="about-content">
//         <p>About</p>
//         <h4>About Me</h4>
//         <p>I am a passionate software developer with a proven track record of delivering high-quality, user-centered applications. I have a keen eye for detail and an uncanny ability to simplify complex concepts into understandable, engaging experiences.</p>
//       </div>

//     </div>
//   )
// }

// export default About