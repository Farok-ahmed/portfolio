"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Section from "./Section";
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <Section id="contact" className="mb-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Have a project in mind?
          </h2>
          <p className="text-slate-400 text-lg">
            Let's build it together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800 rounded-2xl p-6 md:p-10 border border-white/10"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
             <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-300">Name</label>
                   <input type="text" placeholder="John Doe" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-300">Email</label>
                   <input type="email" placeholder="john@example.com" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
             </div>
             
             <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-300">Project Type</label>
                   <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                      <option>Next.js Application</option>
                      <option>WordPress Customization</option>
                      <option>Elementor Widget Dev</option>
                      <option>Other</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-300">Budget Range</label>
                   <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                      <option>&lt; $1k</option>
                      <option>$1k - $5k</option>
                      <option>$5k - $10k</option>
                      <option>$10k+</option>
                   </select>
                </div>
             </div>

             <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Message</label>
                <textarea rows={4} placeholder="Tell me about your project goals..." className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" />
             </div>

             <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.01] shadow-lg shadow-blue-600/20">
                Send Message
             </button>
          </form>

          <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="flex items-center gap-2 text-slate-400">
                <Mail size={18} />
                <span>hello@farok.dev</span>
             </div>
             <div className="flex gap-6">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="text-slate-400 hover:text-white transition-colors">
                    <Icon size={22} />
                  </a>
                ))}
             </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
export default Contact;