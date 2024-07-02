import React, { useState } from 'react';
import '../css/contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="contact-form-container">
      <p className='get'>Get In Touch</p>
      <h2 className='me'>Contact me</h2>
      <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="message"
          placeholder="Type your message..."
          value={formData.message}
          onChange={handleChange}
        />
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
            />
            I accept the terms
          </label>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;

// import React, { useState } from 'react';
// import '../css/contact.css';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     message: '',
//     terms: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <div className="contact-form">
//       <p>Get In Touch</p>
//       <h1>Contact me</h1>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input 
//             type="text" 
//             name="firstName" 
//             placeholder="First name" 
//             value={formData.firstName} 
//             onChange={handleChange} 
//           />
//           <input 
//             type="text" 
//             name="lastName" 
//             placeholder="Last name" 
//             value={formData.lastName} 
//             onChange={handleChange} 
//           />
//         </div>
//         <div className="form-group">
//           <input 
//             type="email" 
//             name="email" 
//             placeholder="Email" 
//             value={formData.email} 
//             onChange={handleChange} 
//           />
//           <input 
//             type="text" 
//             name="phoneNumber" 
//             placeholder="Phone number" 
//             value={formData.phoneNumber} 
//             onChange={handleChange} 
//           />
//         </div>
//         <textarea 
//           name="message" 
//           placeholder="Type your message..." 
//           value={formData.message} 
//           onChange={handleChange} 
//         ></textarea>
//         <div className="form-check">
//           <input 
//             type="checkbox" 
//             name="terms" 
//             checked={formData.terms} 
//             onChange={handleChange} 
//           />
//           <label htmlFor="terms">I accept the terms</label>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;