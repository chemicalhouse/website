import { Link } from 'react-router-dom'
import './Products.css'

function Products() {
  const productCategories = [
    {
      name: "Industrial Chemicals",
      description: "Essential chemicals for manufacturing and industrial processes",
      products: ["IP Grade", "Technical Grade", "Electroplating Chemicals", "Aquaculture Grade", "Solvents", "Catalysts", "Reagents"]
    },
    {
      name: "Specialty Chemicals",
      description: "High-performance chemicals for specific applications",
      products: ["Custom Formulations", "Performance Additives", "Specialty Polymers"]
    },
    {
      name: "Laboratory Chemicals",
      description: "High-purity chemicals for research and analytical applications",
      products: ["Analytical Reagents", "Research Grade", "Pharmaceutical Grade", "ICP Standards", "AAS Standards"]
    },
    {
      name: "Water Treatment Chemicals",
      description: "Chemicals for water purification and treatment processes",
      products: ["Coagulants", "Disinfectants", "pH Adjusters", "Flocculants", "Pool Cleaning Chemicals"]
    },
    {
      name: "Cleaning & Sanitization",
      description: "Professional-grade cleaning and sanitization products",
      products: ["Industrial Cleaners", "Sanitizers", "Disinfectants", "Degreasers"]
    },
    {
      name: "Equipments",
      description: "Laboratory and industrial equipment for chemical processing and analysis",
      products: ["Laboratory Equipment", "Industrial Equipment", "Analytical Instruments"]
    },
    {
      name: "Plasticware",
      description: "High-quality plastic laboratory and industrial containers and accessories",
      products: ["Laboratory Plasticware", "Storage Containers", "Industrial Plasticware"]
    },
    {
      name: "Glassware",
      description: "Precision glassware for laboratory and industrial applications",
      products: ["Laboratory Glassware", "Measuring Instruments", "Specialized Glassware"]
    },
    {
      name: "Filtration Products",
      description: "Filtration solutions for laboratory and industrial processes",
      products: ["Filter Papers", "Membrane Filters", "Filtration Systems", "Filter Accessories"]
    }
  ]

  return (
    <div className="products">
      <section className="products-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p className="subtitle">
            Comprehensive range of high-quality industrial and specialty chemicals for every industry need in Kerala and across India
          </p>
        </div>
      </section>

      <section className="products-content">
        <div className="container">
          <div className="intro-text">
            <p>
              Chemical House offers an extensive catalog of chemicals across multiple categories, 
              serving industries throughout Kerala and India. Whether you need bulk industrial chemicals 
              or specialized formulations, we have the products, competitive pricing, and expertise to 
              meet your requirements. We source from trusted manufacturers to ensure quality and reliability.
            </p>
          </div>

          <div className="categories-grid">
            {productCategories.map((category, index) => (
              <div key={index} className="category-card">
                <h3>{category.name}</h3>
                <p className="category-description">{category.description}</p>
                <div className="products-list">
                  <h4>Product Types:</h4>
                  <ul>
                    {category.products.map((product, idx) => (
                      <li key={idx}>{product}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="product-features">
            <h2>Product Quality & Safety</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h3>Quality Standards</h3>
                <p>All products meet or exceed industry quality standards and specifications</p>
              </div>
              <div className="feature-item">
                <h3>Safety Compliance</h3>
                <p>Full compliance with safety regulations and proper handling documentation</p>
              </div>
              <div className="feature-item">
                <h3>Batch Tracking</h3>
                <p>Complete traceability with batch numbers and quality certificates</p>
              </div>
              <div className="feature-item">
                <h3>Technical Support</h3>
                <p>Expert guidance on product selection and application</p>
              </div>
            </div>
          </div>

          <div className="inquiry-section">
            <h2>Need a Specific Product?</h2>
            <p>Can't find what you're looking for? Contact us and our team will help you source the right chemicals for your needs. We can arrange bulk orders, provide competitive pricing, and ensure timely delivery across Kerala and India.</p>
            <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
