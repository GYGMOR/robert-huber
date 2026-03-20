"use client";

import { motion } from "framer-motion";
import { Wrench, ShieldCheck, Cog, Award } from "lucide-react";
import Link from "next/link";

export function ServicesTeaser() {
  const services = [
    { title: "Verkauf", desc: "Exklusive Beratung & Probefahrten", icon: Award, link: "/dienstleistungen" },
    { title: "Werkstatt", desc: "Zertifizierter Mercedes Service", icon: Wrench, link: "/dienstleistungen" },
    { title: "Reifen", desc: "Premium Reifenhotel & Wechsel", icon: Cog, link: "/dienstleistungen" },
    { title: "Karosserie", desc: "Performance & Lackierung", icon: ShieldCheck, link: "/dienstleistungen" },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-black/50 border-y border-white/5 backdrop-blur-3xl">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={service.link} className="group block h-full">
                  <div className="glass-card p-10 h-full rounded-[32px] flex flex-col items-start justify-between cursor-pointer group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-all duration-500">
                      <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">{service.title}</h4>
                      <p className="text-zinc-500 font-medium text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
