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
          {/* Top row - Two medium images */}
          <div className="gallery-item gallery-item-top">
            <div className="gallery-image gallery-image-real">
              <img src="/images/manufacturing-plant.png" alt="Manufacturing Excellence" className="gallery-img" />
              <div className="gallery-overlay">
                <div className="gallery-tag">Production</div>
                <h3 className="gallery-title">Manufacturing Excellence</h3>
              </div>
            </div>
          </div>

          <div className="gallery-item gallery-item-top">
            <div className="gallery-image gallery-image-real">
              <img src="/images/modern-workspace.png" alt="Modern Workspace" className="gallery-img" />
              <div className="gallery-overlay">
                <div className="gallery-tag">Office Space</div>
                <h3 className="gallery-title">Modern Workspace</h3>
              </div>
            </div>
          </div>

          {/* Bottom row - One large and two small */}
          <div className="gallery-item gallery-item-featured">
            <div className="gallery-image gallery-image-real">
              <img src="/images/office-collaboration.png" alt="Innovation Hub" className="gallery-img" />
              <div className="gallery-overlay">
                <div className="gallery-tag">Collaboration</div>
                <h3 className="gallery-title">Innovation Hub</h3>
              </div>
            </div>
          </div>

          <div className="gallery-item gallery-item-bottom">
            <div className="gallery-image gallery-image-real">
              <img src="/images/logistic.png" alt="Distribution Center" className="gallery-img" />
              <div className="gallery-overlay">
                <div className="gallery-tag">Logistics</div>
                <h3 className="gallery-title">Distribution Center</h3>
              </div>
            </div>
          </div>

          <div className="gallery-item gallery-item-bottom">
            <div className="gallery-image gallery-image-real">
              <img src="/images/warehouse.png" alt="Warehouse Operations" className="gallery-img" />
              <div className="gallery-overlay">
                <div className="gallery-tag">Storage</div>
                <h3 className="gallery-title">Warehouse Operations</h3>
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
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 280px);
          gap: 1.5rem;
        }
        .gallery-item-top:nth-of-type(1) {
          grid-column: 1 / 3;
          grid-row: 1;
        }
        .gallery-item-top:nth-of-type(2) {
          grid-column: 3 / 5;
          grid-row: 1;
        }
        .gallery-item-featured {
          grid-column: 1 / 3;
          grid-row: 2 / 4;
        }
        .gallery-item-bottom:nth-of-type(4) {
          grid-column: 3 / 4;
          grid-row: 2;
        }
        .gallery-item-bottom:nth-of-type(5) {
          grid-column: 4 / 5;
          grid-row: 2;
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
          .gallery {
            padding: 6rem 2rem;
          }
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 240px);
          }
          .gallery-item-top:nth-of-type(1) {
            grid-column: 1 / 2;
            grid-row: 1;
          }
          .gallery-item-top:nth-of-type(2) {
            grid-column: 2 / 3;
            grid-row: 1;
          }
          .gallery-item-featured {
            grid-column: 1 / 3;
            grid-row: 2;
          }
          .gallery-item-bottom:nth-of-type(4) {
            grid-column: 1 / 2;
            grid-row: 3;
          }
          .gallery-item-bottom:nth-of-type(5) {
            grid-column: 2 / 3;
            grid-row: 3;
          }
        }
        
        @media (max-width: 768px) {
          .gallery {
            padding: 5rem 1.5rem;
          }
          .gallery-header {
            margin-bottom: 3rem;
          }
          .section-title {
            font-size: 2rem;
          }
          .section-desc {
            font-size: 1rem;
          }
          .gallery-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            gap: 1rem;
          }
          .gallery-item-top:nth-of-type(1),
          .gallery-item-top:nth-of-type(2),
          .gallery-item-featured,
          .gallery-item-bottom:nth-of-type(4),
          .gallery-item-bottom:nth-of-type(5) {
            grid-column: 1;
            grid-row: auto;
          }
          .gallery-image {
            height: 280px;
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
          .gallery-title {
            font-size: 1.3rem;
          }
        }
        
        @media (max-width: 480px) {
          .gallery {
            padding: 4rem 1rem;
          }
          .gallery-header {
            margin-bottom: 2rem;
          }
          .section-label {
            font-size: 0.7rem;
          }
          .section-title {
            font-size: 1.8rem;
          }
          .section-desc {
            font-size: 0.95rem;
          }
          .gallery-image {
            height: 240px;
            border-radius: 12px;
          }
          .gallery-overlay {
            padding: 1.5rem;
          }
          .gallery-tag {
            font-size: 0.65rem;
          }
          .gallery-title {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  )
}
