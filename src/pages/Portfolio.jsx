import React from 'react'
import '../css/portfolio.css'

const Portfolio = () => {
  return (
    <>
    <div className='body'>
      <div className="navbar">
        <div className="logo">
          <img src="/src/assets/logo-1.png" alt="logo" />
          <h3>ShinelDev,</h3>
        </div>
      <div className="nav">
        <div className="one"><h4>Home</h4></div>
        <div className="two"><h4>Portfolio</h4></div>
        <div className="three"><h4>About me</h4></div>
        <div className="four"><h4>Testimonies</h4></div>
      </div>
      <div className="contact">
      <h4>Contact me</h4>
      </div>
      
      </div>
    </div>

    </>
  )
}

export default Portfolio