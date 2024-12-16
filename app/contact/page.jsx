import Link from 'next/link';

export default function Contact() {
  return (
    <div>


<div className="banner">
        <img
          src="/pic 13.jfif"
          alt="Shop Banner"
          className="banner-bg"
        />
        <div className="banner-content">
          <p>
            <Link href="/">Home</Link> &gt; Contact
          </p>
          <h1 style={{ fontWeight: 'bold', fontSize: '50px' }} >Contact</h1>
        </div>
      </div>  <br></br><br></br><br></br>
      <div className="contact-header">
        <h1>Get In Touch With Us</h1><br></br>
        <p>We'd love to hear from you. Feel free to reach out to us with any questions or concerns.</p>
      </div>

      
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <h3><i className="fas fa-map-marker-alt"></i> Address</h3>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>

          <div className="info-item">
            <h3><i className="fas fa-phone-alt"></i> Phone Number</h3>
            <p>Mobile: +(84) 546-6789</p>
            <p>Hotline: +(84) 456-6789</p>
          </div>

          <div className="info-item">
            <h3><i className="fas fa-clock"></i> Working Hours</h3>
            <p>Monday-Friday: 9:00 - 22:00
            Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Contact Us</h2>

          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="input-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <Link href="/contact">

          <button type="submit" className="submit-button">Submit</button></Link>
        </div>
      </div>
      <div className="features-section">
        <div className="feature">
          <h3 style={{ fontWeight: 'bold', fontSize: '30px' }} >Free Delivery</h3>
          <p>For all oders over $50, consectetur adipim scing elit.</p>
        </div>
        <div className="feature">
          <h3 style={{ fontWeight: 'bold', fontSize: '30px' }} >90 Days Return</h3>
          <p>For all oders over $50, consectetur adipim scing elit.</p>
        </div>
        <div className="feature">
          <h3 style={{ fontWeight: 'bold', fontSize: '30px' }} >Secure Payment</h3>
          <p>100% secure payment, consectetur adipim scing elit.</p>
        </div>
      </div>

    </div>
  );
}
