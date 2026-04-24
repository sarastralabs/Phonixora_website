'use client'

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery-inner">
        <div className="gallery-header">
          <p className="section-label">Our Facilities</p>
          <h2 className="section-title">Where innovation <em>takes root</em></h2>
          <p className="section-desc">
            Take a glimpse into our state-of-the-art facilities where sustainability meets cutting-edge technology.
          </p>
        </div>
        
        <div className="gallery-grid">
          {/* Large featured image */}
          <div className="gallery-item gallery-item-large">
            <div className="gallery-image gallery-image-real">
              <img src="/images/modern-workspace.png" alt="Modern Workspace" className="gallery-img" />
              <div className="gallery-overlay">
                <div className="gallery-tag">Office Space</div>
                <h3 className="gallery-title">Modern Workspace</h3>
              </div>
            </div>
          </div>

          {/* Medium images */}
          <div className="gallery-item gallery-item-medium">
            <div className="gallery-image gallery-image-real">
              <img src="/images/manufacturing-plant.png" alt="Manufacturing Excellence" className="gallery-img" />
              <div className="gallery-overlay">
                <div className="gallery-tag">Production</div>
                <h3 className="gallery-title">Manufacturing Excellence</h3>
              </div>
            </div>
          </div>

          <div className="gallery-item gallery-item-medium">
            <div className="gallery-image gallery-image-real">
              <img src="/images/office-collaboration.png" alt="Innovation Hub" className="gallery-img" />
              <div className="gallery-overlay">
                <div className="gallery-tag">Collaboration</div>
                <h3 className="gallery-title">Innovation Hub</h3>
              </div>
            </div>
          </div>

          {/* Small images */}
          <div className="gallery-item gallery-item-small">
            <div className="gallery-image placeholder-plant-2">
              <div className="placeholder-content">
                <svg viewBox="0 0 200 200" className="placeholder-icon">
                  <rect x="60" y="60" width="80" height="80" fill="rgba(44,107,58,0.2)" rx="8"/>
                  <circle cx="100" cy="100" r="25" fill="rgba(123,191,122,0.3)"/>
                  <path d="M 85 100 L 100 85 L 115 100" stroke="rgba(123,191,122,0.5)" strokeWidth="4" fill="none"/>
                  <circle cx="100" cy="100" r="15" fill="rgba(168,196,160,0.3)"/>
                </svg>
              </div>
              <div className="gallery-overlay">
                <div className="gallery-tag">Quality</div>
                <h3 className="gallery-title">Testing Lab</h3>
              </div>
            </div>
          </div>

          <div className="gallery-item gallery-item-small">
            <div className="gallery-image placeholder-plant-3">
              <div className="placeholder-content">
                <svg viewBox="0 0 200 200" className="placeholder-icon">
                  <rect x="50" y="80" width="30" height="60" fill="rgba(44,107,58,0.2)" rx="4"/>
                  <rect x="85" y="70" width="30" height="70" fill="rgba(44,107,58,0.3)" rx="4"/>
                  <rect x="120" y="90" width="30" height="50" fill="rgba(44,107,58,0.2)" rx="4"/>
                  <path d="M 65 75 Q 65 60 75 55" stroke="rgba(123,191,122,0.4)" strokeWidth="3" fill="none"/>
                  <path d="M 100 65 Q 100 50 110 45" stroke="rgba(123,191,122,0.4)" strokeWidth="3" fill="none"/>
                  <path d="M 135 85 Q 135 70 145 65" stroke="rgba(123,191,122,0.4)" strokeWidth="3" fill="none"/>
                </svg>
              </div>
              <div className="gallery-overlay">
                <div className="gallery-tag">Materials</div>
                <h3 className="gallery-title">Raw Materials</h3>
              </div>
            </div>
          </div>

          <div className="gallery-item gallery-item-small">
            <div className="gallery-image placeholder-office-3">
              <div className="placeholder-content">
                <svg viewBox="0 0 200 200" className="placeholder-icon">
                  <rect x="50" y="70" width="100" height="70" fill="rgba(123,191,122,0.2)" rx="6"/>
                  <circle cx="75" cy="95" r="8" fill="rgba(123,191,122,0.3)"/>
                  <circle cx="100" cy="95" r="8" fill="rgba(123,191,122,0.3)"/>
                  <circle cx="125" cy="95" r="8" fill="rgba(123,191,122,0.3)"/>
                  <rect x="60" y="110" width="80" height="4" fill="rgba(168,196,160,0.4)" rx="2"/>
                  <rect x="60" y="120" width="60" height="4" fill="rgba(168,196,160,0.4)" rx="2"/>
                  <rect x="60" y="130" width="70" height="4" fill="rgba(168,196,160,0.4)" rx="2"/>
                </svg>
              </div>
              <div className="gallery-overlay">
                <div className="gallery-tag">R&D</div>
                <h3 className="gallery-title">Research Center</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gallery {
          background: linear-gradient(180deg, #0e1e12 0%, #1a2e1e 100%);
          padding: 8rem 4rem;
          position: relative;
        }
        .gallery::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 30% 40%, rgba(123,191,122,0.05) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(44,107,58,0.05) 0%, transparent 50%);
          pointer-events: none;
        }
        .gallery-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .gallery-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 5rem;
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
          margin-bottom: 1.5rem;
          color: #f4efe4;
        }
        .section-title em {
          font-style: italic;
          background: linear-gradient(135deg, #7bbf7a 0%, #a8c4a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .section-desc {
          font-size: 1.1rem;
          color: #a8c4a0;
          line-height: 1.8;
          font-weight: 300;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1.5rem;
          grid-auto-rows: 280px;
        }
        .gallery-item-large {
          grid-column: span 3;
          grid-row: span 2;
        }
        .gallery-item-medium {
          grid-column: span 3;
          grid-row: span 1;
        }
        .gallery-item-small {
          grid-column: span 2;
          grid-row: span 1;
        }
        .gallery-image {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(123,191,122,0.1);
        }
        .gallery-image-real {
          background: #1a3320;
        }
        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-image:hover .gallery-img {
          transform: scale(1.1);
        }
        .gallery-image:hover {
          transform: scale(1.02);
          border-color: rgba(123,191,122,0.3);
        }
        
        /* Placeholder backgrounds */
        .placeholder-office-1 {
          background: linear-gradient(135deg, #1a3320 0%, #2c6b3a 100%);
        }
        .placeholder-office-2 {
          background: linear-gradient(135deg, #2c6b3a 0%, #1a3320 100%);
        }
        .placeholder-office-3 {
          background: linear-gradient(135deg, #1a3320 0%, #0e1e12 100%);
        }
        .placeholder-plant-1 {
          background: linear-gradient(135deg, #0e1e12 0%, #1a3320 100%);
        }
        .placeholder-plant-2 {
          background: linear-gradient(135deg, #2c6b3a 0%, #1a2e1e 100%);
        }
        .placeholder-plant-3 {
          background: linear-gradient(135deg, #1a2e1e 0%, #2c6b3a 100%);
        }
        
        .placeholder-content {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-image:hover .placeholder-content {
          transform: scale(1.1);
        }
        .placeholder-icon {
          width: 50%;
          height: 50%;
          opacity: 0.6;
        }
        
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(0,0,0,0.3) 50%,
            rgba(26,51,32,0.95) 100%
          );
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
          opacity: 0;
          transition: opacity 0.4s;
        }
        .gallery-image:hover .gallery-overlay {
          opacity: 1;
        }
        .gallery-tag {
          font-size: 0.7rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #7bbf7a;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        .gallery-title {
          font-family: var(--font-playfair);
          font-size: 1.5rem;
          font-weight: 700;
          color: #f4efe4;
          margin: 0;
        }
        
        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 240px;
          }
          .gallery-item-large {
            grid-column: span 4;
            grid-row: span 2;
          }
          .gallery-item-medium {
            grid-column: span 2;
          }
          .gallery-item-small {
            grid-column: span 2;
          }
        }
        
        @media (max-width: 768px) {
          .gallery {
            padding: 5rem 1.5rem;
          }
          .gallery-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 300px;
            gap: 1rem;
          }
          .gallery-item-large,
          .gallery-item-medium,
          .gallery-item-small {
            grid-column: span 1;
            grid-row: span 1;
          }
          .gallery-overlay {
            opacity: 1;
            background: linear-gradient(
              180deg,
              transparent 0%,
              rgba(0,0,0,0.2) 50%,
              rgba(26,51,32,0.85) 100%
            );
          }
        }
      `}</style>
    </section>
  )
}
