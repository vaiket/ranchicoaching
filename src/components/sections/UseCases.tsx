"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";
import { useCases } from "@/lib/data";

export default function UseCases() {
  return (
    <SectionWrapper eyebrow="Use Cases" title={<>WhatsApp AI ka real kaam <em className="text-or">daily operations</em> mein dikhta hai.</>}>
      <motion.div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={{ show: { transition: { staggerChildren: 0.07 } } }}>
        {useCases.map((useCase) => (
          <motion.div key={useCase.title} variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }} className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-card p-8 transition duration-300 hover:-translate-y-1.5 hover:border-or/25">
            <div className="absolute inset-0 bg-gradient-to-br from-or/10 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="relative">
              <div className="text-4xl">{useCase.icon}</div>
              <h3 className="mt-6 font-display text-2xl">{useCase.title}</h3>
              <ul className="mt-6 space-y-3">
                {useCase.items.map((item) => <li key={item} className="text-sm leading-6 text-muted2"><span className="mr-2 text-or">→</span>{item}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
