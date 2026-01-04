# Task Manager

A small, component-driven task manager built with React and Vite. This project demonstrates practical front-end skills useful for a junior React developer role: component composition, React hooks, local persistence, filtering & sorting logic, and a clean, accessible UI.

## Demo

- Run locally (instructions below) to try the app in your browser.
- Screenshots are available in the `public/` folder or can be added to `docs/` for portfolio presentation.

## Table of contents

- Features
- Tech stack
- Why this project matters for recruiters
- Installation
- Development
- Project structure
- Future improvements
- Contributing & contact

## Features

- Add, edit and remove tasks.
- Mark tasks as completed and toggle completion state.
- Filter tasks (all / pending / completed) and sort by newest/oldest.
- Persistent storage via `localStorage` so tasks survive page reloads.
- Clean component structure with single-responsibility components (`TaskInput`, `TaskList`, `FilterSort`, etc.).
- Small, focused CSS per component for straightforward styling and maintainability.

## Tech stack

- React 18 (functional components + hooks)
- Vite (fast development server and builds)
- ESLint (code quality and consistency)
- Font Awesome (icons)

## Why this project matters for recruiters

This repository is crafted to showcase the practical skills recruiters look for in junior front-end candidates in London:

- **Component design**: clear separation of UI responsibilities across small, testable components.
- **State management**: idiomatic use of `useState` and `useEffect` for derived state and persistence.
- **User-focused features**: filtering, sorting, inline editing — typical UI behaviours for real-world apps.
- **Performance & UX**: minimal re-renders and responsive interactions via controlled inputs and derived lists.
- **Tooling**: Vite for modern workflow, ESLint for code quality—shows familiarity with current front-end toolchains.

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
npm install
```

## Development

Start the development server with hot-reload:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure (key files)

- [src/App.jsx](src/App.jsx#L1): Application root, state orchestration and persistence.
- [src/components/TaskInput.jsx](src/components/TaskInput.jsx): Task creation form.
- [src/components/TaskList.jsx](src/components/TaskList.jsx): Renders list of tasks and delegates item actions.
- [src/components/TaskItem.jsx](src/components/TaskItem.jsx): Single task UI and edit/toggle/remove handlers.
- [src/components/FilterSort.jsx](src/components/FilterSort.jsx): Controls for filtering and sorting.
- [src/App.css](src/App.css): Global layout and container styles.

Open these files to evaluate code style, naming conventions, and component composition.

## How to evaluate (notes for recruiters)

- Look for clear prop interfaces between components and predictable state flows.
- Inspect `useEffect` hooks in `src/App.jsx` to see how derived lists and persistence are implemented.
- The app uses `crypto.randomUUID()` for stable IDs—acceptable for demo purposes; in production, IDs would come from a backend.
- CSS is component-scoped via separate CSS files to keep styles modular and readable.

## Accessibility & Responsiveness

- Form inputs and buttons use semantic HTML and keyboard-friendly controls.
- The layout is responsive and works across common viewport sizes—check `App.css` and component CSS files for breakpoints.

## Future improvements (good talking points)

- Add unit and integration tests (Jest + React Testing Library).
- Replace `localStorage` with a backend API to demonstrate async flows and authentication.
- Improve accessibility with ARIA attributes and automated testing.
- Add E2E tests (Cypress) and CI pipeline for automated builds.

## Contributing

PRs are welcome. For portfolio use, feel free to fork and adapt the UI.

## License

This project is open for demonstration purposes. Add a license file if you plan to reuse it publicly.

## Contact

- LinkedIn: https://www.linkedin.com/in/eduardo-lulo/
- Portfolio: https://eduardo-lulo-portfolio.netlify.app/

If you'd like, I can also add a short `docs/` folder with screenshots and a one-page summary tailored for recruiters in London.
