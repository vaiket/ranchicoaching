import type {
  DigitalBar,
  FeatureRow,
  GrowthStep,
  MarketCard,
  PackagePlan,
  StudentRow,
  UseCase,
} from "@/types";

export const marketCards: MarketCard[] = [
  { icon: "🏫", num: 500, suffix: "+", label: "Total Coaching Institutes", sub: "Registered + Unregistered dono milake" },
  { icon: "👨‍🎓", num: 65000, suffix: "+", label: "Active Students — Sirf Ranchi Mein", sub: "School + Competitive + Skill coaching" },
  { icon: "💰", num: null, display: "₹25Cr+", label: "Monthly Market Size", sub: "Total coaching fees collected per month" },
  { icon: "📈", num: null, display: "15%", label: "Yearly Growth Rate", sub: "Jharkhand education sector average" },
  { icon: "🎯", num: 480, suffix: "+", label: "Institutes — Abhi Fully Digital Nahi", sub: "Ye hain aapke potential clients!" },
  { icon: "📍", num: null, display: "5+", label: "Major Coaching Hubs", sub: "Lalpur · Doranda · Harmu · Kantatoli · Morabadi" },
];

export const studentsData: StudentRow[] = [
  { icon: "🔬", category: "NEET / JEE — Big Institutes", institutes: "20–25", avgStudents: "500–1,000", total: "~15,000", fees: "₹5,000–₹12,000", need: "VERY HIGH", needColor: "high" },
  { icon: "🏦", category: "Bank / SSC / Railway Coaching", institutes: "50–60", avgStudents: "200–400", total: "~15,000", fees: "₹2,000–₹5,000", need: "HIGH", needColor: "high" },
  { icon: "📜", category: "JPSC / JSSC / State PSC", institutes: "40–50", avgStudents: "150–300", total: "~10,000", fees: "₹2,500–₹6,000", need: "HIGH", needColor: "high" },
  { icon: "📚", category: "School Tuition Centers (9th–12th)", institutes: "300+", avgStudents: "50–100", total: "~20,000", fees: "₹500–₹2,000", need: "MEDIUM", needColor: "med" },
  { icon: "🗣️", category: "Spoken English / Personality Dev", institutes: "60+", avgStudents: "40–80", total: "~3,500", fees: "₹1,500–₹4,000", need: "MEDIUM", needColor: "med" },
  { icon: "💻", category: "Computer / IT / Tally Coaching", institutes: "50+", avgStudents: "30–60", total: "~2,000", fees: "₹1,000–₹3,000", need: "BASIC", needColor: "low" },
];

export const digitalBars: DigitalBar[] = [
  { label: "🚫 Kuch Bhi Nahi — Sirf Word of Mouth", count: "~100 institutes", pct: 20, color: "linear-gradient(90deg,#FF3B3B,#FF6B6B)", note: "Completely offline — koi online presence nahi." },
  { label: "📱 Sirf Normal WhatsApp (Personal)", count: "~200 institutes", pct: 40, color: "linear-gradient(90deg,#FF6D00,#FF9100)", note: "256 limit, manually bhejte hain." },
  { label: "📘 Sirf Social Media (FB / Instagram)", count: "~110 institutes", pct: 22, color: "linear-gradient(90deg,#FFB300,#FFD600)", note: "Social media hai but koi automation nahi." },
  { label: "🌐 Website + Basic Digital Presence", count: "~65 institutes", pct: 13, color: "linear-gradient(90deg,#00BCD4,#00E5FF)", note: "Website hai but outdated." },
  { label: "🤖 Full Digital + WhatsApp AI + CRM", count: "~10–15 institutes only!", pct: 3, color: "linear-gradient(90deg,#00E676,#69F0AE)", note: "Ye hain market leaders!" },
];

export const beforePoints = [
  "Student inquiry aati hai — 2-3 ghante baad manually reply. Tab tak student doosre institute mein.",
  "Raat 10 baje inquiry — koi online nahi — permanently lost. Roz hota hai.",
  "WhatsApp pe sirf 256 log tak broadcast — baaki manually ghanton tak.",
  "Follow-up bhool jaate hain — lead warm thi, par student chala gaya.",
  "Ek hi phone — ek hi person — sab kuch handle karo. Chaos!",
  "Parents ko attendance ke liye manually call — ek-ek ko — din bhar.",
  "Fees due reminder — manually WhatsApp karo sab ko. Awkward aur time-consuming.",
  "Result aaya — sab ko manually bhejo. PDF bhi nahi bhej pa rahe.",
  "Koi analytics nahi — pata nahi kitne inquiries aayi, kitne convert hui.",
  "Word-of-mouth pe dependent — growth slow, unpredictable, uncertain.",
];

