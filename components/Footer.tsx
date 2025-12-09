const Footer = () => (
  <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5 bg-slate-950">
    <p>© {new Date().getFullYear()} Farok Ahmed. All rights reserved.</p>
    <p className="mt-2 text-xs">Built with Next.js & TailwindCSS</p>
  </footer>
);
export default Footer;