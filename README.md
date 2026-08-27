# Portfolio

Blog/portfolio for personal and professional projects.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── public/              # Static assets
│   ├── images/          # Images (hero, projects, blog)
│   ├── videos/          # Video files
│   └── resume.pdf       # Your resume
├── content/
│   └── posts/           # Blog posts in markdown
├── src/
│   ├── components/      # React components
│   ├── pages/           # Next.js pages
│   ├── styles/          # Global styles
│   ├── lib/             # Utilities (markdown parsing, etc)
│   └── types/           # TypeScript types
├── .github/workflows/   # GitHub Actions for deployment
└── package.json
```

## Adding Blog Posts

Create a new markdown file in `content/posts/` with the following format:

```markdown
---
title: Your Post Title
date: 2026-08-27
excerpt: A short summary of your post
tags:
  - tag1
  - tag2
image: /images/blog/your-image.jpg
---

Your post content here...
```

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch. GitHub Actions handles the build and deployment.

## Features

- ✅ Static site generation with Next.js
- ✅ Markdown-based blog posts
- ✅ Theme switcher (Light/Dark/Auto)
- ✅ Responsive design with Tailwind CSS
- ✅ Automatic GitHub Pages deployment
- ✅ TypeScript support
- ✅ SEO optimized

## Generated with AI

This project structure and initial components were generated with the help of GitHub Copilot.
