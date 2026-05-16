import { Award, Shield, CheckCircle } from 'lucide-react'

export default function Products() {
  return (
    <section id="products" className="products">
      <div className="products-inner">
        <div className="products-header">
          <div className="header-content">
            <p className="section-label">Our Products</p>
            <h2 className="section-title">Bio-Polymer <em>Solutions</em></h2>
            <p className="section-subtitle">Discover our range of eco-friendly bio-polymer materials designed for packaging, agriculture, and industrial applications.</p>
          </div>
          <div className="header-actions">
            <button className="filter-btn active">All Products</button>
            <button className="filter-btn">Packaging</button>
            <button className="filter-btn">Agriculture</button>
            <button className="filter-btn">Industrial</button>
          </div>
        </div>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-image">
              <img 
                src="/images/granuals.png" 
                alt="Bio-Polymer Granules"
                className="product-real-image"
              />
              <div className="product-badge-top">Popular</div>
            </div>
            <div className="product-content">
              <div className="product-header-row">
                <div className="product-name">Bio-Polymer Granules</div>
              </div>
              <div className="product-desc">
                Eco-friendly granules suitable for industrial applications. Biodegradable, durable, and high-performance alternative to conventional plastics.
              </div>
              <div className="product-specs">
                <div className="product-spec">
                  <span className="product-spec-key">Features</span>
                  <span className="product-spec-val">Biodegradable</span>
                </div>
                <div className="product-spec">
                  <span className="product-spec-key">Performance</span>
                  <span className="product-spec-val">High Durability</span>
                </div>
                <div className="product-spec">
                  <span className="product-spec-key">Applications</span>
                  <span className="product-spec-val">Packaging, Bags</span>
                </div>
                <div className="product-spec">
                  <span className="product-spec-key">Composting</span>
                  <span className="product-spec-val">Yes</span>
                </div>
              </div>
              <div className="product-certifications">
                <div className="cert-badge-small">
                  <Shield size={14} />
                  <span>Eco-Friendly</span>
                </div>
                <div className="cert-badge-small">
                  <Award size={14} />
                  <span>Biodegradable</span>
                </div>
                <div className="cert-badge-small">
                  <CheckCircle size={14} />
                  <span>Certified</span>
                </div>
              </div>
              <button className="product-cta">
                <span>Request Quote</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img 
                src="/images/package.jpeg" 
                alt="Biodegradable Carry Bags"
                className="product-real-image"
              />
              <div className="product-badge-top bestseller">Bestseller</div>
            </div>
            <div className="product-content">
              <div className="product-header-row">
                <div className="product-name">Biodegradable Carry Bags</div>
              </div>
              <div className="product-desc">
                Eco-friendly alternative to conventional plastic bags. Perfect for retail, packaging, and everyday use with excellent strength.
              </div>
              <div className="product-specs">
                <div className="product-spec">
                  <span className="product-spec-key">Material</span>
                  <span className="product-spec-val">Bio-Polymer</span>
                </div>
                <div className="product-spec">
                  <span className="product-spec-key">Type</span>
                  <span className="product-spec-val">Carry Bags</span>
                </div>
                <div className="product-spec">
                  <span className="product-spec-key">Sizes</span>
                  <span className="product-spec-val">Custom Sizes</span>
                </div>
                <div className="product-spec">
                  <span className="product-spec-key">Composting</span>
                  <span className="product-spec-val">Biodegradable</span>
                </div>
              </div>
              <div className="product-certifications">
                <div className="cert-badge-small">
                  <Shield size={14} />
                  <span>Environment Safe</span>
                </div>
                <div className="cert-badge-small">
                  <Award size={14} />
                  <span>Compostable</span>
                </div>
                <div className="cert-badge-small">
                  <CheckCircle size={14} />
                  <span>Certified</span>
                </div>
              </div>
              <button className="product-cta">
                <span>Request Quote</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img 
                src="/images/custom bags.png" 
                alt="Custom Bio-Polymer Solutions"
                className="product-real-image"
              />
              <div className="product-badge-top industrial">Custom</div>
            </div>
            <div className="product-content">
              <div className="product-header-row">
                <div className="product-name">Custom Bio-Polymer Solutions</div>
              </div>
              <div className="product-desc">
                Tailored bio-polymer products designed to meet specific client requirements. Custom sizes, grades, and industry-specific applications.
              </div>
              <div className="product-specs">
                <div className="product-spec">
                  <span className="product-spec-key">Customization</span>
                  <span className="product-spec-val">Custom Grades</span>
                </div>
                <div className="product-spec">
                  <span className="product-spec-key">Applications</span>
                  <span className="product-spec-val">Industry Specific</span>
                </div>
                <div className="product-spec">
                  <span className="product-spec-key">Production</span>
                  <span className="product-spec-val">Flexible</span>
                </div>
                <div className="product-spec">
                  <span className="product-spec-key">Uses</span>
                  <span className="product-spec-val">Multi-Industry</span>
                </div>
              </div>
              <div className="product-certifications">
                <div className="cert-badge-small">
                  <Shield size={14} />
                  <span>Custom Made</span>
                </div>
                <div className="cert-badge-small">
                  <Award size={14} />
                  <span>Quality Assured</span>
                </div>
                <div className="cert-badge-small">
                  <CheckCircle size={14} />
                  <span>Certified</span>
                </div>
              </div>
              <button className="product-cta">
                <span>Request Quote</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>
  )
}
