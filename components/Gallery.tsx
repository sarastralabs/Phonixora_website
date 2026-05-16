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

      </section>
  )
}
