type NavLink = {
    name: string;
    href: string;
}

export type Project = {
  title: string;
  description: string;
  tech: string[];
  bullets: string[];
  link: string;
  color: string;
  featured: boolean;
};

export type BlogPost = {
  slug: string;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "code"; code: string; language?: string }
    | { type: "quote"; text: string }
  >;
};
const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const PROJECTS: Project[] = [
  {
    title: "Nex Builder",
    description: "A WordPress Gutenberg block builder plugin (GitHub repository).",
    tech: ["WordPress", "Gutenberg", "PHP", "React"],
    bullets: ["Gutenberg block builder workflow", "Reusable block components", "Plugin-oriented structure"],
    link: "https://github.com/Farok-ahmed/nex-builder",
    color: "from-blue-600 to-indigo-600",
    featured: true,
  },
  {
    title: "Result Management Plugin",
    description: "A WordPress plugin for managing results — built and maintained on GitHub.",
    tech: ["WordPress", "PHP"],
    bullets: ["Plugin architecture", "Admin-friendly workflow", "GitHub repository"],
    link: "https://github.com/Farok-ahmed/result-management-plugin/",
    color: "from-emerald-600 to-teal-600",
    featured: false,
  },
  {
    title: "BBP Core (WordPress Plugin)",
    description: "A company WordPress plugin where I work as the lead developer (published on WordPress.org).",
    tech: ["WordPress", "PHP", "Plugin"],
    bullets: ["Lead developer role", "Production release on WordPress.org", "Ongoing improvements & maintenance"],
    link: "https://wordpress.org/plugins/bbp-core/",
    color: "from-purple-600 to-pink-600",
    featured: false,
  },
  {
    title: "Banca — Banking & Finance",
    description: "Next.js template for a banking/finance-style marketing website.",
    tech: ["Next.js", "React"],
    bullets: ["Landing pages & sections", "Responsive UI layout", "Template-based build"],
    link: "https://themeforest.net/item/banca-banking-finance-business-loan-react-nextjs-template/59671973?srsltid=AfmBOoqOM8htNfs3GxlubJm4Mmq5JiNdEN3vLLmLNMc47VPOr2Vl2irK",
    color: "from-blue-600 to-indigo-600",
    featured: true,
  },
  {
    title: "Bookjar — Bookstore",
    description: "Next.js template for an online bookstore/book shop style website.",
    tech: ["Next.js", "React"],
    bullets: ["Ecommerce-style pages", "Component-based UI", "Mobile-first layout"],
    link: "https://themeforest.net/item/bookjar-react-bookstore-book-shop-nextjs-template/61264235?s_rank=1",
    color: "from-purple-600 to-pink-600",
    featured: true,
  },
  {
    title: "Landpagy — SaaS Landing",
    description: "Next.js landing page template for SaaS/software products.",
    tech: ["Next.js", "React"],
    bullets: ["Marketing sections", "Conversion-focused layout", "Fast static pages"],
    link: "https://themeforest.net/item/landpagy-saas-software-landing-page-next-js-template/60963794?s_rank=2",
    color: "from-emerald-600 to-teal-600",
    featured: true,
  },
  {
    title: "Docy — Documentation",
    description: "Documentation/knowledge-base style template built with React + Next.js.",
    tech: ["Next.js", "React"],
    bullets: ["Docs layout structure", "Reusable components", "Clean typography"],
    link: "https://themeforest.net/item/docy-react-documentation-knowledge-base-site-template/61091004?s_rank=3",
    color: "from-orange-500 to-red-500",
    featured: false,
  },
  {
    title: "Banca — Business Loan",
    description: "Next.js template for finance/business loan style websites.",
    tech: ["Next.js", "React"],
    bullets: ["Business-focused sections", "Responsive layout", "Template-based build"],
    link: "https://themeforest.net/item/banca-banking-finance-business-loan-react-nextjs-template/59671973?s_rank=4",
    color: "from-blue-600 to-indigo-600",
    featured: false,
  },
  {
    title: "KbDoc — Knowledge Base",
    description: "Next.js knowledge base template with helpdesk/forum style pages.",
    tech: ["Next.js", "React"],
    bullets: ["Knowledge base layout", "Support-style pages", "Template-based build"],
    link: "https://themeforest.net/item/kbdoc-documentation-knowledge-base-next-js-template-with-helpdesk-forum/59109016?s_rank=5",
    color: "from-purple-600 to-pink-600",
    featured: false,
  },
];

