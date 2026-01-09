import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Chemical House</h1>
          <p className="hero-subtitle">Your Trusted Chemical Distributor</p>
          <p className="hero-description">
            We provide high-quality industrial and specialty chemicals to businesses across Kerala and India, 
            ensuring reliable supply chains, competitive pricing, and exceptional customer service.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">Explore Products</Link>
            <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Chemical House?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏭</div>
              <h3>Industry Expertise</h3>
              <p>Years of experience in chemical distribution with deep industry knowledge</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Quality Assurance</h3>
              <p>Rigorous quality control processes ensuring the highest standards</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Reliable Delivery</h3>
              <p>Efficient logistics network ensuring timely delivery to your doorstep</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Trusted Partners</h3>
              <p>Strong relationships with leading chemical manufacturers across India and internationally</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-content">
            <div className="service-item">
              <h3>Bulk Chemical Supply</h3>
              <p>We handle large volume orders for industrial clients, ensuring competitive pricing and consistent supply.</p>
            </div>
            <div className="service-item">
              <h3>Research Chemicals</h3>
              <p>High-quality research-grade chemicals for scientific and laboratory applications with purity guarantees.</p>
            </div>
            <div className="service-item">
              <h3>Ultra Pure Chemicals</h3>
              <p>Ultra-pure chemical compounds meeting the highest purity standards for advanced research and analytical applications.</p>
            </div>
            <div className="service-item">
              <h3>Fine Chemicals</h3>
              <p>Specialty fine chemicals with precise specifications for pharmaceutical, agrochemical, and specialty chemical industries.</p>
            </div>
            <div className="service-item">
              <h3>Lab Designing And Furniture</h3>
              <p>Complete laboratory design solutions and professional-grade laboratory furniture for modern research facilities.</p>
            </div>
            <div className="service-item">
              <h3>Laboratory Equipments</h3>
              <p>Comprehensive range of laboratory equipment and instruments for various research and testing applications.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Contact us today to discuss your chemical supply needs</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
