import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">Have any questions? We'd love to hear from you!</p>

        <div className="contact-content">
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Description" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>

          <div className="contact-info">
            <h4>Get in Touch</h4>
            <p>Email: </p>
            <p>Phone: +91 9761436675 / +91 9259516141 </p>
            <p>Address:Atal Utkrisht Late Mahimanand Nautiyal GIC Jibya Kotdhar Chinyalisaur Uttarkashi Pin code 249152 </p>
          </div>
        </div>



        <div className="map-container">



          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3431.5991531021273!2d78.22733687557809!3d30.673414174612944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQwJzI0LjMiTiA3OMKwMTMnNDcuNyJF!5e0!3m2!1sen!2sin!4v1745372467733!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
</section>

      );
};

      export default Contact;
