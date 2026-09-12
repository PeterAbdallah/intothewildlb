import siteConfig from '../data/siteConfig.js'
import { whatsappLink } from '../utils/whatsapp.js'
import './Contact.css'

function Icon({ path }) {
  return (
    <svg className="contact-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d={path} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <div className="section-header">
          <h2>Plan your trip</h2>
          <p className="section-lead">
            No online booking needed — send a message and {siteConfig.guideName.split(' ')[0]} will reply
            with availability and details.
          </p>
        </div>

        <div className="contact-buttons">
          <a href={whatsappLink()} className="contact-btn" target="_blank" rel="noreferrer">
            <Icon path="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            WhatsApp
          </a>

          <a href={siteConfig.instagramUrl} className="contact-btn" target="_blank" rel="noreferrer">
            <Icon path="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM17.5 6.5h.01" />
            Instagram — @{siteConfig.instagramHandle}
          </a>

          <a href={`tel:${siteConfig.phoneDial}`} className="contact-btn">
            <Icon path="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            {siteConfig.phoneDisplay}
          </a>

          <a href={`mailto:${siteConfig.email}`} className="contact-btn">
            <Icon path="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6" />
            {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  )
}
