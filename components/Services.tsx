
"use client";

import Section from "./Section";
import { motion } from "framer-motion";
import { Layers, Code2, Zap } from "lucide-react";

const Services = () => {
const SERVICES = [
  {
    title: "Custom WordPress Dev",
    icon: <Layers size={32} className="text-blue-400" />,
    description: "Tailored solutions for the world's most popular CMS.",
    items: ["Gutenberg block dev", "Elementor custom widgets", "Theme/plugin customization", "Headless setups"]
  },
  {
    title: "React & Next.js Frontend",
    icon: <Code2 size={32} className="text-purple-400" />,
    description: "Blazing fast, modern web applications.",
    items: ["High-converting Landing pages", "Interactive Portfolios", "API integrations", "Complex State Management"]
  },
  {
    title: "Performance & Fixes",
    icon: <Zap size={32} className="text-yellow-400" />,
    description: "Optimizing for speed and stability.",
    items: ["Speed optimization (Core Web Vitals)", "Bug fixing & Troubleshooting", "Code Refactoring", "Security Audits"]
  }
];
  return (
    <Section id="services" className="bg-gradient-to-b from-slate-900 to-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Services</h2>
        <p className="text-slate-400">Specialized development services for your business.</p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => (
           <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors flex flex-col"
           >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                 {service.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                       <span className="w-1 h-1 bg-blue-500 rounded-full" /> {item}
                    </li>
                 ))}
              </ul>
              
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault(); 
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-lg border border-slate-600 text-slate-300 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors text-center"
              >
                 Contact for this service
              </a>
           </motion.div>
        ))}
      </div>
    </Section>
  );
};
export default Services;