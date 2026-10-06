export default function About() {
  return (
    <section className="prose">
      <header className="page-header">
        <h2>About</h2>
        <p>What this starter is, and where it stops.</p>
      </header>

      <p>
        This site was scaffolded with Vite and React. Each page lives in its own file
        under <code>src/pages</code>, React Router maps them to real URLs, and a single
        stylesheet handles layout and theming.
      </p>
      <p>
        It deliberately has no state library, no CSS framework, and no backend. That
        keeps the whole thing readable in one sitting, which matters more than
        completeness when you are about to change most of it anyway.
      </p>
      <p>
        When you outgrow it, the natural next steps are data loading in the route
        components and a form endpoint for the contact page.
      </p>
    </section>
  )
}
