const people = [
  {
    name: 'Ada Okafor',
    role: 'Principal engineer',
    bio: 'Works on the rendering pipeline and spends too much time reading flame graphs.',
  },
  {
    name: 'Marek Dvořák',
    role: 'Design lead',
    bio: 'Owns the design system and the argument about how many greys it needs.',
  },
  {
    name: 'Priya Raman',
    role: 'Platform engineer',
    bio: 'Builds the deploy tooling, so the rest of the team can ignore it entirely.',
  },
  {
    name: 'Tom Lindqvist',
    role: 'Product',
    bio: 'Turns half-formed requests into things that can actually be scoped.',
  },
  {
    name: 'Sofia Herrera',
    role: 'Accessibility',
    bio: 'Audits every release and keeps a running list of things we promised to fix.',
  },
  {
    name: 'Jun Watanabe',
    role: 'Support engineer',
    bio: 'First to hear when something breaks, and usually first to find out why.',
  },
]

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

export default function Team() {
  return (
    <section>
      <header className="page-header">
        <h2>Team</h2>
        <p>Six people, one timezone-spanning standup nobody enjoys.</p>
      </header>

      <ul className="team-grid">
        {people.map((person) => (
          <li key={person.name}>
            <span className="avatar" aria-hidden="true">
              {initials(person.name)}
            </span>
            <h3>{person.name}</h3>
            <p className="role">{person.role}</p>
            <p className="bio">{person.bio}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
