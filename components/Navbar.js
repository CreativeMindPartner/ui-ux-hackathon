import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-content">
        
        <div className="navbar-icons">
          <span className="icon"> <Link href="/account">
          <button>👤</button>
        </Link></span>
          <span className="icon"><Link href="/"> <button>🔍</button></Link> </span> 
          <span className="icon"><Link href="/about"><button>❤️</button></Link></span> 
          <span className="icon"><Link href="/cart"><button>🛒</button></Link></span> 
        </div>

        
        <div className="navbar-links">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
