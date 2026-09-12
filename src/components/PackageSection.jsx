import packages from '../data/packages.js'
import PackageCard from './PackageCard.jsx'
import './PackageSection.css'

export default function PackageSection({ id, category, title, lead, alt }) {
  const items = packages.filter((pkg) => pkg.category === category)

  return (
    <section id={id} className={`section${alt ? ' section--alt' : ''}`}>
      <div className="wrap">
        <div className="section-header">
          <h2>{title}</h2>
          {lead && <p className="section-lead">{lead}</p>}
        </div>

        <div className="package-list">
          {items.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}
