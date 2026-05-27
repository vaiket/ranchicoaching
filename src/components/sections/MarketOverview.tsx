"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/common/AnimatedCounter";
import SectionWrapper from "@/components/common/SectionWrapper";
import { marketCards } from "@/lib/data";

export default function MarketOverview() {
  return (
    <SectionWrapper id="market" eyebrow="Market Overview" title={<>Ranchi coaching market <em className="text-or">ready hai.</em></>}>
      <motion.div className="grid overflow-hidden rounded-3xl bg-or/30 gap-0.5 md:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
        {marketCards.map((card) => (
          <motion.div key={card.label} variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } }} className="bg-card p-9 transition hover:bg-card2 md:p-11">
            <div className="text-4xl">{card.icon}</div>
            <p className="mt-7 font-display text-5xl text-or">
              {card.num !== null ? <AnimatedCounter target={card.num} suffix={card.suffix} /> : card.display}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-warm">{card.label}</h3>
            <p className="mt-3 text-sm leading-6 text-muted2">{card.sub}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
