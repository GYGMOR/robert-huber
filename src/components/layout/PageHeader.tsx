"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  image: string;
  preTitle?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
}

export function PageHeader({ image, preTitle, title, titleAccent, subtitle }: PageHeaderProps) {
  return (
    <div className="relative w-full h-56 md:h-72 overflow-hidden rounded-b-[40px]">
      {/* Background image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
        />
      )}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      {/* Gold accent glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[200px] bg-[var(--color-accent)]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 pb-10 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {preTitle && (
            <div className="inline-flex items-center space-x-3 mb-3">
              <span className="w-6 h-[1px] bg-[var(--color-accent)]" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-[var(--color-accent)] uppercase">
                {preTitle}
              </span>
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase glow-text leading-none">
            {title}
            {titleAccent && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-white/70 ml-3">
                {titleAccent}
              </span>
            )}
          </h1>
          {subtitle && (
            <p className="text-gray-400 text-sm font-light mt-3 max-w-xl leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
