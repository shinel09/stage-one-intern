import React from 'react'
import '../css/testimonials.css'

const Testimonial = () => {
  return (
    <div className='reviews'>
      <div className="review-text">
        <p>Clients Feedback</p>
        <h3>Customer testimonials</h3>
      </div>

      <div className="review-cards">
        <div className="recard-one">
          <div className="star">
            <img src="/src/assets/Stars.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eos! Facere sapiente voluptates soluta necessitatibus!</p>
          </div>

          <div className="ava-1">
            <img src="/src/assets/ava-1.png" alt="" />
            <div className="ava-conone">
              <h4>Dianne Russell</h4>
              <p>Starbucks</p>
            </div>
          </div>
        </div>
        <div className="recard-two">
          <div className="star">
            <img src="/src/assets/Stars.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eos! Facere sapiente voluptates soluta necessitatibus!</p>
          </div>

          <div className="ava-two">
            <img src="/src/assets/ava-2.png" alt="" />
            <div className="ava-contwo">
              <h4>Kristin Watson</h4>
              <p>Louis Vuitton</p>
            </div>
          </div>
        </div>
        <div className="recard-three">
          <div className="star">
            <img src="/src/assets/Stars.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eos! Facere sapiente voluptates soluta necessitatibus!</p>
          </div>

          <div className="ava-three">
            <img src="/src/assets/ava-3.png" alt="" />
            <div className="ava-conthree">
              <h4>Kathryn Murphy</h4>
              <p>McDonald's</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial