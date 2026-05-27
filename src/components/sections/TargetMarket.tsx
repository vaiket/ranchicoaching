import SectionWrapper from "@/components/common/SectionWrapper";
import { targets } from "@/lib/data";
import { cn } from "@/lib/utils";

const colors: Record<string, string> = {
  high: "text-or bg-or/10",
  med: "text-gold bg-gold/10",
  low: "text-muted2 bg-white/5",
};

export default function TargetMarket() {
  return (
    <SectionWrapper eyebrow="Target Market" title={<>Sabse pehle kisko pitch karna hai?</>}>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {targets.map((target) => (
          <div key={target.type} className="rounded-2xl border border-white/[0.07] bg-card p-7 transition hover:bg-card2">
            <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", colors[target.priorityColor])}>{target.priority}</span>
            <h3 className="mt-6 font-display text-2xl">{target.type}</h3>
            <p className="mt-4 font-display text-5xl text-or">{target.count}</p>
            <p className="text-sm text-muted2">{target.sub}</p>
            <p className="mt-6 text-sm leading-7 text-muted2">{target.pain}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
