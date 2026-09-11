export const posts = [
  {
    slug: 'why-plain-css',
    title: 'Why this starter uses plain CSS',
    date: '2026-08-14',
    readingTime: '4 min',
    excerpt:
      'Utility frameworks are good tools, but a starter you are about to rewrite is the wrong place to introduce one.',
    body: [
      'Every CSS framework asks you to learn its vocabulary before you can change a colour. That trade is usually worth it on a project that will live for years and be touched by a dozen people. It is rarely worth it on a starter.',
      'A single stylesheet with CSS variables at the top gives you theming, dark mode, and consistent spacing in about two hundred lines. You can read all of it in one sitting, which means you can confidently delete the parts you do not want.',
      'When the site grows past what one file can hold, split it per component or adopt a framework then. Doing it at the start optimises for a problem you do not have yet.',
    ],
  },
  {
    slug: 'routing-without-a-backend',
    title: 'Routing without a backend',
    date: '2026-08-28',
    readingTime: '5 min',
    excerpt:
      'Client-side routes give you real URLs, but they only work if your host knows to serve index.html for every path.',
    body: [
      'React Router maps URLs to components entirely in the browser. Navigating from /pricing to /faq never touches a server, which is what makes it feel instant.',
      'The catch shows up on a hard refresh. When someone loads /pricing directly, the browser asks your host for that exact path. A static host will look for a file there, not find one, and return a 404 before any JavaScript runs.',
      'The fix is a rewrite rule: serve index.html for anything that is not a real file. Netlify calls it a redirect, Vercel handles it automatically, and nginx needs a try_files directive. Whichever host you pick, test a refresh on a nested route before calling the deploy done.',
    ],
  },
  {
    slug: 'shipping-small',
    title: 'Shipping small beats shipping right',
    date: '2026-09-05',
    readingTime: '3 min',
    excerpt:
      'The fastest way to find out what a site needs is to put a rough version of it in front of someone.',
    body: [
      'Most of the decisions that feel important at the start of a project are guesses. Which pages matter, how much copy each one needs, whether anyone will use the search. You cannot reason your way to those answers.',
      'A small site you can deploy today produces better information than a large one you deploy next month. The pages that turn out to be wrong are cheap to delete when they are fifty lines each.',
      'That is the case for keeping the structure flat and the dependencies few, at least until the shape of the thing stops moving.',
    ],
  },
]

export function findPost(slug) {
  return posts.find((post) => post.slug === slug)
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
