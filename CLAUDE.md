# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React (Create React App) and deployed to Firebase Hosting. The site showcases professional projects and includes a chatbot component.

## Development Commands

### Setup
```bash
npm install
```

For new codespace environments, install Firebase tools globally:
```bash
npm install -g firebase-tools
```

### Development
```bash
npm start  # Runs dev server on http://localhost:3000 (browser disabled for codespace)
npm test   # Launches test runner in interactive watch mode
npm run build  # Creates production build in 'build' folder
```

### Deployment
```bash
firebase deploy --only hosting:felix-xyz
```

**Important:** The `build` folder is deployed to Firebase, NOT the `public` folder. This is configured in firebase.json with `"site": "felix-xyz"` and `"public": "build"`.

## Architecture

### Routing Structure
The app uses React Router v6 with two main routes (src/index.js:9-21):
- `/` - Home page with project cards
- `/details/:ProjectId` - Individual project detail pages

### Component Organization

**Home Component** (src/components/Home.js)
- Main landing page with profile links and animated project cards
- Uses AOS (Animate On Scroll) library for scroll animations
- Contains hardcoded project cards (Projects 1-7) that link to detail pages
- Includes the Chatbot component

**ProjectDetails Component** (src/components/ProjectDetails.js)
- Displays detailed project information based on URL parameter
- Project data is stored in a local PROJECTS array (lines 4-47)
- Uses React Router's useLoaderData hook to get ProjectId from URL

**Chatbot Component** (src/components/Chatbot.js)
- React class component with chat UI
- Currently non-functional - displays "There is no backend connected currently"
- Has a known XSS vulnerability mentioned in code comments (lines 97-99)
- Uses Material-UI icons for UI elements

### Styling
- SCSS/SASS is used for styling (Home.scss)
- Each component has its own CSS file
- Global styles in index.css

### Key Dependencies
- React 18 with React Router v6
- Material-UI (@mui/material, @mui/icons-material) for icons
- Firebase for deployment
- OpenAI library installed (usage not currently visible in code)
- AOS for scroll animations
- SASS for styling

### Static Assets
All images and static files are in the `public/` folder, including profile pictures, logos, and a word cloud SVG.
