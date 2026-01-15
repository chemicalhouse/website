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
            <p><strong>Head Office:</strong><br />66/1727, Vee Kay Tower, T.A.Beeran Kunju Road, Ernakulam North, Kochi – 18</p>
            <p>Tel: +91 484 401 7551, +91 9539015353</p>
            <p>E-mail: chemicalhouseinfo@gmail.com</p>
            <p style={{marginTop: '1rem'}}><strong>Branch Office:</strong><br />TC- 4/2099/6, Mispah, Meads Lane, University P.O. Palayam, Thiruvananthapuram-34</p>
            <p>Tel: +91 471 4017551, 8129099912, 8129099978</p>
            <p>E-mail: chemicalhouse41@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Chemical House. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/terms">Terms and Conditions</Link>
            <span className="separator">|</span>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
