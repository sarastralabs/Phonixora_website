'use client'

import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export default function Contact() {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number (format: country code + number without + or spaces)
    const phoneNumber = '1234567890' // Example: 1234567890 for +1 234-567-890
    const message = encodeURIComponent('Hi! I would like to know more about Phonixora Bio-Polymer\'s eco-friendly bio-polymer materials.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="contact-left">
          <p className="section-label">Contact Us</p>
          <h2 className="section-title">Let's create a <em>sustainable future</em> together</h2>
          <p className="contact-text">
            Ready to make the switch to eco-friendly bio-polymer materials? Our team is here to help 
            you find the perfect solution for your business needs.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">info@phonixora.com</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} strokeWidth={1.5} />
              </div>
              <div>
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-value">+91 [Your Number]</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <div>
                <div className="contact-item-label">Address</div>
                <div className="contact-item-value">[Your Address]</div>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <button onClick={handleWhatsAppClick} className="whatsapp-button">
            <MessageCircle size={24} strokeWidth={2} />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
        <div className="contact-right">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="john@company.com" />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" placeholder="Your Company" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={4} placeholder="Tell us about your bio-polymer requirements..."></textarea>
            </div>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .contact {
          background: linear-gradient(180deg, #f4efe4 0%, #e8f0e4 100%);
          color: #1a3320;
          padding: 8rem 4rem;
          position: relative;
        }
        .contact::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(44,107,58,0.2), transparent);
        }
        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8rem;
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
        .contact-text {
          font-size: 1.1rem;
          line-height: 1.9;
          color: #4a5c4a;
          font-weight: 300;
          margin-bottom: 3rem;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          padding: 1.5rem;
          background: white;
          border-radius: 12px;
          border: 1px solid rgba(44,107,58,0.08);
          transition: all 0.3s;
        }
        .contact-item:hover {
          transform: translateX(8px);
          box-shadow: 0 8px 20px rgba(44,107,58,0.08);
        }
        .contact-icon {
          color: #2c6b3a;
          flex-shrink: 0;
        }
        .contact-item-label {
          font-size: 0.75rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #6b8a6b;
          margin-bottom: 0.4rem;
          font-weight: 600;
        }
        .contact-item-value {
          font-size: 1.05rem;
          color: #1a3320;
          font-weight: 600;
        }
        .whatsapp-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          color: white;
          font-family: var(--font-dm-sans);
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 0.5px;
          padding: 1.2rem 2rem;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
        }
        .whatsapp-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.4);
        }
        .whatsapp-button:active {
          transform: translateY(-1px);
        }
        .contact-form {
          background: white;
          padding: 3rem;
          border-radius: 24px;
          border: 1px solid rgba(44,107,58,0.08);
          box-shadow: 0 20px 60px rgba(44,107,58,0.08);
        }
        .form-group {
          margin-bottom: 1.8rem;
        }
        label {
          display: block;
          font-size: 0.8rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #2c6b3a;
          margin-bottom: 0.6rem;
          font-weight: 600;
        }
        input, textarea {
          width: 100%;
          padding: 1rem 1.2rem;
          border: 2px solid rgba(44,107,58,0.1);
          border-radius: 12px;
          font-family: var(--font-dm-sans);
          font-size: 0.95rem;
          color: #1a3320;
          transition: all 0.3s;
          background: #fafaf8;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: #7bbf7a;
          background: white;
          box-shadow: 0 0 0 4px rgba(123,191,122,0.1);
        }
        textarea {
          resize: vertical;
          min-height: 120px;
        }
        .btn-submit {
          width: 100%;
          background: linear-gradient(135deg, #2c6b3a 0%, #7bbf7a 100%);
          color: white;
          font-family: var(--font-dm-sans);
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          padding: 1.2rem 2rem;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 8px 20px rgba(44,107,58,0.2);
        }
        .btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(44,107,58,0.3);
        }
        @media (max-width: 1024px) {
          .contact-inner {
            gap: 5rem;
          }
        }
        @media (max-width: 768px) {
          .contact-inner {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .contact {
            padding: 5rem 1.5rem;
          }
          .contact-form {
            padding: 2rem;
          }
          .section-title {
            font-size: 2rem;
          }
          .contact-text {
            font-size: 1rem;
          }
          .contact-info {
            gap: 1.5rem;
          }
          .contact-item {
            padding: 1.2rem;
          }
        }
        @media (max-width: 480px) {
          .contact {
            padding: 4rem 1rem;
          }
          .section-label {
            font-size: 0.7rem;
          }
          .section-title {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
          }
          .contact-text {
            font-size: 0.95rem;
            margin-bottom: 2rem;
          }
          .contact-form {
            padding: 1.5rem;
          }
          .form-group {
            margin-bottom: 1.5rem;
          }
          label {
            font-size: 0.75rem;
          }
          input, textarea {
            padding: 0.9rem 1rem;
            font-size: 0.9rem;
          }
          .btn-submit, .whatsapp-button {
            padding: 1rem 1.5rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  )
}
