import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/button";
import { packages } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Packages() {
  return (
    <SectionWrapper id="packages" eyebrow="Packages" title={<>Plans jo institute ke stage ke hisaab se <em className="text-or">scale</em> karte hain.</>}>
      <div className="grid gap-6 lg:grid-cols-3">
        {packages.map((plan) => (
          <div key={plan.name} className={cn("relative rounded-3xl border border-white/[0.07] bg-card p-8 transition duration-300 hover:-translate-y-2.5 hover:border-or/30", plan.featured && "border-or bg-gradient-to-b from-or/10 to-card shadow-orange")}>
            {plan.ribbon && <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-or px-5 py-2 text-xs font-bold text-dark">{plan.ribbon}</span>}
            <p className="text-sm uppercase tracking-[0.18em] text-muted2">{plan.tier}</p>
            <h3 className="mt-3 font-display text-4xl">{plan.name}</h3>
            <p className="mt-4 min-h-14 text-sm leading-6 text-muted2">{plan.desc}</p>
            <div className="mt-7">
              <p className="text-sm text-muted2">Setup: {plan.setup}</p>
              <p className="font-display text-5xl text-warm"><sup className="text-2xl">₹</sup>{plan.monthly}<span className="font-sans text-sm text-muted2"> /mo</span></p>
            </div>
            <ul className="mt-8 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature.text} className={cn("flex gap-3 text-sm", feature.included ? "text-muted2" : "text-muted")}>
                  <span className={feature.included ? "text-wa" : "text-red"}>{feature.included ? "✓" : "✗"}</span>{feature.text}
                </li>
              ))}
            </ul>
            <a href="#cta" className="mt-8 block"><Button variant={plan.btnStyle} className="w-full">Plan Select Karo</Button></a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
