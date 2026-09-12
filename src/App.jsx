import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import PackageSection from './components/PackageSection.jsx'
import About from './components/About.jsx'
import Reviews from './components/Reviews.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { Analytics } from "@vercel/analytics/next"

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <PackageSection
        id="experiences"
        category="hiking"
        title="Experiences"
        lead="Guided hikes and nature outings across Lebanon's trails, matched to the group and the season."
      />

      <PackageSection
        id="family"
        category="family"
        title="Family Packages"
        lead="Easier pacing and routes built for mixed ages, from toddlers to grandparents."
        alt
      />

      <PackageSection
        id="kids"
        category="kids"
        title="Kids & Birthdays"
        lead="Outdoor birthday parties and children's adventures, run as games first and a hike second."
      />

      <About />
      <Reviews />
      <Contact />
      <Footer />
      <Analytics />
    </>
  )
}
