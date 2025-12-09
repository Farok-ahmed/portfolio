
"use client"
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             Available for projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            React & WordPress <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Developer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            I build fast, modern websites with Next.js, Gutenberg blocks, and custom Elementor solutions.
          </p>

          <p className="text-sm text-slate-500 font-mono mb-10">
            React · Next.js · WordPress · Gutenberg · Elementor · TailwindCSS
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold flex items-center gap-2 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-full font-bold hover:bg-slate-700 transition-colors"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}
            >
              Hire Me
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
      >
        <ChevronDown />
      </motion.div>
    </section>
  );
};

export default Hero;
    