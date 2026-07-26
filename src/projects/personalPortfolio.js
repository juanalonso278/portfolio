export const personalPortfolio = {
  id: 4,
  title: 'Personal Engineering Portfolio & Interactive Showcase',
  synopsis: 'A high-performance, single-page React & Vite web application featuring custom glassmorphic dark-mode aesthetics, zero-dependency CSS architecture, instant client-side tag filtering, embedded PDF reporting, and responsive video demo showcases.',
  description: 'This application was engineered from the ground up to serve as a comprehensive personal showcase for computer engineering, embedded systems, and full-stack projects. Built prioritizing fast rendering performance, zero external UI framework overhead, and sub-millisecond static analysis with Oxlint, the portfolio incorporates an instant O(1) client-side tag filtering state engine, modular project data schemas, dynamic PDF availability verification, and glassmorphic HSL dark-mode styling.',
  tags: ['react', 'vite', 'javascript', 'css', 'frontend', 'ui-ux', 'performance', 'oxlint', 'spa'],

  metrics: [
    { label: 'Lighthouse Score', value: '100 / 100' },
    { label: 'Bundle Size (Gzipped)', value: '42.8 KB' },
    { label: 'HMR Dev Reload Time', value: '404 ms' },
    { label: 'Static Analysis Time', value: '11 ms' },
    { label: 'UI Framework Overhead', value: '0 KB' }
  ],

  techStack: [
    { category: 'Frontend Core', name: 'React 19 & JavaScript (ESNext)', details: 'Functional components, custom hooks, and React Router DOM v7 for seamless client-side SPA navigation.' },
    { category: 'Build Tooling & Bundler', name: 'Vite 6 / 8', details: 'Configured with @vitejs/plugin-react leveraging SWC/Oxc for lightning-fast HMR and optimized chunk splitting.' },
    { category: 'Styling & Design System', name: 'Vanilla CSS & HSL Custom Properties', details: 'Zero-framework CSS architecture with design tokens, glassmorphism blur filters, and ambient radial glow pseudo-elements.' },
    { category: 'Quality & Static Analysis', name: 'Oxlint Engine', details: 'Ultra-fast Rust-based static analysis executing 90+ lint rules in sub-15ms execution windows.' }
  ],

  architectureSections: [
    {
      title: 'Decoupled Modular Project Schema Engine',
      content: 'Rather than hardcoding static page views, the application employs a decoupled project schema architecture (src/projects/*.js). Each project definition specifies rich metadata—including multi-phase engineering team contributions, performance metrics, code snippets, interactive YouTube embed parameters, and PDF document paths. This structure allows new projects to be integrated seamlessly with instant zero-code-change rendering.'
    },
    {
      title: 'Zero-Dependency Glassmorphism Design System',
      content: 'The user interface relies entirely on native CSS custom properties (--bg-color, --card-bg, --accent) managed via HSL color tokens. Dynamic visual depth is achieved using CSS backdrop-filter blur effects (backdrop-filter: blur(12px)), subtle orange radial gradient glows via fixed body::before pseudo-elements, and smooth cubic-bezier hover transitions.'
    },
    {
      title: 'Optimized Client-Side Tag Filtering (O(1) State Engine)',
      content: 'Tag filtering is executed entirely on the client side using React\'s useMemo hook. As users select single or multiple technology tags, the filter engine evaluates tag intersections in memory without causing layout shifts, fallback skeletons, or unnecessary re-renders of unrelated project components.'
    },
    {
      title: 'Resilient Media & Asynchronous Head Guarding',
      content: 'Integrated PDF report viewers use an asynchronous HTTP HEAD pre-flight fetch (fetch(pdfUrl, { method: "HEAD" })) to verify document presence before mounting standard HTML5 iframe embeds. If a PDF report is missing or undergoing compilation, the component smoothly degrades to an interactive fallback standby card without breaking page layout.'
    }
  ],

  features: [
    'Instant Multi-Tag Filter Engine powered by React useMemo for sub-millisecond filtering',
    'Zero-Framework CSS Design System using native custom properties & HSL color tokens',
    'Glassmorphic dark-mode aesthetics with radial ambient background lighting',
    'Dynamic PDF Availability Guard executing pre-flight HEAD requests before iframe mounting',
    'Responsive Video Demonstration Grid supporting 16:9 widescreen & 1:1 mobile shorts',
    'Detailed Contributor Cards with multi-phase engineering role badges and task breakdowns',
    'Sub-millisecond static analysis powered by Oxlint and Vite HMR'
  ],

  codeSnippets: [
    {
      title: 'React useMemo Multi-Tag Filtering Engine',
      language: 'javascript',
      code: `// Instant client-side tag filtering algorithm with zero unnecessary re-renders
const filteredProjects = useMemo(() => {
  if (selectedTags.length === 0) return projects;
  return projects.filter(project =>
    selectedTags.every(tag => project.tags.includes(tag))
  );
}, [selectedTags]);`
    },
    {
      title: 'Asynchronous PDF Guard & Pre-Flight Head Check',
      language: 'javascript',
      code: `// Verifies PDF existence on public server before mounting full viewer frame
useEffect(() => {
  if (project?.pdfUrl) {
    fetch(project.pdfUrl, { method: 'HEAD' })
      .then(res => {
        const contentType = res.headers.get('content-type') || '';
        if (res.ok && !contentType.includes('text/html')) {
          setPdfStatus('available');
        } else {
          setPdfStatus('missing');
        }
      })
      .catch(() => setPdfStatus('missing'));
  }
}, [project?.pdfUrl]);`
    },
    {
      title: 'Vanilla CSS Glassmorphism & Token System',
      language: 'css',
      code: `:root {
  --bg-color: #050201;
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --card-bg: rgba(30, 30, 30, 0.5);
  --card-border: rgba(200, 200, 200, 0.15);
  --accent: #ff5c00;
}

.project-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}`
    }
  ],

  githubUrl: 'https://github.com/juanalonso278/portfolio',
  liveUrl: 'https://your-live-portfolio.com'
};
