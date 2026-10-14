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
  /** Internal pages this post should send readers (and link equity) to. */
  related?: { label: string; href: string }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-create-a-business-website-in-nigeria",
    title: "How to Create a Website for Your Business in Nigeria (Step by Step)",
    description: "A step-by-step guide to getting a business website in Nigeria: domain, hosting, building it yourself vs hiring a developer, and getting found on Google.",
    excerpt: "Domain, hosting, DIY builder or developer, what content you need, and the account mistakes that cost business owners their own website. Everything in order.",
    publishDate: "2026-10-14",
    readingTime: "8 min read",
    tag: "Guides",
    related: [
      { label: "Website design & development in Nigeria", href: "/services/web-development" },
      { label: "How much does a website cost in Nigeria?", href: "/blog/how-much-does-a-website-cost-in-nigeria" },
      { label: "Web developer in Port Harcourt", href: "/web-developer-port-harcourt" },
    ],
    content: [
      {
        type: "paragraph",
        text: "Most Nigerian businesses already sell through WhatsApp and Instagram, and that works — until a customer wants to check you out before paying, a corporate client asks for your website, or Instagram restricts your account the week of a big sale. A website is the one place online you own and control.",
      },
      {
        type: "paragraph",
        text: "This guide walks through the whole process in the order it actually happens, whether you build it yourself or hire someone. I build websites for a living, so I will tell you where hiring is worth it and where it is not.",
      },
      { type: "heading", text: "Step 1: Decide what the website has to do" },
      {
        type: "paragraph",
        text: "Before domains or designs, write one sentence: what should a visitor do on this site? \"Call us for a quote.\" \"Book an appointment.\" \"Buy a product.\" \"Check that we are a real company before signing a contract.\" That sentence decides almost everything else — how many pages you need, whether you need payments, and how much it will cost.",
      },
      {
        type: "list",
        items: [
          "Show credibility and get enquiries: a business website with 4 to 6 pages (home, services, about, contact, maybe a portfolio).",
          "Take bookings: the same, plus a booking form or calendar.",
          "Sell products online: an online store with a catalogue, cart and payments.",
          "Run a service people log into: a web application, which is a much bigger project.",
        ],
      },
      { type: "heading", text: "Step 2: Register a domain name — in your own name" },
      {
        type: "paragraph",
        text: "Your domain is your address online, like yourbusiness.com.ng or yourbusiness.com. A .com.ng tells visitors you are a Nigerian business, and .ng domains are managed by NiRA (the Nigeria Internet Registration Association) and sold through accredited registrars. A .com works anywhere. Many businesses register both.",
      },
      {
        type: "paragraph",
        text: "The single most expensive mistake I see: letting a developer or agency register the domain under their own account. When the relationship ends, you can lose your website address and every email address on it. Whoever builds your site, make sure the domain is registered with your name and email, and that you have the login.",
      },
      { type: "heading", text: "Step 3: Choose where the website will live (hosting)" },
      {
        type: "paragraph",
        text: "Hosting is the server that shows your website to visitors. If you use a website builder like Wix or Shopify, hosting is included in the monthly fee. If a developer builds your site, they will usually recommend a host — modern sites are often hosted on platforms like Vercel or Netlify, while WordPress sites need traditional hosting. What matters to you: the site loads fast in Nigeria, it has an SSL certificate (the padlock in the browser), and again — the account is in your name.",
      },
      { type: "heading", text: "Step 4: Build it yourself or hire a developer?" },
      {
        type: "paragraph",
        text: "Honest answer: you can build a decent simple website yourself with a builder like Wix, Squarespace or Shopify, and for some businesses that is the right call. Here is how to decide.",
      },
      {
        type: "list",
        items: [
          "Do it yourself if: you need a simple site, you have time to learn the builder, you are comfortable writing your own copy, and you can live with a template look.",
          "Hire a developer if: you need custom features (bookings, payments in naira, customer accounts), you want the site to rank on Google for competitive searches, your brand needs to look different from everyone using the same template, or your time is worth more than the cost.",
          "Watch the ongoing cost: builders charge monthly, often in dollars, forever. A custom site has a bigger upfront cost but lower running costs.",
        ],
      },
      { type: "heading", text: "Step 5: Prepare your content before the design" },
      {
        type: "paragraph",
        text: "The thing that delays most website projects is not the building — it is waiting for content. Gather these before you start and your site can be ready in days instead of months:",
      },
      {
        type: "list",
        items: [
          "Your logo, ideally as a high-resolution PNG or SVG.",
          "A list of your services or products, with prices if you want them shown.",
          "Real photos of your work, your team, your shop or your products. Real photos convert better than stock photos.",
          "A short \"about us\" — who you are, how long you have been operating, where you are based.",
          "Contact details: phone, WhatsApp, email, address or service area.",
          "Any reviews or testimonials from real customers, with their permission.",
        ],
      },
      { type: "heading", text: "Step 6: The features every Nigerian business site needs" },
      {
        type: "list",
        items: [
          "Mobile-first design. Most of your visitors are on phones, often on mobile data. If it does not work well on a phone, it does not work.",
          "Fast loading. Compressed images and lean code. A slow site loses visitors before they see anything.",
          "A WhatsApp button. Nigerian customers often prefer to start a conversation on WhatsApp rather than fill a form.",
          "Clear prices or a clear way to get a quote. \"DM for price\" frustrates people who found you on Google.",
          "Your location or service area, so local customers know you can serve them.",
        ],
      },
      { type: "heading", text: "Step 7: Launch, then make sure people can find it" },
      {
        type: "paragraph",
        text: "A new website does not appear on Google automatically on launch day. Add it to Google Search Console (free) and submit your sitemap so Google knows your pages exist. Create or update your Google Business Profile so you show up on Google Maps. Then put the link everywhere you already have customers: your Instagram bio, WhatsApp Business profile, email signature and invoices.",
      },
      {
        type: "quote",
        text: "A website nobody visits is just an expensive business card. Plan how people will find it at the same time as you plan how it will look.",
      },
      { type: "heading", text: "Checklist before you sign off on any website" },
      {
        type: "list",
        items: [
          "The domain and hosting accounts are in your name, and you have the logins.",
          "Every page works on a phone.",
          "The contact form actually delivers to an inbox you check — test it.",
          "The WhatsApp button opens a chat with the right number.",
          "The site is submitted to Google Search Console.",
        ],
      },
      {
        type: "paragraph",
        text: "If you would rather hand the whole thing to someone, that is what I do — I build business websites for companies across Nigeria, and you get the logins to everything. Tell me what you want the site to achieve and I will give you a fixed quote.",
      },
    ],
  },
  {
    slug: "how-to-start-an-online-store-in-nigeria",
    title: "How to Start an Online Store in Nigeria: What You Actually Need",
    description: "Payments, delivery, product photos, platform choice and trust signals: what it really takes to move a Nigerian business from Instagram DMs to an online store.",
    excerpt: "Selling through DMs works until it doesn't. Here's what an online store in Nigeria actually needs: payments that settle in naira, delivery that doesn't eat your margin, and enough trust to make strangers pay.",
    publishDate: "2026-10-14",
    readingTime: "8 min read",
    tag: "E-Commerce",
    related: [
      { label: "E-commerce website development in Nigeria", href: "/services/ecommerce-solutions" },
      { label: "Web developer for Lagos businesses", href: "/web-developer-lagos" },
      { label: "How much does a website cost in Nigeria?", href: "/blog/how-much-does-a-website-cost-in-nigeria" },
    ],
    content: [
      {
        type: "paragraph",
        text: "A lot of Nigerian businesses start selling on Instagram and WhatsApp, and plenty grow big that way. But the same problems show up as orders increase: answering \"how much?\" fifty times a day, confirming transfers manually, customers who will not send money to a personal account, and no way to sell while you sleep.",
      },
      {
        type: "paragraph",
        text: "An online store fixes those — if it is set up properly. I have built stores for hair, fashion and furniture brands in Nigeria, and these are the parts that actually decide whether one works.",
      },
      { type: "heading", text: "1. Payments: let customers pay without a transfer screenshot" },
      {
        type: "paragraph",
        text: "The biggest upgrade over DMs is automatic payment. Nigerian payment gateways like Paystack and Flutterwave let customers pay by card, bank transfer or USSD on your site, and the money settles into your business bank account. You see the order and the payment together — no screenshots, no \"I have sent it\" messages to check.",
      },
      {
        type: "list",
        items: [
          "Gateways charge a fee per transaction. Check each provider's current pricing page, because fees change, and build the fee into your prices.",
          "Payment providers usually ask for business details to fully activate your account. A CAC-registered business generally gets full access; unregistered businesses may be limited. Start the activation early — it can take days.",
          "Payments should settle into an account in your business's name, not the developer's.",
        ],
      },
      { type: "heading", text: "2. Delivery: decide before you launch" },
      {
        type: "paragraph",
        text: "Delivery is where Nigerian online stores lose money quietly. Before launch, decide exactly how it works, because your checkout has to show the right delivery fee.",
      },
      {
        type: "list",
        items: [
          "Who delivers: your own dispatch rider, a logistics company, or customer pickup.",
          "How you charge: a flat fee, fees by zone (mainland, island, outside the state), or free delivery above a certain order value.",
          "Pay on delivery or not: it increases trust and orders, but you carry the risk of refused deliveries. Many stores offer it only within their own city.",
          "Interstate orders: agree rates with a logistics partner first, so you never quote a price you cannot honour.",
        ],
      },
      { type: "heading", text: "3. Products and photos" },
      {
        type: "paragraph",
        text: "Online, the photo is the product. Customers cannot touch it, so they decide from what they see. You do not need a studio — a phone, daylight and a plain background go a long way — but every product needs clear photos, a real description (size, material, colour options) and a price. Stores that hide prices lose to stores that show them.",
      },
      { type: "heading", text: "4. Choosing a platform" },
      {
        type: "list",
        items: [
          "Shopify: quick to start and reliable, but it is a monthly subscription billed in dollars, and some features need paid apps.",
          "WooCommerce (WordPress): flexible and widely used, but you are responsible for hosting, updates and security.",
          "A custom-built store: built around how your business works — your delivery zones, your product options, naira payments — with no monthly platform fee, but a bigger upfront cost.",
        ],
      },
      {
        type: "paragraph",
        text: "There is no single right answer. A small catalogue testing the market can start on Shopify. A business with steady sales, specific needs, or dollar-subscription fatigue is usually better served by a custom store.",
      },
      { type: "heading", text: "5. Trust: why strangers will (or will not) pay you" },
      {
        type: "paragraph",
        text: "Nigerian online shoppers have been burned by fake vendors, so a store has to earn trust before the first payment. These details do more for sales than any design trick:",
      },
      {
        type: "list",
        items: [
          "A real phone number and WhatsApp button that someone actually answers.",
          "A clear delivery and returns policy, written in plain language.",
          "Your business address or at least your city.",
          "Real customer reviews and photos, with permission.",
          "Payment through a recognised gateway rather than a personal account number.",
        ],
      },
      { type: "heading", text: "6. Getting your first orders" },
      {
        type: "paragraph",
        text: "Launching a store does not bring customers by itself. Move your existing audience first: put the store link in your Instagram bio, pin it on WhatsApp Business, and send customers there to order instead of taking orders in the DMs. Then work on Google — submit the site to Google Search Console and give each product a proper title and description, so people searching for what you sell can find it.",
      },
      {
        type: "quote",
        text: "The store that wins is rarely the prettiest one. It is the one where a stranger can find the product, trust the seller, pay in a few taps and know exactly when it will arrive.",
      },
      {
        type: "paragraph",
        text: "If you want a store built around how your business actually sells — naira payments, your delivery zones, your products — that is the kind of e-commerce work I do. Tell me what you sell and how you deliver, and I will tell you what it will take.",
      },
    ],
  },
  {
    slug: "how-to-get-your-business-on-google-nigeria",
    title: "How to Get Your Business on Google Search and Maps in Nigeria",
    description: "How Nigerian businesses show up on Google Maps and in search: Google Business Profile, reviews, Search Console and the mistakes that keep you invisible.",
    excerpt: "Showing up on Google Maps and showing up in search results are two different things. Here's how to do both — free — and what actually moves you up.",
    publishDate: "2026-10-14",
    readingTime: "7 min read",
    tag: "SEO",
    related: [
      { label: "SEO services in Nigeria", href: "/services/seo-optimization" },
      { label: "How to create a website for your business in Nigeria", href: "/blog/how-to-create-a-business-website-in-nigeria" },
      { label: "Web developer in Port Harcourt", href: "/web-developer-port-harcourt" },
    ],
    content: [
      {
        type: "paragraph",
        text: "When someone searches \"cleaning company near me\" or \"web developer in Port Harcourt\", Google shows two kinds of results: a map with a few businesses on it, and a list of websites below it. Getting into each one works differently, and most businesses only do one — or neither.",
      },
      {
        type: "paragraph",
        text: "Everything below is free. It takes time and consistency, not money.",
      },
      { type: "heading", text: "Part 1: Google Maps — your Google Business Profile" },
      {
        type: "paragraph",
        text: "The map results come from Google Business Profile (formerly Google My Business). It is a free listing with your name, category, phone number, hours, photos and reviews. For local searches, it is often the first thing a customer sees — before your website.",
      },
      {
        type: "list",
        items: [
          "Go to business.google.com and sign in with a Google account you will keep for the long term. Use a business email if you have one.",
          "Search for your business to check it does not already exist. If it does, claim it instead of creating a duplicate.",
          "Choose your primary category carefully — it is one of the strongest signals for which searches you appear in. Pick the most specific one that fits.",
          "If customers come to you, add your address. If you go to them (cleaners, plumbers, developers), set a service area instead and hide the address.",
          "Verify the listing. Google will offer one or more methods — video, phone, email or postcard — depending on your business. You cannot fully appear until you are verified.",
        ],
      },
      { type: "heading", text: "What moves you up on the map" },
      {
        type: "list",
        items: [
          "Reviews: the number, how recent they are, and what they say. Ask every happy customer — send them the direct review link straight after you finish a job, while they are pleased.",
          "Replies: respond to every review, good and bad. It shows Google and future customers you are active.",
          "Completeness: hours, services, a description, and real photos of your work. Add new photos regularly.",
          "Distance: how close you are to the person searching. You cannot change this, which is exactly why the other factors matter.",
        ],
      },
      {
        type: "paragraph",
        text: "Never buy reviews or post fake ones. Google removes them, and repeated violations can get your profile suspended — which takes you off the map entirely.",
      },
      { type: "heading", text: "Part 2: Google Search — your website" },
      {
        type: "paragraph",
        text: "The list of results below the map comes from websites. A Business Profile can link to your website, but to rank in that list you need a website that Google can read and that answers what people search for.",
      },
      {
        type: "list",
        items: [
          "Add your site to Google Search Console (free) and verify that you own it.",
          "Submit your sitemap — usually yourdomain.com/sitemap.xml — so Google knows every page exists.",
          "Use Search Console's URL Inspection tool to request indexing for your most important pages.",
          "Give every page its own title and description that match what people search, such as \"Office Cleaning in Lekki, Lagos\" rather than just \"Services\".",
          "Create a page for each main service, and for each city you serve if you serve several. One page trying to rank for everything usually ranks for nothing.",
        ],
      },
      { type: "heading", text: "Part 3: Keep your details identical everywhere" },
      {
        type: "paragraph",
        text: "Google cross-checks your business name, phone number and address across your website, your Business Profile, Facebook, Instagram and directories. If one says \"Bright Cleaning\" with one number and another says \"BrightClean Services Ltd\" with a different number, Google is less confident they are the same business. Pick one exact name, phone number and address format, and use it everywhere.",
      },
      { type: "heading", text: "How long does it take?" },
      {
        type: "paragraph",
        text: "A verified Business Profile can start appearing for your own business name quickly. Ranking for competitive searches like \"web developer in Lagos\" takes longer — usually months, not days — and depends on reviews, your website and your competition. Anyone promising \"first page of Google in one week\" is selling something you should not buy.",
      },
      {
        type: "quote",
        text: "Most small businesses are invisible on Google not because SEO is hard, but because nobody did the free, boring basics: a verified profile, real reviews, and a website Google can read.",
      },
      {
        type: "paragraph",
        text: "If you want help with the website side — pages built around what your customers search, set up in Search Console and indexed — that is part of the SEO work I do for businesses across Nigeria.",
      },
    ],
  },
  {
    slug: "how-much-does-a-website-cost-in-nigeria",
    title: "How Much Does a Website Cost in Nigeria? A Real Breakdown",
    description: "What actually drives website pricing in Nigeria — pages, complexity, e-commerce, and ongoing costs — from a developer who builds them, not a generic price list.",
    excerpt: "The honest answer is \"it depends\" — but here's exactly what it depends on, so you can budget with your eyes open before you talk to any developer, including me.",
    publishDate: "2026-08-15",
    readingTime: "7 min read",
    tag: "Pricing & Process",
    related: [
      { label: "Website design & development in Nigeria", href: "/services/web-development" },
      { label: "E-commerce website development in Nigeria", href: "/services/ecommerce-solutions" },
      { label: "How to create a website for your business in Nigeria", href: "/blog/how-to-create-a-business-website-in-nigeria" },
    ],
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
    related: [
      { label: "See all my projects", href: "/projects" },
      { label: "Website design & development in Nigeria", href: "/services/web-development" },
    ],
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
    related: [
      { label: "Website design & development in Nigeria", href: "/services/web-development" },
      { label: "How to get your business on Google Search and Maps", href: "/blog/how-to-get-your-business-on-google-nigeria" },
    ],
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
