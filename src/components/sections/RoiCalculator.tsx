"use client";

import { useMemo, useState } from "react";
import CountUp from "react-countup";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import SectionWrapper from "@/components/common/SectionWrapper";
import { formatINR } from "@/lib/utils";

export default function RoiCalculator() {
  const [students, setStudents] = useState(150);
  const [fees, setFees] = useState(4000);
  const [months, setMonths] = useState(6);

  const result = useMemo(() => {
    const extraStudents = Math.round(students * 0.4);
    const monthlyRevenue = extraStudents * fees;
    const totalCost = 10000 + 5000 * months;
    const netProfit = monthlyRevenue * months - totalCost;
    const roi = Math.round((netProfit / totalCost) * 100);
    const chart = Array.from({ length: months }, (_, index) => ({
      month: `M${index + 1}`,
      revenue: Math.round(monthlyRevenue * Math.min(1, (index + 1) / 3)),
    }));
    return { extraStudents, monthlyRevenue, netProfit, roi, chart };
  }, [students, fees, months]);

  return (
    <SectionWrapper id="roi" eyebrow="ROI Calculator" title={<>Investment chhota, upside <em className="text-or">very large.</em></>}>
      <div className="grid gap-6 lg:grid-cols-2">
        <Scenario title="Investment" total="₹64,000" rows={[["Setup", "₹10,000"], ["Monthly × 6", "₹30,000"], ["API Charges × 6", "₹12,000"], ["Ad Spend × 6", "₹12,000"]]} />
        <Scenario title="Returns" total="₹13.7 Lakh" green rows={[["Extra Students", "60"], ["Avg Fees", "₹4,000/mo"], ["Extra Monthly Revenue", "₹2.4 Lakh"], ["6-Month Revenue", "₹14.4 Lakh"]]} />
      </div>
      <div className="mt-8 grid gap-8 rounded-3xl border border-white/[0.07] bg-card p-6 lg:grid-cols-[0.85fr_1.15fr] lg:p-8">
        <div>
          <label className="text-sm text-muted2">Current students: <span className="text-warm">{students}</span></label>
          <input className="mt-3 w-full accent-or" type="range" min="50" max="500" value={students} onChange={(event) => setStudents(Number(event.target.value))} />
          <label className="mt-6 block text-sm text-muted2">Average monthly fees</label>
          <input className="mt-3 w-full rounded-2xl border border-white/10 bg-dark px-4 py-3 text-warm outline-none focus:border-or" type="number" value={fees} onChange={(event) => setFees(Number(event.target.value))} />
          <label className="mt-6 block text-sm text-muted2">Time horizon</label>
          <select className="mt-3 w-full rounded-2xl border border-white/10 bg-dark px-4 py-3 text-warm outline-none focus:border-or" value={months} onChange={(event) => setMonths(Number(event.target.value))}>
            <option value={3}>3 months</option>
            <option value={6}>6 months</option>
            <option value={12}>12 months</option>
          </select>
          <div className="mt-8 rounded-2xl border border-wa/30 bg-wa/10 p-5">
            <p className="font-display text-3xl text-wa">2,140% ROI in 6 months</p>
            <p className="mt-2 text-sm text-muted2">Consistent follow-up aur faster admission closure se payback usually pehle month mein possible hota hai.</p>
          </div>
        </div>
        <div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Metric label="Extra Students Expected" value={result.extraStudents} />
            <Metric label="Extra Monthly Revenue" value={Math.round(result.monthlyRevenue / 1000)} prefix="₹" suffix="K" />
            <Metric label={`Net Profit in ${months} months`} value={Math.round(result.netProfit / 1000)} prefix="₹" suffix="K" green />
            <div className="rounded-2xl border border-white/[0.07] bg-dark p-5">
              <p className="text-sm text-muted2">ROI</p>
              <p className="font-display text-6xl text-or"><CountUp end={result.roi} duration={0.7} preserveValue />%</p>
            </div>
          </div>
          <div className="mt-8 h-[300px]">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={result.chart}>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                <XAxis dataKey="month" stroke="#999" />
                <YAxis stroke="#999" tickFormatter={(value) => `${Number(value) / 100000}L`} />
                <Tooltip contentStyle={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }} formatter={(value) => formatINR(Number(value))} />
                <Bar dataKey="revenue" fill="#FF4D00" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function Scenario({ title, total, rows, green }: { title: string; total: string; rows: string[][]; green?: boolean }) {
  return (
    <div className={`rounded-3xl border ${green ? "border-wa/20" : "border-white/[0.07]"} bg-card p-8`}>
      <h3 className="font-display text-3xl">{title}</h3>
      {rows.map(([label, value]) => <div key={label} className="mt-5 flex justify-between border-b border-white/[0.07] pb-3 text-muted2"><span>{label}</span><span className={green ? "text-wa" : ""}>{value}</span></div>)}
      <p className="mt-7 font-display text-5xl text-or">{total}</p>
    </div>
  );
}

function Metric({ label, value, prefix = "", suffix = "", green }: { label: string; value: number; prefix?: string; suffix?: string; green?: boolean }) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-dark p-5">
      <p className="text-sm text-muted2">{label}</p>
      <p className={`mt-2 font-display text-3xl ${green ? "text-wa" : "text-warm"}`}>{prefix}<CountUp end={value} duration={0.7} preserveValue separator="," />{suffix}</p>
    </div>
  );
}
