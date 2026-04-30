'use client'

export default function Hero() {
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
            <button className="btn-primary">Explore Solutions</button>
            <button className="btn-ghost">Learn More →</button>
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
      <style jsx>{`
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 6rem 0 3rem 4rem;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            #2C6B3A 0%,
            #2C6B3A 35%,
            #4a8a5a 45%,
            #7ba87a 50%,
            #a8c4a0 55%,
            #c8d4b8 60%,
            #e0dac8 65%,
            #F4EFE4 70%,
            #F4EFE4 100%
          );
        }
        .hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse 600px 800px at 0% 50%, rgba(26,51,32,0.3) 0%, transparent 50%);
        }
        .hero-content-wrapper {
          position: relative;
          z-index: 2;
          max-width: 100%;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 120px 1fr;
          gap: 0;
          align-items: stretch;
          height: 100%;
        }
        .hero-left {
          max-width: 600px;
          position: relative;
          z-index: 2;
          padding: 0 4rem;
          margin-left: auto;
          margin-right: 2rem;
        }
        h1 {
          font-family: var(--font-playfair);
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin-bottom: 1.8rem;
          color: #f4efe4;
        }
        h1 em {
          font-style: italic;
          color: #d4c4a0;
          display: inline-block;
        }
        .hero-sub {
          font-size: 1.2rem;
          color: #e8f0e4;
          line-height: 1.7;
          max-width: 500px;
          margin-bottom: 2.5rem;
          font-weight: 300;
          opacity: 0.95;
        }
        .hero-actions {
          display: flex;
          gap: 1.2rem;
          align-items: center;
        }
        .btn-primary {
          background: linear-gradient(135deg, #f4efe4 0%, #d4c4a0 100%);
          color: #1a3320;
          font-family: var(--font-dm-sans);
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          padding: 1.1rem 2.5rem;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 8px 25px rgba(244,239,228,0.3);
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(244,239,228,0.4);
        }
        .btn-ghost {
          background: rgba(244,239,228,0.1);
          color: #f4efe4;
          font-family: var(--font-dm-sans);
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          padding: 1.1rem 2rem;
          border: 1px solid rgba(244,239,228,0.3);
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s;
          backdrop-filter: blur(10px);
        }
        .btn-ghost:hover {
          background: rgba(244,239,228,0.2);
          border-color: #f4efe4;
          color: #f4efe4;
          transform: translateY(-2px);
        }
        
        /* Gradient Divider - Curved */
        .hero-gradient {
          position: relative;
          width: 120px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
        }
        
        /* Right Side - Image */
        .hero-right {
          display: flex;
          align-items: stretch;
          justify-content: stretch;
          position: relative;
          height: 100%;
          min-height: 90vh;
          margin-right: -4rem;
          padding-right: 4rem;
        }
        .hero-image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .hero-image {
          position: absolute;
          top: -6rem;
          bottom: -3rem;
          left: 0;
          right: -4rem;
          z-index: 2;
          overflow: hidden;
          border-radius: 0;
        }
        .hero-real-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: right center;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            rgba(0,0,0,0.2) 4%,
            rgba(0,0,0,0.5) 8%,
            rgba(0,0,0,0.8) 12%,
            black 16%,
            black 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            rgba(0,0,0,0.2) 4%,
            rgba(0,0,0,0.5) 8%,
            rgba(0,0,0,0.8) 12%,
            black 16%,
            black 100%
          );
        }
        .hero-image::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 250px;
          background: linear-gradient(
            to right,
            rgba(168,196,160,0.4) 0%,
            rgba(200,212,184,0.3) 25%,
            rgba(224,218,200,0.2) 50%,
            rgba(244,239,228,0.1) 75%,
            transparent 100%
          );
          z-index: 10;
          pointer-events: none;
          mix-blend-mode: overlay;
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        /* Floating Leaves Animation */
        @keyframes float-leaf {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes rotate-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes rotate-reverse {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.1s; opacity: 0; }
        .fade-up-2 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.3s; opacity: 0; }
        .fade-up-3 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.5s; opacity: 0; }
        .fade-up-4 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.7s; opacity: 0; }
        
          @media (max-width: 1024px) {
          .hero {
            padding: 6rem 2rem 3rem;
            min-height: auto;
          }
          .hero-bg {
            background: linear-gradient(
              to bottom,
              #2C6B3A 0%,
              #2C6B3A 20%,
              #4a8a5a 30%,
              #7ba87a 40%,
              #a8c4a0 50%,
              #c8d4b8 60%,
              #e0dac8 70%,
              #F4EFE4 80%,
              #F4EFE4 100%
            );
          }
          .hero-bg::after {
            background: 
              radial-gradient(ellipse 800px 600px at 50% 0%, rgba(26,51,32,0.3) 0%, transparent 50%);
          }
          .hero-content-wrapper {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .hero-gradient {
            display: none;
          }
          .hero-left {
            max-width: 100%;
            text-align: center;
            margin: 0 auto;
            padding: 0 1rem;
          }
          .hero-badge {
            justify-content: center;
          }
          h1 {
            font-size: clamp(2.5rem, 6vw, 4rem);
          }
          .hero-sub {
            max-width: 100%;
            margin: 0 auto 2rem;
          }
          .hero-actions {
            justify-content: center;
            flex-wrap: wrap;
          }
          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
            padding: 1.5rem;
          }
          .stat-divider {
            width: 100%;
            height: 1px;
          }
          .hero-right {
            min-height: 50vh;
            margin-right: -2rem;
            padding-right: 2rem;
            margin-left: -2rem;
            padding-left: 2rem;
          }
          .hero-image {
            clip-path: none;
            border-radius: 20px;
            top: 0;
            bottom: 0;
            right: -2rem;
            left: -2rem;
          }
          .hero-real-image {
            mask-image: none;
            -webkit-mask-image: none;
            object-position: center center;
          }
          .hero-image::after {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .hero { 
            padding: 5rem 1.5rem 3rem;
            min-height: auto;
          }
          .hero-left {
            padding: 0;
          }
          h1 {
            font-size: clamp(2rem, 8vw, 3rem);
            margin-bottom: 1.2rem;
          }
          .hero-sub {
            font-size: 1rem;
            margin-bottom: 2rem;
          }
          .hero-actions { 
            flex-direction: column; 
            width: 100%;
            gap: 1rem;
          }
          .btn-primary, .btn-ghost { 
            width: 100%; 
            text-align: center;
            justify-content: center;
          }
          .hero-stats {
            padding: 1.2rem;
          }
          .stat-number {
            font-size: 1.5rem;
          }
          .stat-label {
            font-size: 0.75rem;
          }
          .hero-right {
            margin-right: -1.5rem;
            padding-right: 1.5rem;
            margin-left: -1.5rem;
            padding-left: 1.5rem;
            min-height: 40vh;
          }
          .hero-image {
            right: -1.5rem;
            left: -1.5rem;
            border-radius: 16px;
          }
          .hero-real-image {
            object-fit: cover;
            object-position: center center;
          }
          .deco-circle {
            display: none;
          }
        }
        @media (max-width: 480px) {
          .hero {
            padding: 4rem 1rem 2rem;
          }
          h1 {
            font-size: 2rem;
            letter-spacing: -1px;
          }
          .hero-badge {
            font-size: 0.75rem;
            padding: 0.5rem 1rem;
          }
          .btn-primary, .btn-ghost {
            padding: 1rem 1.5rem;
            font-size: 0.9rem;
          }
          .hero-stats {
            gap: 1rem;
          }
          .hero-right {
            min-height: 35vh;
            margin-right: -1rem;
            padding-right: 1rem;
            margin-left: -1rem;
            padding-left: 1rem;
          }
          .hero-image {
            right: -1rem;
            left: -1rem;
            border-radius: 12px;
          }
        }
      `}</style>
    </section>
  )
}
