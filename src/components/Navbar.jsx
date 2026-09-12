import { useState } from 'react'
import siteConfig from '../data/siteConfig.js'
import { whatsappLink } from '../utils/whatsapp.js'
import './Navbar.css'

const links = [
  { href: '#experiences', label: 'Experiences' },
  { href: '#family', label: 'Family' },
  { href: '#kids', label: 'Kids & Birthdays' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="wrap nav-inner">
        {/* Replace with an <img> tag once you have a logo file. */}
        <a href="#top" className="nav-logo">
          [ LOGO ]
        </a>

        <nav aria-label="Primary">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={whatsappLink()} className="btn btn--primary nav-cta" target="_blank" rel="noreferrer">
          Book on WhatsApp
        </a>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="wrap nav-mobile-panel">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            className="btn btn--primary btn--block"
            style={{ marginTop: '0.75rem' }}
            target="_blank"
            rel="noreferrer"
          >
            Book on WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
