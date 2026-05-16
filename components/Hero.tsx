'use client'

import { useState } from 'react'

export default function Hero() {
  const [showSolutionsPopup, setShowSolutionsPopup] = useState(false)

  const handleExploreSolutions = () => {
    setShowSolutionsPopup(true)
  }

  const closeSolutionsPopup = () => {
    setShowSolutionsPopup(false)
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content-wrapper">
        {/* Left Side - Text Content */}
        <div className="hero-left">
          <h1 className="fade-up-2">Sustainable Materials<br/><em>for a Better Future</em></h1>
          <p className="hero-sub fade-up-3">
            Sustainable Polymers for Modern Industry. Leading manufacturer of eco-friendly bio-polymer materials, providing sustainable and high-performance alternatives to conventional plastics.
          </p>
          <div className="hero-actions fade-up-4">
            <button className="btn-primary" onClick={handleExploreSolutions}>Explore Solutions</button>
            <a href="#products" className="btn-ghost">Know More →</a>
          </div>
        </div>

        {/* Gradient Divider - Curved */}
        <div className="hero-gradient">
        </div>

        {/* Right Side - Image with Curved Edge */}
        <div className="hero-right">
          <div className="hero-image-container">
            <div className="hero-image">
              <img 
                src="/images/Hero.png" 
                alt="Bio-Polymer Manufacturing" 
                className="hero-real-image"
              />
            </div>
            
          </div>
        </div>
      </div>

      {/* Solutions Popup */}
      {showSolutionsPopup && (
        <div className="solutions-popup-overlay" onClick={closeSolutionsPopup}>
          <div className="solutions-popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="solutions-popup-close" onClick={closeSolutionsPopup}>&times;</button>
            <div className="solutions-popup-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 className="solutions-popup-title">Coming Soon!</h3>
            <p className="solutions-popup-text">
              We're working on creating comprehensive solution guides and resources for our bio-polymer products. Our solutions blog will be updated soon with detailed information, case studies, and best practices.
            </p>
            <p className="solutions-popup-subtext">
              Stay tuned for updates!
            </p>
            <button className="solutions-popup-btn" onClick={closeSolutionsPopup}>
              Got it
            </button>
          </div>
        </div>
      )}

      </section>
  )
}
