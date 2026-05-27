"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  ["Market", "#market"],
  ["Students", "#students"],
  ["WhatsApp AI", "#whatsapp-ai"],
  ["Growth", "#growth"],
  ["Packages", "#packages"],
  ["ROI", "#roi"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed left-0 top-0 z-50 w-full px-5 py-4 transition md:px-8",
        scrolled && "border-b border-white/[0.07] bg-dark/90 backdrop-blur-xl",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#" className="font-display text-xl font-extrabold tracking-normal">
          Vaiket <span className="text-or">IT</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-sm text-muted2 transition hover:text-warm">
              {label}
            </a>
          ))}
        </div>
        <a href="#cta" className="hidden lg:block">
          <Button>Abhi Shuru Karo</Button>
        </a>
        <button
          aria-label="Toggle menu"
          className="rounded-full border border-white/10 p-3 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="mx-auto mt-4 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-card p-4 lg:hidden"
        >
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-muted2 hover:bg-white/5 hover:text-warm"
            >
              {label}
            </a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)} className="mt-3 block">
            <Button className="w-full">Abhi Shuru Karo</Button>
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
