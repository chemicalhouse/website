import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Chemical House</h3>
            <p>Your trusted chemical distributor, providing quality industrial and specialty chemicals with exceptional service to businesses across Kerala and India.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/suppliers">Suppliers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: info@chemicalhouse.com</p>
            <p>Phone: +91-XXXXX-XXXXX</p>
            <p>Address: 41/1834 B, Veekay Tower, T.A.Beerankunju Road, Ernakulam North, Ernakulam-682018, Kerala, India</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Chemical House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
