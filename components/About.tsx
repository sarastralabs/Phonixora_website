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
          <div className="founders-spotlight">
            
            <h3 className="founders-heading">
              The Minds Behind <em>Phonixora Bio-Polymer</em>
            </h3>
            <div className="founders-grid">
              <div className="founder-card">
                <span className="founder-name">Akash Nayak</span>
                <span className="founder-role">Founder & Director</span>
              </div>
              <div className="founder-card">
                <span className="founder-name">Nithin</span>
                <span className="founder-role">Director</span>
              </div>
              <div className="founder-card">
                <span className="founder-name">Manjunath</span>
                <span className="founder-role">CEO</span>
              </div>
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
      </section>
  )
}
