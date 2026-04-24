'use client'

import { Award, Shield, CheckCircle } from 'lucide-react'

export default function Products() {
  return (
    <section id="products" className="products">
      <div className="products-inner">
        <div className="products-header">
          <div className="header-content">
            <p className="section-label">Our Products</p>
            <h2 className="section-title">Solutions that <em>make a difference</em></h2>
            <p className="section-subtitle">Discover our range of certified biodegradable packaging solutions designed for various industries and applications.</p>
          </div>
          <div className="header-actions">
            <button className="filter-btn active">All Products</button>
            <button className="filter-btn">Food Grade</button>
            <button className="filter-btn">Industrial</button>
          </div>
        </div>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-image">
              <div className="placeholder-bag">
                <svg viewBox="0 0 200 280" className="bag-svg">
                  <defs>
                    <linearGradient id="bagGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#7bbf7a', stopOpacity: 0.3}} />
                      <stop offset="100%" style={{stopColor: '#2c6b3a', stopOpacity: 0.4}} />
                    </linearGradient>
                  </defs>
                  <rect x="40" y="60" width="120" height="180" rx="8" fill="url(#bagGrad1)" stroke="#7bbf7a" strokeWidth="2"/>
                  <rect x="40" y="40" width="120" height="25" rx="4" fill="rgba(123,191,122,0.2)" stroke="#7bbf7a" strokeWidth="1.5"/>
                  <circle cx="70" cy="52" r="6" fill="none" stroke="#7bbf7a" strokeWidth="2"/>
                  <circle cx="130" cy="52" r="6" fill="none" stroke="#7bbf7a" strokeWidth="2"/>
                  <path d="M 80 120 Q 100 140 120 120" stroke="#a8c4a0" strokeWidth="2" fill="none"/>
                  <text x="100" y="160" textAnchor="middle" fill="#2c6b3a" fontSize="12" fontWeight="600">ECO</text>
                </svg>
              </div>
              <div className="product-badge-top">Popular</div>
            </div>
            <div className="product-content">
              <div className="product-header-row">
                <div className="product-name">EcoPouch Pro</div>
                <div className="product-price">From $0.45</div>
              </div>
              <div className="product-desc">
                Premium stand-up pouches perfect for food products, snacks, and organic goods. 
                Fully compostable with excellent moisture barrier.
              </div>
              <div className="product-specs">
                <div className="product-spec">
                  <span className="product-spec-key">Material</span>
                  <span className="product-spec-val">Plant-based PLA</span>
                </div>
                <div className="product-spec">
                  <span className="product-spec-key">Grade</span>
                  <span className="product-spec-val">Food Grade</span>
                </div>
                <div className="product-spec">
                  <span className="product-spec-key">Sizes</span>
                  <span className="product-spec-val">100g – 5kg</span>
                </div>
                <div className="product-spec">
                  <span className="product-spec-key">Biodegrades</span>
                  <span className="product-spec-val">90–180 days</span>
                </div>
              </div>
              <div className="product-certifications">
                <div className="cert-badge-small">
                  <Shield size={14} />
                  <span>EN 13432</span>
                </div>
                <div className="cert-badge-small">
                  <Award size={14} />
                  <span>ASTM D6400</span>
                </div>
                <div className="cert-badge-small">
                  <CheckCircle size={14} />
                  <span>BIS 17088</span>
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
              <div className="placeholder-bag">
                <svg viewBox="0 0 200 280" className="bag-svg">
                  <defs>
                    <linearGradient id="bagGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#a8c4a0', stopOpacity: 0.3}} />
                      <stop offset="100%" style={{stopColor: '#7bbf7a', stopOpacity: 0.4}} />
                    </linearGradient>
                  </defs>
                  <rect x="50" y="50" width="100" height="190" rx="6" fill="url(#bagGrad2)" stroke="#7bbf7a" strokeWidth="2"/>
                  <rect x="50" y="35" width="100" height="20" rx="3" fill="rgba(168,196,160,0.2)" stroke="#7bbf7a" strokeWidth="1.5"/>
                  <line x1="75" y1="100" x2="125" y2="100" stroke="#a8c4a0" strokeWidth="2"/>
                  <line x1="75" y1="120" x2="125" y2="120" stroke="#a8c4a0" strokeWidth="2"/>
                  <circle cx="100" cy="160" r="20" fill="none" stroke="#7bbf7a" strokeWidth="2"/>
                  <path d="M 90 160 L 95 165 L 110 150" stroke="#7bbf7a" strokeWidth="2.5" fill="none"/>
                </svg>
              </div>
              <div className="product-badge-top bestseller">Bestseller</div>
            </div>
            <div className="product-content">
              <div className="product-header-row">
                <div className="product-name">FlexiBag Green</div>
                <div className="product-price">From $0.32</div>
              </div>
              <div className="product-desc">
                Versatile flat bags ideal for retail, e-commerce, and general packaging. 
                Strong, flexible, and completely eco-friendly.
              </div>
              <div className="product-specs">
                <div className="product-spec">
                  <span className="product-spec-key">Material</span>
                  <span className="product-spec-val">PBAT blend</span>
                </div>
                <div className="product-spec">
                  <span className="product-spec-key">Grade</span>
                  <span className="product-spec-val">Industrial Grade</span>
                </div>
                <div className="product-spec">
                  <span className="product-spec-key">Sizes</span>
                  <span className="product-spec-val">Custom sizes</span>
                </div>
                <div className="product-spec">
                  <span className="product-spec-key">Biodegrades</span>
                  <span className="product-spec-val">60–120 days</span>
                </div>
              </div>
              <div className="product-certifications">
                <div className="cert-badge-small">
                  <Shield size={14} />
                  <span>ISO 14855</span>
                </div>
                <div className="cert-badge-small">
                  <Award size={14} />
                  <span>OK Compost</span>
                </div>
                <div className="cert-badge-small">
                  <CheckCircle size={14} />
                  <span>TUV Certified</span>
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
              <div className="placeholder-bag">
                <svg viewBox="0 0 200 280" className="bag-svg">
                  <defs>
                    <linearGradient id="bagGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#2c6b3a', stopOpacity: 0.3}} />
                      <stop offset="100%" style={{stopColor: '#1a3320', stopOpacity: 0.4}} />
                    </linearGradient>
                  </defs>
                  <rect x="35" y="40" width="130" height="200" rx="10" fill="url(#bagGrad3)" stroke="#7bbf7a" strokeWidth="2.5"/>
                  <rect x="60" y="60" width="80" height="60" rx="4" fill="rgba(123,191,122,0.15)" stroke="#7bbf7a" strokeWidth="1"/>
                  <circle cx="100" cy="90" r="15" fill="rgba(123,191,122,0.2)" stroke="#7bbf7a" strokeWidth="1.5"/>
                  <path d="M 100 80 L 100 100 M 90 90 L 110 90" stroke="#7bbf7a" strokeWidth="2"/>
                  <rect x="70" y="150" width="60" height="8" rx="4" fill="rgba(168,196,160,0.3)"/>
                  <rect x="70" y="170" width="60" height="8" rx="4" fill="rgba(168,196,160,0.3)"/>
                </svg>
              </div>
              <div className="product-badge-top industrial">Industrial</div>
            </div>
            <div className="product-content">
              <div className="product-header-row">
                <div className="product-name">BioWrap Roll</div>
                <div className="product-price">From $0.58</div>
              </div>
              <div className="product-desc">
                Heavy-duty compostable wrap for industrial applications, agriculture, 
                and bulk packaging needs.
              </div>
              <div className="product-specs">
                <div className="product-spec">
                  <span className="product-spec-key">Material</span>
                  <span className="product-spec-val">PHA composite</span>
                </div>
                <div className="product-spec">
                  <span className="product-spec-key">Grade</span>
                  <span className="product-spec-val">Heavy Duty</span>
                </div>
                <div className="product-spec">
                  <span className="product-spec-key">Width</span>
                  <span className="product-spec-val">12" – 60"</span>
                </div>
                <div className="product-spec">
                  <span className="product-spec-key">Biodegrades</span>
                  <span className="product-spec-val">120–240 days</span>
                </div>
              </div>
              <div className="product-certifications">
                <div className="cert-badge-small">
                  <Shield size={14} />
                  <span>EN 13432</span>
                </div>
                <div className="cert-badge-small">
                  <Award size={14} />
                  <span>ASTM D6868</span>
                </div>
                <div className="cert-badge-small">
                  <CheckCircle size={14} />
                  <span>FDA Approved</span>
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
