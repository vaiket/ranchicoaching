import { statsTickerData } from "@/lib/data";

export default function StatsTicker() {
  return (
    <section className="bg-card2 px-5 py-1 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-0.5 overflow-hidden rounded-2xl bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-6">
        {statsTickerData.map((stat) => (
          <div key={stat.label} className="bg-card2 p-6 text-center">
            <p className="font-display text-4xl text-or">{stat.num}</p>
            <p className="mt-2 text-xs leading-5 text-muted2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
