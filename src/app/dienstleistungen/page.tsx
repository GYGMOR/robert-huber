"use client";

import { motion } from "framer-motion";
import { ArrowRight, Wrench, Shield, Car, BatteryCharging, Disc, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";

const services = [
  {
    title: "Verkauf & Beratung",
    desc: "Persönlich, kompetent und auf Ihre Wünsche abgestimmt. Erleben Sie die Mercedes-Benz Modellpalette bei uns vor Ort.",
    icon: <Car className="w-10 h-10" />,
  },
  {
    title: "Zertifizierte Werkstatt",
    desc: "Höchste Präzision durch modernste Diagnosetechnik und original Mercedes-Benz Ersatzteile. Ihr Fahrzeug in besten Händen.",
    icon: <Wrench className="w-10 h-10" />,
  },
  {
    title: "Karosserie & Lack",
    desc: "Spurlos repariert. Unser zertifiziertes Lack- und Karosseriezentrum behebt Schäden jeder Art nach Herstellerrichtlinien.",
    icon: <Shield className="w-10 h-10" />,
  },
  {
    title: "Reifenhotel",
    desc: "Komfortabler Radwechsel und fachgerechte Einlagerung. Überlassen Sie uns das Tragen und die Aufbewahrung.",
    icon: <Disc className="w-10 h-10" />,
  },
  {
    title: "EQ & Elektromobilität",
    desc: "Zukunft erfahren. Wir beraten Sie zu Ladeinfrastruktur, Reichweiten und warten Ihr Elektrofahrzeug kompetent.",
    icon: <BatteryCharging className="w-10 h-10" />,
  },
  {
    title: "Unfall- & Pannendienst",
    desc: "24/7 Mobilitätsgarantie. Im Notfall sind wir rund um die Uhr für Sie erreichbar und organisieren alles Notwendige.",
    icon: <PhoneCall className="w-10 h-10" />,
  },
];

export default function DienstleistungenPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24 relative">
      <PageHeader
        image="/Header-Bild/header4.jpg"
        preTitle="Premium Service"
        title="Exzellenz"
        titleAccent="die begeistert."
        subtitle="Von der Neuwagenberatung bis zur zertifizierten Werkstatt — wir setzen neue Massstäbe für Mercedes-Servicequalität."
      />
      <div className="container mx-auto px-6 max-w-7xl relative z-10 mt-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-10 rounded-3xl group flex flex-col justify-between"
            >
              <div className="flex flex-col h-full">
                <div className="w-20 h-20 rounded-[24px] bg-white/[0.03] border border-white/10 text-[var(--color-accent)] flex items-center justify-center mb-10 group-hover:bg-[var(--color-accent)] group-hover:text-black transition-all duration-700 shadow-xl">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-500">{service.title}</h3>
                <p className="text-zinc-500 font-medium leading-relaxed mb-10 text-sm">
                  {service.desc}
                </p>
                <div className="mt-auto">
                  <Button variant="outline" className="w-full h-14 rounded-full border-white/10 hover:border-white text-white font-bold tracking-widest text-[10px] transition-all duration-500">
                    Details entdecken <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
