import Link from 'next/link';

export default function Cart() {
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
            <Link href="/">Home</Link> &gt; Cart
          </p>
          <h1 style={{ fontWeight: 'bold', fontSize: '50px' }} >Cart</h1>
        </div>
      </div>
      {/* Cart Page Top Section with Background Image */}
      <div className="cart-header">
        
        
      </div>
      

      {/* Cart Content */}
      <div className="cart-content">
        <div className="cart-items">
          {/* Product 1 */}
          <div className="cart-item">
            <div className="product-info">
              <img src="/pic 6.png" alt="Product 1" />
              <h3>Product 1</h3>
              <p>$99.99</p>
              <input type="number" value="1" min="1" className="quantity-input" />
              <p className="subtotal">Subtotal: $99.99</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="cart-item">
            <div className="product-info">
              <img src="/pic 8.png" alt="Product 2" />
              <h3>Product 2</h3>
              <p>$59.99</p>
              <input type="number" value="1" min="1" className="quantity-input" />
              <p className="subtotal">Subtotal: $59.99</p>
            </div>
          </div>

          {/* Additional Products can be added similarly */}
        </div>

        {/* Cart Totals Section */}
        <div className="cart-totals">
          <h2>Cart Totals</h2>
          <p>Total: $159.98</p>
          <Link href="/checkout">
            <button className="checkout-button" >Proceed to Checkout</button>
          </Link>
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
