
"use client"
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-24">
      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
      {/* Background Gradient Orbs */}
      <div className="absolute -top-10 -left-16 w-[26rem] h-[26rem] bg-blue-300/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-[30rem] h-[30rem] bg-purple-300/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-slate-200 text-slate-600 text-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for projects
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                Hi, I’m<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Farok Ahmed
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-2xl md:max-w-none mb-8">
                A React & Next.js Developer and WordPress Expert
              </p>

              <p className="text-sm text-slate-500 font-mono mb-10">
                I specialize in building high-performance websites using React, Next.js, WordPress, WooCommerce, Elementor, and Gutenberg.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold flex items-center gap-2 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}
                >
                  View Projects <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 bg-white text-slate-900 border border-slate-300 rounded-full font-bold hover:bg-slate-50 transition-colors"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}
                >
                  Hire Me
                </motion.button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md shadow-xl shadow-slate-900/5 overflow-hidden">
                <div className="p-8">
                  <p className="text-sm font-semibold text-slate-500 mb-4">What I do</p>
                  <ul className="space-y-3">
                    {[
                      "Next.js landing pages & portfolios",
                      "Custom Gutenberg blocks with React",
                      "Elementor widgets & WordPress customization",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <p className="text-sm font-semibold text-slate-500 mb-3">Core stack</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Next.js",
                        "React",
                        "TailwindCSS",
                        "WordPress",
                        "Gutenberg",
                        "Elementor",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
              </div>

              <div className="absolute -z-10 -inset-8 bg-gradient-to-r from-blue-200/50 to-purple-200/50 blur-2xl rounded-[2rem]" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400"
      >
        <ChevronDown />
      </motion.div>
    </section>
  );
};

export default Hero;
    