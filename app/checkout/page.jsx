import Link from 'next/link';

export default function Checkout() {
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
            <Link href="/">Home</Link> &gt; Check Out
          </p>
          <h1 style={{ fontWeight: 'bold', fontSize: '50px' }} >Check Out</h1>
        </div>
      </div>
      {/* Checkout Page Top Section */}
      <div className="checkout-header">
        <h1>Checkout</h1>
      </div>

      {/* Checkout Content */}
      <div className="checkout-content">
        {/* Left Section: Billing Details */}
        <div className="billing-details">
          <h2>Billing Details</h2>

          <div className="input-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" required />
          </div>

          <div className="input-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" required />
          </div>

          <div className="input-group">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" />
          </div>

          <div className="input-group">
            <label htmlFor="country">Country / Region</label>
            <input type="text" id="country" name="country" required />
          </div>

          <div className="input-group">
            <label htmlFor="street-address">Street Address</label>
            <input type="text" id="street-address" name="street-address" required />
          </div>

          <div className="input-group">
            <label htmlFor="town-city">Town / City</label>
            <input type="text" id="town-city" name="town-city" required />
          </div>

          <div className="input-group">
            <label htmlFor="province">Province</label>
            <input type="text" id="province" name="province" required />
          </div>

          <div className="input-group">
            <label htmlFor="zip-code">Zip Code</label>
            <input type="text" id="zip-code" name="zip-code" required />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>

        {/* Right Section: Summary and Payment */}
        <div className="billing-summary">
          <h2>Order Summary</h2>
          <div className="summary-details">
            <p>Product 1: $99.99</p>
            <p>Product 2: $59.99</p>
            <hr />
            <p><strong>Total: $159.98</strong></p>
          </div>

          {/* Payment Options */}
          <div className="payment-options">
            <h3>Payment Method</h3>
            <div className="payment-option">
              <label>
                <input type="radio" name="payment-method" value="online" /> Online Payment
              </label>
            </div>
            <div className="payment-option">
              <label>
                <input type="radio" name="payment-method" value="cash" /> Cash on Delivery
              </label>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="terms-conditions">
            <p>By placing this order, you agree to our <Link href="/">Terms & Conditions</Link>.</p>
          </div>

          {/* Checkout Button */}
          <Link href="/order-confirmation">
            <button className="checkout-button">Place Order</button>
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
