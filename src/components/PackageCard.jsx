import { whatsappLink } from '../utils/whatsapp.js'
import { categories } from '../data/packages.js'
import './PackageCard.css'

export default function PackageCard({ pkg }) {
  const accent = categories[pkg.category]?.accent || 'clay'

  // Build a list of meta fields to show, skipping any the package doesn't have.
  const meta = [
    pkg.duration && { label: 'Duration', value: pkg.duration },
    pkg.difficulty && { label: 'Difficulty', value: pkg.difficulty },
    pkg.ageSuitability && { label: 'Ages', value: pkg.ageSuitability },
    pkg.recommendedAge && { label: 'Recommended age', value: pkg.recommendedAge },
    pkg.groupSize && { label: 'Group size', value: pkg.groupSize },
  ].filter(Boolean)

  return (
    <article className={`package-card accent-${accent}`}>
      <div className="package-card__image" style={{ backgroundImage: `url(${pkg.image})` }} />
      <div className="package-card__body">
        <div className="package-card__head">
          <h3>{pkg.name}</h3>
          <span className="package-card__price">{pkg.price}</span>
        </div>

        <p className="package-card__desc">{pkg.description}</p>

        {meta.length > 0 && (
          <div className="package-card__meta">
            {meta.map((item) => (
              <span key={item.label}>
                <strong>{item.label}:</strong> {item.value}
              </span>
            ))}
          </div>
        )}

        {pkg.activities?.length > 0 && (
          <ul className="package-card__included">
            {pkg.activities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        {pkg.included?.length > 0 && (
          <ul className="package-card__included">
            {pkg.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <a
          href={whatsappLink(pkg.name)}
          className="btn btn--outline package-card__cta"
          target="_blank"
          rel="noreferrer"
        >
          Ask about this package
        </a>
      </div>
    </article>
  )
}
