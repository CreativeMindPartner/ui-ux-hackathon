import React from 'react';
import Link from 'next/link';

const ShopPage = () => {
  return (
    <div className="shop-page">
      {/* Section 1: Banner with Breadcrumb */}
      <div className="banner">
        <img
          src="/pic 13.jfif"
          alt="Shop Banner"
          className="banner-bg"
        />
        <div className="banner-content">
          <p>
            <Link href="/">Home</Link> &gt; Shop
          </p>
          <h1 style={{ fontWeight: 'bold', fontSize: '50px' }} >Shop</h1>
        </div>
      </div>

      {/* Section 2: Filter and Sort */}
      <div className="filter-sort-section">
        <div className="filter">
          <h3>Filter</h3>
          <i className="filter-icon">🔍</i>
        </div>
        <div className="sort">
          <div className="show-box">
            <label htmlFor="show">Show:</label>
            <input type="number" id="show" min="1" max="100" placeholder="10" />
          </div>
          <div className="sort-box">
            <label htmlFor="sort">Sorted By:</label>
            <select id="sort">
              <option value="latest">Latest</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Section 3: Products */}
      <div className="products-section">
  <div className="product-card">
    <img src="/pic 8.png" alt="Product 1" />
    <h4>Product 1</h4>
    <p>$99.99</p>
  </div>

  <div className="product-card">
    <img src="/pic 1.png" alt="Product 1" />
    <h4>Product 1</h4>
    <p>$99.99</p>
  </div>

  <div className="product-card">
    <img src="/pic 5.png" alt="Product 1" />
    <h4>Product 1</h4>
    <p>$99.99</p>
  </div>

  <div className="product-card">
    <img src="/pic 1.png" alt="Product 2" />
    <h4>Product 2</h4>
    <p>$79.99</p>
  </div>

  <div className="product-card">
    <img src="/pic 1.png" alt="Product 3" />
    <h4>Product 3</h4>
    <p>$59.99</p>
  </div>

  <div className="product-card">
    <img src="/pic 8.png" alt="Product 4" />
    <h4>Product 4</h4>
    <p>$49.99</p>
  </div>

  <div className="product-card">
    <img src="/pic 1.png" alt="Product 5" />
    <h4>Product 5</h4>
    <p>$89.99</p>
  </div>

  <div className="product-card">
    <img src="/pic 5.png" alt="Product 6" />
    <h4>Product 6</h4>
    <p>$39.99</p>
  </div>
</div>

      {/* Pagination */}
      <div className="pagination">
        <button>Next</button>
      </div>

      {/* Section 4: Features */}
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

export default ShopPage;
