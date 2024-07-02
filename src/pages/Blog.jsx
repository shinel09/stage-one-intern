import React from 'react';
import '../css/blog.css';

const Blog = () => {
  return (
    <div className='blog'>
      <div className="section-head">
        <p>Recent Projects</p>
        <h5>My Portfolio</h5>
        <div className="button">
          <a href="https://github.com/shinel09" className="git-button">Visit My GitHub</a>
        </div>
      </div>

      <div className="card-row">
        <div className="one-card card">
          <div className="img-card">
            <img src="/src/assets/card-1.png" alt="Project 1" />
          </div>
          <div className="text-card">
            <h4>Ahuse</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed semper ipsum. Curabitur vel consectetur nisi.</p>
            <div className="web">
              <a href="#github" className="site">View website</a>
            </div>
          </div>
        </div>

        <div className="two-card card">
          <div className="img-card">
            <img src="/src/assets/card-2.png" alt="Project 2" />
          </div>
          <div className="text-card">
            <h4>Ahuse</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed semper ipsum. Curabitur vel consectetur nisi.</p>
            <div className="web">
              <a href="#github" className="site">View website</a>
            </div>
          </div>
        </div>

        <div className="three-card card">
          <div className="img-card">
            <img src="/src/assets/card-3.png" alt="Project 3" />
          </div>
          <div className="text-card">
            <h4>Ahuse</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed semper ipsum. Curabitur vel consectetur nisi.</p>
            <div className="web">
              <a href="#github" className="site">View website</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;



// import React from 'react'

// const Blog = () => {
//   return (
//     <div className='blog'>
//      <div className="section-head">
//       <p>Recent Projects</p>
//       <h5>My Portfolio</h5>

//       <div className="button">
//       <a href="#github" className="git-button">Visit My GitHub</a>
//       </div>
//      </div>

//      <div className="card-row">
//       <div className="one-card">
//         <div className="img-card">
//           <img src="/src/assets/card-1.png" alt="" />
//         </div>
//         <div className="text-card">
//           <h4>Ahuse</h4>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed semper ipsum. Curabitur vel consectetur nisi.</p>

//         <div className="web">
//         <a href="#github" className="site">View website</a>
//         </div>
//         </div>
   
//       </div>

//       <div className="two-card">
//         <div className="img-card-two">
//           <img src="/src/assets/card-2.png" alt="" />
//         </div>
//         <div className="text-card-two">
//           <h4>Ahuse</h4>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed semper ipsum. Curabitur vel consectetur nisi.</p>

//         <div className="web-two">
//         <a href="#github" className="site">View website</a>
//         </div>
//         </div>
   
//       </div>
//       <div className="three-card">
//         <div className="img-card-three">
//           <img src="/src/assets/card-3.png" alt="" />
//         </div>
//         <div className="text-card-three">
//           <h4>Ahuse</h4>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed semper ipsum. Curabitur vel consectetur nisi.</p>

//         <div className="web-three">
//         <a href="#github" className="site">View website</a>
//         </div>
//         </div>
   
//       </div>
//      </div>
//     </div>
//   )
// }

// export default Blog