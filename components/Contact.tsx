'use client'

import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export default function Contact() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '916363149612' 
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
                <div className="contact-item-value">+91 63631 49612</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <div>
                <div className="contact-item-label">Address</div>
                <div className="contact-item-value">Chikkamagaluru and Bangalore</div>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <button onClick={handleWhatsAppClick} className="whatsapp-button">
            <MessageCircle size={24} strokeWidth={2} />
            <span>Chat On Whatsapp</span>
          </button>
        </div>
        <div className="contact-right">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Akash" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="name@gmail.com" />
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
      </section>
  )
}
