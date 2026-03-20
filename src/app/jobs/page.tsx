"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, GraduationCap } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";

export default function JobsPage() {
  const jobs = [
    { title: "Automobil-Mechatroniker/in EFZ (Mercedes-Benz)", location: "Villmergen", workload: "100%", type: "Werkstatt" },
    { title: "Verkaufsberater/in Neuwagen", location: "Muri", workload: "100%", type: "Verkauf" },
    { title: "Serviceberater/in / Kundendienstberater/in", location: "Windisch", workload: "80-100%", type: "Kundendienst" },
    { title: "Lernende/r Automobil-Fachmann/-frau", location: "Seon", workload: "Lehrstelle", type: "Ausbildung" },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <PageHeader
        image="/Header-Bild/header2.jpg"
        preTitle="Karriere"
        title="Werden Sie Teil"
        titleAccent="unseres Erfolgs."
        subtitle="Wir suchen Talente, die unsere Leidenschaft für Premium-Automobile teilen. Bei der Robert Huber AG erwartet Sie ein dynamisches Umfeld."
      />
      <div className="container mx-auto px-6 max-w-7xl mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-8">
              Wir suchen Talente, die unsere Leidenschaft für Premium-Automobile teilen. Bei der Robert Huber AG erwartet Sie ein dynamisches Umfeld, modernste Infrastruktur und exzellente Entwicklungsmöglichkeiten.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col p-6 glass-card rounded-2xl border border-white/5">
                <Briefcase className="w-8 h-8 text-[var(--color-accent)] mb-4" />
                <h4 className="text-white font-bold mb-2">Offene Stellen</h4>
                <p className="text-sm text-gray-400 font-light">Finden Sie Ihre nächste Herausforderung.</p>
              </div>
              <div className="flex flex-col p-6 glass-card rounded-2xl border border-white/5">
                <GraduationCap className="w-8 h-8 text-[var(--color-accent)] mb-4" />
                <h4 className="text-white font-bold mb-2">Lehrstellen</h4>
                <p className="text-sm text-gray-400 font-light">Starte deine Zukunft mit uns.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-[500px] rounded-3xl overflow-hidden relative"
          >
            <img 
              src="/auto-Bilder/test3.jpg" 
              alt="Mercedes-Benz Workshop" 
              className="w-full h-full object-cover brightness-[0.7] group-hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-10">Aktuelle Vakanzen</h3>
          <div className="flex flex-col gap-4">
            {jobs.map((job, i) => (
              <a 
                key={i} 
                href="#"
                className="group glass-card p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-white/5 transition-all duration-300"
              >
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                    <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">{job.workload}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">{job.title}</h4>
                  <p className="text-gray-400 mt-2 flex items-center text-sm font-medium">
                    Standort: {job.location}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] transition-colors">
                  <ArrowRight className="w-5 h-5 text-white group-hover:text-black" />
                </div>
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
