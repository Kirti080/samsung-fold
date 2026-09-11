import { useState } from 'react'
import './App.css'

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

function Nav({ active, onNavigate }) {
  const pages = ['home', 'about', 'contact']

  return (
    <nav className="nav">
      <span className="logo">Foldsite</span>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <button
              className={active === page ? 'active' : ''}
              onClick={() => onNavigate(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Home() {
  return (
    <>
      <section className="hero">
        <h1>A simple React website</h1>
        <p>
          One page, three sections, no framework on top of the framework. Edit
          <code> src/App.jsx</code> to make it yours.
        </p>
        <a className="button" href="https://react.dev" target="_blank" rel="noreferrer">
          Read the React docs
        </a>
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

function About() {
  return (
    <section className="prose">
      <h2>About</h2>
      <p>
        This is a starter site scaffolded with Vite and React. It keeps state in a
        single component, swaps pages with a conditional, and styles everything
        with one CSS file.
      </p>
      <p>
        When you outgrow it, reach for a router. Until then, this is enough to build
        something real.
      </p>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <section className="prose">
        <h2>Thanks</h2>
        <p>Your message was captured locally. Wire up a backend to actually send it.</p>
        <button className="button" onClick={() => setSent(false)}>
          Send another
        </button>
      </section>
    )
  }

  return (
    <section className="prose">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows={5} required />
        </label>
        <button className="button" type="submit">
          Send
        </button>
      </form>
    </section>
  )
}

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="app">
      <Nav active={page} onNavigate={setPage} />
      <main>
        {page === 'home' && <Home />}
        {page === 'about' && <About />}
        {page === 'contact' && <Contact />}
      </main>
      <footer>
        <p>Built with React {'•'} {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
