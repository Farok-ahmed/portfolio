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
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
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
    title: "Building fast landing pages with Next.js (App Router)",
    excerpt:
      "How I structure pages, components, and performance-friendly patterns in Next.js so marketing sites stay fast, clean, and easy to maintain.",
    date: "Apr 8, 2026",
    readTime: "4 min read",
    tags: ["Next.js", "React", "Performance"],
  },
  {
    title: "Creating custom Gutenberg blocks with React",
    excerpt:
      "A practical overview of building Gutenberg blocks: choosing the right block structure, keeping UI reusable, and integrating with real-world WordPress plugins.",
    date: "Apr 8, 2026",
    readTime: "5 min read",
    tags: ["WordPress", "Gutenberg", "React"],
  },
];

export { NAV_LINKS, PROJECTS, BLOG_POSTS };