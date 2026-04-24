'use client'

import { Leaf, Recycle, Microscope, Globe } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-left">
          <p className="section-label">About Phonixora</p>
          <h2 className="section-title">Pioneering sustainable<br/><em>packaging solutions.</em></h2>
          <p className="about-text">
            Phonixora is at the forefront of eco-innovation, creating biodegradable packaging 
            that doesn't compromise on quality or performance. Our mission is to transform the 
            packaging industry through sustainable materials and cutting-edge technology.
          </p>
        </div>
        <div className="about-right">
          <div className="benefit-card">
            <div className="benefit-icon">
              <Leaf size={32} strokeWidth={1.5} />
            </div>
            <div className="benefit-title">Eco-Friendly</div>
            <div className="benefit-text">100% biodegradable materials that return to nature</div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <Recycle size={32} strokeWidth={1.5} />
            </div>
            <div className="benefit-title">Premium Quality</div>
            <div className="benefit-text">Superior strength and durability for all applications</div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <Microscope size={32} strokeWidth={1.5} />
            </div>
            <div className="benefit-title">Innovation</div>
            <div className="benefit-text">Advanced technology meets sustainable design</div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <Globe size={32} strokeWidth={1.5} />
            </div>
            <div className="benefit-title">Global Impact</div>
            <div className="benefit-text">Reducing environmental footprint worldwide</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about {
          background: linear-gradient(180deg, #f8f5f0 0%, #f4efe4 100%);
          color: #1a3320;
          padding: 8rem 4rem;
          position: relative;
        }
        .about::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(44,107,58,0.2), transparent);
        }
        .about-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
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
          margin-bottom: 2rem;
          color: #1a3320;
        }
        .section-title em {
          font-style: italic;
          background: linear-gradient(135deg, #2c6b3a 0%, #7bbf7a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .about-text {
          font-size: 1.1rem;
          line-height: 1.9;
          color: #4a5c4a;
          font-weight: 300;
        }
        .about-right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .benefit-card {
          background: white;
          border: 1px solid rgba(44,107,58,0.08);
          padding: 2rem;
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .benefit-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #7bbf7a, #2c6b3a);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(44,107,58,0.12);
          border-color: rgba(123,191,122,0.3);
        }
        .benefit-card:hover::before {
          transform: scaleX(1);
        }
        .benefit-icon {
          color: #2c6b3a;
          margin-bottom: 1.2rem;
          display: inline-block;
          transition: transform 0.4s;
        }
        .benefit-card:hover .benefit-icon {
          transform: scale(1.1) rotate(5deg);
        }
        .benefit-title {
          font-family: var(--font-playfair);
          font-size: 1.15rem;
          font-weight: 700;
          color: #1a3320;
          margin-bottom: 0.6rem;
        }
        .benefit-text {
          font-size: 0.9rem;
          color: #6b7c6b;
          line-height: 1.7;
        }
        @media (max-width: 768px) {
          .about-inner, .about-right {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .about {
            padding: 5rem 1.5rem;
          }
          .about-left {
            text-align: center;
          }
          .section-title {
            font-size: 2rem;
          }
          .about-text {
            font-size: 1rem;
          }
          .benefit-card {
            padding: 1.5rem;
          }
        }
        @media (max-width: 480px) {
          .about {
            padding: 4rem 1rem;
          }
          .section-label {
            font-size: 0.7rem;
          }
          .section-title {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
          }
          .benefit-card {
            padding: 1.2rem;
          }
          .benefit-icon {
            margin-bottom: 1rem;
          }
          .benefit-title {
            font-size: 1rem;
          }
          .benefit-text {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  )
}
