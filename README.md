# Portfolio

Personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS tooling. The site presents a short bio, work experience timeline, project highlights, social links, and a light/dark theme toggle.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS v4 via `@tailwindcss/vite`
- Custom CSS for layout, theming, and interactive card effects

## Project Structure

```text
Portfolio/
|- react-ts-site/
|  |- public/
|  |- src/
|  |  |- assets/
|  |  |- App.tsx
|  |  |- main.tsx
|  |  `- styles.css
|  |- package.json
|  `- vite.config.ts
`- README.md
```

## Features

- Responsive single-page portfolio layout
- About, experience, and projects sections
- Theme toggle with saved preference in `localStorage`
- Interactive spotlight hover effect on content cards
- Highlighted keywords inside selected text content
- Social links for GitHub, LinkedIn, and email

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
cd react-ts-site
npm install
```

### Run Locally

```bash
npm run dev
```

Vite will start a local development server and print the local URL in the terminal.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Editing Content

Most portfolio content lives in `react-ts-site/src/App.tsx`.

You can update:

- `timeline` for work experience
- `projects` for featured projects
- `socialLinks` for external links
- `aboutHighlightTerms` for highlighted text in the About section

Styling lives primarily in `react-ts-site/src/styles.css`.

## Notes

- Theme preference is stored in the browser with `localStorage`.
- Logos and image assets are stored in `react-ts-site/src/assets/`.
- The app is currently structured as a single page without routing.
