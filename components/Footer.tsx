'use client'

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
              Pioneering sustainable packaging solutions for a greener tomorrow.
            </p>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <div className="footer-links">
              <a href="#about">About Us</a>
              <a href="#products">Products</a>
              <a href="#">Sustainability</a>
              <a href="#">Careers</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Support</div>
            <div className="footer-links">
              <a href="#contact">Contact</a>
              <a href="#">FAQ</a>
              <a href="#">Documentation</a>
              <a href="#">Resources</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Legal</div>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Certifications</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2024 Phonixora. All rights reserved.</div>
          <div className="footer-certs">
            <div className="cert-badge">ISO 14001</div>
            <div className="cert-badge">EN 13432</div>
            <div className="cert-badge">ASTM D6400</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background: linear-gradient(180deg, #050a08 0%, #0a130c 100%);
          border-top: 1px solid rgba(123,191,122,0.08);
          padding: 5rem 4rem 2.5rem;
          position: relative;
        }
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(123,191,122,0.2), transparent);
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1.2rem;
        }
        .footer-logo-img {
          width: 48px;
          height: 48px;
          object-fit: contain;
          filter: drop-shadow(0 2px 8px rgba(123, 191, 122, 0.3));
          background: rgba(244, 239, 228, 0.95);
          border-radius: 50%;
          padding: 4px;
          border: 2px solid rgba(123, 191, 122, 0.2);
        }
        .footer-logo-text {
          font-family: var(--font-playfair);
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: 1px;
          background: linear-gradient(135deg, #f4efe4 0%, #a8c4a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .footer-tagline {
          font-size: 0.9rem;
          color: #6b8a6b;
          line-height: 1.7;
          max-width: 260px;
        }
        .footer-col-title {
          font-size: 0.7rem;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #7bbf7a;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-links a {
          font-size: 0.9rem;
          color: #6b8a6b;
          text-decoration: none;
          transition: all 0.3s;
          display: inline-block;
        }
        .footer-links a:hover {
          color: #a8c4a0;
          transform: translateX(4px);
        }
        .footer-bottom {
          border-top: 1px solid rgba(123,191,122,0.06);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-copy {
          font-size: 0.85rem;
          color: #4a5c4a;
        }
        .footer-certs {
          display: flex;
          gap: 1rem;
        }
        .cert-badge {
          font-size: 0.7rem;
          letter-spacing: 1px;
          border: 1px solid rgba(123,191,122,0.2);
          color: #7bbf7a;
          padding: 0.4rem 0.9rem;
          border-radius: 6px;
          background: rgba(123,191,122,0.05);
          transition: all 0.3s;
        }
        .cert-badge:hover {
          border-color: #7bbf7a;
          background: rgba(123,191,122,0.1);
        }
        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            align-items: flex-start;
          }
          .footer {
            padding: 4rem 1.5rem 2rem;
          }
          .footer-tagline {
            max-width: 100%;
          }
        }
        @media (max-width: 480px) {
          .footer {
            padding: 3rem 1rem 1.5rem;
          }
          .footer-logo-img {
            width: 40px;
            height: 40px;
          }
          .footer-logo-text {
            font-size: 1.4rem;
          }
          .footer-tagline {
            font-size: 0.85rem;
          }
          .footer-col-title {
            font-size: 0.65rem;
            margin-bottom: 1.2rem;
          }
          .footer-links {
            gap: 0.8rem;
          }
          .footer-links a {
            font-size: 0.85rem;
          }
          .footer-copy {
            font-size: 0.8rem;
          }
          .footer-certs {
            flex-wrap: wrap;
            gap: 0.8rem;
          }
          .cert-badge {
            font-size: 0.65rem;
            padding: 0.35rem 0.75rem;
          }
        }
      `}</style>
    </footer>
  )
}
