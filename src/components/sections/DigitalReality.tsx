"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { digitalBars } from "@/lib/data";

export default function DigitalReality() {
  return (
    <SectionWrapper id="whatsapp-ai" eyebrow="Digital Reality" title={<>Market ka gap clearly <em className="text-or">visible hai.</em></>}>
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-8">
          {digitalBars.map((bar) => (
            <div key={bar.label}>
              <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
                <div><p className="font-semibold">{bar.label}</p><p className="text-sm text-muted2">{bar.count}</p></div>
                <p className="font-display text-2xl text-warm">{bar.pct}%</p>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/[0.05]">
                <motion.div className="h-full rounded-full" style={{ background: bar.color }} initial={{ width: 0 }} whileInView={{ width: `${bar.pct}%` }} viewport={{ once: true }} transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }} />
              </div>
              <p className="mt-2 text-sm text-muted2">{bar.note}</p>
            </div>
          ))}
        </div>
        <aside className="h-fit rounded-3xl border border-white/[0.07] bg-card p-8 lg:sticky lg:top-24 lg:p-11">
          <p className="font-display text-7xl text-or md:text-[88px]">480+</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted2">Institutes Abhi Fully Digital Nahi</p>
          <ul className="mt-8 space-y-4 text-sm leading-6 text-muted2">
            {["Late reply = lost student", "No lead tracking", "No auto follow-up", "Broadcast limit", "Manual fee reminders", "Parent communication overload", "No conversion analytics"].map((item) => (
              <li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-or" />{item}</li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-or/15 bg-or/[0.08] p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-muted2">Ranchi Total Market Potential</p>
            <p className="mt-2 font-display text-3xl text-warm">₹14–39 Lakh/mo</p>
            <p className="mt-2 text-sm text-muted2">Sirf Ranchi ke 100 clients se aap itna earn kar sakte ho</p>
          </div>
        </aside>
      </div>
    </SectionWrapper>
  );
}
