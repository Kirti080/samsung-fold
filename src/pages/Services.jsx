const services = [
  {
    title: 'Design',
    body: 'Wireframes through to a finished interface, with a component library you can hand to engineers.',
    items: ['Design systems', 'Prototypes', 'Accessibility review'],
  },
  {
    title: 'Development',
    body: 'React front ends and the APIs behind them, shipped in small increments you can review as they land.',
    items: ['React and TypeScript', 'API integration', 'Testing and CI'],
  },
  {
    title: 'Consulting',
    body: 'A second opinion on architecture, performance, or the plan you already have written down.',
    items: ['Architecture review', 'Performance audits', 'Team workshops'],
  },
]

export default function Services() {
  return (
    <section>
      <header className="page-header">
        <h2>Services</h2>
        <p>Three ways to work together, from a single audit to an ongoing build.</p>
      </header>

      <div className="service-list">
        {services.map((service) => (
          <article key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.body}</p>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
