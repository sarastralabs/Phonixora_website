'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleWhatsAppClick = () => {
    const phoneNumber = '916363149612' 
    const message = encodeURIComponent('Hi! I would like to know more about Phonixora Bio-Polymer\'s eco-friendly bio-polymer materials.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setStatus('sending')

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
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
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="from_name" placeholder="Akash" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="from_email" placeholder="name@gmail.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" placeholder="Your Company" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Tell us about your bio-polymer requirements..." required></textarea>
            </div>
            <button type="submit" className="btn-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Sent!' : status === 'error' ? 'Failed — Try Again' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="form-success-msg">Your message has been sent successfully. We'll get back to you soon!</p>
            )}
            {status === 'error' && (
              <p className="form-error-msg">Something went wrong. Please try again or contact us via WhatsApp.</p>
            )}
          </form>
        </div>
      </div>
      </section>
  )
}
