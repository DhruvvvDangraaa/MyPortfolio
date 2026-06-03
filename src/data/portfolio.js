import {
  FaJava,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaLinkedin,
  FaDatabase,
  FaBrain,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiMysql,
  SiTailwindcss,
} from 'react-icons/si';
import { TbApi, TbBrandOpenai, TbGitBranch } from 'react-icons/tb';

export const navItems = ['Home', 'About', 'Skills', 'Projects', 'Timeline', 'Contact'];

export const skills = [
  { name: 'Java', level: 92, category: 'Backend', icon: FaJava },
  { name: 'Spring Boot', level: 88, category: 'Backend', icon: SiSpringboot },
  { name: 'Spring Security', level: 82, category: 'Backend', icon: SiSpringsecurity },
  { name: 'Spring AI', level: 78, category: 'AI', icon: TbBrandOpenai },
  { name: 'Hibernate', level: 84, category: 'Backend', icon: SiHibernate },
  { name: 'MySQL', level: 86, category: 'Database', icon: SiMysql },
  { name: 'React.js', level: 88, category: 'Frontend', icon: FaReact },
  { name: 'JavaScript', level: 86, category: 'Frontend', icon: FaJs },
  { name: 'HTML5', level: 91, category: 'Frontend', icon: FaHtml5 },
  { name: 'CSS3', level: 89, category: 'Frontend', icon: FaCss3Alt },
  { name: 'Tailwind CSS', level: 87, category: 'Frontend', icon: SiTailwindcss },
  { name: 'Git & GitHub', level: 85, category: 'Tools', icon: TbGitBranch },
  { name: 'REST APIs', level: 90, category: 'Backend', icon: TbApi },
  { name: 'Machine Learning', level: 76, category: 'AI', icon: FaBrain },
  { name: 'Artificial Intelligence', level: 80, category: 'AI', icon: TbBrandOpenai },
];

export const projects = [
  {
    title: 'AI Plant Disease Detection System',
    category: 'AI',
    image: '/projects/plant-disease.svg',
    description:
      'Computer vision platform that helps farmers identify crop diseases from leaf images and receive treatment suggestions.',
    technologies: ['Python', 'TensorFlow', 'React', 'Spring Boot', 'MySQL'],
    features: ['Image classification workflow', 'Treatment recommendation engine', 'Farmer-friendly dashboard'],
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
  {
    title: 'Smart Farmer Weather Prediction App',
    category: 'AI',
    image: '/projects/weather-app.svg',
    description:
      'Weather intelligence app that combines forecasts, farming alerts, and decision support for crop planning.',
    technologies: ['Java', 'Spring Boot', 'React', 'REST APIs', 'Tailwind CSS'],
    features: ['Weather API integration', 'Crop risk alerts', 'Responsive farmer dashboard'],
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
  {
    title: 'Tree Census Management System',
    category: 'Full Stack',
    image: '/projects/tree-census.svg',
    description:
      'Civic data platform for recording, managing, and visualizing tree census information across local regions.',
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'React'],
    features: ['Role-based workflows', 'GIS-ready records', 'Search and reporting tools'],
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
  {
    title: 'Jewellery E-Commerce Platform',
    category: 'Full Stack',
    image: '/projects/jewellery.svg',
    description:
      'Premium online jewellery storefront with catalog browsing, cart flows, admin management, and responsive UI.',
    technologies: ['Java', 'Spring MVC', 'MySQL', 'JavaScript', 'Bootstrap'],
    features: ['Product catalog', 'Shopping cart', 'Admin inventory management'],
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
  {
    title: 'Predesk',
    category: 'Full Stack',
    image: '/projects/emotion-ai.svg',
    description:
      'A productivity-focused desk and task management platform designed to organize workflows, requests, and team operations from one clean interface.',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs'],
    features: ['Task and request tracking', 'Role-ready dashboard flows', 'Clean productivity-focused UI'],
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
];

export const achievements = [
  {
    label: 'Certifications',
    items: ['Java Full Stack Development', 'Spring Boot fundamentals', 'AI and Machine Learning foundations'],
  },
  {
    label: 'Internships',
    items: ['Hands-on full stack development', 'Database-driven web apps', 'REST API implementation'],
  },
  {
    label: 'Technical Achievements',
    items: ['Built production-style Java projects', 'Integrated AI workflows into applications', 'Created responsive React interfaces'],
  },
  {
    label: 'Hackathons',
    items: ['Rapid prototyping', 'Team collaboration', 'Problem-first product thinking'],
  },
];

export const timeline = [
  {
    year: '2023',
    title: 'Full Stack Foundations',
    detail: 'Built core strength in Java, SQL, web fundamentals, and object-oriented application design.',
  },
  {
    year: '2024',
    title: 'Spring Boot & React Growth',
    detail: 'Moved into API-driven products using Spring Boot, Hibernate, MySQL, React, and modern UI workflows.',
  },
  {
    year: '2025',
    title: 'AI Product Experiments',
    detail: 'Applied machine learning and AI concepts to agriculture, productivity workflows, and intelligent assistants.',
  },
  {
    year: 'Now',
    title: 'Career Goal',
    detail: 'Seeking impactful Java full stack roles where scalable backend systems meet thoughtful AI-enabled user experiences.',
  },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:dhruvdangra@example.com', icon: FaDatabase },
];
