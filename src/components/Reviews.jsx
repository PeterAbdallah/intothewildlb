import reviews from '../data/reviews.js'
import './Reviews.css'

export default function Reviews() {
  return (
    <section id="reviews" className="section section--alt">
      <div className="wrap">
        <div className="section-header">
          <h2>What guests say</h2>
        </div>

        <div className="review-list">
          {reviews.map((review) => (
            <div className="review" key={review.name}>
              <p className="review-quote">&ldquo;{review.quote}&rdquo;</p>
              <p className="review-byline">
                <strong>{review.name}</strong>
                {review.context ? ` — ${review.context}` : ''}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
