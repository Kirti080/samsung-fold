import { useEffect, useState } from 'react'

const items = [
  { title: 'Dashboard', caption: 'Usage overview, dark theme', from: '#6366f1', to: '#a855f7' },
  { title: 'Onboarding', caption: 'Four-step account setup', from: '#0ea5e9', to: '#22d3ee' },
  { title: 'Reports', caption: 'Exportable tabular views', from: '#f59e0b', to: '#ef4444' },
  { title: 'Mobile', caption: 'Condensed navigation', from: '#10b981', to: '#84cc16' },
  { title: 'Settings', caption: 'Workspace and billing', from: '#ec4899', to: '#f43f5e' },
  { title: 'Search', caption: 'Filters and saved queries', from: '#8b5cf6', to: '#3b82f6' },
]

function gradient(item) {
  return { background: `linear-gradient(135deg, ${item.from}, ${item.to})` }
}

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null)
  const open = openIndex === null ? null : items[openIndex]

  useEffect(() => {
    if (openIndex === null) return

    function handleKey(event) {
      if (event.key === 'Escape') setOpenIndex(null)
      if (event.key === 'ArrowRight') setOpenIndex((i) => (i + 1) % items.length)
      if (event.key === 'ArrowLeft') setOpenIndex((i) => (i - 1 + items.length) % items.length)
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [openIndex])

  return (
    <section>
      <header className="page-header">
        <h2>Gallery</h2>
        <p>Select any tile to enlarge it. Arrow keys move between tiles, Escape closes.</p>
      </header>

      <ul className="gallery">
        {items.map((item, index) => (
          <li key={item.title}>
            <button onClick={() => setOpenIndex(index)}>
              <span className="thumb" style={gradient(item)} aria-hidden="true" />
              <span className="caption">
                <strong>{item.title}</strong>
                {item.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={open.title}>
          <button
            className="lightbox-backdrop"
            aria-label="Close"
            onClick={() => setOpenIndex(null)}
          />
          <figure>
            <span className="thumb large" style={gradient(open)} aria-hidden="true" />
            <figcaption>
              <strong>{open.title}</strong>
              {open.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
