// Per-page SEO metadata used at build time (sitemap + prerendered HTML).
// Plain JS so it runs in Node without the Vite/TS pipeline — keep blog entries in
// sync with src/data/blogPosts.ts and page titles in sync with each page's <Helmet>.
export const baseUrl = 'https://codewithfred.com.ng'

export const routes = [
  {
    path: '/',
    title: 'Web Developer in Port Harcourt, Nigeria | Eze Favour - Code-With-Fred',
    description:
      'Eze Favour (Code-With-Fred) builds fast, mobile-friendly websites, e-commerce stores and web apps for businesses in Port Harcourt, Lagos, Abuja and across Nigeria.',
    h1: 'Web Developer in Port Harcourt, Nigeria',
    intro:
      'I am Eze Favour (Code-With-Fred), a full-stack developer building business websites, e-commerce stores and web applications for clients across Nigeria.',
  },
  {
    path: '/about',
    title: 'About Eze Favour Chimereze | Software Engineer & Technical Writer Nigeria',
    description:
      'Learn about Eze Favour Chimereze, a passionate software engineer, web developer, and technical writer from Port Harcourt, Nigeria. Discover my journey, expertise, and what drives my work.',
    h1: 'About Eze Favour',
    intro: 'Software engineer, web developer and technical writer based in Port Harcourt, Nigeria.',
  },
  {
    path: '/projects',
    title: 'Portfolio & Projects | Eze Favour Chimereze | Web Developer Nigeria',
    description:
      'Explore my portfolio of web development projects including e-commerce websites, business applications, and custom web solutions. See real examples of my work as a web developer in Nigeria.',
    h1: 'Projects',
    intro:
      'Real websites and web apps I have built, including ConfidantsZone, KelviqTech, Ceendy Spa Aesthetics, Sassy Hairs, ZOD Stores, Darasun Doors & Furniture and Thrive Africa Health Initiative.',
  },
  {
    path: '/services',
    title: 'Web Development Services | Eze Favour Chimereze | Port Harcourt, Lagos, Abuja',
    description:
      'Professional web development services including custom websites, e-commerce solutions, web applications, and technical writing. Serving clients in Port Harcourt, Lagos, Abuja, and worldwide.',
    h1: 'Web Development Services',
    intro: 'Business websites, e-commerce stores, web applications, redesigns and SEO for businesses in Nigeria.',
  },
  {
    path: '/services/web-development',
    title: 'Website Development Services | Eze Favour | Port Harcourt, Nigeria',
    description:
      'Website development services from Eze Favour, a full-stack developer in Port Harcourt, Nigeria. Modern, responsive, and SEO-ready websites built with React, TypeScript, and Node.js.',
    h1: 'Website Development',
    intro: 'Modern, responsive and SEO-ready websites for businesses in Port Harcourt and across Nigeria.',
  },
  {
    path: '/services/seo-optimization',
    title: 'SEO Optimization Services | Eze Favour | Port Harcourt, Nigeria',
    description:
      'SEO optimization services from Eze Favour, a full-stack developer in Port Harcourt, Nigeria. On-page, technical, and local SEO to help your site get found.',
    h1: 'SEO Optimization',
    intro: 'On-page, technical and local SEO to help your business website get found on Google.',
  },
  {
    path: '/services/ecommerce-solutions',
    title: 'E-Commerce Development | Eze Favour | Port Harcourt, Nigeria',
    description:
      'Custom e-commerce development from Eze Favour, a full-stack developer in Port Harcourt, Nigeria. Online stores with payment integration, inventory management, and SEO built in.',
    h1: 'E-Commerce Development',
    intro: 'Online stores with payment integration, inventory management and SEO built in.',
  },
  {
    path: '/skills',
    title: 'Technical Skills | Eze Favour Chimereze | React, Node.js, Full Stack Developer Nigeria',
    description:
      'Discover the technical skills of Eze Favour Chimereze: React.js, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, and 40+ tools & technologies. Expert full-stack developer in Port Harcourt, Lagos, and Abuja, Nigeria.',
    h1: 'Technical Skills',
    intro: 'React, Next.js, Node.js, TypeScript, PostgreSQL, Supabase and the tools I use to build for clients.',
  },
  {
    path: '/testimonials',
    title: 'Working With Me | Eze Favour Chimereze | Web Developer',
    description:
      'What working with Eze Favour Chimereze looks like: a full-stack web developer in Port Harcourt, Nigeria, building for clients across Lagos, Abuja, and worldwide.',
    h1: 'Working With Me',
    intro: 'How I work with clients, from first message to launch.',
  },
  {
    path: '/contact',
    title: 'Contact Eze Favour Chimereze | Hire a Web Developer in Nigeria',
    description:
      'Get in touch with Eze Favour Chimereze for your web development project. Based in Port Harcourt, serving clients in Lagos, Abuja, and worldwide. Request a free consultation today.',
    h1: 'Hire a Web Developer in Nigeria',
    intro: 'Email ezefavourchimereze@gmail.com or call/WhatsApp +234 704 164 8121 to discuss your project.',
  },
  {
    path: '/blog',
    title: 'Blog | Web Development Insights | Eze Favour - Code-With-Fred',
    description:
      'Practical guides on website costs, redesigns, and real project case studies from a full-stack developer in Port Harcourt, Nigeria.',
    h1: 'Blog',
    intro: 'Practical guides on website costs, redesigns and real project case studies.',
  },
  {
    path: '/blog/how-much-does-a-website-cost-in-nigeria',
    title: 'How Much Does a Website Cost in Nigeria? A Real Breakdown | Code-With-Fred Blog',
    description:
      'What actually drives website pricing in Nigeria — pages, complexity, e-commerce, and ongoing costs — from a developer who builds them, not a generic price list.',
    h1: 'How Much Does a Website Cost in Nigeria? A Real Breakdown',
    intro:
      'The honest answer is "it depends" — but here\'s exactly what it depends on, so you can budget with your eyes open before you talk to any developer, including me.',
  },
  {
    path: '/blog/building-confidantszone-mental-wellness-platform',
    title: 'Building ConfidantsZone: A Mental Wellness Platform From Scratch | Code-With-Fred Blog',
    description:
      'A behind-the-scenes look at building ConfidantsZone — anonymous venting, verified professional matching, and secure sessions — the real decisions, not a highlight reel.',
    h1: 'Building ConfidantsZone: A Mental Wellness Platform From Scratch',
    intro:
      'Anonymous venting, verified professional matching, secure sessions, and payments — here\'s how ConfidantsZone actually got built, and the decisions that shaped it.',
  },
  {
    path: '/blog/signs-your-business-website-needs-a-redesign',
    title: '5 Signs Your Business Website Needs a Redesign | Code-With-Fred Blog',
    description:
      'Practical, no-fluff signs that your business website is actively costing you customers — and what to actually do about each one.',
    h1: '5 Signs Your Business Website Needs a Redesign',
    intro:
      "If your site is quietly losing you customers, it's usually one of these five things — and none of them are as expensive to fix as you'd expect.",
  },
]
