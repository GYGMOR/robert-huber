"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative h-[85vh] min-h-[700px] w-full flex items-center overflow-hidden bg-black">
      {/* Background Video Parallax */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 w-full h-[140%] -top-[20%]">
        <video
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover object-top scale-110 filter brightness-[0.8] contrast-[1.05] saturate-[0.6]"
        >
          <source src="/videos/Robert-Huber.mp4" type="video/mp4" />
        </video>
        {/* Cinematic dark overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[var(--color-accent)]/5 mix-blend-overlay z-10 pointer-events-none" />
      </motion.div>

      {/* Left-aligned Content Container */}
      <div className="container relative z-20 mx-auto px-6 max-w-7xl h-full flex flex-col justify-center pt-24">
        
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-4 mb-8"
          >
            <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
            <span className="text-xs font-semibold tracking-[0.4em] text-[var(--color-accent)] uppercase">
              Premium Automotive
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-[80px] font-sans font-bold tracking-tighter text-white leading-[0.95] mb-6 glow-text"
          >
            EXKLUSIVE <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              FAHRZEUGE.
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-gray-200 font-light mb-10 leading-relaxed"
          >
            Einzigartige Erlebnisse. Kompromissloser Luxus und dynamische Performance.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            <Button className="h-16 px-10 rounded-full text-base tracking-wide bg-[var(--color-accent)] text-black hover:bg-white hover:text-black shadow-[0_0_30px_rgba(201,163,78,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-500 w-full sm:w-auto font-bold border border-transparent">
              Fahrzeuge entdecken
            </Button>
            <Button variant="glass" className="h-16 px-10 rounded-full text-base tracking-wide border-white/20 hover:border-white text-white transition-all duration-500 w-full sm:w-auto font-medium">
              Termin vereinbaren
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-6 md:left-24 z-20 flex flex-col items-center gap-4 cursor-pointer group"
        onClick={scrollToNext}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-500 group-hover:text-white transition-colors rotate-[-90deg] origin-bottom-left absolute bottom-16 -left-2 w-[100px]">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
           <motion.div 
             className="w-full h-1/2 bg-[var(--color-accent)] absolute top-0"
             animate={{ top: ['-50%', '100%'] }}
             transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
           />
        </div>
      </motion.div>
    </section>
  );
}
