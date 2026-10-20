// Per-page SEO metadata used at build time (sitemap + prerendered HTML).
// Plain JS so it runs in Node without the Vite/TS pipeline — keep blog entries in
// sync with src/data/blogPosts.ts and page titles in sync with each page's <Helmet>.
export const baseUrl = 'https://codewithfred.com.ng'

export const routes = [
  {
    path: '/',
    title: 'Web Developer in Port Harcourt, Nigeria | Eze Favour',
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
      'Real websites and web apps I have built, including LedgerFlow invoicing SaaS, LeadPilot sales automation, JP2 Solar Energy, ConfidantsZone, KelviqTech, Sassy Hairs, ZOD Stores and Darasun Doors & Furniture.',
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
    title: 'Website Design & Development in Nigeria | Code-With-Fred',
    description:
      'Website development services from Eze Favour, a full-stack developer in Port Harcourt, Nigeria. Modern, responsive, and SEO-ready websites built with React, TypeScript, and Node.js.',
    h1: 'Website Development',
    intro: 'Modern, responsive and SEO-ready websites for businesses in Port Harcourt and across Nigeria.',
  },
  {
    path: '/services/seo-optimization',
    title: 'SEO Services in Nigeria | Get Your Website Found on Google',
    description:
      'SEO optimization services from Eze Favour, a full-stack developer in Port Harcourt, Nigeria. On-page, technical, and local SEO to help your site get found.',
    h1: 'SEO Optimization',
    intro: 'On-page, technical and local SEO to help your business website get found on Google.',
  },
  {
    path: '/services/ecommerce-solutions',
    title: 'E-Commerce Website Development in Nigeria | Online Store Design',
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
    path: '/web-developer-port-harcourt',
    title: 'Web Developer in Port Harcourt | Website Design & Development',
    description:
      'Web developer based in Port Harcourt, Rivers State. I build business websites, online stores and web apps for Port Harcourt companies — and I can meet you in person.',
    h1: 'Web Developer in Port Harcourt',
    intro:
      'Full-stack web developer based in Port Harcourt, building business websites, online stores and web applications for companies across Rivers State.',
  },
  {
    path: '/web-developer-lagos',
    title: 'Web Developer in Lagos | Website Design & E-Commerce Development',
    description:
      'Nigerian web developer building websites, online stores and web apps for Lagos businesses. Remote-first, with clients in catering, beauty, marketing and retail.',
    h1: 'Web Developer for Lagos Businesses',
    intro:
      'Websites, online stores and web applications for Lagos businesses, built remotely with clients in catering, beauty, marketing and retail.',
  },
  {
    path: '/web-developer-abuja',
    title: 'Web Developer in Abuja | Business Website & Web App Development',
    description:
      'Nigerian web developer building business websites, corporate profiles and web applications for Abuja companies, NGOs and consultancies. Remote, with fixed quotes.',
    h1: 'Web Developer for Abuja Businesses',
    intro:
      'Business websites, corporate profiles and web applications for Abuja companies, NGOs and consultancies, built remotely with fixed quotes.',
  },
  {
    path: '/links',
    title: 'Links From My Videos | Code-With-Fred',
    description:
      'Every website, tool and project mentioned in Code-With-Fred videos, in one place. Search for the link you saw, newest videos first.',
    h1: 'Links from my videos',
    intro: 'Every link mentioned in my videos ends up here, newest first.',
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
    path: '/blog/how-to-create-a-business-website-in-nigeria',
    title: 'How to Create a Website for Your Business in Nigeria (Step by Step) | Code-With-Fred Blog',
    description:
      'A step-by-step guide to getting a business website in Nigeria: domain, hosting, building it yourself vs hiring a developer, and getting found on Google.',
    h1: 'How to Create a Website for Your Business in Nigeria (Step by Step)',
    intro:
      'Domain, hosting, DIY builder or developer, what content you need, and the account mistakes that cost business owners their own website. Everything in order.',
  },
  {
    path: '/blog/how-to-start-an-online-store-in-nigeria',
    title: 'How to Start an Online Store in Nigeria: What You Actually Need | Code-With-Fred Blog',
    description:
      'Payments, delivery, product photos, platform choice and trust signals: what it really takes to move a Nigerian business from Instagram DMs to an online store.',
    h1: 'How to Start an Online Store in Nigeria: What You Actually Need',
    intro:
      "Selling through DMs works until it doesn't. Here's what an online store in Nigeria actually needs: payments that settle in naira, delivery that doesn't eat your margin, and enough trust to make strangers pay.",
  },
  {
    path: '/blog/how-to-get-your-business-on-google-nigeria',
    title: 'How to Get Your Business on Google Search and Maps in Nigeria | Code-With-Fred Blog',
    description:
      'How Nigerian businesses show up on Google Maps and in search: Google Business Profile, reviews, Search Console and the mistakes that keep you invisible.',
    h1: 'How to Get Your Business on Google Search and Maps in Nigeria',
    intro:
      "Showing up on Google Maps and showing up in search results are two different things. Here's how to do both — free — and what actually moves you up.",
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
