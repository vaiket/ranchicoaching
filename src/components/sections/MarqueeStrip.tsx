const items = ["500+ INSTITUTES", "65,000+ STUDENTS", "WHATSAPP AI AUTOMATION", "400% GROWTH POSSIBLE", "RANCHI KA DIGITAL FUTURE", "₹25 CRORE+ MARKET"];

export default function MarqueeStrip() {
  return (
    <div className="overflow-hidden bg-or py-4 text-dark">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-display text-xl font-extrabold tracking-[0.22em]">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-8">
            {item}<span className="text-black/30">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
