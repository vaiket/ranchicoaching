import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  const message = encodeURIComponent("Hello Vaiket IT, mujhe coaching institute ke liye WhatsApp AI + Digital Marketing consultation chahiye.");

  return (
    <section id="cta" className="relative overflow-hidden bg-dark px-5 py-32 text-center md:px-8 lg:py-36">
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-or/[0.07] blur-[110px]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[22vw] font-extrabold text-or/[0.03]">GROW</div>
      <div className="relative mx-auto max-w-5xl">
        <Badge><span className="h-2 w-2 animate-pulseDot rounded-full bg-wa" /> Limited Spots Available</Badge>
        <h2 className="mt-8 font-serif text-[42px] leading-[0.98] md:text-7xl">
          Aapka Competitor Kal<br /><em className="text-or">Digital Ho Jaayega —</em><br />Kya Aap Usse Pehle Tayaar Ho?
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted2">
          Free consultation mein hum aapke institute ke current funnel, WhatsApp setup, ads aur follow-up process ka quick audit karenge.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a href={`https://wa.me/917999999999?text=${message}`} target="_blank" rel="noreferrer"><Button variant="whatsapp" className="w-full sm:w-auto">💬 WhatsApp pe Baat Karo — Free!</Button></a>
          <a href="#packages"><Button variant="outline" className="w-full sm:w-auto">📋 Packages Dobara Dekho</Button></a>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-muted2">
          {["No Hidden Charges", "Free Setup Consultation", "Results in 30 Days", "Cancel Anytime", "Dedicated Support"].map((item) => <span key={item}>✓ {item}</span>)}
        </div>
      </div>
    </section>
  );
}