export const afterPoints = [
  "Inquiry aate hi — 3 second mein AI auto-reply. Zero student loss.",
  "Raat 2 baje bhi inquiry handle hoti hai — AI 24/7 online.",
  "Unlimited broadcast — sab 65,000 students ko 1 click mein.",
  "Auto follow-up — 1, 3, 7 din baad automatically. Conversion 3x.",
  "Multiple staff ek hi number pe. Organized, professional.",
  "Attendance alert automatically parents ko — daily — zero manual effort.",
  "Fees due — automated reminder 7, 3, 1 day pehle. Collection +25%.",
  "PDF, study material — sab ko instantly. Sab parents khush.",
  "Full dashboard — inquiry count, conversion rate, source tracking.",
  "Digital + WhatsApp AI combo — students khud inquiry karte hain. Referrals 2x.",
];

export const waFeatures: FeatureRow[] = [
  { feature: "Broadcast Limit", normal: "256", app: "256", api: "Unlimited" },
  { feature: "AI Chatbot", normal: "✗", app: "Partial", api: "✓" },
  { feature: "Multiple Agents", normal: "✗", app: "4 devices", api: "✓" },
  { feature: "CRM Integration", normal: "✗", app: "✗", api: "✓" },
  { feature: "Analytics", normal: "✗", app: "Basic", api: "Advanced" },
  { feature: "Green Tick", normal: "✗", app: "✗", api: "✓" },
  { feature: "Auto Follow-up", normal: "✗", app: "Partial", api: "✓" },
  { feature: "Rich Media", normal: "✓", app: "✓", api: "✓" },
  { feature: "Templates", normal: "✗", app: "Limited", api: "✓" },
  { feature: "Cost", normal: "Free", app: "Free", api: "Growth Plan" },
];

export const useCases: UseCase[] = [
  { icon: "🎯", title: "Inquiry & Lead Capture", items: ["24/7 auto-reply to new inquiries", "Fees, batch, seat info instantly", "Demo class booking automated", "Lead database auto-build hoti hai", "Source track — FB, Insta, Google se?"] },
  { icon: "🔄", title: "Follow-up Automation", items: ["Day 1 — welcome + info message", "Day 3 — doubt follow-up", "Day 7 — last seat urgency", "Warm leads auto-nurture", "Conversion rate 3x improve"] },
  { icon: "👨‍👩‍👧", title: "Parent Communication", items: ["Daily attendance alert parents ko", "Monthly progress report auto-send", "Exam schedule notification", "Fee due reminder — 7, 3, 1 din pehle", "Emergency notification instantly"] },
  { icon: "📚", title: "Student Engagement", items: ["Daily study tips & motivation", "Study material PDF broadcast", "Quiz & MCQ sessions on WhatsApp", "Class cancellation alert", "Result & rank announcement"] },
  { icon: "💰", title: "Fees & Payments", items: ["Fee due automated reminder", "Payment link directly on WhatsApp", "Receipt auto-send after payment", "Installment schedule reminder", "Collection rate 25% improve"] },
  { icon: "📊", title: "Marketing Campaigns", items: ["New batch launch announcement", "Discount offer targeted groups", "Referral program automation", "Alumni success stories", "Festival greetings with branding"] },
];

export const growthSteps: GrowthStep[] = [
  { num: 1, title: "Traditional", desc: "Kuch bhi digital nahi. Sirf word-of-mouth.", rev: "₹3 Lakh/mo", students: "~100 Students", tag: "Baseline", tagStyle: "base", active: false },
  { num: 2, title: "Website + Social", desc: "Professional website + Facebook/Instagram active", rev: "₹5.25 Lakh/mo", students: "~150 Students", tag: "+75% Growth", tagStyle: "green", active: false },
  { num: 3, title: "WhatsApp AI Added", desc: "API + Chatbot + Auto follow-up + Parent alerts", rev: "₹8 Lakh/mo", students: "~200 Students", tag: "+167% Growth", tagStyle: "gold", active: true },
  { num: 4, title: "Full Digital Stack", desc: "CRM + Ads + SEO + WhatsApp AI + Analytics", rev: "₹13.5 Lakh/mo", students: "~300 Students", tag: "+350% Growth 🔥", tagStyle: "orange", active: false },
];

