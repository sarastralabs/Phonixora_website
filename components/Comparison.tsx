'use client'

import { Check, X, Leaf, Droplet, Clock, Recycle, Factory, Waves } from 'lucide-react'

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
            <div className="card-header biopolymer-header">
              <Check size={20} strokeWidth={3} />
              <span>GOOD FOR THE PLANET</span>
            </div>
            <div className="card-body">
              <h3 className="comparison-title">Biopolymer Bags</h3>
              <p className="comparison-subtitle">Sustainable Choice for a Better Tomorrow</p>
              <div className="comparison-image-wrapper">
                <div className="comparison-image biopolymer-image">
                  <img 
                    src="/images/eco plastic.png" 
                    alt="Eco-Friendly Biopolymer Bag"
                    className="comparison-real-image"
                  />
                </div>
              </div>
              <div className="comparison-features">
                <div className="feature-item feature-positive">
                  <div className="feature-icon">
                    <Leaf size={24} strokeWidth={2} />
                  </div>
                  <div className="feature-content">
                    <h4>100% Biodegradable</h4>
                    <p>Naturally decomposes in 90-180 days.</p>
                  </div>
                </div>
                <div className="feature-item feature-positive">
                  <div className="feature-icon">
                    <Clock size={24} strokeWidth={2} />
                  </div>
                  <div className="feature-content">
                    <h4>Decomposes in 90-180 days</h4>
                    <p>Breaks down safely without harming the environment.</p>
                  </div>
                </div>
                <div className="feature-item feature-positive">
                  <div className="feature-icon">
                    <Leaf size={24} strokeWidth={2} />
                  </div>
                  <div className="feature-content">
                    <h4>Plant-based materials</h4>
                    <p>Made from renewable, natural resources.</p>
                  </div>
                </div>
                <div className="feature-item feature-positive">
                  <div className="feature-icon">
                    <Droplet size={24} strokeWidth={2} />
                  </div>
                  <div className="feature-content">
                    <h4>Zero microplastics</h4>
                    <p>Does not release harmful microplastics.</p>
                  </div>
                </div>
                <div className="feature-item feature-positive">
                  <div className="feature-icon">
                    <Recycle size={24} strokeWidth={2} />
                  </div>
                  <div className="feature-content">
                    <h4>Compostable certified</h4>
                    <p>Certified safe for industrial & home composting.</p>
                  </div>
                </div>
                <div className="feature-item feature-positive">
                  <div className="feature-icon">
                    <Leaf size={24} strokeWidth={2} />
                  </div>
                  <div className="feature-content">
                    <h4>Reduces carbon footprint</h4>
                    <p>Lower emissions for a cleaner, greener future.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VS Badge Between Cards */}
          <div className="vs-badge-wrapper">
            <div className="vs-badge">VS</div>
          </div>

          {/* Plastic Side */}
          <div className="comparison-side plastic-side">
            <div className="card-header plastic-header">
              <X size={20} strokeWidth={3} />
              <span>HARMFUL TO THE PLANET</span>
            </div>
            <div className="card-body">
              <h3 className="comparison-title">Traditional Plastic</h3>
              <p className="comparison-subtitle">A Threat to Our Environment</p>
              <div className="comparison-image-wrapper">
                <div className="comparison-image plastic-image">
                  <img 
                    src="/images/traditional plastic.png" 
                    alt="Traditional Plastic"
                    className="comparison-real-image"
                  />
                </div>
              </div>
              <div className="comparison-features">
                <div className="feature-item feature-negative">
                  <div className="feature-icon">
                    <X size={24} strokeWidth={2} />
                  </div>
                  <div className="feature-content">
                    <h4>Non-biodegradable</h4>
                    <p>Does not break down naturally.</p>
                  </div>
                </div>
                <div className="feature-item feature-negative">
                  <div className="feature-icon">
                    <Clock size={24} strokeWidth={2} />
                  </div>
                  <div className="feature-content">
                    <h4>Takes 500+ years to break down</h4>
                    <p>Persists for hundreds of years in the environment.</p>
                  </div>
                </div>
                <div className="feature-item feature-negative">
                  <div className="feature-icon">
                    <Factory size={24} strokeWidth={2} />
                  </div>
                  <div className="feature-content">
                    <h4>Petroleum-based</h4>
                    <p>Made from non-renewable fossil fuels.</p>
                  </div>
                </div>
                <div className="feature-item feature-negative">
                  <div className="feature-icon">
                    <Droplet size={24} strokeWidth={2} />
                  </div>
                  <div className="feature-content">
                    <h4>Releases microplastics</h4>
                    <p>Breaks down into harmful microplastics.</p>
                  </div>
                </div>
                <div className="feature-item feature-negative">
                  <div className="feature-icon">
                    <Waves size={24} strokeWidth={2} />
                  </div>
                  <div className="feature-content">
                    <h4>Pollutes oceans & landfills</h4>
                    <p>Harms marine life and clogs landfills.</p>
                  </div>
                </div>
                <div className="feature-item feature-negative">
                  <div className="feature-icon">
                    <Factory size={24} strokeWidth={2} />
                  </div>
                  <div className="feature-content">
                    <h4>High carbon emissions</h4>
                    <p>Contributes to climate change and global warming.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="comparison-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <Clock size={32} />
            </div>
            <div className="stat-value">180 Days</div>
            <div className="stat-label">Biodegradation Time</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <Leaf size={32} />
            </div>
            <div className="stat-value">100%</div>
            <div className="stat-label">Plant-Based Materials</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <Droplet size={32} />
            </div>
            <div className="stat-value">Zero</div>
            <div className="stat-label">Microplastic Release</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <Recycle size={32} />
            </div>
            <div className="stat-value">60%</div>
            <div className="stat-label">Carbon Reduction</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .comparison {
          background: linear-gradient(180deg, #f8f6f3 0%, #f0ebe4 100%);
          padding: 6rem 1.5rem;
          position: relative;
        }
        .comparison-inner {
          max-width: 1000px;
          margin: 0 auto;
          width: 100%;
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
          gap: 1.5rem;
          margin-bottom: 4rem;
          align-items: center;
          position: relative;
        }
        .comparison-side {
          background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .comparison-side:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
        }
        .card-header {
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: white;
        }
        .biopolymer-header {
          background: linear-gradient(135deg, #3d8b4a 0%, #2c6b3a 100%);
        }
        .plastic-header {
          background: linear-gradient(135deg, #b84444 0%, #9a3636 100%);
        }
        .card-body {
          padding: 2rem;
        }
        .comparison-title {
          font-family: var(--font-playfair);
          font-size: 1.8rem;
          font-weight: 700;
          color: #1a3320;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .comparison-subtitle {
          font-size: 0.85rem;
          color: #6b8a6b;
          text-align: center;
          margin-bottom: 1.5rem;
          font-weight: 400;
        }
        .comparison-image-wrapper {
          margin-bottom: 2rem;
          position: relative;
        }
        .comparison-image {
          position: relative;
          width: 100%;
          height: 260px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }
        .comparison-real-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .vs-badge-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        .vs-badge {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3d8b4a 0%, #2c6b3a 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-playfair);
          font-size: 1.5rem;
          font-weight: 900;
          letter-spacing: 2px;
          box-shadow: 0 8px 30px rgba(44,107,58,0.4);
          border: 5px solid white;
        }
        .comparison-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          transition: all 0.3s;
        }
        .feature-icon {
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        .feature-positive .feature-icon {
          background: linear-gradient(135deg, #3d8b4a 0%, #2c6b3a 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(44,107,58,0.2);
        }
        .feature-negative .feature-icon {
          background: linear-gradient(135deg, #b84444 0%, #9a3636 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(184,68,68,0.2);
        }
        .feature-item:hover .feature-icon {
          transform: scale(1.1);
        }
        .feature-content {
          flex: 1;
          padding-top: 0.2rem;
        }
        .feature-content h4 {
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
          line-height: 1.4;
        }
        .feature-positive .feature-content h4 {
          color: #2c6b3a;
        }
        .feature-negative .feature-content h4 {
          color: #9a3636;
        }
        .feature-content p {
          font-size: 0.8rem;
          color: #6b7c6b;
          line-height: 1.5;
          font-weight: 400;
        }
        .comparison-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .stat-card {
          background: white;
          padding: 2.5rem 1.5rem;
          border-radius: 20px;
          text-align: center;
          border: 1px solid rgba(44,107,58,0.1);
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        .stat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 35px rgba(44,107,58,0.15);
        }
        .stat-icon {
          color: #2c6b3a;
          margin-bottom: 1.2rem;
          display: flex;
          justify-content: center;
        }
        .stat-value {
          font-family: var(--font-playfair);
          font-size: 2.8rem;
          font-weight: 800;
          color: #1a3320;
          margin-bottom: 0.5rem;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.9rem;
          color: #6b8a6b;
          font-weight: 500;
          line-height: 1.4;
        }
        @media (max-width: 1024px) {
          .comparison-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .vs-badge-wrapper {
            order: 2;
          }
          .biopolymer-side {
            order: 1;
          }
          .plastic-side {
            order: 3;
          }
          .vs-badge {
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
          .card-body {
            padding: 2rem 1.5rem;
          }
          .comparison-image {
            height: 240px;
          }
          .comparison-title {
            font-size: 1.8rem;
          }
          .comparison-subtitle {
            font-size: 0.9rem;
          }
          .feature-icon {
            width: 44px;
            height: 44px;
          }
          .feature-content h4 {
            font-size: 0.95rem;
          }
          .feature-content p {
            font-size: 0.85rem;
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
          .card-header {
            padding: 0.8rem 1.5rem;
            font-size: 0.7rem;
          }
          .card-body {
            padding: 1.5rem 1rem;
          }
          .comparison-image {
            height: 200px;
          }
          .comparison-title {
            font-size: 1.5rem;
          }
          .feature-icon {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  )
}
