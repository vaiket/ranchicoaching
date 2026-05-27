import SectionWrapper from "@/components/common/SectionWrapper";
import { studentsData } from "@/lib/data";
import { cn } from "@/lib/utils";

const badge = {
  high: "bg-or/15 text-or border-or/30",
  med: "bg-gold/15 text-gold border-gold/30",
  low: "bg-white/5 text-muted2 border-white/10",
};

export default function StudentsTable() {
  return (
    <SectionWrapper id="students" eyebrow="Student Distribution" title={<>65,000+ students ka <em className="text-or">live opportunity map.</em></>}>
      <div className="overflow-hidden rounded-3xl border border-white/[0.07]">
        <div className="overflow-x-auto">
          <table className="min-w-[960px] w-full border-collapse">
            <thead className="bg-or/10 text-left text-xs uppercase tracking-[0.18em] text-or">
              <tr>
                {["Category", "Institutes", "Avg Students", "Total", "Fees", "Digital Need"].map((head) => (
                  <th key={head} className="px-5 py-5 font-display">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {studentsData.map((row) => (
                <tr key={row.category} className="border-t border-white/[0.07] transition hover:bg-or/[0.04]">
                  <td className="px-5 py-5 font-medium"><span className="mr-2">{row.icon}</span>{row.category}</td>
                  <td className="px-5 py-5 text-muted2">{row.institutes}</td>
                  <td className="px-5 py-5 text-muted2">{row.avgStudents}</td>
                  <td className="px-5 py-5 font-display text-xl text-gold">{row.total}</td>
                  <td className="px-5 py-5 text-muted2">{row.fees}</td>
                  <td className="px-5 py-5"><span className={cn("rounded-full border px-3 py-1 text-xs font-semibold", badge[row.needColor])}>{row.need}</span></td>
                </tr>
              ))}
              <tr className="border-t-2 border-gold/20 text-gold">
                <td className="px-5 py-5 font-display">Total Reach</td>
                <td className="px-5 py-5">500+</td>
                <td className="px-5 py-5">All segments</td>
                <td className="px-5 py-5 font-display text-xl">~65,500</td>
                <td className="px-5 py-5">₹500–₹12,000</td>
                <td className="px-5 py-5">Massive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {["Parents daily updates chahte hain — attendance, fees, progress sab WhatsApp par.", "Competitive exam institutes fastest close karte hain jab reply instant hota hai.", "Small tuition centers volume play hain: low ticket, high count, quick setup."].map((text) => (
          <div key={text} className="rounded-2xl border border-white/[0.07] bg-card p-6 text-sm leading-7 text-muted2">{text}</div>
        ))}
      </div>
    </SectionWrapper>
  );
}
