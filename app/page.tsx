"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const PROJECTS = [
  { 
    id: 1, 
    title: "naskalu", 
    role: "end-to-end development", 
    year: "2026",
    link: "https://naskalu.cz",
    image: "/naskalu.png" 
  },
  { 
    id: 2, 
    title: "iansa journal", 
    role: "peer-review platform", 
    year: "2026",
    link: "https://iansa.eu",
    image: "/iansa.png" 
  },
];

export default function Portfolio() {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const isHeroTextInView = useInView(heroTextRef);
  const showNav = !isHeroTextInView;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#030303] text-neutral-100 selection:bg-white/10 selection:text-white font-sans relative">
      
      {/* FLOATING NAVIGATION PILL */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ y: -20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-8 left-8 z-[100] flex items-center gap-6 px-5 py-2.5 md:px-7 md:py-3.5 bg-neutral-900/40 backdrop-blur-2xl border border-white/15 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <button 
              onClick={scrollToTop}
              className="font-bold tracking-tighter lowercase text-white hover:opacity-70 transition-opacity"
            >
              <span className="hidden md:block text-lg">albert bastl.</span>
              <span className="block md:hidden text-sm">albert.</span>
            </button>
            <div className="w-[1px] h-4 bg-white/20"></div>
            <nav className="flex items-center gap-5 md:gap-7">
              <Link href="/cv-albert-bastl.pdf" target="_blank" className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors font-medium">cv</Link>
              <Link href="mailto:albert.bastl@protonmail.com" className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors font-medium">mail</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="h-[75vh] flex flex-col items-center justify-center relative px-6">
        <motion.div
          ref={heroTextRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter lowercase text-white mb-4">
            albert bastl
          </h1>
          <h2 className="text-xl md:text-2xl font-medium tracking-tight lowercase text-neutral-500 mb-10">
            let my work <span className="text-neutral-100">speak for me.</span>
          </h2>
          
          <Link 
            href="/cv-albert-bastl.pdf" 
            target="_blank"
            className="group flex items-center gap-3 px-8 py-4 bg-white/[0.03] border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 group-hover:text-white transition-colors">view cv</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </Link>
        </motion.div>
      </section>

      {/* SECTION DIVIDER */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full max-w-5xl mx-auto px-6 flex items-center gap-6 mb-16 md:mb-20 relative"
      >
        <div className="text-[9px] uppercase tracking-[0.3em] text-neutral-600 whitespace-nowrap font-medium">selected works</div>
        <div className="h-[1px] w-full bg-gradient-to-r from-white/[0.07] to-transparent"></div>
      </motion.div>

      {/* WORK SECTION */}
      <section className="max-w-5xl mx-auto px-6 pb-20 md:pb-32 relative">
        <div className="flex flex-col gap-24 md:gap-32">
          {PROJECTS.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer block"
            >
              {/* PROJECT CARD WITH HIGH-DEFINITION BORDERS - Responzivní rohy */}
              <div className="w-full aspect-[16/9] bg-neutral-950 rounded-2xl md:rounded-[2.5rem] mb-6 overflow-hidden border border-white/15 relative flex items-center justify-center transition-all duration-700 group-hover:border-white/30 group-hover:shadow-[0_0_80px_rgba(255,255,255,0.03)]">
                
                {/* PROJECT IMAGE */}
                {project.image && (
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 ease-[0.16,1,0.3,1]"
                    sizes="(max-width: 768px) 100vw, 1024px"
                    priority={index === 0}
                  />
                )}

                {/* INNER GLASS RING - Responzivní rohy */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl md:rounded-[2.5rem] z-10 pointer-events-none" />

                {/* OVERLAY GRADIENT ON HOVER */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                
                {/* HOVER CALL-TO-ACTION (ARROW) */}
                <div className="absolute w-14 h-14 md:w-16 md:h-16 bg-white text-black rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[0.16,1,0.3,1] z-20 shadow-2xl pointer-events-none">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>

              {/* PROJECT INFO - Vylepšený layout pro konzistentní datum */}
              <div className="flex justify-between items-center px-4 md:px-6">
                <div className="space-y-0.5 flex-1 pr-4">
                  <h3 className="text-2xl md:text-5xl font-medium tracking-tight lowercase text-neutral-200 group-hover:text-white transition-colors truncate">
                    {project.title}
                  </h3>
                  <p className="text-neutral-500 text-xs md:text-base uppercase tracking-[0.2em] font-medium truncate">{project.role}</p>
                </div>
                {/* Datum fixně zarovnané doprava */}
                <p className="text-neutral-600 font-mono text-sm md:text-base w-16 text-right tabular-nums">
                  {project.year}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION - Zmenšený horní padding na mobilu */}
      <section className="max-w-4xl mx-auto px-6 pb-48 pt-12 md:pt-20 relative">
        <motion.div 
          className="flex flex-col items-center text-center border-t border-white/[0.05] pt-20 md:pt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter lowercase text-white mb-10">
            contact <span className="text-neutral-600 italic">me.</span>
          </h2>
          <Link 
            href="mailto:albert.bastl@protonmail.com" 
            className="group flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full hover:scale-105 active:scale-95 transition-all duration-500 ease-[0.16, 1, 0.3, 1]"
          >
            <span className="text-sm md:text-base font-bold tracking-widest uppercase">get in touch</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
              <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </Link>
        </motion.div>
      </section>

      {/* FOOTER - Opravené mezery a formátování */}
      <footer className="py-16 text-center border-t border-white/[0.02] px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-2.5 gap-y-1 text-xs md:text-sm text-neutral-800 uppercase tracking-[0.3em] font-medium">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="text-neutral-700">albert bastl</span>
          <span className="text-neutral-900 hidden md:inline">&mdash;</span>
          <span className="text-neutral-900 text-[10px] md:text-xs">built with next.js</span>
        </div>
      </footer>
    </main>
  );
}