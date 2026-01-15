import { Link } from 'react-router-dom'
import './Suppliers.css'

function Suppliers() {
  return (
    <div className="suppliers">
      <section className="suppliers-hero">
        <div className="container">
          <h1>Our Trusted Suppliers</h1>
          <p className="subtitle">
            We partner with leading chemical manufacturers across India to bring you the highest quality products at competitive prices
          </p>
        </div>
      </section>

      <section className="suppliers-content">
        <div className="container">
          <div className="under-construction">
            <div className="construction-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2>Under Construction</h2>
            <p>
              Our supplier listing page is currently under development. We are working on implementing 
              a comprehensive supplier directory with hyperlinking capabilities and lead tracking features 
              to better serve our customers and monitor business opportunities.
            </p>
            <p>
              Once complete, this section will provide detailed information about our trusted supplier 
              network, including direct links to supplier profiles and a system to track and manage 
              business leads effectively.
            </p>
            <p className="contact-note">
              For supplier inquiries or partnership opportunities, please <Link to="/contact">contact us</Link> directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Suppliers
