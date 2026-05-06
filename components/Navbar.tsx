'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const handleGetStarted = () => {
    setShowPopup(true)
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '916363149612'
    const message = encodeURIComponent('Hi! I would like to purchase Phonixora Bio-Polymer products. Can you help me with the details?')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
    setShowPopup(false)
  }

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <img src="/logo.png" alt="Phonixora Logo" className="nav-logo-img" />
        <span className="nav-logo-text">Phonixora</span>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#products">Products</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>
      <button className="nav-cta" onClick={handleGetStarted}>Get Started</button>
      
      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
        <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          <a href="#home" onClick={closeMobileMenu}>Home</a>
          <a href="#about" onClick={closeMobileMenu}>About</a>
          <a href="#products" onClick={closeMobileMenu}>Products</a>
          <a href="#gallery" onClick={closeMobileMenu}>Gallery</a>
          <a href="#contact" onClick={closeMobileMenu}>Contact</a>
        </div>
      </div>

      {/* Get Started Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>&times;</button>
            <div className="popup-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3 className="popup-title">Ready to Get Started?</h3>
            <p className="popup-text">
              Chat with us on WhatsApp to discuss your bio-polymer needs and place your order. Our team is ready to assist you!
            </p>
            <button className="popup-whatsapp-btn" onClick={handleWhatsAppClick}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 4rem;
          background: transparent;
          backdrop-filter: none;
          border-bottom: 1px solid transparent;
          box-shadow: none;
          transition: all 0.3s ease;
        }
        .nav.scrolled {
          background: rgba(14, 30, 18, 0.7);
          backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(123, 191, 122, 0.1);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          z-index: 102;
        }
        .nav-logo-img {
          width: 55px;
          height: 55px;
          object-fit: contain;
          filter: drop-shadow(0 2px 8px rgba(123, 191, 122, 0.2));
          background: rgba(244, 239, 228, 0.95);
          border-radius: 50%;
          padding: 4px;
          border: 2px solid rgba(123, 191, 122, 0.2);
        }
        .nav-logo-text {
          font-family: var(--font-playfair);
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #f4efe4;
          background: linear-gradient(135deg, #f4efe4 0%, #a8c4a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nav-links {
          display: flex;
          gap: 3rem;
        }
        .nav-links a {
          color: #1a3320;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-decoration: none;
          position: relative;
          transition: color 0.3s;
          text-shadow: 0 1px 3px rgba(255, 255, 255, 0.3);
        }
        .nav.scrolled .nav-links a {
          color: #d4c4a0;
          text-shadow: none;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #7bbf7a, #a8c4a0);
          transition: width 0.3s ease;
        }
        .nav-links a:hover {
          color: #7bbf7a;
        }
        .nav-links a:hover::after {
          width: 100%;
        }
        .nav-cta {
          background: linear-gradient(135deg, #f4efe4 0%, #d4c4a0 100%);
          border: none;
          color: #1a3320;
          font-family: var(--font-dm-sans);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          padding: 0.75rem 1.8rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(244, 239, 228, 0.3);
        }
        .nav.scrolled .nav-cta {
          background: linear-gradient(135deg, #7bbf7a 0%, #2c6b3a 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(123, 191, 122, 0.3);
        }
        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(244, 239, 228, 0.5);
        }
        .nav.scrolled .nav-cta:hover {
          box-shadow: 0 6px 25px rgba(123, 191, 122, 0.4);
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          justify-content: space-around;
          width: 30px;
          height: 24px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 102;
        }
        .hamburger {
          width: 30px;
          height: 3px;
          background: #1a3320;
          border-radius: 10px;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .nav.scrolled .hamburger {
          background: #f4efe4;
        }
        .hamburger.open:nth-child(1) {
          transform: translateY(10.5px) rotate(45deg);
        }
        .hamburger.open:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open:nth-child(3) {
          transform: translateY(-10.5px) rotate(-45deg);
        }

        /* Mobile Menu Overlay */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 70%;
          max-width: 300px;
          height: 100vh;
          background: rgba(14, 30, 18, 0.98);
          backdrop-filter: blur(20px);
          transition: right 0.3s ease;
          z-index: 101;
          padding-top: 100px;
          box-shadow: -4px 0 30px rgba(0, 0, 0, 0.3);
        }
        .mobile-menu.open {
          right: 0;
        }
        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .mobile-menu-links a {
          color: #f4efe4;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-decoration: none;
          padding: 1.5rem 2rem;
          border-bottom: 1px solid rgba(123, 191, 122, 0.1);
          transition: all 0.3s;
        }
        .mobile-menu-links a:hover {
          background: rgba(123, 191, 122, 0.1);
          color: #7bbf7a;
          padding-left: 2.5rem;
        }

        /* Popup Styles */
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(14, 30, 18, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .popup-content {
          background: white;
          border-radius: 24px;
          padding: 3rem;
          max-width: 480px;
          width: 90%;
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.3s ease;
          text-align: center;
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .popup-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: transparent;
          border: none;
          font-size: 2rem;
          color: #6b8a6b;
          cursor: pointer;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s;
          line-height: 1;
        }
        .popup-close:hover {
          background: rgba(44, 107, 58, 0.1);
          color: #2c6b3a;
        }
        .popup-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #7bbf7a 0%, #2c6b3a 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .popup-icon svg {
          width: 40px;
          height: 40px;
        }
        .popup-title {
          font-family: var(--font-playfair);
          font-size: 2rem;
          font-weight: 800;
          color: #1a3320;
          margin-bottom: 1rem;
        }
        .popup-text {
          font-size: 1.05rem;
          color: #4a5c4a;
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        .popup-whatsapp-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          color: white;
          font-family: var(--font-dm-sans);
          font-weight: 600;
          font-size: 1.05rem;
          letter-spacing: 0.5px;
          padding: 1.2rem 2rem;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
        }
        .popup-whatsapp-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.4);
        }
        .popup-whatsapp-btn svg {
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .popup-content {
            padding: 2.5rem 2rem;
            max-width: 90%;
          }
          .popup-icon {
            width: 70px;
            height: 70px;
            margin-bottom: 1.2rem;
          }
          .popup-icon svg {
            width: 35px;
            height: 35px;
          }
          .popup-title {
            font-size: 1.6rem;
            margin-bottom: 0.8rem;
          }
          .popup-text {
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
          }
          .popup-whatsapp-btn {
            font-size: 1rem;
            padding: 1.1rem 1.8rem;
          }
          .popup-close {
            top: 1rem;
            right: 1rem;
            width: 32px;
            height: 32px;
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .popup-content {
            padding: 2rem 1.5rem;
            border-radius: 20px;
          }
          .popup-icon {
            width: 60px;
            height: 60px;
            margin-bottom: 1rem;
          }
          .popup-icon svg {
            width: 30px;
            height: 30px;
          }
          .popup-title {
            font-size: 1.4rem;
          }
          .popup-text {
            font-size: 0.9rem;
            line-height: 1.6;
          }
          .popup-whatsapp-btn {
            font-size: 0.95rem;
            padding: 1rem 1.5rem;
          }
        }

        @media (max-width: 1024px) {
          .nav {
            padding: 1.2rem 2rem;
          }
          .nav-links {
            gap: 2rem;
          }
          .nav-links a {
            font-size: 0.85rem;
          }
        }
        @media (max-width: 768px) {
          .nav {
            padding: 1rem 1.5rem;
          }
          .nav-logo-img {
            width: 45px;
            height: 45px;
          }
          .nav-logo-text {
            font-size: 1.2rem;
          }
          .nav-links {
            display: none;
          }
          .nav-cta {
            display: none;
          }
          .mobile-menu-btn {
            display: flex;
          }
        }
        @media (max-width: 480px) {
          .nav {
            padding: 0.8rem 1rem;
          }
          .nav-logo-img {
            width: 40px;
            height: 40px;
          }
          .nav-logo-text {
            font-size: 1.1rem;
          }
          .mobile-menu {
            width: 80%;
          }
        }
      `}</style>
    </nav>
  )
}
