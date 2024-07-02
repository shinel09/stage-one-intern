// src/components/Skill.js
import React from 'react';
import '../css/skill.css';

const Skill = () => {
  return (
    <div className="skill">
      <div className="sectionT">
        <h5>My Skills</h5>
        <h1>My Expertise</h1>
      </div>

      <div className="row">
        <div className="row-item">
          <div className="img-one">
            <img src="/src/assets/phone.png" alt="Responsive Design" />
          </div>
          <div className="content-one">
            <h2>Responsive Design</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolores modi tenetur delectus facere pariatur</p>
          </div>
        </div>

        <div className="row-item">
          <div className="img-two">
            <img src="/src/assets/tag 1.png" alt="Front-End Frameworks" />
          </div>
          <div className="content-two">
            <h2>Front-End Frameworks</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolores modi tenetur delectus facere pariatur</p>
          </div>
        </div>

        <div className="row-item">
          <div className="img-three">
            <img src="/src/assets/carbon_ibm-engineering-test-mgmt.png" alt="Testing and Debugging" />
          </div>
          <div className="content-three">
            <h2>Testing and Debugging</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolores modi tenetur delectus facere pariatur</p>
          </div>
        </div>

        <div className="row-item">
          <div className="img-four">
            <img src="/src/assets/Webflow Development.png" alt="Cloud Services" />
          </div>
          <div className="content-four">
            <h2>Cloud Services</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolores modi tenetur delectus facere pariatur</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;




// import React from 'react'
// import '../css/skill.css'

// const Skill = () => {
//   return (
//        <div className="skill">
//         <div className="sectionT">
//           <h5>My Skills</h5>
//           <h1>My Expertise</h1>
//         </div>

//         <div className="row">
//           <div className="row-one">
//             <div className="img-one">
//               <img src="" alt="" />
//             </div>
//             <div className="content-one">
//               <h2>Responsive Design</h2>
//               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolores modi tenetur delectus facere pariatur</p>
//             </div>
//           </div>

//           <div className="row-two">
//             <div className="img-two">
//               <img src="" alt="" />
//             </div>
//             <div className="content-two">
//               <h2>Responsive Design</h2>
//               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolores modi tenetur delectus facere pariatur</p>
//             </div>
//           </div>

//           <div className="row-three">
//             <div className="img-three">
//               <img src="" alt="" />
//             </div>
//             <div className="content-three">
//               <h2>Responsive Design</h2>
//               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolores modi tenetur delectus facere pariatur</p>
//             </div>
//           </div>

//           <div className="row-four">
//             <div className="img-four">
//               <img src="" alt="" />
//             </div>
//             <div className="content-four">
//               <h2>Responsive Design</h2>
//               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, dolores modi tenetur delectus facere pariatur</p>
//             </div>
//           </div>
          
//         </div>
//       </div>
//   )
// }

// export default Skill