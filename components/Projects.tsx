"use client"
import { motion } from "framer-motion";
import Section from "./Section";
import { ExternalLink } from "lucide-react";

const Projects = () => {

const PROJECTS = [
  {
    title: "DocuBlock Plugin",
    description: "A custom Gutenberg block library designed for a technical documentation plugin, enabling rich content layouts.",
    tech: ["React", "Gutenberg", "PHP", "Tailwind"],
    bullets: [
      "Built 12+ reusable Gutenberg components",
      "Integrated seamlessly with WP REST API",
      "Reduced editorial time by 40%"
    ],
    link: "#",
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Agency Landing Page",
    description: "High-performance marketing site for a digital agency using Next.js for speed and WordPress as a headless CMS.",
    tech: ["Next.js", "GraphQL", "Framer Motion"],
    bullets: [
      "Achieved 100/100 Lighthouse Performance score",
      "Implemented complex scroll animations",
      "Dynamic content fetching from Headless WP"
    ],
    link: "#",
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "Elementor WooWidgets",
    description: "A suite of custom Elementor widgets extending WooCommerce functionality for a bespoke e-commerce client.",
    tech: ["Elementor API", "PHP", "jQuery", "CSS"],
    bullets: [
      "Custom product grid with real-time filtering",
      "AJAX add-to-cart implementation",
      "Fully responsive mobile layouts"
    ],
    link: "#",
    color: "from-emerald-600 to-teal-600"
  },
  {
    title: "SaaS Dashboard",
    description: "A React-based analytic dashboard for a SaaS product, featuring data visualization and user management.",
    tech: ["React", "Chart.js", "Firebase"],
    bullets: [
      "Real-time data visualization",
      "Role-based authentication system",
      "Dark/Light mode toggling"
    ],
    link: "#",
    color: "from-orange-500 to-red-500"
  },
];
  return (
    <Section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
        <p className="text-slate-400">Selected works showcasing React & WordPress integration.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-2xl overflow-hidden bg-slate-800 border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col"
          >
            <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                  </h3>
                  <a href={project.link} className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </a>
              </div>
              
              <p className="text-slate-400 mb-6 font-medium">
                {project.description}
              </p>
              
              <div className="space-y-2 mb-6 flex-grow">
                 {project.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                       <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-blue-500 transition-colors" />
                       {bullet}
                    </div>
                 ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                {project.tech.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-blue-200 bg-blue-900/30 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-6">
                 <button className="text-sm font-bold text-white border-b border-blue-500 pb-0.5 hover:text-blue-400 hover:border-blue-400 transition-colors">
                    View Case Study
                 </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;