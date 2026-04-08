import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => (
  <footer className="border-t border-slate-200 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="grid gap-10 md:grid-cols-3 md:items-start">
        <div>
          <Link
            href="/#home"
            className="inline-flex items-center gap-3 text-xl font-bold text-slate-900 tracking-tight"
            aria-label="Go to home"
          >
            <Image
              src="/farok_ahmed_log.png"
              alt="Farok Ahmed"
              width={36}
              height={36}
              className="h-9 w-9 rounded"
            />
            <span>
              Farok<span className="text-blue-600">Ahmed</span>
            </span>
          </Link>
          <p className="mt-2 text-sm text-slate-600">
            React, Next.js &amp; WordPress Developer
          </p>
        </div>

        <nav aria-label="Quick links" className="md:justify-self-center">
          <p className="text-sm font-semibold text-slate-900 mb-4">Quick Links</p>
          <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            <Link href="/#home" className="text-slate-600 hover:text-slate-900 transition-colors">
              Home
            </Link>
            <Link href="/#about" className="text-slate-600 hover:text-slate-900 transition-colors">
              About
            </Link>
            <Link href="/#skills" className="text-slate-600 hover:text-slate-900 transition-colors">
              Skills
            </Link>
            <Link href="/#projects" className="text-slate-600 hover:text-slate-900 transition-colors">
              Featured Projects
            </Link>
            <Link href="/#services" className="text-slate-600 hover:text-slate-900 transition-colors">
              Services
            </Link>
            <Link href="/#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
              Contact
            </Link>
            <Link href="/projects" className="text-slate-600 hover:text-slate-900 transition-colors">
              All Projects
            </Link>
            <Link href="/blog" className="text-slate-600 hover:text-slate-900 transition-colors">
              Blog
            </Link>
          </div>
        </nav>

        <div className="flex flex-col gap-4 md:justify-self-end md:items-start">
          <p className="text-sm font-semibold text-slate-900">Connect</p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Farok-ahmed"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:mdfarokahmed2002@gmail.com"
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Farok Ahmed. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;