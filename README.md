# SAILESH — THE SERIES

A cinematic, streaming-inspired portfolio for **Sailesh Kumar A**: AI Engineer and B.Tech AI & Data Science graduate.
Every section is an episode, every project is an Original, and the whole site plays like a series.

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed as-is to Vercel, Netlify, GitHub Pages or any static host.

## Updating the content

**All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** Every component reads from it.

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub | `profile` |
| A project, or a new one | `projects` |
| Achievements / certifications | `achievements`, `certifications` |
| Skills and their "where it's used" notes | `skillCategories`, `skillEvidence` |
| Seasons and episodes (My Journey) | `seasons` |
| Top 10 row | `topPicks` |
| ? Play Intro highlight reel | `introSlides` |
| Profile order (Recruiter / Developer / Creative) | `viewerProfiles` |
| Opening studio card text | `profile.originalLabel` |

**Resume:** replace `public/assets/Sailesh_Kumar_Resume.pdf`.

**Photo:** replace the portrait files in `public/assets/` (portrait-420.webp, portrait-720.webp, portrait-1100.webp).

## What's inside

```
src/
  data/portfolio.ts        <- single source of truth
  App.tsx                  <- stages: opening -> profile select -> home; overlays
  components/
    OpeningSequence        <- black -> studio card -> SAILESH -> THE SERIES -> portrait -> PLAY
    ProfileSelector        <- "Who's watching?" (changes section order only)
    Navbar                 <- hide-on-scroll nav, profile switcher, mobile menu
    Hero                   <- billboard: parallax portrait, particles, light streaks, floating chips
    PlayIntro              <- Play Intro: zoom into portrait -> highlight reel
    ContinueWatching       <- cards with real "watched" progress bars
    About                  <- The Pilot
    Seasons / EpisodeCard  <- My Journey as seasons and episodes
    Originals / ProjectCard <- pinned horizontal sequence on desktop, swipe rail on touch
    ProjectModal           <- full-screen project overlay
    TopPicks               <- Top 10-style row
    Skills                 <- skill genres; each card shows where the skill appears
    Achievements           <- award-poster cards + certification rail
    ResumeViewer/ResumeModal <- designed resume sheet, PDF viewer, download
    FinalCTA               <- TO BE CONTINUED + contact links
    CustomCursor, fx.tsx   <- cursor states, magnetic buttons, 3D tilt, particles
  hooks/                   <- Lenis smooth scroll, media queries, watch progress
```

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, Lenis.

## Keyboard shortcuts

- **Opening:** Enter or Esc skips it.
- **Play Intro:** Space pauses, <- and -> change slides, Esc closes.
- **Project and resume overlays:** Esc closes.
