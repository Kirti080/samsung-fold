import { Link } from 'react-router-dom'

const features = [
  {
    title: 'Fast',
    body: 'Built on Vite, so the dev server starts instantly and changes show up right away.',
  },
  {
    title: 'Simple',
    body: 'A handful of components and plain CSS. Nothing to learn before you can edit it.',
  },
  {
    title: 'Responsive',
    body: 'Layouts collapse to a single column on narrow screens without extra work.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>A simple React website</h1>
        <p>
          Six pages, real URLs, and one CSS file. Edit anything in
          <code> src/pages</code> to make it yours.
        </p>
        <div className="hero-actions">
          <Link className="button" to="/pricing">
            See pricing
          </Link>
          <Link className="button secondary" to="/contact">
            Get in touch
          </Link>
        </div>
      </section>

      <section className="features">
        {features.map((feature) => (
          <article key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
          </article>
        ))}
      </section>
    </>
  )
}
