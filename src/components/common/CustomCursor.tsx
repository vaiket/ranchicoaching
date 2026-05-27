"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(window.matchMedia("(pointer: fine)").matches);
    const onMove = (event: MouseEvent) => setPos({ x: event.clientX, y: event.clientY });
    const onOver = (event: MouseEvent) => setHover(Boolean((event.target as HTMLElement).closest("a,button,input,select")));
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const tick = () => {
      setTrail((prev) => ({ x: prev.x + (pos.x - prev.x) * 0.12, y: prev.y + (pos.y - prev.y) * 0.12 }));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [enabled, pos]);

  if (!enabled) return null;

  return (
    <>
      <div className="pointer-events-none fixed z-[9999] h-3 w-3 rounded-full bg-or mix-blend-difference" style={{ transform: `translate(${pos.x - 6}px, ${pos.y - 6}px) scale(${hover ? 1.7 : 1})` }} />
      <div className="pointer-events-none fixed z-[9998] h-9 w-9 rounded-full border border-or/40 transition-transform" style={{ transform: `translate(${trail.x - 18}px, ${trail.y - 18}px) scale(${hover ? 1.35 : 1})` }} />
    </>
  );
}
