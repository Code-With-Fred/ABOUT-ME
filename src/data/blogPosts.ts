export interface ContentBlock {
  type: "paragraph" | "heading" | "list" | "quote"
  text?: string
  items?: string[]
}

export interface BlogPost {
  slug: string
  title: string
  /** Meta description — keep under ~160 chars. */
  description: string
  /** Shown on the /blog index card. */
  excerpt: string
  publishDate: string // ISO date
  readingTime: string
  tag: string
  content: ContentBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-a-website-cost-in-nigeria",
    title: "How Much Does a Website Cost in Nigeria? A Real Breakdown",
    description: "What actually drives website pricing in Nigeria — pages, complexity, e-commerce, and ongoing costs — from a developer who builds them, not a generic price list.",
    excerpt: "The honest answer is \"it depends\" — but here's exactly what it depends on, so you can budget with your eyes open before you talk to any developer, including me.",
    publishDate: "2026-08-15",
    readingTime: "7 min read",
    tag: "Pricing & Process",
    content: [
      {
        type: "paragraph",
        text: "\"How much will my website cost?\" is the first question almost every business owner asks, and the honest answer is always \"it depends.\" That's not a dodge — it's true, and I'd rather explain what it actually depends on than hand you a fake price list that doesn't match your project.",
      },
      {
        type: "paragraph",
        text: "I'm not going to quote you a specific number here, because I've seen too many agencies publish a flat \"₦X for a website\" price and then quietly add costs once you're already committed. What I can do is walk you through the real factors that move the price, so when you do talk to a developer — me or anyone else — you know what you're actually being quoted for.",
      },
      {
        type: "heading", text: "1. What kind of site are you actually building?" },
      {
        type: "paragraph",
        text: "\"A website\" isn't one thing. A five-page business site that tells people who you are and how to reach you is a fundamentally different build from an e-commerce store that needs to process payments, track inventory, and manage orders — which is different again from a SaaS platform with user accounts, dashboards, and subscription billing. Each step up adds real engineering work: more pages, more logic, more things that need to keep working correctly after launch.",
      },
      {
        type: "list",
        items: [
          "Business/brochure site: a handful of pages, a contact form, clear information about what you do. The starting point for most small businesses.",
          "E-commerce store: everything a brochure site has, plus a product catalog, cart, checkout, and payment integration (Paystack, Flutterwave, or similar).",
          "Web application / SaaS: user accounts, a real backend, a database, and custom logic specific to your business — the most involved, and priced accordingly.",
        ],
      },
      { type: "heading", text: "2. Design: template vs. custom" },
      {
        type: "paragraph",
        text: "A well-built template can look genuinely good and costs less because the layout and components already exist — the work is mostly customization and content. A fully custom design, built from your brand from scratch, costs more because every screen is designed and built specifically for you. Neither is \"wrong\" — it depends on whether you need to look identical to nobody else, or whether a great execution of a proven layout serves you fine.",
      },
      { type: "heading", text: "3. Features that add real cost" },
      {
        type: "list",
        items: [
          "Payment integration (Paystack, Flutterwave, Stripe)",
          "User accounts and authentication",
          "Admin dashboards for managing your own content or orders",
          "Booking or scheduling systems",
          "Multi-language support",
          "Third-party integrations (email, SMS, CRMs, analytics)",
        ],
      },
      {
        type: "paragraph",
        text: "None of these are exotic — I've built all of them for real projects — but each one is scoped and priced on its own, not bundled invisibly into a flat rate.",
      },
      { type: "heading", text: "4. The cost people forget: after launch" },
      {
        type: "paragraph",
        text: "A website isn't a one-time purchase. Domain renewal, hosting, and any third-party services you're using (payment gateways, email providers) are ongoing costs — usually modest, but real. If a quote doesn't mention what happens after launch, ask. I build every site to be genuinely maintainable, but \"maintainable\" doesn't mean \"free forever\" — plan for it up front rather than being surprised later.",
      },
      { type: "heading", text: "So what should you actually do?" },
      {
        type: "paragraph",
        text: "Come with a clear idea of what you're trying to achieve — not necessarily the technical details, just the outcome. \"I want customers to be able to book appointments online\" or \"I want to sell products directly instead of just taking WhatsApp orders\" is more than enough for a real conversation. A good developer scopes from there and gives you a number that matches your actual project, not a generic package.",
      },
      {
        type: "quote",
        text: "The businesses I've built for — a security tech company, an event decor brand, a catering company, a campus commerce platform — all needed genuinely different things. None of them would have been served well by the same flat-rate package.",
      },
      {
        type: "paragraph",
        text: "If you're at the \"figuring out what this would even cost\" stage, that's exactly the right time to reach out. I'll ask about your actual goals, tell you honestly what's involved, and give you a real number — not a teaser rate with surprises later.",
      },
    ],
  },
  {
    slug: "building-confidantszone-mental-wellness-platform",
    title: "Building ConfidantsZone: A Mental Wellness Platform From Scratch",
    description: "A behind-the-scenes look at building ConfidantsZone — anonymous venting, verified professional matching, and secure sessions — the real decisions, not a highlight reel.",
    excerpt: "Anonymous venting, verified professional matching, secure sessions, and payments — here's how ConfidantsZone actually got built, and the decisions that shaped it.",
    publishDate: "2026-08-22",
    readingTime: "8 min read",
    tag: "Case Study",
    content: [
      {
        type: "paragraph",
        text: "ConfidantsZone started from a simple but real problem: people who need mental health support often face two barriers before they even get to a professional — the stigma of asking for help, and the friction of finding someone who actually fits their situation. The product had to solve both, not just one.",
      },
      { type: "heading", text: "The core decision: venting before matching" },
      {
        type: "paragraph",
        text: "Most therapy-adjacent platforms lead with a signup form and a directory. I built ConfidantsZone to lead with something lower-friction: anonymous venting. A visitor can express what they're going through without creating an account or committing to anything, and get AI-assisted support in the moment. Matching with a verified professional is the next step, not the first gate.",
      },
      {
        type: "paragraph",
        text: "That ordering decision shaped almost everything downstream — the auth flow had to support both anonymous and identified users cleanly, and the professional-matching system had to work whether someone arrived cold from search or came in after venting.",
      },
      { type: "heading", text: "What's actually under the hood" },
      {
        type: "list",
        items: [
          "React + TypeScript on the frontend, Tailwind CSS for the UI",
          "Supabase for auth, database, and real-time features",
          "A verified-professional search and matching system — not a static directory, an actual filterable search",
          "Secure video and audio session infrastructure for professional-to-client calls",
          "Paystack integration for session payments",
          "Admin moderation tooling, since any platform with public content needs a way to review and act on it",
        ],
      },
      { type: "heading", text: "The unglamorous parts that mattered most" },
      {
        type: "paragraph",
        text: "The visible features — venting, matching, video calls — are what a demo shows off. But a meaningful chunk of the real engineering work went into things nobody sees directly: making sure a professional's availability status stays correct across concurrent bookings, making sure a session that drops mid-call has a sane recovery path, and building admin tooling so the platform is actually operable day to day, not just launchable.",
      },
      {
        type: "quote",
        text: "A platform that handles anonymous, sensitive user data has to get its data model and access rules right from day one — retrofitting that later is far more expensive than designing for it up front.",
      },
      { type: "heading", text: "What this project demonstrates" },
      {
        type: "paragraph",
        text: "ConfidantsZone isn't a marketing site — it's full product ownership: authentication, real-time features, payments, admin tooling, and a UI that has to feel trustworthy given what it's asking users to share. That's the category of work I take on when a founder needs more than a brochure site — a real product with real users and real constraints.",
      },
      {
        type: "paragraph",
        text: "If you're building something with a similar shape — accounts, matching or search logic, payments, anything that needs to hold up under real usage — that's exactly the kind of project I'd want to talk through with you.",
      },
    ],
  },
  {
    slug: "signs-your-business-website-needs-a-redesign",
    title: "5 Signs Your Business Website Needs a Redesign",
    description: "Practical, no-fluff signs that your business website is actively costing you customers — and what to actually do about each one.",
    excerpt: "If your site is quietly losing you customers, it's usually one of these five things — and none of them are as expensive to fix as you'd expect.",
    publishDate: "2026-08-29",
    readingTime: "5 min read",
    tag: "Guides",
    content: [
      {
        type: "paragraph",
        text: "Most business owners don't think about their website until something forces the issue — a customer complains, a competitor looks sharper, or they finally look at it on their own phone and cringe. Here are the five signs I actually see most often, and what to do about each one.",
      },
      { type: "heading", text: "1. It doesn't work properly on mobile" },
      {
        type: "paragraph",
        text: "Most of your visitors are on a phone, not a laptop. If text overflows the screen, buttons are too small to tap accurately, or images don't scale, you're actively pushing away the majority of your traffic before they even read what you offer. This is one of the fastest, highest-impact fixes — and one I check for as standard on every build.",
      },
      { type: "heading", text: "2. It's slow" },
      {
        type: "paragraph",
        text: "A slow site doesn't just annoy visitors — it actively hurts your search ranking. Google factors load speed into how it ranks pages. Unoptimized images are the single most common cause I run into: a photo straight from a phone camera can be 5-10x larger than it needs to be for the web with zero visible quality difference once compressed properly.",
      },
      { type: "heading", text: "3. Visitors don't know what to do next" },
      {
        type: "paragraph",
        text: "Open your homepage and ask honestly: is it obvious what you want a visitor to do — call, book, buy, message you on WhatsApp? If there's no clear next step, or five competing ones, visitors leave without acting. A site should have one primary action per page, stated clearly, not buried in a paragraph.",
      },
      { type: "heading", text: "4. It looks like it's from a few years ago" },
      {
        type: "paragraph",
        text: "Design trends move. A site that looked current in 2020 can read as dated now, and for a business, \"dated website\" quietly reads as \"is this business still active / serious / trustworthy?\" — an unfair but real perception you're paying for every day it goes unaddressed.",
      },
      { type: "heading", text: "5. You can't update it yourself" },
      {
        type: "paragraph",
        text: "If changing a phone number or adding a new product means calling a developer and waiting days, your website is a liability, not an asset. Depending on your needs, that's either a sign you need an admin interface built in, or a sign the whole approach needs rethinking.",
      },
      {
        type: "quote",
        text: "None of these are expensive to diagnose. I'll tell you honestly whether your site needs a full rebuild or a few targeted fixes — I'm not going to sell you a rebuild you don't need.",
      },
      {
        type: "paragraph",
        text: "If any of these sound familiar, the fix is usually smaller and cheaper than people expect — but only if you actually look at it. Happy to take a look at yours and tell you straight what's worth fixing.",
      },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
