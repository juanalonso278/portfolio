import wireframeImg from '../assets/portfolio-wireframe.png';

export const personalPortfolio = {
  id: 4,
  title: 'Personal Engineering Portfolio',
  synopsis: 'A clean, responsive personal website built with React to showcase my engineering projects.',
  description: 'I built this website to share my journey in computer engineering and software development. Instead of using heavy templates, I kept things simple and fast using React. The goal was to create a modern, sleek design with a "glass-like" feel that is easy to navigate. You can filter through my projects instantly, read detailed reports, and watch videos of my work in action. And for the demo... you\'re looking at it! This is the demo lol.',
  tags: ['react', 'javascript', 'css', 'frontend', 'ui-ux', 'figma'],
  thumbnail: wireframeImg,
  images: [
    {
      title: 'UI/UX Wireframe',
      description: 'Early stage prototyping of the portfolio layout. This wireframe establishes a clean, grid-based structure for the project cards and a minimalist aesthetic that places the focus entirely on the engineering content.',
      url: wireframeImg
    }
  ],

  techStack: [
    { category: 'Frontend', name: 'React & JavaScript', details: 'Used for building the interactive parts of the website, like the project filters and page navigation.' },
    { category: 'Styling', name: 'Custom CSS', details: 'Created a sleek, dark-mode design with smooth animations and a translucent, glass-like feel.' },
    { category: 'Build Tools', name: 'Vite', details: 'Helps keep the website loading incredibly fast for anyone visiting.' }
  ],

  architectureSections: [
    {
      title: 'Easy to Update',
      content: 'I set up the code so that adding new projects is as simple as dropping in a new file. The website automatically reads the new information and creates a beautiful layout for it without me needing to redesign the page.'
    },
    {
      title: 'Modern, Clean Design',
      content: 'The design focuses on deep dark colors, glowing orange accents, and translucent cards to give it a premium, modern look that adapts perfectly to both phones and large monitors.'
    },
    {
      title: 'Instant Filtering',
      content: 'When you click on the project tags on the home page, the website instantly updates to show relevant projects without needing to reload or wait.'
    },
    {
      title: 'UI/UX Wireframing',
      content: 'Before writing any code, the layout was prototyped using a wireframe (shown in the project images). This helped establish a clean, grid-based structure for the project cards and a minimalist aesthetic that places the focus entirely on the engineering content.'
    }
  ],

  features: [
    'Fast and smooth navigation',
    'Clean, modern dark-mode design with glowing accents',
    'Instant project filtering by tags',
    'Built-in PDF viewer for reading project reports directly on the page',
    'This is the demo lol'
  ],

  githubUrl: 'https://github.com/juanalonso278/portfolio',
  liveUrl: 'https://juanalonso278.github.io/portfolio/'
};
