'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
      <button className="nav-cta">Get Started</button>
      
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
