'use client'

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
                src="/images/carry bag.png" 
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
      <style jsx>{`
        .products {
          background: linear-gradient(180deg, #0a1510 0%, #111e13 50%, #0e1e12 100%);
          padding: 8rem 4rem;
          position: relative;
        }
        .products::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 80% 20%, rgba(123,191,122,0.05) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(44,107,58,0.05) 0%, transparent 50%);
          pointer-events: none;
        }
        .products-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .products-header {
          margin-bottom: 4rem;
        }
        .header-content {
          margin-bottom: 2.5rem;
        }
        .section-label {
          font-size: 0.75rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #7bbf7a;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .section-title {
          font-family: var(--font-playfair);
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        .section-title em {
          font-style: italic;
          background: linear-gradient(135deg, #7bbf7a 0%, #a8c4a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .section-subtitle {
          font-size: 1.1rem;
          color: rgba(168,196,160,0.8);
          line-height: 1.7;
          max-width: 600px;
        }
        .header-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          padding: 0.7rem 1.5rem;
          background: rgba(26,51,32,0.4);
          border: 1px solid rgba(123,191,122,0.2);
          border-radius: 50px;
          color: #a8c4a0;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
          font-family: var(--font-dm-sans);
        }
        .filter-btn:hover {
          border-color: rgba(123,191,122,0.4);
          background: rgba(26,51,32,0.6);
        }
        .filter-btn.active {
          background: rgba(123,191,122,0.15);
          border-color: #7bbf7a;
          color: #7bbf7a;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .product-card {
          background: rgba(26,51,32,0.4);
          border: 1px solid rgba(123,191,122,0.1);
          border-radius: 24px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
        }
        .product-image {
          width: 100%;
          height: 280px;
          background: linear-gradient(135deg, rgba(26,51,32,0.6) 0%, rgba(44,107,58,0.4) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 24px 24px 0 0;
          position: relative;
          overflow: hidden;
        }
        .product-image::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(123,191,122,0.1) 0%, transparent 70%);
        }
        .product-real-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.4s;
        }
        .product-card:hover .product-real-image {
          transform: scale(1.05);
        }
        .placeholder-bag {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
        }
        .bag-svg {
          width: 70%;
          height: 100%;
          filter: drop-shadow(0 8px 20px rgba(0,0,0,0.3));
          transition: transform 0.4s;
        }
        .product-card:hover .bag-svg {
          transform: scale(1.05) translateY(-5px);
        }
        .product-badge-top {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-size: 0.7rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #f4efe4;
          background: rgba(123,191,122,0.9);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-weight: 600;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          z-index: 2;
        }
        .product-badge-top.bestseller {
          background: linear-gradient(135deg, #d4c4a0 0%, #a8c4a0 100%);
          color: #1a3320;
        }
        .product-badge-top.industrial {
          background: rgba(26,51,32,0.9);
          border: 1px solid #7bbf7a;
        }
        .product-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .product-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(123,191,122,0.08), transparent);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .product-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #7bbf7a, transparent);
          transform: scaleX(0);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .product-card:hover {
          border-color: rgba(123,191,122,0.3);
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.3);
        }
        .product-card:hover::before {
          opacity: 1;
        }
        .product-card:hover::after {
          transform: scaleX(1);
        }
        .product-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        .product-name {
          font-family: var(--font-playfair);
          font-size: 1.6rem;
          font-weight: 700;
          color: #f4efe4;
        }
        .product-price {
          font-size: 1.1rem;
          font-weight: 700;
          color: #7bbf7a;
          white-space: nowrap;
          margin-left: 1rem;
        }
        .product-desc {
          font-size: 0.95rem;
          color: #a8c4a0;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        .product-specs {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          border-top: 1px solid rgba(123,191,122,0.15);
          border-bottom: 1px solid rgba(123,191,122,0.15);
          padding: 1.5rem 0;
          margin-bottom: 1.5rem;
        }
        .product-spec {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
        }
        .product-spec-key {
          color: #6b8a6b;
          font-weight: 500;
        }
        .product-spec-val {
          color: #d4c4a0;
          font-weight: 600;
        }
        .product-certifications {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .cert-badge-small {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.7rem;
          padding: 0.5rem 0.9rem;
          background: rgba(123,191,122,0.1);
          border: 1px solid rgba(123,191,122,0.25);
          border-radius: 8px;
          color: #7bbf7a;
          font-weight: 600;
        }
        .product-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          width: 100%;
          padding: 1rem 1.5rem;
          background: linear-gradient(135deg, #7bbf7a 0%, #5a9a5a 100%);
          color: #f4efe4;
          border: none;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          margin-top: auto;
          font-family: var(--font-dm-sans);
        }
        .product-cta:hover {
          background: linear-gradient(135deg, #8ccf8a 0%, #6aaa6a 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(123,191,122,0.3);
        }
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          .products {
            padding: 5rem 1.5rem;
          }
          .products-header {
            margin-bottom: 3rem;
          }
          .section-title {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          .section-subtitle {
            font-size: 1rem;
          }
          .header-actions {
            gap: 0.8rem;
          }
          .filter-btn {
            padding: 0.6rem 1.2rem;
            font-size: 0.85rem;
          }
          .product-image {
            height: 240px;
          }
          .product-content {
            padding: 1.5rem;
          }
          .product-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          .product-price {
            margin-left: 0;
          }
          .product-name {
            font-size: 1.4rem;
          }
        }
        @media (max-width: 480px) {
          .products {
            padding: 4rem 1rem;
          }
          .section-label {
            font-size: 0.7rem;
          }
          .section-title {
            font-size: 1.8rem;
          }
          .product-content {
            padding: 1.2rem;
          }
          .product-desc {
            font-size: 0.9rem;
          }
          .product-cta {
            padding: 0.9rem 1.2rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  )
}
