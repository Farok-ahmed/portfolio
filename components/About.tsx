
"use client"
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8">
            <p>
              Hi, I’m Farok Ahmed, a professional React and Next.js developer and WordPress expert based in Bangladesh. I specialize in building fast, modern, and scalable websites using React, Next.js, WordPress, WooCommerce, Elementor, and Gutenberg.
            </p>
            <p>
             With strong experience in both frontend and CMS development, I help businesses create high-performance websites, custom WordPress solutions, and conversion-focused landing pages.
            </p>
          </div>

          <div className="space-y-3">
            {[
              "Custom Gutenberg block development",
              "Elementor website design & customization",
              "WooCommerce store development",
              "React & Next.js landing pages",
              "Modern, fast & SEO-friendly websites"

            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <button
              type="button"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-slate-200 relative group shadow-xl shadow-slate-900/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent z-10" />
            
            {/* Profile Photo */}
            <div className="absolute inset-0 bg-slate-50">
              <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/60" />
              <div className="absolute inset-0">
                <Image
                  src="/farok_ahmed.png"
                  alt="Farok Ahmed"
                  fill
                  sizes="(min-width: 768px) 420px, 90vw"
                  className="object-contain object-bottom"
                  priority={false}
                />
              </div>
            </div>
            
            
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-dashed border-slate-300 rounded-full animate-spin-slow" />
        </motion.div>
      </div>
    </Section>
  );
};

export default About;