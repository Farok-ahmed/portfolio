
"use client"
import { motion } from "framer-motion";
import { CheckCircle2, Code2 } from "lucide-react";
import Section from "./Section";
const About = () => {
  return (
    <Section id="about" className="relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-slate-400 text-lg leading-relaxed mb-8">
            <p>
              I'm Farok, a dedicated developer who bridges the gap between traditional WordPress content management and modern React frontends. 
            </p>
            <p>
              Whether it's building custom plugins for agency clients or creating high-performance SaaS landing pages, I love solving technical challenges that help businesses grow.
            </p>
          </div>

          <div className="space-y-3">
            {[
              "Experience with Gutenberg block development",
              "Custom Elementor widgets & layouts",
              "Next.js landing pages & business sites"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-white/10 relative group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10" />
            
            {/* Placeholder for Photo/Illustration */}
            <div className="w-full h-full flex items-center justify-center bg-slate-900">
               <div className="relative">
                  <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl" />
                  <Code2 size={120} className="text-slate-700 relative z-10" />
               </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 to-transparent z-20">
              <p className="text-white font-medium text-center">Let's build something scalable.</p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-dashed border-slate-700 rounded-full animate-spin-slow" />
        </motion.div>
      </div>
    </Section>
  );
};

export default About;