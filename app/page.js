import React from 'react';
import Link from 'next/link';
import { BLOCKED_PAGES } from 'next/dist/shared/lib/constants';


const HomePage = () => {
  return (
    <div className="home-container">
      
     

    
      <div className="section-box light-yellow">
        <div className="left">
          <h2 style={{ fontWeight: 'bold', fontSize: '80px' }} >Rocket Single</h2>
          <p style={{ fontWeight: 'bold', fontSize: '64px' }} >Seater</p>
          <Link href="/shop">
          <button style={{ fontWeight: 'bold', fontSize: '25px', padding: '10px 20px' }} >Shop Now</button>
          </Link>
        </div>
        <div className="right">
          <img src="/pic 1.png" alt="Product"  />
        </div>
      </div>

      
      <div className="section-box baby-pink">
        <div className="product">
        <img src="/pic 2.png" alt="Product"  />
          <h3 style={{ fontWeight: 'bold', fontSize: '30px' }} > Side Table  </h3>

        <Link href="/cart">
          <button style={{ fontWeight: 'bold', fontSize: '15px' }} >Buy Now</button></Link>
        </div>
        <div className="product">
        <img src="/pic 3.png" alt="Product"  />
          <h3 style={{ fontWeight: 'bold', fontSize: '30px' }} >Side Table</h3>
          <Link href="/cart">
          <button style={{ fontWeight: 'bold', fontSize: '15px' }} >Buy Now</button></Link>
        </div>
      </div>


      <div className="section-box white">
        <h2 style={{ fontWeight: 'bold', fontSize: '45px', paddingTop: '90px'}} >Top Picks For You</h2>
        <p style={{ fontSize: '15px',  paddingTop: '0px'} } >Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        <div className="products">
          <div className="product">
            <img src="/pic 4.png" alt="Product 1" style={{padding: '20px'}} />
            <h4 style={{  fontSize: '16px'}} >Trenton modular sofa_3</h4>
            <p style={{ fontWeight: 'bold', fontSize: '24px'}} >Rs. 25,000.00</p>
          </div>
          <div className="product">
            <img src="/pic 4.png" alt="Product 2" style={{padding: '20px'}}  />
            <h4 style={{  fontSize: '16px'}} >Granite dining table with dining chair</h4>
            <p style={{ fontWeight: 'bold', fontSize: '24px'}} >Rs. 25,000.00</p>
          </div>
          <div className="product">
            <img src="/pic 4.png" alt="Product 3" style={{padding: '20px'}}  />
            <h4 style={{  fontSize: '16px'}} >Outdoor bar table and stool</h4>
            <p style={{ fontWeight: 'bold', fontSize: '24px'}} >Rs. 25,000.00</p>
          </div>
          <div className="product">
            <img src="/pic 4.png" alt="Product 4" style={{padding: '20px'}}  />
            <h4 style={{  fontSize: '16px'}} >Plain console with teak mirror</h4>
            <p style={{ fontWeight: 'bold', fontSize: '24px'}} >Rs. 25,000.00</p>
          </div>
        </div>
      </div>


      <div className="section-box light-peach">
        <div className="left">
          <img src="/pic 8.png" alt="Image" />
        </div>
        <div className="right">
          <h3 style={{ fontWeight: 'bold', fontSize: '24px' }} >New Arrivals</h3>
          <p style={{ fontWeight: 'bold', fontSize: '45px'}} >Asgaard sofa</p>
          <Link href="/shop">
          <button style={{  fontSize: '20px' }} >Shop Now</button></Link>
        </div>
      </div>

      
      <div className="section-box white">
        <h2 style={{ fontWeight: 'bold', fontSize: '54px' }} >Our Blog</h2>
        <p style={{  fontSize: '16px'}} >Find a bright ideal to suit your taste with our great selection</p><br></br>
        <div className="products">
          <div className="product">
            <img src="/pic 10.jfif" alt="Blog 1"   />
            <p style={{  fontSize: '20px' }} >Going all-in with millennial design</p>
            <h4 style={{ fontWeight: 'bold', fontSize: '25px' }} >Read More</h4>
          </div>
          <div className="product">
            <img src="/pic 11.jfif" alt="Blog 2"  />
            <p style={{ fontSize: '20px' }} >Going all-in with millennial design</p>
            <h4 style={{ fontWeight: 'bold', fontSize: '25px' }} >Read More</h4>
          </div>
          <div className="product">
            <img src="/pic 12.jfif" alt="Blog 3"  />
            <p style={{ fontSize: '20px' }} >Going all-in with millennial design</p>
            <h4 style={{ fontWeight: 'bold', fontSize: '25px' }} >Read More</h4>
          </div>
        </div>
      </div>

      
      <div className="section-box light-pink">
        <h2 style={{ fontWeight: 'bold', fontSize: '54px' }} >Our Instagram</h2>
        <p  style={{ fontSize: '17px' }} >Follow our store on Instagram</p>
        <button style={{
      fontWeight: 'bold',
      fontSize: '18px',
      padding: '23px 80px',
      height: '80px',
      border: 'none',
      backgroundColor: '#ff7f7f',
      color: 'white',
      borderRadius: '25px', 
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.3s ease' 
    }} >Follow Us</button>
      </div>
      
    </div>
  );
};

export default HomePage;

