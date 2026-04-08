"use client"
import { motion } from "framer-motion";
import Section from "./Section";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/libs/data";

const Projects = () => {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const hasMoreProjects = PROJECTS.length > featuredProjects.length;

  return (
    <Section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
        <p className="text-slate-600">Selected works showcasing React & WordPress integration.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={`${project.title}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-blue-500/40 transition-all duration-300 flex flex-col shadow-sm"
          >
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-slate-50 border border-slate-200 rounded-full hover:bg-white text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
              </div>
              
              <p className="text-slate-600 mb-6 font-medium">
                {project.description}
              </p>
              
              <div className="space-y-2 mb-6 flex-grow">
                 {project.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
                       <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors" />
                       {bullet}
                    </div>
                 ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100">
                {project.tech.map((tag) => (
                  <span key={tag} className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-6">
                 <a
                   href={project.link}
                   target="_blank"
                   rel="noreferrer"
                   className="text-sm font-bold text-slate-900 border-b border-blue-600 pb-0.5 hover:text-blue-700 hover:border-blue-700 transition-colors"
                 >
                   View Project
                 </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {hasMoreProjects && (
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
          >
            View More Projects
          </Link>
        </div>
      )}
    </Section>
  );
};

export default Projects;