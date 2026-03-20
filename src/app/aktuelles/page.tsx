"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockNews } from "@/lib/mockData";
import { PageHeader } from "@/components/layout/PageHeader";

export default function AktuellesPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[120px] pointer-events-none" />
      <PageHeader
        image="/Header-Bild/header5.jpg"
        preTitle="Insights & Updates"
        title="Aktuelles &"
        titleAccent="Events."
        subtitle="Tauchen Sie ein in die exklusive Welt von Mercedes-Benz bei Robert Huber."
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 mt-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {mockNews.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group flex flex-col h-full glass-card rounded-[32px] overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-[0.8] group-hover:brightness-100"
                />
                <div className="absolute top-6 right-6 z-20">
                  <div className="glass px-4 py-2 border border-white/10 rounded-full flex items-center backdrop-blur-xl">
                    <Calendar className="w-3 h-3 text-[var(--color-accent)] mr-2" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">{article.date}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2 leading-tight group-hover:text-[var(--color-accent)] transition-colors duration-500">{article.title}</h3>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-10 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-auto">
                  <Button variant="outline" className="w-full h-14 rounded-full border-white/10 hover:border-white text-white font-bold tracking-widest text-[10px] transition-all duration-500 group/btn">
                    Beitrag lesen <ArrowUpRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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
