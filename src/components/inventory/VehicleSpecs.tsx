export function VehicleSpecs({ vehicle }: { vehicle: any }) {
  const specs = [
    { label: "Kilometerstand", value: `${vehicle.mileage} km` },
    { label: "Erstzulassung", value: vehicle.year },
    { label: "Leistung", value: vehicle.power },
    { label: "Kraftstoff", value: vehicle.fuel },
    { label: "Getriebe", value: vehicle.transmission },
    { label: "Standort", value: vehicle.location },
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-white tracking-tight flex items-center">
        <div className="w-1.5 h-6 bg-[var(--color-accent)] mr-3 rounded-full" />
        Technische Daten
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {specs.map((spec, i) => (
          <div key={i} className="glass-card p-6 rounded-[24px] border border-white/5 group hover:bg-white/[0.04] transition-all duration-500">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2 group-hover:text-[var(--color-accent)] transition-colors">{spec.label}</p>
            <p className="text-xl font-bold text-white">{spec.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
