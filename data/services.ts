export type ServiceSlug =
  | "web-development"
  | "app-development"
  | "seo"
  | "social-media-marketing"
  | "performance-marketing"
  | "brand-identity"
  | "graphic-design"
  | "motion-graphics"
  | "content-creation";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceIncludedItem {
  title: string;
  description: string;
}

export interface ServiceEntry {
  slug: ServiceSlug;
  eyebrow: string;
  title: string;
  description: string;
  overviewHeading: string;
  overviewText: string;
  overviewPoints: string[];
  includedHeading: string;
  includedItems: ServiceIncludedItem[];
  processHeading: string;
  processSteps: ServiceProcessStep[];
  faqs: ServiceFaq[];
  relatedSlugs: ServiceSlug[];
}

export const services: ServiceEntry[] = [
  {
    slug: "web-development",
    eyebrow: "Website Development",
    title: "High-converting websites built for modern growth",
    description:
      "We design and build fast, polished websites that turn attention into action with thoughtful UX, clear messaging, and strong technical foundations.",
    overviewHeading: "Overview",
    overviewText:
      "Every website is shaped around your growth goals, whether that means more qualified leads, more booked calls, or stronger brand trust.",
    overviewPoints: [
      "Responsive design for desktop and mobile",
      "Conversion-led structure and messaging",
      "Modern front-end architecture and performance tuning",
    ],
    includedHeading: "What’s Included",
    includedItems: [
      {
        title: "Strategy and structure",
        description: "We align content, pages, and conversion paths with your audience and business goals.",
      },
      {
        title: "Visual design",
        description: "Clean, premium interfaces with a clear hierarchy and consistent brand expression.",
      },
      {
        title: "Development and launch",
        description: "We build and ship production-ready websites with performance and maintainability in mind.",
      },
    ],
    processHeading: "How we deliver",
    processSteps: [
      { title: "Discover", description: "We map your audience, objectives, and current funnel gaps." },
      { title: "Design", description: "We shape the experience around clarity, trust, and conversion." },
      { title: "Build", description: "We implement the site with clean code and thoughtful interactions." },
      { title: "Launch", description: "We refine, test, and ship with confidence." },
    ],
    faqs: [
      {
        question: "How long does a website project take?",
        answer: "Most projects take between three and eight weeks depending on scope and content readiness.",
      },
      {
        question: "Will the site be built to grow with us?",
        answer: "Yes. We build with a scalable foundation so future updates, campaigns, and new pages are easier to add.",
      },
    ],
    relatedSlugs: ["seo", "brand-identity", "content-creation"],
  },
  {
    slug: "app-development",
    eyebrow: "App Development",
    title: "Digital products designed for everyday use",
    description:
      "We build focused, high-quality apps that are intuitive to use and thoughtful in their execution, from MVPs to more advanced product experiences.",
    overviewHeading: "Overview",
    overviewText:
      "App projects are shaped around product clarity, user confidence, and a smooth path from first interaction to repeat engagement.",
    overviewPoints: [
      "Product thinking from the first screen",
      "Interface design that feels simple and intentional",
      "Reliable implementation with room to scale",
    ],
    includedHeading: "What’s Included",
    includedItems: [
      {
        title: "Product strategy",
        description: "We define the core user flow and structure the experience around the most important actions.",
      },
      {
        title: "UI and UX design",
        description: "We turn product requirements into a usable experience with clear visual language.",
      },
      {
        title: "Frontend build",
        description: "We build the experience using modern, maintainable implementation practices.",
      },
    ],
    processHeading: "How we deliver",
    processSteps: [
      { title: "Scope", description: "We define the product goals, user needs, and critical features." },
      { title: "Prototype", description: "We map the experience so it is easy to review and refine." },
      { title: "Develop", description: "We build the app with performance and usability in mind." },
      { title: "Refine", description: "We test, adjust, and prepare it for launch." },
    ],
    faqs: [
      {
        question: "Do you build MVPs?",
        answer: "Yes. We often start with a focused MVP that validates the product quickly and clearly.",
      },
      {
        question: "Can you support existing products?",
        answer: "Absolutely. We can improve an existing app experience or extend a product that already has traction.",
      },
    ],
    relatedSlugs: ["web-development", "graphic-design", "performance-marketing"],
  },
  {
    slug: "seo",
    eyebrow: "SEO & Local SEO",
    title: "Search visibility built around actual demand",
    description:
      "We create SEO systems that help your brand earn the right attention with trustworthy content, strong technical foundations, and a focused search strategy.",
    overviewHeading: "Overview",
    overviewText:
      "We connect technical health, keyword strategy, and content planning into a practical growth engine that can improve visibility over time.",
    overviewPoints: [
      "Keyword strategy tied to your offer",
      "Technical auditing and site improvements",
      "Content direction that supports discovery and trust",
    ],
    includedHeading: "What’s Included",
    includedItems: [
      {
        title: "Technical SEO",
        description: "We review indexing, site structure, speed, and crawlability to remove blockers.",
      },
      {
        title: "On-page optimization",
        description: "We refine page structure, metadata, and content so it helps both users and search engines.",
      },
      {
        title: "Local strategy",
        description: "We strengthen your local presence through service pages, structure, and local relevance.",
      },
    ],
    processHeading: "How we deliver",
    processSteps: [
      { title: "Audit", description: "We review what is already working and what is holding visibility back." },
      { title: "Plan", description: "We define the highest-impact opportunities and align them with your goals." },
      { title: "Optimize", description: "We implement changes in content, structure, and site performance." },
      { title: "Measure", description: "We track performance and refine based on what the data shows." },
    ],
    faqs: [
      {
        question: "How soon can we expect results?",
        answer: "SEO is a long-term channel. We typically focus first on quick wins while building the groundwork for sustainable growth.",
      },
      {
        question: "Do you work with local businesses?",
        answer: "Yes. We often build local SEO systems for service businesses that need regional visibility and qualified inquiries.",
      },
    ],
    relatedSlugs: ["web-development", "performance-marketing", "content-creation"],
  },
  {
    slug: "social-media-marketing",
    eyebrow: "Social Media Marketing",
    title: "Content systems that feel native and convert",
    description:
      "We create social campaigns that are built around the right audience, the right platform habits, and a clear conversion path.",
    overviewHeading: "Overview",
    overviewText:
      "Social media works best when it is part of a larger content and conversion system rather than a set of disconnected posts.",
    overviewPoints: [
      "Platform-specific strategy and content planning",
      "Creative direction that supports brand consistency",
      "Performance loops that improve what is working",
    ],
    includedHeading: "What’s Included",
    includedItems: [
      {
        title: "Channel strategy",
        description: "We identify where your audience is most active and how they should experience your brand there.",
      },
      {
        title: "Content planning",
        description: "We shape a thoughtful calendar with themes, prompts, angles, and publishing cadence.",
      },
      {
        title: "Creative execution",
        description: "We produce on-brand assets and content that are useful for both awareness and conversion.",
      },
    ],
    processHeading: "How we deliver",
    processSteps: [
      { title: "Research", description: "We study your audience, category, and platform habits." },
      { title: "Plan", description: "We build content pillars and a rollout structure that fits your goals." },
      { title: "Create", description: "We produce assets and copy that feel native to each channel." },
      { title: "Optimize", description: "We track engagement, conversion signals, and refine the approach." },
    ],
    faqs: [
      {
        question: "Do you manage accounts directly?",
        answer: "Yes. We can manage planning, content creation, publishing, and reporting as part of a broader engagement.",
      },
      {
        question: "Do you tailor content to each platform?",
        answer: "Absolutely. We plan content for the behaviors and expectations of each platform rather than using the same approach everywhere.",
      },
    ],
    relatedSlugs: ["content-creation", "graphic-design", "performance-marketing"],
  },
  {
    slug: "performance-marketing",
    eyebrow: "Performance Marketing",
    title: "Growth campaigns built for measurable action",
    description:
      "We build paid media strategies that focus on tangible outcomes, from lead generation and sales to qualified traffic and retargeting systems.",
    overviewHeading: "Overview",
    overviewText:
      "Performance marketing works best when creative, targeting, and messaging are all aligned with a clear objective from the start.",
    overviewPoints: [
      "Focused campaign planning and audience targeting",
      "Ad creative direction and testing",
      "Reporting that ties spend to outcomes",
    ],
    includedHeading: "What’s Included",
    includedItems: [
      {
        title: "Campaign strategy",
        description: "We define conversion goals, audience segments, and the right channels for your budget.",
      },
      {
        title: "Creative testing",
        description: "We shape offers, messaging, and assets that are designed to improve response rates.",
      },
      {
        title: "Optimization",
        description: "We review performance data regularly and adjust toward higher quality outcomes.",
      },
    ],
    processHeading: "How we deliver",
    processSteps: [
      { title: "Objectives", description: "We clarify the outcome you want from the campaign before building anything." },
      { title: "Audience", description: "We identify the right segments with enough clarity to target them effectively." },
      { title: "Launch", description: "We test initial creative and messaging structures before scaling." },
      { title: "Improve", description: "We use real signals to improve conversion quality and efficiency." },
    ],
    faqs: [
      {
        question: "Do you work with any budget size?",
        answer: "We tailor the approach to the budget, however we usually recommend starting with a strong focus rather than overextending a small budget.",
      },
      {
        question: "How do you measure success?",
        answer: "We define success around the specific business objective, from leads to revenue or qualified engagement, and measure against that directly.",
      },
    ],
    relatedSlugs: ["seo", "social-media-marketing", "web-development"],
  },
  {
    slug: "brand-identity",
    eyebrow: "Brand Identity",
    title: "A brand system that feels coherent and market-ready",
    description:
      "We develop visual and verbal identity systems that help your business show up with confidence across every touchpoint.",
    overviewHeading: "Overview",
    overviewText:
      "Brand identity work is about building a visual language that feels consistent, memorable, and aligned with how you want to be experienced.",
    overviewPoints: [
      "Identity systems that support recognition",
      "Messaging that feels clear and confident",
      "Applications that work across digital and print",
    ],
    includedHeading: "What’s Included",
    includedItems: [
      {
        title: "Visual strategy",
        description: "We shape the core identity direction based on your audience, ambition, and category.",
      },
      {
        title: "Logo and systems",
        description: "We create an identity framework that can scale across touchpoints and channels.",
      },
      {
        title: "Brand applications",
        description: "We define how the system will show up in marketing, digital experiences, and supporting assets.",
      },
    ],
    processHeading: "How we deliver",
    processSteps: [
      { title: "Research", description: "We learn how the brand should feel, what it should communicate, and where it needs to stand out." },
      { title: "Direction", description: "We shape the strategic direction before visual work begins." },
      { title: "Design", description: "We produce the identity system and supporting visual tools." },
      { title: "Apply", description: "We help the system feel real by applying it to key brand moments." },
    ],
    faqs: [
      {
        question: "Do you also support messaging?",
        answer: "Yes. We frequently pair visual identity work with messaging direction so the system feels complete.",
      },
      {
        question: "Can this support a website or campaign launch?",
        answer: "Absolutely. A strong brand system makes launches, ads, and website updates feel much more cohesive.",
      },
    ],
    relatedSlugs: ["web-development", "graphic-design", "content-creation"],
  },
  {
    slug: "graphic-design",
    eyebrow: "Graphic Design",
    title: "Visual communication that feels deliberate and clear",
    description:
      "We create polished design assets that support campaigns, product moments, and brand expression without adding noise.",
    overviewHeading: "Overview",
    overviewText:
      "Graphic design is most effective when it is purposeful. We focus on clarity, hierarchy, and visual cohesion across each asset.",
    overviewPoints: [
      "Creative assets with a clear message",
      "Thoughtful layout and hierarchy",
      "Flexible systems for ongoing campaigns",
    ],
    includedHeading: "What’s Included",
    includedItems: [
      {
        title: "Design direction",
        description: "We shape the visual approach around your goals and audience context.",
      },
      {
        title: "Asset creation",
        description: "We produce polished visuals for web, social, presentations, and promotion.",
      },
      {
        title: "System refinement",
        description: "We keep the design language consistent so assets feel connected and intentional.",
      },
    ],
    processHeading: "How we deliver",
    processSteps: [
      { title: "Brief", description: "We align on the objective, audience, and the context the design needs to work in." },
      { title: "Concept", description: "We explore directions that support the message and brand feel." },
      { title: "Refine", description: "We iterate until the design is clear, strong, and production-ready." },
      { title: "Deliver", description: "We provide the final assets in a format that is easy to use and share." },
    ],
    faqs: [
      {
        question: "Do you design for both digital and print?",
        answer: "Yes. We produce assets for digital channels as well as print-ready files when needed.",
      },
      {
        question: "Can you help with a campaign rollout?",
        answer: "Absolutely. We can create a set of related assets that support one launch or a longer campaign sequence.",
      },
    ],
    relatedSlugs: ["brand-identity", "motion-graphics", "content-creation"],
  },
  {
    slug: "motion-graphics",
    eyebrow: "Motion Graphics",
    title: "Motion that adds energy without losing clarity",
    description:
      "We create motion graphics that support storytelling, product explanation, or promotional moments with a polished and purposeful feel.",
    overviewHeading: "Overview",
    overviewText:
      "Motion is most effective when it reinforces the message rather than competing with it. We focus on rhythm, pacing, and clarity.",
    overviewPoints: [
      "Short-form motion for ads and social",
      "Explainer motion to simplify complex ideas",
      "Clean animation systems that feel premium",
    ],
    includedHeading: "What’s Included",
    includedItems: [
      {
        title: "Concept and storyboard",
        description: "We shape the motion direction before production so the message stays focused.",
      },
      {
        title: "Animation and editing",
        description: "We build the motion assets with a clean, deliberate feel and strong timing.",
      },
      {
        title: "Delivery and format support",
        description: "We export versions that fit the channel, platform, and intended audience.",
      },
    ],
    processHeading: "How we deliver",
    processSteps: [
      { title: "Brief", description: "We align on the purpose, tone, and format for the motion asset." },
      { title: "Story", description: "We map the visual rhythm and key moments before animation begins." },
      { title: "Animate", description: "We build the motion and refine it until it feels polished and natural." },
      { title: "Deliver", description: "We provide the final files in the formats that support your launch plan." },
    ],
    faqs: [
      {
        question: "What kinds of motion do you create?",
        answer: "We create animated explainers, social content, product highlights, and promotional motion that supports a launch or campaign.",
      },
      {
        question: "Can you work from existing brand assets?",
        answer: "Yes. We can build motion systems that integrate with your existing brand language and design direction.",
      },
    ],
    relatedSlugs: ["graphic-design", "social-media-marketing", "content-creation"],
  },
  {
    slug: "content-creation",
    eyebrow: "Content Creation",
    title: "Content that supports trust, visibility, and momentum",
    description:
      "We create content that helps your brand explain itself well, stay consistent, and build credibility across the channels that matter most.",
    overviewHeading: "Overview",
    overviewText:
      "Content works best when it is planned with a clear point of view and a practical purpose for the audience that will see it.",
    overviewPoints: [
      "Strategy-backed content planning",
      "Clear editorial direction and voice",
      "Assets that can support campaigns and ongoing publishing",
    ],
    includedHeading: "What’s Included",
    includedItems: [
      {
        title: "Editorial planning",
        description: "We shape the content direction around your goals, audience needs, and channel mix.",
      },
      {
        title: "Writing and messaging",
        description: "We create content that is clear, useful, and aligned with your brand voice.",
      },
      {
        title: "Publishing support",
        description: "We help structure the content so it can be used across web, social, email, and campaign moments.",
      },
    ],
    processHeading: "How we deliver",
    processSteps: [
      { title: "Listen", description: "We understand the audience, offer, and context before writing begins." },
      { title: "Shape", description: "We define the narrative, angle, and structure for the content." },
      { title: "Create", description: "We draft and refine the content until it feels strong and useful." },
      { title: "Support", description: "We help turn it into a format that works for the channel where it will live." },
    ],
    faqs: [
      {
        question: "Do you write for both web and social?",
        answer: "Yes. We can create content that works across website pages, social posts, and campaign moments.",
      },
      {
        question: "Can you work with an existing brand voice?",
        answer: "Absolutely. We can adapt to an existing voice or help define one when the brand is still evolving.",
      },
    ],
    relatedSlugs: ["seo", "social-media-marketing", "brand-identity"],
  },
];

export function getServiceBySlug(slug: string | undefined) {
  return services.find((service) => service.slug === slug);
}

export function getServiceBySlugOrUndefined(slug: string | undefined) {
  return getServiceBySlug(slug);
}
