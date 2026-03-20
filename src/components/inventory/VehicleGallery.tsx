"use client";

import { motion } from "framer-motion";

interface VehicleGalleryProps {
  image: string;
}

export function VehicleGallery({ image }: VehicleGalleryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-4"
    >
      <div className="w-full h-[500px] md:h-[600px] overflow-hidden rounded-[40px] relative group border border-white/10 shadow-2xl">
        <img 
          src={image} 
          alt="Vehicle Preview" 
          className="w-full h-full object-cover transform group-hover:scale-[1.01] transition-transform duration-2000 ease-[cubic-bezier(0.16,1,0.3,1)] filter brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[var(--color-accent)]/5 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-1000" />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`aspect-[4/3] rounded-[20px] overflow-hidden relative cursor-pointer group border-2 ${i === 1 ? 'border-[var(--color-accent)]' : 'border-transparent'} transition-all duration-500`}>
            <div className={`absolute inset-0 ${i === 1 ? 'bg-transparent' : 'bg-black/60 group-hover:bg-black/20'} transition-all z-10`} />
            <img 
              src={image} 
              alt={`Thumbnail ${i}`} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
