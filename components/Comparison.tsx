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

      </section>
  )
}
