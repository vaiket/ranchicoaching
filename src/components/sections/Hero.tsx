"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function PhoneMockup() {
  const bubbles = [
    { side: "left", text: "Namaste! JEE ki fees kitni hai?", delay: 0.4 },
    { side: "right", text: "JEE batch fees ₹6,000/mo hai. Morning aur evening dono batches available hain. Seats: 12 left.", delay: 1.2 },
    { side: "right", text: "Demo ke liye reply karein: DEMO", delay: 1.8 },
    { side: "left", text: "DEMO", delay: 2.5 },
    { side: "right", text: "Booking confirmed: Sunday, 11 AM. Parent ko location aur reminder auto-send ho gaya.", delay: 3.2 },
  ];

  return (
    <motion.div className="relative mx-auto h-[620px] w-[330px]" initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
      <div className="absolute inset-8 rounded-full border border-or/20" />
      <motion.div className="absolute inset-0 rounded-full border border-gold/20" animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute inset-16 rounded-full border border-wa/20" animate={{ rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute -left-16 top-32 rounded-2xl border border-green/20 bg-card/90 px-5 py-4 shadow-orange backdrop-blur" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <p className="font-display text-2xl text-green">+47</p>
        <p className="text-xs text-muted2">New Inquiries Today</p>
      </motion.div>
      <motion.div className="absolute -right-16 bottom-36 rounded-2xl border border-green/20 bg-card/90 px-5 py-4 backdrop-blur" animate={{ y: [-5, 8, -5] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
        <p className="font-display text-2xl text-green">98%</p>
        <p className="text-xs text-muted2">Auto Reply Rate</p>
      </motion.div>
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-[42px] border border-white/10 bg-black p-3 shadow-2xl">
        <div className="absolute left-1/2 top-4 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="h-full overflow-hidden rounded-[34px] bg-[#09130f]">
          <div className="flex items-center gap-3 bg-[#10251b] px-4 py-5">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-wa/20 text-lg">E</div>
            <div>
              <p className="text-sm font-semibold">Excellence Coaching</p>
              <p className="flex items-center gap-1 text-xs text-wa"><span className="h-1.5 w-1.5 rounded-full bg-wa" /> online</p>
            </div>
          </div>
          <div className="space-y-3 p-4">
            {bubbles.map((bubble) => (
              <motion.div key={bubble.text} initial={{ opacity: 0, y: 16, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: bubble.delay, duration: 0.45 }} className={`max-w-[86%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${bubble.side === "right" ? "ml-auto bg-[#1f5f3b]" : "bg-card3"}`}>
                {bubble.text}
              </motion.div>
            ))}
            <motion.div className="ml-auto flex w-16 gap-1 rounded-2xl bg-[#1f5f3b] px-3 py-2" animate={{ opacity: [0.45, 1, 0.45] }} transition={{ duration: 1.2, repeat: Infinity }}>
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const item = { hidden: { y: 24, opacity: 0 }, show: { y: 0, opacity: 1 } };

  return (
    <section className="grid-bg relative min-h-screen overflow-hidden px-5 pt-32 md:px-8">
      <div className="absolute left-[-10%] top-24 h-96 w-96 rounded-full bg-or/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold/10 blur-[130px]" />
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} initial="hidden" animate="show">
          <motion.div variants={item}>
            <Badge><span className="h-2 w-2 rounded-full bg-wa animate-pulseDot" /> Ranchi · Jharkhand · 2025–26</Badge>
          </motion.div>
          <motion.h1 variants={item} className="mt-8 font-serif text-[44px] leading-[0.98] tracking-normal md:text-[78px]">
            Vaiket IT ke Saath<br />Coaching Institutes ka<br /><em className="text-or">Digital Revolution</em><br /><span className="text-muted2">Ab Shuru Ho Raha Hai.</span>
          </motion.h1>
          <motion.p variants={item} className="mt-7 max-w-xl text-[17px] leading-8 text-muted2">
            500+ institutes, 65,000+ students — aur sirf 2-3% fully digital hain. WhatsApp AI + Digital Marketing se aap 350-400% revenue growth achieve kar sakte ho.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#packages"><Button className="w-full sm:w-auto">📦 Packages Dekho</Button></a>
            <a href="#roi"><Button variant="outline" className="w-full sm:w-auto">💰 ROI Calculate Karo</Button></a>
          </motion.div>
          <motion.div variants={item} className="mt-10 grid grid-cols-2 gap-2">
            {["500+ Institutes", "65K+ Students", "2% Fully Digital", "400% Growth"].map((kpi) => (
              <div key={kpi} className="rounded-2xl border border-white/[0.07] bg-card/80 p-5">
                <p className="font-display text-2xl text-warm">{kpi.split(" ")[0]}</p>
                <p className="mt-1 text-sm text-muted2">{kpi.substring(kpi.indexOf(" ") + 1)}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <div className="hidden lg:block"><PhoneMockup /></div>
      </div>
    </section>
  );
}
