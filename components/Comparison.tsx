'use client'

import { Check, X, Leaf, Droplet, Clock, Recycle } from 'lucide-react'

export default function Comparison() {
  return (
    <section className="comparison">
      <div className="comparison-inner">
        <div className="comparison-header">
          <p className="section-label">The Difference</p>
          <h2 className="section-title">Biopolymer vs <em>Traditional Plastic</em></h2>
          <p className="section-desc">
            See how our biodegradable solutions outperform conventional plastic packaging
          </p>
        </div>

        <div className="comparison-content">
          {/* Biopolymer Side */}
          <div className="comparison-side biopolymer-side">
            <div className="comparison-image-wrapper">
              <div className="comparison-image biopolymer-image">
                <div className="placeholder-content">
                  <svg viewBox="0 0 200 200" className="placeholder-icon">
                    <rect x="50" y="40" width="100" height="120" fill="rgba(123,191,122,0.2)" rx="8"/>
                    <path d="M 100 60 L 100 100 M 80 80 L 120 80" stroke="rgba(123,191,122,0.4)" strokeWidth="3"/>
                    <circle cx="100" cy="120" r="15" fill="rgba(123,191,122,0.3)"/>
                    <path d="M 90 140 Q 100 150 110 140" stroke="rgba(123,191,122,0.4)" strokeWidth="2" fill="none"/>
                    <path d="M 70 70 Q 65 60 70 50" stroke="rgba(168,196,160,0.5)" strokeWidth="2" fill="none"/>
                    <path d="M 130 70 Q 135 60 130 50" stroke="rgba(168,196,160,0.5)" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div className="image-badge biopolymer-badge">
                  <Leaf size={16} />
                  <span>Eco-Friendly</span>
                </div>
              </div>
            </div>
            <h3 className="comparison-title">Biopolymer Bags</h3>
            <div className="comparison-features">
              <div className="feature-item feature-positive">
                <Check size={20} strokeWidth={2.5} />
                <span>100% Biodegradable</span>
              </div>
              <div className="feature-item feature-positive">
                <Check size={20} strokeWidth={2.5} />
                <span>Decomposes in 90-180 days</span>
              </div>
              <div className="feature-item feature-positive">
                <Check size={20} strokeWidth={2.5} />
                <span>Plant-based materials</span>
              </div>
              <div className="feature-item feature-positive">
                <Check size={20} strokeWidth={2.5} />
                <span>Zero microplastics</span>
              </div>
              <div className="feature-item feature-positive">
                <Check size={20} strokeWidth={2.5} />
                <span>Compostable certified</span>
              </div>
              <div className="feature-item feature-positive">
                <Check size={20} strokeWidth={2.5} />
                <span>Reduces carbon footprint</span>
              </div>
            </div>
          </div>

          {/* VS Divider */}
          <div className="vs-divider">
            <div className="vs-circle">VS</div>
          </div>

          {/* Plastic Side */}
          <div className="comparison-side plastic-side">
            <div className="comparison-image-wrapper">
              <div className="comparison-image plastic-image">
                <div className="placeholder-content">
                  <svg viewBox="0 0 200 200" className="placeholder-icon">
                    <rect x="50" y="40" width="100" height="120" fill="rgba(180,180,180,0.3)" rx="8"/>
                    <path d="M 100 60 L 100 100 M 80 80 L 120 80" stroke="rgba(140,140,140,0.5)" strokeWidth="3"/>
                    <circle cx="100" cy="120" r="15" fill="rgba(160,160,160,0.4)"/>
                    <path d="M 90 140 Q 100 150 110 140" stroke="rgba(140,140,140,0.5)" strokeWidth="2" fill="none"/>
                    <line x1="60" y1="50" x2="140" y2="150" stroke="rgba(200,80,80,0.6)" strokeWidth="4"/>
                    <line x1="140" y1="50" x2="60" y2="150" stroke="rgba(200,80,80,0.6)" strokeWidth="4"/>
                  </svg>
                </div>
                <div className="image-badge plastic-badge">
                  <X size={16} />
                  <span>Harmful</span>
                </div>
              </div>
            </div>
            <h3 className="comparison-title">Traditional Plastic</h3>
            <div className="comparison-features">
              <div className="feature-item feature-negative">
                <X size={20} strokeWidth={2.5} />
                <span>Non-biodegradable</span>
              </div>
              <div className="feature-item feature-negative">
                <X size={20} strokeWidth={2.5} />
                <span>Takes 500+ years to break down</span>
              </div>
              <div className="feature-item feature-negative">
                <X size={20} strokeWidth={2.5} />
                <span>Petroleum-based</span>
              </div>
              <div className="feature-item feature-negative">
                <X size={20} strokeWidth={2.5} />
                <span>Releases microplastics</span>
              </div>
              <div className="feature-item feature-negative">
                <X size={20} strokeWidth={2.5} />
                <span>Pollutes oceans & landfills</span>
              </div>
              <div className="feature-item feature-negative">
                <X size={20} strokeWidth={2.5} />
                <span>High carbon emissions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="comparison-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <Clock size={28} />
            </div>
            <div className="stat-value">180 Days</div>
            <div className="stat-label">Biodegradation Time</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <Leaf size={28} />
            </div>
            <div className="stat-value">100%</div>
            <div className="stat-label">Plant-Based Materials</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <Droplet size={28} />
            </div>
            <div className="stat-value">Zero</div>
            <div className="stat-label">Microplastic Release</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <Recycle size={28} />
            </div>
            <div className="stat-value">60%</div>
            <div className="stat-label">Carbon Reduction</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .comparison {
          background: linear-gradient(180deg, #f4efe4 0%, #e8f0e4 100%);
          padding: 8rem 4rem;
          position: relative;
        }
        .comparison::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(44,107,58,0.2), transparent);
        }
        .comparison-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .comparison-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 5rem;
        }
        .section-label {
          font-size: 0.75rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #2c6b3a;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        .section-title {
          font-family: var(--font-playfair);
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: #1a3320;
        }
        .section-title em {
          font-style: italic;
          background: linear-gradient(135deg, #2c6b3a 0%, #7bbf7a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .section-desc {
          font-size: 1.1rem;
          color: #4a5c4a;
          line-height: 1.8;
          font-weight: 300;
        }
        .comparison-content {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 3rem;
          margin-bottom: 5rem;
          align-items: start;
        }
        .comparison-side {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          border: 2px solid rgba(44,107,58,0.1);
          transition: all 0.4s;
        }
        .biopolymer-side {
          border-color: rgba(123,191,122,0.3);
        }
        .biopolymer-side:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(123,191,122,0.15);
        }
        .plastic-side {
          border-color: rgba(180,180,180,0.3);
        }
        .plastic-side:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .comparison-image-wrapper {
          margin-bottom: 2rem;
        }
        .comparison-image {
          position: relative;
          width: 100%;
          height: 280px;
          border-radius: 12px;
          overflow: hidden;
        }
        .biopolymer-image {
          background: linear-gradient(135deg, #e8f0e4 0%, #d4e8d0 100%);
        }
        .plastic-image {
          background: linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%);
        }
        .placeholder-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .placeholder-icon {
          width: 60%;
          height: 60%;
          opacity: 0.7;
        }
        .image-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .biopolymer-badge {
          background: rgba(123,191,122,0.9);
          color: white;
        }
        .plastic-badge {
          background: rgba(200,80,80,0.9);
          color: white;
        }
        .comparison-title {
          font-family: var(--font-playfair);
          font-size: 1.8rem;
          font-weight: 700;
          color: #1a3320;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .comparison-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 0.95rem;
          padding: 0.8rem;
          border-radius: 8px;
          transition: all 0.3s;
        }
        .feature-positive {
          color: #2c6b3a;
          background: rgba(123,191,122,0.08);
        }
        .feature-positive:hover {
          background: rgba(123,191,122,0.15);
          transform: translateX(4px);
        }
        .feature-negative {
          color: #8b4545;
          background: rgba(200,80,80,0.08);
        }
        .feature-negative:hover {
          background: rgba(200,80,80,0.15);
          transform: translateX(4px);
        }
        .vs-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 10rem;
        }
        .vs-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2c6b3a 0%, #7bbf7a 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-playfair);
          font-size: 1.5rem;
          font-weight: 900;
          letter-spacing: 2px;
          box-shadow: 0 8px 25px rgba(44,107,58,0.3);
        }
        .comparison-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        .stat-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          border: 1px solid rgba(44,107,58,0.1);
          transition: all 0.3s;
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(44,107,58,0.1);
        }
        .stat-icon {
          color: #2c6b3a;
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
        }
        .stat-value {
          font-family: var(--font-playfair);
          font-size: 2.5rem;
          font-weight: 800;
          color: #1a3320;
          margin-bottom: 0.5rem;
        }
        .stat-label {
          font-size: 0.85rem;
          color: #6b8a6b;
          font-weight: 500;
        }
        @media (max-width: 1024px) {
          .comparison-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .vs-divider {
            padding-top: 0;
            order: 2;
          }
          .biopolymer-side {
            order: 1;
          }
          .plastic-side {
            order: 3;
          }
          .vs-circle {
            transform: rotate(90deg);
            width: 70px;
            height: 70px;
            font-size: 1.3rem;
          }
          .comparison-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .comparison {
            padding: 5rem 1.5rem;
          }
          .comparison-header {
            margin-bottom: 3rem;
          }
          .section-title {
            font-size: 2rem;
          }
          .section-desc {
            font-size: 1rem;
          }
          .comparison-side {
            padding: 1.5rem;
          }
          .comparison-image {
            height: 220px;
          }
          .comparison-title {
            font-size: 1.5rem;
          }
          .feature-item {
            font-size: 0.9rem;
            padding: 0.7rem;
          }
          .comparison-stats {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .stat-card {
            padding: 1.5rem;
          }
          .stat-value {
            font-size: 2rem;
          }
        }
        @media (max-width: 480px) {
          .comparison {
            padding: 4rem 1rem;
          }
          .section-label {
            font-size: 0.7rem;
          }
          .section-title {
            font-size: 1.8rem;
          }
          .comparison-side {
            padding: 1.2rem;
          }
          .comparison-image {
            height: 200px;
          }
          .vs-circle {
            width: 60px;
            height: 60px;
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  )
}
