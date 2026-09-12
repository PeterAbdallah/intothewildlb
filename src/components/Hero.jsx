import siteConfig from '../data/siteConfig.js'
import { whatsappLink } from '../utils/whatsapp.js'
import MountainDivider from './MountainDivider.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div
        className="hero-media"
        style={{ backgroundImage: `url(${siteConfig.images.heroBackground})` }}
        role="img"
        aria-label="Mountain trail in Lebanon"
      />

      <div className="hero-panel-wrap">
        <div className="hero-panel">
          <h1>{siteConfig.tagline}</h1>
          <p>{siteConfig.intro}</p>
          <div className="hero-actions">
            <a href="#experiences" className="btn btn--primary">
              Explore packages
            </a>
            <a href={whatsappLink()} className="btn btn--outline btn--on-dark" target="_blank" rel="noreferrer">
              Contact / book
            </a>
          </div>
        </div>
      </div>

      <div className="wrap hero-divider">
        <MountainDivider />
      </div>
    </section>
  )
}
