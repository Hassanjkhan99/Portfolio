export interface TechItem {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud';
  color: string;
  description: string;
}

export const techStack: TechItem[] = [
  // Frontend Technologies
  {
    name: 'React',
    icon: '/portfolio/assets/logos/react.svg',
    category: 'frontend',
    color: '#61DAFB',
    description: 'Frontend library for building user interfaces'
  },
  {
    name: 'Next.js',
    icon: '/portfolio/assets/logos/next.svg',
    category: 'frontend',
    color: '#000000',
    description: 'React framework for production'
  },
  {
    name: 'TypeScript',
    icon: '/portfolio/assets/logos/typescript.svg',
    category: 'frontend',
    color: '#3178C6',
    description: 'Typed JavaScript for better development'
  },
  {
    name: 'Tailwind CSS',
    icon: '/portfolio/assets/logos/tailwindcss.svg',
    category: 'frontend',
    color: '#06B6D4',
    description: 'Utility-first CSS framework'
  },
  {
    name: 'HTML5',
    icon: '/portfolio/assets/logos/html5.svg',
    category: 'frontend',
    color: '#E34F26',
    description: 'Markup language for web pages'
  },
  {
    name: 'CSS3',
    icon: '/portfolio/assets/logos/css3.svg',
    category: 'frontend',
    color: '#1572B6',
    description: 'Styling language for web pages'
  },
  {
    name: 'JavaScript',
    icon: '/portfolio/assets/logos/javascript.svg',
    category: 'frontend',
    color: '#F7DF1E',
    description: 'Programming language for web development'
  },
  {
    name: 'Three.js',
    icon: '/portfolio/assets/logos/threejs.svg',
    category: 'frontend',
    color: '#000000',
    description: '3D graphics library for web'
  },
  {
    name: 'Framer Motion',
    icon: '/portfolio/assets/framer.png',
    category: 'frontend',
    color: '#0055FF',
    description: 'Animation library for React'
  },

  // Backend Technologies
  {
    name: 'Node.js',
    icon: '/portfolio/assets/node-js.png',
    category: 'backend',
    color: '#339933',
    description: 'JavaScript runtime for server-side development'
  },
  {
    name: '.NET',
    icon: '/portfolio/assets/logos/dotnet.svg',
    category: 'backend',
    color: '#512BD4',
    description: 'Microsoft development framework'
  },
  {
    name: 'C#',
    icon: '/portfolio/assets/logos/csharp.svg',
    category: 'backend',
    color: '#239120',
    description: 'Microsoft programming language'
  },
  {
    name: 'Blazor',
    icon: '/portfolio/assets/logos/blazor.svg',
    category: 'backend',
    color: '#512BD4',
    description: 'Web framework using C#'
  },
  {
    name: 'C++',
    icon: '/portfolio/assets/logos/cplusplus.svg',
    category: 'backend',
    color: '#00599C',
    description: 'General-purpose programming language'
  },

  // Database Technologies
  {
    name: 'MongoDB',
    icon: '/portfolio/assets/mongodb.png',
    category: 'database',
    color: '#47A248',
    description: 'NoSQL document database'
  },
  {
    name: 'PostgreSQL',
    icon: '/portfolio/assets/postges.png',
    category: 'database',
    color: '#336791',
    description: 'Advanced open-source database'
  },
  {
    name: 'MySQL',
    icon: '/portfolio/assets/mysql.png',
    category: 'database',
    color: '#4479A1',
    description: 'Relational database management system'
  },
  {
    name: 'SQLite',
    icon: '/portfolio/assets/logos/sqlite.svg',
    category: 'database',
    color: '#003B57',
    description: 'Lightweight database engine'
  },
  {
    name: 'SQL Server',
    icon: '/portfolio/assets/logos/microsoftsqlserver.svg',
    category: 'database',
    color: '#CC2927',
    description: 'Microsoft SQL Server database'
  },

  // Tools & Platforms
  {
    name: 'Git',
    icon: '/portfolio/assets/logos/git.svg',
    category: 'tools',
    color: '#F05032',
    description: 'Version control system'
  },
  {
    name: 'GitHub',
    icon: '/portfolio/assets/logos/github.svg',
    category: 'tools',
    color: '#181717',
    description: 'Code hosting platform'
  },
  {
    name: 'Docker',
    icon: '/portfolio/assets/docker.webp',
    category: 'tools',
    color: '#2496ED',
    description: 'Containerization platform'
  },
  {
    name: 'VS Code',
    icon: '/portfolio/assets/logos/visualstudiocode.svg',
    category: 'tools',
    color: '#007ACC',
    description: 'Code editor'
  },
  {
    name: 'Vite',
    icon: '/portfolio/assets/logos/vitejs.svg',
    category: 'tools',
    color: '#646CFF',
    description: 'Build tool for modern web'
  },
  {
    name: 'Prisma',
    icon: '/portfolio/assets/prisma.webp',
    category: 'tools',
    color: '#2D3748',
    description: 'Database toolkit'
  },

  // Cloud & Services
  {
    name: 'Azure',
    icon: '/portfolio/assets/logos/azure.svg',
    category: 'cloud',
    color: '#0078D4',
    description: 'Microsoft cloud platform'
  },
  {
    name: 'Auth0',
    icon: '/portfolio/assets/logos/auth0.svg',
    category: 'cloud',
    color: '#EB5424',
    description: 'Authentication platform'
  },
  {
    name: 'Stripe',
    icon: '/portfolio/assets/logos/stripe.svg',
    category: 'cloud',
    color: '#008CDD',
    description: 'Payment processing platform'
  },
  {
    name: 'Vercel',
    icon: '/portfolio/assets/vercel.svg',
    category: 'cloud',
    color: '#000000',
    description: 'Deployment platform'
  },
  {
    name: 'WordPress',
    icon: '/portfolio/assets/logos/wordpress.svg',
    category: 'cloud',
    color: '#21759B',
    description: 'Content management system'
  },
  {
    name: 'Microsoft',
    icon: '/portfolio/assets/logos/microsoft.svg',
    category: 'cloud',
    color: '#0078D4',
    description: 'Microsoft technologies'
  }
];

export const getTechByCategory = (category: TechItem['category']) => {
  return techStack.filter(tech => tech.category === category);
};

export const getRandomTechStack = (count: number = 8) => {
  const shuffled = [...techStack].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}; 