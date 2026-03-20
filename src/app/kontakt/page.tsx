"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      <PageHeader
        image="/Header-Bild/header6.jpg"
        preTitle="Kontakt"
        title="Wir sind"
        titleAccent="für Sie da."
        subtitle="Haben Sie Fragen zu unseren Fahrzeugen, möchten Sie einen Termin vereinbaren oder benötigen Sie Hilfe? Kontaktieren Sie uns direkt."
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 mt-10">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Kontaktinfos */}
            <div className="glass-card p-8 rounded-3xl border border-white/5 space-y-8">
              <div>
                <h3 className="text-white font-bold text-xl mb-6">Zentrale Robert Huber AG</h3>
                <div className="space-y-4">
                  <a href="tel:0566191717" className="flex items-center text-gray-300 hover:text-white group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                      <Phone className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <span className="font-medium">056 619 17 17</span>
                  </a>
                  <a href="mailto:info@roberthuber.ch" className="flex items-center text-gray-300 hover:text-white group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                      <Mail className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <span className="font-medium">info@roberthuber.ch</span>
                  </a>
                  <div className="flex items-center text-gray-300 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4">
                      <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <span className="text-sm leading-snug">Hauptsitz: <br/>Dorfmattenstrasse 2, 5612 Villmergen</span>
                  </div>
                </div>
              </div>

              {/* Notfall */}
              <div className="pt-8 border-t border-white/5">
                <div className="flex items-center text-red-400 mb-2">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  <h4 className="font-bold">24H Notfall & Pannenhilfe</h4>
                </div>
                <p className="text-2xl font-bold text-white">00 800 1 777 7777</p>
                <p className="text-sm text-gray-500 mt-2">Rund um die Uhr, 365 Tage im Jahr.</p>
              </div>
            </div>
          </motion.div>

          {/* Formular */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 glass-card p-10 md:p-14 rounded-3xl border border-white/5"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Schreiben Sie uns</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">Vorname</label>
                  <input type="text" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">Nachname</label>
                  <input type="text" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">E-Mail Adresse</label>
                  <input type="email" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">Telefonnummer</label>
                  <input type="tel" className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">Ihr Anliegen</label>
                <select className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors appearance-none cursor-pointer">
                  <option>Allgemeine Anfrage</option>
                  <option>Fahrzeugkauf / Probefahrt</option>
                  <option>Werkstatt / Service</option>
                  <option>Karosserie / Lack</option>
                  <option>Reifenhotel</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">Nachricht</label>
                <textarea rows={5} className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] border-transparent transition-colors resize-none"></textarea>
              </div>

              <Button size="lg" className="w-full md:w-auto px-10 h-14 mt-4">
                Nachricht senden
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
