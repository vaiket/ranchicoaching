import SectionWrapper from "@/components/common/SectionWrapper";
import { growthMetrics, growthSteps } from "@/lib/data";
import { cn } from "@/lib/utils";

const tagStyles = {
  base: "bg-white/5 text-muted2",
  green: "bg-wa/10 text-wa",
  gold: "bg-gold/10 text-gold",
  orange: "bg-or/15 text-or",
};

export default function GrowthJourney() {
  return (
    <SectionWrapper id="growth" eyebrow="Growth Journey" title={<>Step by step <em className="text-or">revenue compounding.</em></>}>
      <div className="relative">
        <div className="absolute left-[10%] right-[10%] top-[30px] hidden h-px bg-gradient-to-r from-or to-gold lg:block" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {growthSteps.map((step) => (
            <div key={step.title} className={cn("relative rounded-2xl border border-white/[0.07] bg-card p-6", step.active && "border-or shadow-orange")}>
              <div className={cn("grid h-[60px] w-[60px] place-items-center rounded-full border border-or bg-card font-display text-xl text-or", step.active && "bg-or text-dark shadow-orange")}>{step.num}</div>
              <h3 className="mt-6 font-display text-2xl">{step.title}</h3>
              <p className="mt-3 min-h-16 text-sm leading-6 text-muted2">{step.desc}</p>
              <p className="mt-5 font-display text-[22px] text-warm">{step.rev}</p>
              <p className="text-sm text-muted2">{step.students}</p>
              <span className={cn("mt-5 inline-flex rounded-full px-3 py-1 text-xs font-semibold", tagStyles[step.tagStyle])}>{step.tag}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {growthMetrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-white/[0.07] bg-dark p-6 text-center">
            <p className="font-display text-4xl text-or">{metric.num}</p>
            <p className="mt-3 text-sm leading-6 text-muted2">{metric.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
