export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <img src="/logo.png" alt="Phonixora Logo" className="footer-logo-img" />
              <span className="footer-logo-text">Phonixora</span>
            </div>
            <p className="footer-tagline">
              Leading manufacturer of eco-friendly bio-polymer materials for a sustainable future.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <div className="footer-links">
              <a href="#about">About Us</a>
              <a href="#products">Products</a>
              <a href="#about">Vision & Mission</a>
              <a href="#about">Core Values</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Products</div>
            <div className="footer-links">
              <a href="#products">Bio-Polymer Granules</a>
              <a href="#products">Carry Bags</a>
              <a href="#products">Agricultural Films</a>
              <a href="#products">Custom Solutions</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-links">
              <a href="#contact">Get In Touch</a>
              <a href="#about">Sustainability</a>
              <a href="#contact">Request Quote</a>
              <a href="#">Certifications</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© {new Date().getFullYear()} Phonixora Bio-Polymer. All rights reserved.</div>
          <div className="footer-certs">
            <div className="cert-badge">Eco-Friendly</div>
            <div className="cert-badge">Biodegradable</div>
            <div className="cert-badge">Certified</div>
          </div>
        </div>
        <div className="footer-developer">
          Designed And Developed by <a href="https://sarastralabs.com" target="_blank" rel="noopener noreferrer">sarastralabs.com</a>
        </div>
      </div>
      </footer>
  )
}
