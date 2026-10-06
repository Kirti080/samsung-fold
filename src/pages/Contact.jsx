import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <section className="prose">
        <header className="page-header">
          <h2>Thanks</h2>
          <p>Your message was captured locally. Wire up a backend to actually send it.</p>
        </header>
        <button className="button" onClick={() => setSent(false)}>
          Send another
        </button>
      </section>
    )
  }

  return (
    <section className="prose">
      <header className="page-header">
        <h2>Contact</h2>
        <p>Tell us what you are building and we will reply within a day.</p>
      </header>

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
