import { useState } from 'react'

const questions = [
  {
    q: 'Do I need to know React to edit this site?',
    a: 'Enough to read JSX helps, but each page is a single function returning markup. Changing text or adding a card is mostly editing the arrays at the top of each file.',
  },
  {
    q: 'How do I add another page?',
    a: 'Create a file in src/pages, then add one entry to the links array and one Route in src/App.jsx. Nothing else needs to change.',
  },
  {
    q: 'Can I change the colours?',
    a: 'All colours are CSS variables defined in src/index.css, with a dark-mode block underneath. Change them in one place and the whole site follows.',
  },
  {
    q: 'Is there a backend?',
    a: 'No. The contact form keeps its state locally and resets. Point it at an API route or a form service when you need real submissions.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <section className="prose">
      <header className="page-header">
        <h2>FAQ</h2>
        <p>Short answers to the things people ask first.</p>
      </header>

      <ul className="faq">
        {questions.map((item, index) => (
          <li key={item.q}>
            <button
              aria-expanded={open === index}
              onClick={() => setOpen(open === index ? null : index)}
            >
              <span>{item.q}</span>
              <span className="chevron">{open === index ? '−' : '+'}</span>
            </button>
            {open === index && <p>{item.a}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}
