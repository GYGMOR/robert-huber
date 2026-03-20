"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-32 pb-12 border-t border-white/5 overflow-hidden">
      
      {/* Heavy Gradient Overlays for Readability & Cinematic Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#050505]/95 to-transparent z-0" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[150px] mix-blend-overlay z-0 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Central Contact */}
          <div className="lg:col-span-4 space-y-8">
            <div className="mb-8 relative inline-block">
              {/* Subtle backglow behind the logo to ensure it pops off the video */}
              <div className="absolute inset-0 bg-white/5 blur-xl rounded-full" />
              <img src="/images/benz.png" alt="Robert Huber Logo" className="relative h-12 w-auto object-contain opacity-100 drop-shadow-2xl" />
            </div>
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-sm">
              Die exklusivste Automobilgruppe für Premium-Fahrzeuge. Ihr Stern im Aargau.
            </p>
            <div className="space-y-4 pt-4">
              <a href="tel:0566191717" className="flex items-center text-gray-400 hover:text-[var(--color-accent)] transition-colors group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mr-4 group-hover:border-[var(--color-accent)] transition-colors bg-black/50 backdrop-blur-md">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium tracking-wide">056 619 17 17</span>
              </a>
              <a href="mailto:info@roberthuber.ch" className="flex items-center text-gray-400 hover:text-[var(--color-accent)] transition-colors group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mr-4 group-hover:border-[var(--color-accent)] transition-colors bg-black/50 backdrop-blur-md">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium tracking-wide">info@roberthuber.ch</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-sm tracking-[0.2em] uppercase">Unternehmen</h4>
            <ul className="space-y-4">
              {["Über uns", "Aktuelles", "Karriere & Jobs", "Team", "Kontakt"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium hover:tracking-wide duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 text-sm tracking-[0.2em] uppercase">Standorte</h4>
            <ul className="space-y-4">
              {[
                "Villmergen (Hauptsitz)",
                "Muri",
                "Windisch",
                "Mellingen",
                "Fahrwangen",
                "Seon"
              ].map((location) => (
                <li key={location}>
                  <Link href="/standorte" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors flex items-center text-sm font-medium group">
                    <MapPin className="w-3.5 h-3.5 mr-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                    {location}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours & Social */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h4 className="text-white font-bold mb-6 text-sm tracking-[0.2em] uppercase">Verkauf</h4>
              <div className="space-y-2 text-sm text-gray-400 font-medium font-mono">
                 <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Mo - Fr</span>
                    <span className="text-white">08:00 - 18:30</span>
                 </div>
                 <div className="flex justify-between pt-2">
                    <span>Samstag</span>
                    <span className="text-white">09:00 - 16:00</span>
                 </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm tracking-[0.2em] uppercase">Social Media</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-white hover:border-white transition-all duration-300 tooltip bg-black/50 backdrop-blur-md">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-white hover:border-white transition-all duration-300 tooltip bg-black/50 backdrop-blur-md">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-white hover:border-white transition-all duration-300 tooltip bg-black/50 backdrop-blur-md">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium uppercase tracking-widest gap-4">
          <p>© {new Date().getFullYear()} Robert Huber AG. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-8">
            <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <Link href="/agb" className="hover:text-white transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
