import About from "@/components/About";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Skills from "@/components/skilles";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
     <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 selection:text-blue-200">
        <NavBar />
        <main>
         <Hero />   
         <About />
         <Skills />
         <Services />
         <Projects />
         <Contact />
        </main>
        <Footer />
     </div>
    </>
  );
}
