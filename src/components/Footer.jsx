import siteConfig from '../data/siteConfig.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-inner">
          <span className="footer-logo">[ LOGO ]</span>

          <ul className="footer-links">
            <li><a href="#experiences">Experiences</a></li>
            <li><a href="#family">Family</a></li>
            <li><a href="#kids">Kids & Birthdays</a></li>
            <li><a href="#about">About</a></li>
            <li><a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>

        <div className="footer-inner footer-bottom" style={{ marginTop: '1.5rem' }}>
          <span>© {year} {siteConfig.guideName}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
