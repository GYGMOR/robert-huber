"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Route } from "lucide-react";
import { mockVehicles } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FeaturedVehicles() {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      {/* Background elegant lighting */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[500px] bg-[var(--color-accent)]/5 rounded-full blur-[180px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1400px] relative z-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <span className="w-8 h-[1px] bg-[var(--color-accent)]" />
              <span className="text-xs font-semibold tracking-[0.3em] text-[var(--color-accent)] uppercase">
                Highlights Kollektion
              </span>
            </div>
            <h3 className="text-5xl md:text-6xl font-sans font-bold tracking-tighter text-white mb-6 uppercase glow-text">
              Limitierte <br/> Meisterwerke
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button variant="outline" size="lg" className="rounded-full h-14 px-8 border-white/20 hover:border-white text-white hover:bg-white hover:text-black transition-all duration-500 font-medium">
              Alle Fahrzeuge ansehen <ArrowRight className="ml-3 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mockVehicles.slice(0, 3).map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[32px] overflow-hidden glass-card p-4 flex flex-col cursor-pointer bg-surface/60 backdrop-blur-3xl hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="relative h-72 md:h-80 w-full rounded-[24px] overflow-hidden bg-black mb-6">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.model} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.08] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-[0.8] group-hover:brightness-100"
                />
                
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-[var(--color-accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 pointer-events-none mix-blend-overlay" />

                <div className="absolute top-4 left-4 z-20">
                  <div className="glass px-4 py-1.5 border border-white/10 rounded-full flex items-center backdrop-blur-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mr-2" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">{vehicle.location}</span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80 z-10" />
              </div>
              
              <div className="px-4 pb-4 flex-grow flex flex-col relative z-20">
                <div className="mb-6 flex-grow">
                  <p className="text-zinc-500 text-[10px] font-bold mb-2 uppercase tracking-[0.2em] group-hover:text-[var(--color-accent)] transition-colors duration-500">{vehicle.brand}</p>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 line-clamp-1 leading-tight">{vehicle.model}</h4>
                  
                  {/* Minimal High-End Specs (Price, Year, KM) */}
                  <div className="flex items-center justify-between mt-4 mb-2">
                    <p className="text-white text-2xl font-light tracking-wide">
                      CHF <span className="font-semibold text-[var(--color-accent)]">{vehicle.price}.-</span>
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-zinc-400 text-sm font-medium pt-3 border-t border-white/5">
                    <div className="flex items-center group-hover:text-white transition-colors">
                      <Calendar className="w-4 h-4 mr-2 text-[var(--color-accent)]/80" />
                      {vehicle.year}
                    </div>
                    <div className="flex items-center group-hover:text-white transition-colors">
                      <Route className="w-4 h-4 mr-2 text-[var(--color-accent)]/80" />
                      {vehicle.mileage} km
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-full p-[1px] mt-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                  <Link href={`/fahrzeuge/${vehicle.id}`} className="w-full inline-flex items-center justify-center relative z-10 h-14 bg-surface hover:bg-white hover:text-black border border-white/10 text-white rounded-full group-hover:border-transparent transition-all duration-500 tracking-wide text-sm font-semibold">
                    Fahrzeug entdecken
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
