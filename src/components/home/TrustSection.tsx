"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const step = Math.max(1, Math.ceil(value / 60)); // 60 frames
      
      const timer = setInterval(() => {
        current += step;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 30);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}

export function TrustSection() {
  const stats = [
    { value: 50, label: "Jahre Erfahrung", prefix: ">" },
    { value: 6, label: "Standorte im Aargau", prefix: "" },
    { value: 1500, label: "Fahrzeuge auf Lager", prefix: ">" },
    { value: 100, label: "Kundenzufriedenheit", prefix: "", suffix: "%" },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-[#0A0A0A]">
      <div className="absolute right-0 top-1/2 w-[800px] h-[800px] bg-[var(--color-accent)]/5 rounded-full blur-[200px] -translate-y-1/2 pointer-events-none" />
      
      <div className="container flex flex-col items-center justify-center text-center mx-auto px-6 max-w-[1400px] relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <div className="inline-flex items-center justify-center space-x-3 mb-6 mx-auto">
            <span className="w-8 h-[1px] bg-[var(--color-accent)]" />
            <span className="text-xs font-semibold tracking-[0.3em] text-[var(--color-accent)] uppercase">
              Vertrauen & Historie
            </span>
            <span className="w-8 h-[1px] bg-[var(--color-accent)]" />
          </div>
          <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-white uppercase glow-text">
            Exzellenz. <br/> Seit <span className="text-[var(--color-accent)]">1972.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="text-6xl md:text-7xl font-bold text-white mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-700 tracking-tighter">
                 {stat.prefix}<AnimatedNumber value={stat.value} />{stat.suffix}
              </div>
              <div className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-zinc-500">
                 {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
