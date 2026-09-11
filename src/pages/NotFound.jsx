import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="prose">
      <header className="page-header">
        <h2>Page not found</h2>
        <p>That URL does not match any page on this site.</p>
      </header>
      <Link className="button" to="/">
        Back to home
      </Link>
    </section>
  )
}