export const growthMetrics = [
  { num: "40%", label: "Faster Batch Filling with WhatsApp AI" },
  { num: "3×", label: "Higher Lead Conversion Rate" },
  { num: "25%", label: "Better Fees Collection On-Time" },
  { num: "60%", label: "Higher Parent Satisfaction Score" },
  { num: "5×", label: "More Referrals from Happy Parents" },
];

export const targets = [
  { priority: "🔥 Priority 1 — Highest ROI", priorityColor: "high", type: "NEET / JEE Institutes", count: "20–25", sub: "institutes in Ranchi", pain: "500+ students manage karna mushkil. Inquiry pe reply nahi ho pata. Parents constantly call karte hain. Budget hai, problem badi hai — ye sabse ready clients hain." },
  { priority: "🔥 Priority 1 — High Volume", priorityColor: "high", type: "Bank / SSC Coaching", count: "50–60", sub: "institutes in Ranchi", pain: "Continuous new batches. Students baar baar inquire karte hain. Syllabus updates, result notifications — sab manually. Highest count, consistent need." },
  { priority: "⚡ Priority 2 — Growing Fast", priorityColor: "high", type: "JPSC / State PSC", count: "40–50", sub: "institutes in Ranchi", pain: "Long-term students — 1-2 saal. Engagement maintain karna mushkil. Long-term clients ban sakte hain." },
  { priority: "📈 Priority 3 — Volume Play", priorityColor: "med", type: "School Tuition Centers", count: "300+", sub: "institutes in Ranchi", pain: "Parents demanding — daily update chahte hain. Small budget but very large number. Basic package sell karo — volume se kamao." },
  { priority: "💬 Priority 3 — Easy Sell", priorityColor: "med", type: "Spoken English / Skill Dev", count: "60+", sub: "institutes in Ranchi", pain: "Student engagement zaroori. Demo class follow-ups. WhatsApp hi unka main communication channel already." },
  { priority: "🎯 Priority 4 — Future", priorityColor: "low", type: "Computer / IT Coaching", count: "50+", sub: "institutes in Ranchi", pain: "Easy to convince — they understand the value of tech but haven't applied it to their own business." },
];

export const packages: PackagePlan[] = [
  { tier: "Basic Plan", name: "Starter", featured: false, desc: "Chote institutes ke liye jo pehli baar digital ho rahe hain.", setup: "₹5,000", monthly: "3,000", features: ["Professional Website — 5 Pages", "WhatsApp Business App Setup", "Basic Auto-Reply Configuration", "Facebook Page Management", "2 Ad Campaigns / Month", "Basic Analytics Report (Monthly)", "Student Broadcast (up to 500)", "Email Support"].map((text) => ({ text, included: true })).concat(["WhatsApp Business API", "AI Chatbot", "CRM Integration"].map((text) => ({ text, included: false }))), btnStyle: "outline" },
  { tier: "Standard Plan", name: "Growth", featured: true, ribbon: "⭐ Most Popular", desc: "Medium institutes ke liye jo seriously grow karna chahte hain.", setup: "₹10,000", monthly: "5,000", features: ["Premium Website + SEO Optimization", "WhatsApp Business API Setup", "AI Chatbot (24/7 Inquiry Handling)", "Unlimited Student + Parent Broadcast", "Automated Attendance Alerts", "Automated Fees Reminder System", "Facebook + Instagram Ads Management", "Lead Tracking Basic Dashboard", "Weekly Analytics Report", "Phone + WhatsApp Support", "Auto Follow-up System (7-day)"].map((text) => ({ text, included: true })), btnStyle: "filled" },
  { tier: "Premium Plan", name: "Leader", featured: false, desc: "Bade institutes ke liye jo market leader banana chahte hain.", setup: "₹20,000", monthly: "8,000", features: ["Everything in Growth Plan", "Advanced AI Chatbot + Full CRM", "WhatsApp Green Tick Application", "Full Lead Tracking Dashboard", "Student Progress Report Automation", "YouTube Channel Management", "Google Ads Campaign Management", "Reputation Management (Google Reviews)", "Referral Program Automation", "Dedicated Account Manager", "Daily Analytics + Monthly Strategy Call"].map((text) => ({ text, included: true })), btnStyle: "outline" },
];

export const statsTickerData = [
  { num: "65K+", label: "Students Vaiket IT Can Reach" },
  { num: "480+", label: "Institutes Not Fully Digital" },
  { num: "98%", label: "WhatsApp Message Open Rate" },
  { num: "3×", label: "Higher Conversion with AI" },
  { num: "₹39L", label: "Monthly Market Potential" },
  { num: "400%", label: "Revenue Growth Possible" },
];
