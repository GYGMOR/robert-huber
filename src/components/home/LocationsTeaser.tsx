"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { mockLocations } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LocationsTeaser() {
  return (
    <section className="py-24 relative z-10 overflow-hidden bg-[#0A0A0A]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
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
                Unsere Standorte
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-sans font-bold tracking-tighter text-white uppercase glow-text">
              Immer in <br/> Ihrer Nähe.
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockLocations.slice(0, 3).map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[32px] overflow-hidden glass-card h-[450px] cursor-pointer"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0 bg-black">
                <img 
                  src={location.image} 
                  alt={location.name} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-[0.7] group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <div className="flex items-center text-[var(--color-accent)] mb-3">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-xs font-bold uppercase tracking-widest leading-none mt-1">
                      Zentrum
                    </span>
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-4 leading-tight">{location.name}</h4>
                  
                  {/* Hover Revealed Button */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <Link href="/standorte" className="w-full mt-4">
                      <Button variant="outline" className="w-full relative z-10 h-14 bg-black/50 backdrop-blur-md hover:bg-[var(--color-accent)] hover:text-black hover:border-[var(--color-accent)] border-white/20 text-white rounded-full transition-all duration-500 tracking-wide text-sm font-semibold group/btn">
                        Standort Details <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
