// City landing pages targeting "web developer in <city>" searches.
// Each city gets genuinely different copy — same page three times would be a
// doorway page, which Google demotes. Only Port Harcourt claims a physical
// presence; Lagos and Abuja are served remotely and say so.

export interface LocationFaq {
  question: string
  answer: string
}

export interface Location {
  slug: string
  city: string
  state: string
  title: string
  description: string
  h1: string
  intro: string
  localAngle: string
  industries: string[]
  proof: string
  faqs: LocationFaq[]
}

export const locations: Location[] = [
  {
    slug: "web-developer-port-harcourt",
    city: "Port Harcourt",
    state: "Rivers State",
    title: "Web Developer in Port Harcourt | Website Design & Development",
    description:
      "Web developer based in Port Harcourt, Rivers State. I build business websites, online stores and web apps for Port Harcourt companies — and I can meet you in person.",
    h1: "Web Developer in Port Harcourt",
    intro:
      "I am Eze Favour (Code-With-Fred), a full-stack web developer based in Port Harcourt. I build business websites, online stores and web applications for companies here in Rivers State — and because I am local, we can meet in person to plan the project instead of doing everything over chat.",
    localAngle:
      "Most Port Harcourt businesses I speak to are not short of customers — they are short of a place to send them. A WhatsApp catalogue works until someone asks for your prices at 11pm, or a corporate client asks for a company profile they can verify. A proper website answers both without you typing a word.",
    industries: [
      "Oil and gas service companies needing a credible corporate profile",
      "Spas, salons and clinics taking bookings",
      "Schools and training centres collecting admissions enquiries",
      "Shops and distributors selling online",
      "Logistics and equipment suppliers quoting from a catalogue",
    ],
    proof:
      "I work from Port Harcourt and build for clients across Nigeria, from security technology and catering companies to spas, hair brands, furniture retailers and a mental wellness platform.",
    faqs: [
      {
        question: "How much does a website cost in Port Harcourt?",
        answer:
          "It depends on the number of pages, whether you need online payments, and how much content has to be created. A simple business website costs far less than an online store with checkout and inventory. I break the real pricing factors down in my blog post on what a website costs in Nigeria, and I give you a fixed quote before any work starts.",
      },
      {
        question: "Can we meet in person in Port Harcourt?",
        answer:
          "Yes. I am based in Port Harcourt, so we can meet to go through what you need before I start. After that, most of the work happens remotely with regular updates you can review.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "A straightforward business website usually takes one to two weeks once I have your content — logo, photos, services and prices. Online stores and web applications take longer because of payments, accounts and testing.",
      },
      {
        question: "Do you also handle hosting and the domain name?",
        answer:
          "Yes. I can register your domain, set up hosting and connect your business email, then hand over the logins so the accounts belong to you, not to me.",
      },
    ],
  },
  {
    slug: "web-developer-lagos",
    city: "Lagos",
    state: "Lagos State",
    title: "Web Developer in Lagos | Website Design & E-Commerce Development",
    description:
      "Nigerian web developer building websites, online stores and web apps for Lagos businesses. Remote-first, with clients in catering, beauty, marketing and retail.",
    h1: "Web Developer for Lagos Businesses",
    intro:
      "I build websites, online stores and web applications for businesses in Lagos. I work from Port Harcourt rather than a Lagos office, so everything runs remotely — calls, progress links you can click, and a site you sign off on before it goes live.",
    localAngle:
      "Lagos is the most competitive market in the country, which means your website is usually the second thing a customer checks after your Instagram. If it loads slowly, looks dated or cannot take an order, the next brand in the search results gets the sale. Speed, mobile layout and a working checkout matter more here than anywhere else.",
    industries: [
      "Fashion, hair and beauty brands selling online",
      "Catering and event companies taking bookings",
      "Marketing and creative agencies showing case studies",
      "Retailers and distributors moving from Instagram to a real store",
      "Startups needing a product site or web app",
    ],
    proof:
      "Lagos businesses I have built for include Captain Black Global Services (luxury catering), Ceendy Spa Aesthetics (booking-first spa site) and Anaconda Marketing (an AI and SEO agency).",
    faqs: [
      {
        question: "Do you work with Lagos clients even though you are in Port Harcourt?",
        answer:
          "Yes, and most of my Lagos projects have run entirely remotely. You get a link to the work in progress at every stage, so you can see exactly what you are paying for without us being in the same room.",
      },
      {
        question: "Can you build an online store that accepts payments in Nigeria?",
        answer:
          "Yes. I build stores that take card, bank transfer and USSD payments through Nigerian payment providers, with the money settling directly into your own business account.",
      },
      {
        question: "Can you redesign a website I already have?",
        answer:
          "Yes. A redesign is often faster than starting over because the content already exists. I keep what is working, fix what is costing you customers, and make sure the new version does not lose your existing search rankings.",
      },
      {
        question: "How do we start?",
        answer:
          "Message me with what your business does and what you want the website to achieve. I reply with what it will take, a timeline and a fixed price before any work begins.",
      },
    ],
  },
  {
    slug: "web-developer-abuja",
    city: "Abuja",
    state: "FCT",
    title: "Web Developer in Abuja | Business Website & Web App Development",
    description:
      "Nigerian web developer building business websites, corporate profiles and web applications for Abuja companies, NGOs and consultancies. Remote, with fixed quotes.",
    h1: "Web Developer for Abuja Businesses",
    intro:
      "I build business websites, corporate profiles and web applications for organisations in Abuja. I am based in Port Harcourt and work with Abuja clients remotely, which keeps the cost down without changing what you get at the end.",
    localAngle:
      "Abuja work tends to be credibility-first. Consultancies, NGOs and contractors are often judged on whether their website looks like a real organisation before anyone reads a proposal. That means clear service pages, a team or about section that builds trust, and documents a visitor can actually download.",
    industries: [
      "Consultancies and professional services firms",
      "NGOs and development organisations publishing programmes and reports",
      "Contractors and suppliers needing a verifiable company profile",
      "Training institutes handling registrations",
      "Health and wellness practices taking appointments",
    ],
    proof:
      "Related work includes Thrive Africa Health Initiative, a community health nonprofit site with programme pages and a donation flow, and ConfidantsZone, a platform matching people with verified wellness professionals.",
    faqs: [
      {
        question: "Do you have an office in Abuja?",
        answer:
          "No. I am based in Port Harcourt and work with Abuja clients remotely. I would rather be straightforward about that than claim an address I do not have — the work and the support are the same either way.",
      },
      {
        question: "Can you build a website for an NGO or a nonprofit?",
        answer:
          "Yes. I have built for a health nonprofit, including programme pages, impact sections and a donation flow. Nonprofits usually need the site to serve donors, volunteers and beneficiaries at once, so the structure matters more than the visuals.",
      },
      {
        question: "What do you need from me before starting?",
        answer:
          "Your logo, a short description of what the organisation does, the services or programmes you want listed, contact details, and any photos you want used. If the content is not ready, I can help shape it.",
      },
      {
        question: "Do you provide support after the site goes live?",
        answer:
          "Yes. I fix anything broken after launch, and I can handle ongoing updates if you would rather not edit the site yourself.",
      },
    ],
  },
]

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug)
}
