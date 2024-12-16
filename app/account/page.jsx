import React from 'react';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <nav className="navbar-content">
          
        </nav>
      </header>

      {/* Section: Banner */}
      <div className="banner">
        <img
          src="/pic 13.jfif"
          alt="Shop Banner"
          className="banner-bg"
        />
        <div className="banner-content">
          <p>
            <Link href="/">Home</Link> &gt; My Account
          </p>
          <h1 style={{ fontWeight: 'bold', fontSize: '50px' }} >My Account</h1>
        </div>
      </div>

      {/* Section: Login and Register */}
      <div className="auth-section" style={{ display: 'flex', padding: '50px' }}>
        {/* Login Section */}
        <div
          className="login-section"
          style={{
            flex: 1,
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            marginRight: '20px',
          }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Login</h2>
          <form>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="username">Username or Email</label>
              <input
                type="text"
                id="username"
                name="username"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                  marginTop: '5px',
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                  marginTop: '5px',
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me" style={{ marginLeft: '5px' }}>
                Remember Me
              </label>
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '30px',
                border: 'none',
                backgroundColor: '#333',
                color: '#fff',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Login
            </button>
          </form>
        </div>

        {/* Register Section */}
        <div
          className="register-section"
          style={{
            flex: 1,
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '10px',
          }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Register</h2>
          <form>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                  marginTop: '5px',
                }}
              />
            </div>
            <p style={{ fontSize: '14px', marginBottom: '15px' }}>
           <h1>
           A link to set a new password will be sent to your email address.
           </h1><br></br><br></br>
            Your personal data will be used to support your experience throughout this website, to manage access to
             your account, and for other purposes described in our privacy policy.
            </p>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '30px',
                border: 'none',
                backgroundColor: '#333',
                color: '#fff',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Register
            </button>
          </form>
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
};

export default ContactPage;
