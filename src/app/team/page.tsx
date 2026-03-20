"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { mockTeam } from "@/lib/mockData";
import { PageHeader } from "@/components/layout/PageHeader";

export default function TeamPage() {

  return (
    <div className="min-h-screen bg-background pt-24 pb-24 relative overflow-hidden">
      <div className="absolute top-40 left-10 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-[100px]" />
      <PageHeader
        image="/Header-Bild/header2.jpg"
        preTitle="Unser Team"
        title="Die Gesichter"
        titleAccent="hinter dem Stern."
        subtitle="Herausragender Service beginnt bei den Menschen. Unsere Experten sind täglich fokussiert darauf, Ihre hohen Erwartungen zu übertreffen."
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 mt-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {mockTeam.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden mb-8 border border-white/5 shadow-2xl">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter brightness-[0.9] group-hover:brightness-110 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-[0.2em] mb-2">{member.department}</p>
                  <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">{member.name}</h3>
                  <p className="text-zinc-400 text-sm font-medium">{member.role}</p>
                </div>
              </div>
              <div className="space-y-3 px-2">
                <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mr-3 text-gray-500" />
                  <span className="text-sm">{member.phone}</span>
                </a>
                <a href={`mailto:${member.email}`} className="flex items-center text-gray-400 hover:text-[var(--color-accent)] transition-colors">
                  <Mail className="w-4 h-4 mr-3 text-gray-500" />
                  <span className="text-sm">{member.email}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
