import SectionWrapper from "@/components/common/SectionWrapper";
import { afterPoints, beforePoints, waFeatures } from "@/lib/data";

function Mark({ value }: { value: string }) {
  if (value === "✓") return <span className="font-bold text-wa">✓</span>;
  if (value === "✗") return <span className="font-bold text-red">✗</span>;
  if (value === "Partial" || value === "Basic" || value === "Limited") return <span className="text-gold">{value}</span>;
  return <span>{value}</span>;
}

export default function BeforeAfter() {
  return (
    <SectionWrapper id="before-after" eyebrow="Before / After" title={<>Manual chaos se <em className="text-or">automated growth</em> tak.</>}>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-red/20 bg-card">
          <div className="bg-red/10 p-6 font-display text-red">😓 BEFORE — Bina WhatsApp AI ke</div>
          <ol className="space-y-4 p-6 text-sm leading-6 text-muted2">
            {beforePoints.map((point) => <li key={point} className="flex gap-3"><span>❌</span>{point}</li>)}
          </ol>
        </div>
        <div className="overflow-hidden rounded-3xl border border-wa/20 bg-card">
          <div className="bg-wa/10 p-6 font-display text-wa">🚀 AFTER — WhatsApp Business API + AI ke Saath</div>
          <ol className="space-y-4 p-6 text-sm leading-6 text-muted2">
            {afterPoints.map((point) => <li key={point} className="flex gap-3"><span>✅</span>{point}</li>)}
          </ol>
        </div>
      </div>
      <div className="mt-10 overflow-hidden rounded-3xl border border-white/[0.07]">
        <div className="overflow-x-auto">
          <table className="min-w-[760px] w-full">
            <thead className="bg-white/[0.03] text-left">
              <tr>{["Feature", "Normal WA", "WA Business App", "WA Business API ✨"].map((h, i) => <th key={h} className={`px-5 py-5 font-display ${i === 3 ? "bg-wa/10 text-wa" : "text-muted2"}`}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {waFeatures.map((row) => (
                <tr key={row.feature} className="border-t border-white/[0.07]">
                  <td className="px-5 py-4 font-medium">{row.feature}</td>
                  <td className="px-5 py-4 text-muted2"><Mark value={row.normal} /></td>
                  <td className="px-5 py-4 text-muted2"><Mark value={row.app} /></td>
                  <td className="bg-wa/[0.04] px-5 py-4 text-muted2"><Mark value={row.api} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionWrapper>
  );
}
