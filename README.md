# Michael Wolfgang - React Application

A modern, responsive React.js application showcasing Michael Wolfgang's professional portfolio, personal projects, and interests.

## Features

- **Home Page**: Overview of professional work, personal finance interests, running achievements, and continuous learning
- **Developer Section**: 
  - Interview Questions (C#, Azure, Problem Solving)
  - Favorite Podcasts
  - Resources and Learning Materials
  - Certifications, Languages, DevOps practices
- **Family Pages**: Dedicated pages for family members
- **Responsive Design**: Built with Tailwind CSS for a modern, mobile-friendly interface
- **Fast Performance**: Powered by Vite for lightning-fast development and builds

## Technologies Used

- **React 18** - Modern UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next-generation frontend tooling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mikewolfy/mtw-michaelwolfgang-react.git
   cd mtw-michaelwolfgang-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Layout.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Links.jsx
│   ├── Developer/   # Developer section pages
│   │   ├── Developer.jsx
│   │   ├── InterviewQuestions.jsx
│   │   ├── Podcasts.jsx
│   │   └── Resources.jsx
│   └── Family/      # Family member pages
│       ├── Reed.jsx
│       ├── Emma.jsx
│       └── MomDad.jsx
├── data/            # Data files
│   └── interviewQuestions.js
├── App.jsx          # Main application component with routing
├── main.jsx         # Application entry point
└── index.css        # Global styles with Tailwind directives
```

## Migrated from .NET

This React application was migrated from an ASP.NET Core MVC application, maintaining all the original functionality while modernizing the tech stack and improving the user experience with a responsive, single-page application architecture.

### Key Differences from Original

- **Frontend Only**: Pure React SPA (no backend required for static content)
- **Modern Routing**: Client-side routing with React Router
- **Responsive Design**: Tailwind CSS replaces Bootstrap for better customization
- **Component-Based**: Modular, reusable React components
- **Fast Loading**: Vite provides instant hot module replacement

## Deployment

To build for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service (Netlify, Vercel, Azure Static Web Apps, GitHub Pages, etc.).

## Contact

- **LinkedIn**: [linkedin.com/in/michael-wolfgang](https://www.linkedin.com/in/michael-wolfgang/)
- **GitHub**: [github.com/mikewolfy](https://github.com/mikewolfy)

## License

© 2025 Michael Wolfgang. All rights reserved.

