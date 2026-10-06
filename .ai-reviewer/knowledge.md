# samsung-fold reviewer notes

## Architecture
This is a small single-page React 19 application built with Vite. `src/main.jsx` mounts `App` in `StrictMode`; `src/App.jsx` contains the top-level state, navigation, page components, and feature data, while `src/App.css` and `src/index.css` provide styling. There is no router or backend; page changes are handled through conditional rendering.

## Conventions
- Use plain JavaScript/JSX rather than TypeScript; the entry points are `src/main.jsx` and `src/App.jsx`.
- Keep reusable page-level pieces as local function components in `src/App.jsx`, such as `Nav`, `Home`, `About`, and `Contact`.
- Lift navigation state to `App` and pass state/callbacks down as props: `Nav` receives `active` and `onNavigate` in `src/App.jsx`.
- Use React state for local interaction state. `Contact` owns its `sent` state and handles submission with `event.preventDefault()` rather than performing a network request (`src/App.jsx`).
- Render repeated content from arrays with stable keys. The `features` array uses `feature.title` as its key, and navigation uses the page string (`src/App.jsx`).
- Use semantic HTML elements (`nav`, `main`, `section`, `article`, `form`, `footer`) and class names for styling, with component styles imported from `src/App.jsx` and global styles from `src/main.jsx`.
- Follow the repository’s semicolon-free formatting and single-quote style, visible throughout `src/*.jsx` and `vite.config.js`. Run the configured checks with `npm run lint` and build with `npm run build` (`package.json`).

## Intentional non-standard choices
- Navigation is deliberately implemented as conditional rendering over `page` (`src/App.jsx`), not with a routing library. The About copy explicitly says to add a router only when the application outgrows this approach.
- The contact form is intentionally local-only: submission merely flips `sent` and displays a confirmation; the UI states that a backend is needed to actually send the message (`src/App.jsx`).
- The React Compiler is intentionally not enabled due to development/build performance concerns (`README.md`).

## Watch out for
- Do not add navigation state independently inside `Nav`; `App` is the source of truth and passes `active` plus `onNavigate` (`src/App.jsx`).
- Preserve stable keys when extending `features` or `pages`; do not use array indexes when a stable title/page identifier exists.
- Keep external links secure and consistent with the existing React docs link, which uses `target="_blank"` and `rel="noreferrer"` (`src/App.jsx`).
- Avoid implying that the contact form sends data unless a backend/API integration is actually added; current submission intentionally captures nothing beyond local UI state.
