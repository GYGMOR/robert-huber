"use client";

import { Search, ChevronDown, LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FilterBarProps {
  onFilterChange: (filters: any) => void;
  viewMode?: "grid" | "list";
  onViewModeChange?: (mode: "grid" | "list") => void;
}

export function FilterBar({ onFilterChange, viewMode = "list", onViewModeChange }: FilterBarProps) {
  return (
    <div className="glass-card rounded-[32px] p-8 shadow-2xl border border-white/5 space-y-10">
      <div className="flex items-center justify-between border-b border-white/5 pb-6">
        <h3 className="text-xl font-bold text-white flex items-center tracking-tight">
          <div className="w-1.5 h-6 bg-[var(--color-accent)] mr-3 rounded-full shadow-[0_0_15px_rgba(201,163,78,0.5)]" />
          Filter
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onViewModeChange?.("list")}
            className={`p-2 rounded-xl transition-all duration-300 ${viewMode === "list" ? "bg-[var(--color-accent)] text-black" : "text-zinc-500 hover:text-white"}`}
            title="Listenansicht"
          >
            <List className="w-4 h-4" />
          </button>
          <button
            onClick={() => onViewModeChange?.("grid")}
            className={`p-2 rounded-xl transition-all duration-300 ${viewMode === "grid" ? "bg-[var(--color-accent)] text-black" : "text-zinc-500 hover:text-white"}`}
            title="Gitteransicht"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <span className="w-px h-5 bg-white/10 mx-1" />
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest hover:text-[var(--color-accent)] cursor-pointer transition-colors duration-300">Zurücksetzen</span>
        </div>
      </div>

      <div className="space-y-6">
        {/* Search */}
        <div className="space-y-4">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-1">Suche</label>
          <div className="relative group">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-[var(--color-accent)] transition-colors" />
            <input
              type="text"
              placeholder="Modell, Marke, Stichwort..."
              className="w-full bg-black/40 border border-white/5 rounded-2xl pl-12 pr-4 py-4 text-sm text-white focus:outline-none focus:border-[var(--color-accent)]/50 transition-all placeholder:text-zinc-700 font-medium"
            />
          </div>
        </div>

        {/* Brand Filter */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Marke</label>
          <div className="relative cursor-pointer group">
            <select className="w-full appearance-none bg-surface-hover border border-border rounded-lg pl-4 pr-10 py-3 text-sm text-white focus:outline-none focus:border-[var(--color-accent)] transition-colors cursor-pointer group-hover:border-gray-500">
              <option value="">Alle Marken</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Mercedes-AMG">Mercedes-AMG</option>
              <option value="Mercedes-Maybach">Mercedes-Maybach</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-white transition-colors" />
          </div>
        </div>

        {/* Condition Filter */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Zustand</label>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="w-1/2 text-xs h-10 border-white/10 hover:border-white/30">Neu</Button>
            <Button variant="outline" size="sm" className="w-1/2 text-xs h-10 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10">Gebraucht</Button>
          </div>
        </div>

        {/* Fuel Filter */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Antrieb</label>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" className="text-xs border-white/10 hover:border-white/30">Benzin</Button>
            <Button variant="outline" size="sm" className="text-xs border-white/10 hover:border-white/30">Diesel</Button>
            <Button variant="outline" size="sm" className="text-xs border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent)]/5">Elektro</Button>
            <Button variant="outline" size="sm" className="text-xs border-white/10 hover:border-white/30">Hybrid</Button>
          </div>
        </div>

        {/* Price */}
        <div className="space-y-3 pt-2">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-400 uppercase tracking-wider">Preis</label>
            <span className="text-xs text-[var(--color-accent)]">Beliebig</span>
          </div>
          <div className="h-1.5 w-full bg-surface-light rounded-full overflow-hidden">
            <div className="h-full bg-[var(--color-accent)] w-full" />
          </div>
        </div>
      </div>

      <Button className="w-full mt-8 shadow-lg shadow-[var(--color-accent)]/20">
        Filter anwenden
      </Button>
    </div>
  );
}