const BLOG_POSTS: BlogPost[] = [
  {
    slug: "building-fast-landing-pages-with-nextjs-app-router",
    image: "/blog-images/building-fast-landing-pages-with-nextjs-app-router.png",
    title: "Building fast landing pages with Next.js (App Router)",
    excerpt:
      "How I structure pages, components, and performance-friendly patterns in Next.js so marketing sites stay fast, clean, and easy to maintain.",
    date: "Apr 8, 2026",
    readTime: "4 min read",
    tags: ["Next.js", "React", "Performance"],
    content: [
      {
        type: "p",
        text:
          "When I'm building a landing page or portfolio, my main goal is simple: keep the UI clean, the codebase easy to change, and the page fast even on low-end devices. Next.js (App Router) is great for this because server components are the default and the routing model is straightforward.",
      },
      { type: "h2", text: "My default structure" },
      {
        type: "p",
        text:
          "I keep page composition in the app route, UI pieces in components, and static configuration/data in a small libs folder. That way, I can iterate on content without touching layout logic.",
      },
      {
        type: "code",
        language: "txt",
        code:
          "app/\n  page.tsx\n  blog/\n    page.tsx\n    [slug]/page.tsx\ncomponents/\n  NavBar.tsx\n  Footer.tsx\nlibs/\n  data.ts",
      },
      { type: "h2", text: "Performance checklist I follow" },
      {
        type: "ul",
        items: [
          "Use server components by default; add \"use client\" only when needed (animations, state, event handlers).",
          "Keep data shaping in one place (like libs/data.ts) so pages stay simple.",
          "Prefer static rendering for content pages (blog posts, landing pages) when possible.",
          "Avoid heavy client-side libraries in global layout; load them only on pages that need them.",
          "Keep above-the-fold content tight: strong heading, short copy, clear CTA.",
        ],
      },
      { type: "h2", text: "Small UX details that matter" },
      {
        type: "p",
        text:
          "Speed isn't just about Lighthouse. Consistent spacing, readable typography, and clear navigation reduce bounce rate. I usually add a short excerpt, visible tags, and a simple back link so users can browse quickly.",
      },
      {
        type: "quote",
        text:
          "If a page is easy to scan, it feels faster — even before you measure it.",
      },
    ],
  },
  {
    slug: "creating-custom-gutenberg-blocks-with-react",
    image: "/blog-images/creating-custom-gutenberg-blocks-with-react.png",
    title: "Creating custom Gutenberg blocks with React",
    excerpt:
      "A practical overview of building Gutenberg blocks: choosing the right block structure, keeping UI reusable, and integrating with real-world WordPress plugins.",
    date: "Apr 8, 2026",
    readTime: "5 min read",
    tags: ["WordPress", "Gutenberg", "React"],
    content: [
      {
        type: "p",
        text:
          "Gutenberg blocks are just React components with a WordPress-flavored lifecycle. The key is to keep the block UI predictable, store the right attributes, and ship it in a plugin structure that's easy to maintain.",
      },
      { type: "h2", text: "Block anatomy (what I always start with)" },
      {
        type: "ul",
        items: [
          "block.json: block name, title, category, attributes, editorScript/style.",
          "Edit component: editor-only UI (controls, previews, placeholders).",
          "Save function: front-end markup output (or use dynamic/PHP render when needed).",
          "Attributes: store the minimum data needed to reproduce the output.",
        ],
      },
      {
        type: "code",
        language: "json",
        code:
          "{\n  \"apiVersion\": 2,\n  \"name\": \"my-plugin/feature-card\",\n  \"title\": \"Feature Card\",\n  \"category\": \"widgets\",\n  \"attributes\": {\n    \"title\": { \"type\": \"string\", \"default\": \"\" },\n    \"description\": { \"type\": \"string\", \"default\": \"\" }\n  },\n  \"supports\": { \"html\": false }\n}",
      },
      { type: "h2", text: "Reusable UI patterns" },
      {
        type: "p",
        text:
          "For real projects, you don't want every block to re-implement the same inspector controls, field components, or layout helpers. I typically extract small UI components (inputs, toggles, color pickers) and keep block-specific logic in the block folder.",
      },
      {
        type: "ul",
        items: [
          "Create small UI primitives (TextControl wrappers, ToggleControl wrappers).",
          "Share utility hooks (e.g., safe attribute updates, debounced input).",
          "Keep markup and styling consistent across blocks.",
          "Plan attributes carefully so saved content remains stable over time.",
        ],
      },
      { type: "h2", text: "Shipping inside a plugin" },
      {
        type: "p",
        text:
          "In production, the most important part is maintainability: clear folder structure, versioned builds, and predictable registration. Once you do that, scaling from 1 block to 20 blocks becomes a tooling problem—not a code mess.",
      },
    ],
  },
];

export { NAV_LINKS, PROJECTS, BLOG_POSTS };