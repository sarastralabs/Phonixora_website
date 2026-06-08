import { Leaf, Recycle, Microscope, Globe, UserRound, BarChart2, Crown } from 'lucide-react'

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
            <div className="founders-divider">
              <span className="founders-divider-line" />
              <Leaf size={16} className="founders-divider-leaf" />
              <span className="founders-divider-line" />
            </div>
            <div className="founders-list">
              <div className="founder-row">
                <div className="founder-row-icon">
                  <UserRound size={28} strokeWidth={1.5} />
                </div>
                <div className="founder-row-divider" />
                <div className="founder-row-info">
                  <span className="founder-row-name">Akash Nayak</span>
                  <span className="founder-row-role">Chairman, founder</span>
                </div>
                <div className="founder-row-arrow">›</div>
              </div>
              <div className="founder-row">
                <div className="founder-row-icon">
                  <BarChart2 size={28} strokeWidth={1.5} />
                </div>
                <div className="founder-row-divider" />
                <div className="founder-row-info">
                  <span className="founder-row-name">Nithin</span>
                  <span className="founder-row-role">Director</span>
                </div>
                <div className="founder-row-arrow">›</div>
              </div>
              <div className="founder-row">
                <div className="founder-row-icon">
                  <Crown size={28} strokeWidth={1.5} />
                </div>
                <div className="founder-row-divider" />
                <div className="founder-row-info">
                  <span className="founder-row-name">Manjunath</span>
                  <span className="founder-row-role">CEO and Director</span>
                </div>
                <div className="founder-row-arrow">›</div>
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
