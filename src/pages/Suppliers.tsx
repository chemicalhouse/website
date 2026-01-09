import './Suppliers.css'

function Suppliers() {
  const suppliers = [
    {
      name: "Gujarat Chemical Industries",
      description: "Leading manufacturer of industrial chemicals with extensive experience serving the Indian market",
      specialties: ["Industrial Solvents", "Acids", "Bases", "Industrial Chemicals"],
      location: "Gujarat, India"
    },
    {
      name: "Maharashtra Chemical Works",
      description: "Premium supplier of specialty chemicals for various industries across India",
      specialties: ["Specialty Chemicals", "Pharmaceutical Grade", "Research Chemicals"],
      location: "Maharashtra, India"
    },
    {
      name: "Tamil Nadu Chemical Corporation",
      description: "Major producer of bulk chemicals serving markets throughout South India and beyond",
      specialties: ["Bulk Chemicals", "Petrochemicals", "Organic Compounds"],
      location: "Tamil Nadu, India"
    },
    {
      name: "Karnataka Chemical Solutions",
      description: "Established manufacturer focusing on high-purity chemical products for industrial use",
      specialties: ["High-Purity Chemicals", "Laboratory Grade", "Analytical Reagents"],
      location: "Karnataka, India"
    },
    {
      name: "Delhi Chemical Distributors",
      description: "Innovative supplier of eco-friendly and sustainable chemical solutions",
      specialties: ["Green Chemistry", "Biodegradable Products", "Sustainable Solutions"],
      location: "Delhi, India"
    },
    {
      name: "West Bengal Industrial Chemicals",
      description: "Specialist in advanced chemical materials and specialty formulations",
      specialties: ["Advanced Materials", "Specialty Polymers", "Industrial Formulations"],
      location: "West Bengal, India"
    }
  ]

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
          <div className="intro-text">
            <p>
              At Chemical House, we maintain strategic partnerships with some of India's most 
              respected chemical manufacturers and suppliers. These relationships ensure that we can 
              provide our clients with access to a diverse range of high-quality chemicals, competitive 
              pricing, and reliable supply chains throughout Kerala and across India.
            </p>
            <p>
              Our supplier network includes established manufacturers from key industrial states like 
              Gujarat, Maharashtra, Tamil Nadu, and Karnataka, allowing us to source the best products 
              for your specific needs while maintaining the highest standards of quality, safety, and 
              regulatory compliance as per Indian standards.
            </p>
          </div>

          <div className="suppliers-grid">
            {suppliers.map((supplier, index) => (
              <div key={index} className="supplier-card">
                <div className="supplier-header">
                  <h3>{supplier.name}</h3>
                  <span className="supplier-location">{supplier.location}</span>
                </div>
                <p className="supplier-description">{supplier.description}</p>
                <div className="supplier-specialties">
                  <h4>Specialties:</h4>
                  <div className="specialty-tags">
                    {supplier.specialties.map((specialty, idx) => (
                      <span key={idx} className="tag">{specialty}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="partnership-info">
            <h2>Partnership Benefits</h2>
            <div className="benefits-grid">
              <div className="benefit-item">
                <h3>Quality Assurance</h3>
                <p>All our suppliers undergo rigorous quality audits and maintain industry certifications</p>
              </div>
              <div className="benefit-item">
                <h3>Competitive Pricing</h3>
                <p>Strong relationships enable us to offer competitive pricing to our clients</p>
              </div>
              <div className="benefit-item">
                <h3>Supply Reliability</h3>
                <p>Multiple supplier relationships ensure consistent availability of products</p>
              </div>
              <div className="benefit-item">
                <h3>Innovation Access</h3>
                <p>Early access to new products and innovative chemical solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Suppliers
