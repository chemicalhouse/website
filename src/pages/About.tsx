import './About.css'

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About Chemical House</h1>
          <p className="subtitle">Leading Chemical Distributor in Kerala</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Chemical House, based in Kerala, was established with a vision to provide 
              reliable and high-quality chemical distribution services across the region. With years 
              of experience in the chemical distribution industry, our team understands the critical 
              importance of reliable chemical supply chains for businesses across various sectors 
              in Kerala and beyond.
            </p>
            <p>
              We've built our reputation on trust, quality, competitive pricing, and exceptional 
              customer service. From small businesses to large industrial operations, we've been 
              the trusted partner for companies that demand the highest standards in chemical 
              procurement. Our strategic location in Kerala enables us to serve clients efficiently 
              throughout Kerala and across India.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide businesses across Kerala and India with access to high-quality 
              industrial and specialty chemicals through a reliable, efficient, and customer-focused 
              distribution network. We strive to be more than just a supplier—we aim to be a strategic 
              partner in your success, offering competitive pricing, timely delivery, and expert guidance 
              tailored to the Indian market.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Quality First</h3>
                <p>We never compromise on quality. Every product we distribute meets the highest industry standards.</p>
              </div>
              <div className="value-item">
                <h3>Customer Focus</h3>
                <p>Your success is our success. We're committed to understanding and meeting your unique needs.</p>
              </div>
              <div className="value-item">
                <h3>Integrity</h3>
                <p>We conduct business with transparency, honesty, and ethical practices in everything we do.</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>We continuously improve our processes and services to stay ahead of industry trends.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Why Work With Us</h2>
            <ul className="benefits-list">
              <li>Extensive network of trusted suppliers and manufacturers across India</li>
              <li>Comprehensive product range covering diverse industrial needs in Kerala and India</li>
              <li>Experienced team with deep knowledge of Indian chemical markets and regulations</li>
              <li>Flexible solutions tailored to your business requirements with competitive pricing</li>
              <li>Commitment to safety and regulatory compliance as per Indian standards</li>
              <li>Competitive pricing with transparent cost structures and bulk order discounts</li>
              <li>Strategic location in Kerala for efficient distribution throughout the state</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
