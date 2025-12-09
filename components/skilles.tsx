
"use client"
import { motion } from "framer-motion";
import Section from "./Section";
import { Code2, Layout, Terminal } from "lucide-react";
const Skills = () => {
const SKILLS = [
  { 
    category: "Frontend", 
    icon: <Code2 className="text-blue-400" />,
    items: ["React", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "TailwindCSS", "Sass"] 
  },
  { 
    category: "WordPress", 
    icon: <Layout className="text-purple-400" />,
    items: ["Gutenberg Blocks", "Elementor Customizer", "Custom Themes", "Plugin Development", "Headless WP"] 
  },
  { 
    category: "Backend & Tools", 
    icon: <Terminal className="text-emerald-400" />,
    items: ["PHP", "REST API", "Git/GitHub", "VS Code", "Figma", "Vercel", "Node.js"] 
  },
];
  return (
    <Section id="skills" className="bg-slate-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Stack</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          A hybrid tech stack focused on performance and flexibility.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {SKILLS.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-800/50 border border-white/5 rounded-2xl p-8 hover:border-blue-500/30 transition-all group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{group.category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white/5 text-slate-300 rounded-md text-sm border border-white/5 group-hover:bg-white/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {index === 1 && (
               <p className="mt-6 text-sm text-slate-500 italic">"Custom Gutenberg blocks with React & WP scripts."</p>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
