"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { mockLocations } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";

export default function StandortePage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-[var(--color-accent)]/5 rounded-full blur-[150px] pointer-events-none" />
      <PageHeader
        image="/Header-Bild/header3.jpg"
        preTitle="Unsere Standorte"
        title="Ihr Stern im"
        titleAccent="Aargau."
        subtitle="Sechs Standorte. Eine Leidenschaft für Perfektion. Besuchen Sie uns und erleben Sie den Unterschied."
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 mt-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {mockLocations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card rounded-3xl overflow-hidden flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-black">
                {location.image ? (
                  <img 
                    src={location.image} 
                    alt={location.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-[0.8] group-hover:brightness-100"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-black" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
                <div className="absolute bottom-6 left-8 z-20">
                  <p className="text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-[0.2em] mb-1">Zentrum</p>
                  <h3 className="text-3xl font-bold text-white tracking-tight">{location.name}</h3>
                </div>
              </div>

              
              <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-start text-gray-300">
                    <MapPin className="w-5 h-5 text-[var(--color-accent)] mr-4 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{location.address}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 text-[var(--color-accent)] mr-4 shrink-0" />
                    <span className="text-sm font-medium">{location.phone}</span>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <Clock className="w-5 h-5 text-[var(--color-accent)] mr-4 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Verkauf: 08:00 - 18:30<br/>Werkstatt: 07:30 - 17:00</span>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-white/5 flex gap-4">
                  <Button variant="outline" className="w-full text-xs font-bold tracking-widest h-14 rounded-full border-white/10 hover:border-white transition-all duration-500">
                    Details
                  </Button>
                  <Button className="w-full text-xs font-bold tracking-widest h-14 rounded-full bg-white text-black hover:bg-[var(--color-accent)] hover:text-black transition-all duration-500">
                    Route
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
