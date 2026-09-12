import siteConfig from '../data/siteConfig.js'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap about-grid">
        <img
          className="about-portrait"
          src={siteConfig.images.guidePortrait}
          alt={siteConfig.guideName}
        />

        <div className="about-text">
          <h2>{siteConfig.guideName}</h2>
          {siteConfig.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          <ul className="why-list">
            {siteConfig.whyChooseMe.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
