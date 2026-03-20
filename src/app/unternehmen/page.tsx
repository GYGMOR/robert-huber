"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";

export default function UnternehmenPage() {
  const milestones = [
    { year: "1972", title: "Gründung", text: "Die Geschichte beginnt mit einer kleinen Werkstatt und einer großen Leidenschaft für Automobile." },
    { year: "1985", title: "Mercedes-Benz Partner", text: "Der offizielle Start der Partnerschaft mit Mercedes-Benz legt den Grundstein für das Premium-Segment." },
    { year: "2005", title: "Expansion im Aargau", text: "Eröffnung weiterer Standorte zur Sicherstellung der regionalen Nähe zu unseren Kunden." },
    { year: "2024", title: "Die Zukunft", text: "Heute sind wir der größte zertifizierte Partner im Aargau, angetrieben von Innovation und Service-Exzellenz." },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <PageHeader
        image="/Header-Bild/header6.jpg"
        preTitle="Über uns"
        title="Leidenschaft,"
        titleAccent="die bewegt."
        subtitle="Die Robert Huber AG ist mehr als ein Autohaus. Wir sind ein Familienunternehmen, das sich seit Jahrzehnten der Perfektion und dem exklusiven Service rund um den Stern verschreit."
      />

      {/* Hero */}
      <section className="container mx-auto px-6 max-w-7xl mb-24 lg:mb-32 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <div className="flex items-center text-gray-300">
              <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] mr-3" />
              <span className="font-medium tracking-wide">Über 50 Jahre Erfahrung</span>
            </div>
            <div className="flex items-center text-gray-300">
              <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] mr-3" />
              <span className="font-medium tracking-wide">Höchste Kundenzufriedenheit</span>
            </div>
            <div className="flex items-center text-gray-300">
              <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] mr-3" />
              <span className="font-medium tracking-wide">Modernste Infrastruktur</span>
            </div>
            <div className="flex items-center text-gray-300">
              <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] mr-3" />
              <span className="font-medium tracking-wide">Top-motiviertes Team</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Cinematic Image section */}
      <section className="w-full h-[600px] mb-24 relative overflow-hidden group">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="/Header-Bild/header1.jpg" 
          alt="Dealership Interior" 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] brightness-[0.6]"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
          <p className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            "Wir stehen für kompromisslose Qualität in jedem Detail."
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-16 text-center">Meilensteine</h3>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-background text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                  <div className="w-3 h-3 bg-[var(--color-accent)] rounded-full group-hover:scale-150 transition-transform duration-300" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl">
                  <span className="font-bold text-[var(--color-accent)] text-xl mb-2 block">{milestone.year}</span>
                  <h4 className="text-white font-bold text-xl mb-2">{milestone.title}</h4>
                  <p className="text-gray-400 font-light leading-relaxed">{milestone.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
