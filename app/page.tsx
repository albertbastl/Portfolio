"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight, ArrowDown, FileUser } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiNextdotjs } from "react-icons/si";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center p-4 sm:p-8 font-sans">
      <motion.div
        className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 1. Hlavní dlaždice s fotkou jako pozadím a gradientem */}
        <motion.div
          variants={itemVariants}
          className="bg-neutral-900 border border-white/10 rounded-3xl relative overflow-hidden md:col-span-2 md:row-span-2 hover:scale-[1.02] transition-transform duration-300 min-h-[400px]"
        >
          <div className="absolute inset-0 z-0 h-full w-full">
            <Image
              src="/profile-picture.jpg"
              alt="Albert Bastl - Portrét"
              fill
              priority
              className="object-cover object-[center_85%]"
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent z-10" />

          <div className="relative z-20 h-full flex flex-col justify-between p-8">
            <div className="flex justify-end">
              <div className="flex items-center gap-2 px-4 py-2 bg-neutral-950/60 border border-white/10 rounded-full text-sm font-medium backdrop-blur-sm shadow-xl">
                <span className="relative flex h-2 w-2 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <MapPin size={14} className="text-neutral-400" />
                <span className="text-neutral-100">Prague, Czech Republic</span>
                <span className="text-neutral-600 mx-1">|</span>
                <span className="text-neutral-400 hidden sm:inline">Open to remote</span>
              </div>
            </div>

            <div className="mt-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Albert Bastl</h1>
              <p className="text-neutral-200 text-lg leading-relaxed max-w-xl">
                A true developer focused on proven patterns, scalability, and human-centric UX in the age of vibe coding.
              </p>
              <div className="mt-6 flex items-center">
                <a
                  href="mailto:albertbastl@protonmail.com"
                  className="group flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors"
                >
                  <Mail size={18} />
                  <span>Let's talk</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Socials */}
        <motion.div
          variants={itemVariants}
          className="bg-neutral-900 border border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition-transform duration-300 md:col-span-1 md:row-span-1 flex flex-col justify-center gap-4"
        >
          <a href="https://www.linkedin.com/in/albert-bastl-16194936b/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] transition-colors shadow-sm">
            <div className="p-2 bg-white/10 rounded-full text-white group-hover:scale-110 transition-transform">
              <FiLinkedin size={18} />
            </div>
            <div className="flex-grow">
              <p className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors">LinkedIn</p>
              <p className="text-neutral-500 text-xs">Albert Bastl</p>
            </div>
            <ArrowUpRight size={16} className="text-neutral-700 group-hover:text-blue-400 transition-colors" />
          </a>

          <a href="https://github.com/albertbastl" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] transition-colors shadow-sm">
            <div className="p-2 bg-white/10 rounded-full text-white group-hover:scale-110 transition-transform">
              <FiGithub size={18} />
            </div>
            <div className="flex-grow">
              <p className="text-white font-medium text-sm group-hover:text-red-500 transition-colors">GitHub</p>
              <p className="text-neutral-500 text-xs">albertbastl</p>
            </div>
            <ArrowUpRight size={16} className="text-neutral-700 group-hover:text-neutral-100 transition-colors" />
          </a>

          <a href="/CV-Albert-Bastl.pdf" download className="group flex items-center gap-4 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] transition-colors shadow-sm border border-neutral-700 hover:border-neutral-500">
            <div className="p-2 bg-white/10 rounded-full text-white group-hover:scale-110 transition-transform">
              <FileUser size={18} />
            </div>
            <div className="flex-grow">
              <p className="text-white font-medium text-sm group-hover:text-green-400 transition-colors">Curriculum Vitae</p>
              <p className="text-neutral-500 text-xs">Download (PDF)</p>
            </div>
            <ArrowDown size={16} className="text-neutral-700 group-hover:text-green-400 transition-colors" />
          </a>
        </motion.div>

        {/* 3. Tech Stack */}
        <motion.div
          variants={itemVariants}
          className="bg-neutral-900 border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300 md:col-span-1 md:row-span-1 flex flex-col justify-between overflow-hidden group"
        >
          <h2 className="text-xl font-bold mb-6 text-neutral-200 z-10">Stack</h2>
          <div className="flex-grow flex flex-col items-center justify-center gap-6 relative z-10">
            <div className="relative group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
              <SiNextdotjs className="relative z-10 text-[100px] text-white filter drop-shadow-lg" />
            </div>
            <p className="text-neutral-300 text-lg leading-relaxed text-center max-w-[220px]">
              Specialized in Next.js and everything around that.
            </p>
          </div>
          <div className="h-4"></div>
        </motion.div>

        {/* 4. Projekty */}
        <motion.div
          variants={itemVariants}
          className="bg-neutral-900 border border-white/10 rounded-3xl p-4 hover:scale-[1.02] transition-transform duration-300 md:col-span-3 md:row-span-1 flex flex-col justify-center"
        >
          <h2 className="text-lg font-bold mb-3 text-neutral-200 px-2">Chosen Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "naskalu.cz",
                desc: "Bored of not being able to find boulders in the nature?",
                link: "https://naskalu.cz",
                tags: ["Full-stack app"]
              },
              { 
                name: "iansa.eu", 
                desc: "Colaborated on custom journal editorial system.", 
                link: "https://www.iansa.eu",
                tags: ["PHP"]
              },
            // ZDE JE ZMĚNA: explicitní definice typu pro parametr `project`
            ].map((project: { name: string; desc: string; link: string; tags: string[]; disabled?: boolean }, i) => {
              if (project.disabled) {
                return (
                  <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-white/[0.01] border border-white/5 opacity-50 cursor-not-allowed">
                    <div>
                      <h3 className="font-semibold text-white text-base flex items-center gap-2">
                        {project.name}
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-red-500/10 text-red-400 px-2 py-0.5 rounded-full border border-red-500/20">
                          Currently Down
                        </span>
                      </h3>
                      <p className="text-sm text-neutral-500 mt-1">{project.desc}</p>
                    </div>
                  </div>
                );
              }

              return (
                <a key={i} href={project.link} target={project.link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer" className="group flex items-center justify-between p-6 rounded-2xl bg-white/[0.02] hover:bg-white/5 border border-white/5 transition-colors">
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-neutral-300 transition-colors text-base">{project.name}</h3>
                    <p className="text-sm text-neutral-500 mt-1 mb-3">{project.desc}</p>
                    {/* Zde jsou přidány štítky pro projekty */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 text-neutral-400 border border-white/10 group-hover:border-white/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight size={22} className="text-neutral-600 group-hover:text-neutral-300 transition-colors self-start" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}