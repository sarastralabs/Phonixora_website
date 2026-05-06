'use client'

import { Leaf, Recycle, Microscope, Globe } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-left">
          <p className="section-label">About Phonixora Bio-Polymer</p>
          <h2 className="section-title">Leading manufacturer of<br/><em>eco-friendly bio-polymers</em></h2>
          <p className="about-text">
            Phonixora Bio-Polymer is a forward-looking manufacturing company focused on producing high-quality biodegradable and bio-based polymer materials. Our mission is to provide sustainable solutions that reduce environmental impact while meeting industrial demands. We serve industries such as packaging, agriculture, and manufacturing with innovative and cost-effective products.
          </p>
          <div className="founders">
            <div className="founders-label">Founders & Directors</div>
            <div className="founders-names">
              <span className="founder-name">Akash</span>
              <span className="founder-separator">•</span>
              <span className="founder-name">Manjunath S</span>
              <span className="founder-separator">•</span>
              <span className="founder-name">Nithin B S</span>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="benefit-card">
            <div className="benefit-icon">
              <Leaf size={32} strokeWidth={1.5} />
            </div>
            <div className="benefit-title">Sustainability</div>
            <div className="benefit-text">Eco-friendly materials that reduce environmental impact</div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <Recycle size={32} strokeWidth={1.5} />
            </div>
            <div className="benefit-title">Quality</div>
            <div className="benefit-text">High performance and durability for industrial applications</div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <Microscope size={32} strokeWidth={1.5} />
            </div>
            <div className="benefit-title">Innovation</div>
            <div className="benefit-text">Custom manufacturing solutions tailored to your needs</div>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <Globe size={32} strokeWidth={1.5} />
            </div>
            <div className="benefit-title">Customer Focus</div>
            <div className="benefit-text">Reliable supply and dedicated support for your business</div>
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
          margin-bottom: 2.5rem;
        }
        .founders {
          padding: 1.5rem 0;
          border-top: 1px solid rgba(44,107,58,0.15);
        }
        .founders-label {
          font-size: 0.7rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #6b8a6b;
          margin-bottom: 0.8rem;
          font-weight: 600;
        }
        .founders-names {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .founder-name {
          font-family: var(--font-playfair);
          font-size: 1.3rem;
          font-weight: 700;
          color: #2c6b3a;
          font-style: italic;
        }
        .founder-separator {
          color: #7bbf7a;
          font-size: 1rem;
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
