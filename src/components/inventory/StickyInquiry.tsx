"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Phone, CreditCard } from "lucide-react";

export function StickyInquiry({ vehicle }: { vehicle: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="glass-card rounded-2xl p-8 border border-white/5 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/10 rounded-full blur-[60px] pointer-events-none z-0" />
      
      <div className="mb-10 border-b border-white/5 pb-10 relative z-10">
        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Listenpreis</p>
        <h2 className="text-4xl font-sans font-bold text-white mb-2 tracking-tight transition-all group-hover:tracking-tighter duration-500">
           CHF <span className="text-[var(--color-accent)]">{vehicle.price}.-</span>
        </h2>
        <p className="text-zinc-600 text-xs font-medium uppercase tracking-widest">inkl. 8.1% MwSt.</p>
      </div>

      <div className="space-y-4 relative z-10">
        <Button size="lg" className="w-full text-sm font-bold h-14 rounded-full bg-white text-black hover:bg-[var(--color-accent)] hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(201,163,78,0.4)]">
          <Calendar className="w-4 h-4 mr-3" />
          Probefahrt vereinbaren
        </Button>
        <Button size="lg" variant="outline" className="w-full text-sm font-bold h-14 rounded-full border-white/10 hover:border-white text-white transition-all duration-500 hover:bg-white/5">
          <MessageCircle className="w-4 h-4 mr-3" />
          Angebot anfordern
        </Button>
        <Button size="lg" variant="ghost" className="w-full text-sm font-bold h-14 rounded-full text-zinc-400 hover:text-white transition-all duration-500">
          WhatsApp Chat
        </Button>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-300">
            <CreditCard className="w-5 h-5 mr-3 text-[var(--color-accent)]" />
            <span className="font-medium text-sm">Leasing ab</span>
          </div>
          <span className="font-bold text-xl text-white">CHF 890.- / mt.</span>
        </div>
        <p className="text-xs text-gray-500 font-light text-center cursor-pointer hover:text-gray-300 transition-colors">
          Individuelles Finanzierungsangebot berechnen
        </p>
      </div>

      <div className="mt-8 pt-8 border-t border-white/5 relative z-10 text-center">
        <p className="text-sm text-gray-400 font-medium mb-2">Ihr Ansprechpartner in {vehicle.location}</p>
        <a href="tel:0566191717" className="inline-flex items-center text-white hover:text-[var(--color-accent)] font-bold text-lg transition-colors">
          <Phone className="w-5 h-5 mr-2" />
          056 619 17 17
        </a>
      </div>
    </motion.div>
  );
}
