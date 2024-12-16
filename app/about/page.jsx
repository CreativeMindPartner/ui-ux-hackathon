import Link from 'next/link';

export default function About() {
  return (

    <div className="about-page">

<div className="banner">
        <img
          src="/pic 13.jfif"
          alt="Shop Banner"
          className="banner-bg"
        />
        <div className="banner-content">
          <p>
            <Link href="/">Home</Link> &gt; About
          </p>
          <h1 style={{ fontWeight: 'bold', fontSize: '50px' }} >Blog</h1>
        </div>
      </div>
      
<div className="main-container" style={{ display: 'flex', alignItems: 'flex-start' }}>

  <div className="left-content" style={{ flex: 2, padding: '20px' }}>
    
    <img src="/pic 14.jfif" alt="Main Content" style={{ width: '100%', borderRadius: '8px' }} />
    <h1>Admin | Date: 12-Dec-2024 | Category: Wood</h1><br></br>
    <h2>Going All-In With Millennial Design</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor sodales neque,
      at tincidunt elit gravida a. Donec a orci vel risus ornare vehicula.
    </p><Link href="/">
    <button className="read-more-button">Read More</button></Link>
  </div>

  

  

  
  <div className="sidebar" style={{
    flex: 1,
    padding: '20px',
    marginLeft: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  }}>
   
    <div className="search-bar" style={{ marginBottom: '20px' }}>
      <input type="text" placeholder="Search..." style={{ width: '80%', padding: '10px', marginRight: '5px' }} />
      <button className="search-button">🔍</button>
    </div>

   
    <div className="categories" style={{ marginBottom: '20px' }}>
      <h3>Categories</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>Crafts <span className="count">2</span></li>
        <li>Design <span className="count">8</span></li>
        <li>Handmade <span className="count">7</span></li>
        <li>Interior <span className="count">1</span></li>
        <li>Wood <span className="count">6</span></li>
      </ul>
    </div>

    
    <div className="recent-posts" style={{ marginBottom: '20px' }}>
      <h3>Recent Posts</h3>
    
      <div className="recent-post" style={{ display: 'flex', marginBottom: '10px', alignItems: 'center' }}>
    <img src="/pic 1.png" alt="Post 1" style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '4px' }} />
    <p>Going all in with milennial design</p>
    <h1>Admin | Date: 12-Dec-2024 </h1><br></br>

  </div>


  <div className="recent-post" style={{ display: 'flex', marginBottom: '10px', alignItems: 'center' }}>
    <img src="/pic 8.png" alt="Post 2" style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '4px' }} />
    <p>Exploring new ways of decorating</p>
    <h1>Admin | Date: 12-Dec-2024 </h1><br></br>
  </div>


  <div className="recent-post" style={{ display: 'flex', marginBottom: '10px', alignItems: 'center' }}>
    <img src="/pic 7.png" alt="Post 3" style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '4px' }} />
    <p>Handmade pieces that took time to make </p>
    <h1>Admin | Date: 12-Dec-2024 </h1><br></br>
  </div>

  
  <div className="recent-post" style={{ display: 'flex', marginBottom: '10px', alignItems: 'center' }}>
    <img src="/pic 6.png" alt="Post 4" style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '4px' }} />
    <p>Modern home in milan</p>
    <h1>Admin | Date: 12-Dec-2024 </h1><br></br>
  </div>


  <div className="recent-post" style={{ display: 'flex', marginBottom: '10px', alignItems: 'center' }}>
    <img src="/pic 5.png" alt="Post 5" style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '4px' }} />
    <p>Colorful office redesign</p>
    <h1>Admin | Date: 12-Dec-2024 </h1><br></br>
  </div>

    </div>

    <Link href="/">
    <button className="next-button" style={{
      padding: '10px 20px',
      backgroundColor: '#00000',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }}>
      Next
    </button></Link>
  </div>
</div>

<div className="left-content" style={{ flex: 2, padding: '20px', marginBottom: '20px' }}>
    <img src="/pic 14.jfif" alt="Main Content" style={{ width: '65%', borderRadius: '8px' }} />
    <h1>Admin | Date: 12-Dec-2024 | Category: Wood</h1><br></br>
    <h2>Embracing Minimalist Aesthetics</h2>
    <p>
      Curabitur dapibus, libero vitae blandit facilisis, risus est euismod lectus, sit amet
      vehicula arcu risus ac sapien. Quisque varius commodo ex at dignissim.
    </p><Link href="/">
    <button className="read-more-button" style={{
      padding: '10px 20px',
      backgroundColor: '#00000',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }}>Read More</button></Link>
  </div>

  <div className="left-content" style={{ flex: 2, padding: '20px', marginBottom: '20px' }}>
    <img src="/pic 14.jfif" alt="Main Content" style={{ width: '65%', borderRadius: '8px' }} />
    <h1>Admin | Date: 12-Dec-2024 | Category: Wood</h1><br></br>
    <h2>Embracing Minimalist Aesthetics</h2>
    <p>
      Curabitur dapibus, libero vitae blandit facilisis, risus est euismod lectus, sit amet
      vehicula arcu risus ac sapien. Quisque varius commodo ex at dignissim.
    </p><Link href="/">
    <button className="read-more-button" style={{
      padding: '10px 20px',
      backgroundColor: '#00000',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }}>Read More</button></Link>
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
