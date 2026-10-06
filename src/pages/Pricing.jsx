import { Link } from 'react-router-dom'

const tiers = [
  {
    name: 'Starter',
    price: '$29',
    blurb: 'For a single project getting off the ground.',
    features: ['1 project', 'Email support', 'Community access'],
  },
  {
    name: 'Team',
    price: '$99',
    blurb: 'For small teams shipping together.',
    features: ['10 projects', 'Priority support', 'Shared workspace', 'Usage analytics'],
    featured: true,
  },
  {
    name: 'Business',
    price: '$299',
    blurb: 'For organisations with review and compliance needs.',
    features: [
      'Unlimited projects',
      'Dedicated contact',
      'SSO and audit logs',
      'Custom contract',
    ],
  },
]

export default function Pricing() {
  return (
    <section>
      <header className="page-header">
        <h2>Pricing</h2>
        <p>Monthly, cancel whenever. Every tier includes the full feature set.</p>
      </header>

      <div className="tiers">
        {tiers.map((tier) => (
          <article key={tier.name} className={tier.featured ? 'tier featured' : 'tier'}>
            {tier.featured && <span className="badge">Most popular</span>}
            <h3>{tier.name}</h3>
            <p className="price">
              {tier.price}
              <span>/mo</span>
            </p>
            <p className="blurb">{tier.blurb}</p>
            <ul>
              {tier.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <Link className={tier.featured ? 'button' : 'button secondary'} to="/contact">
              Choose {tier.name}
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
