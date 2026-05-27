export type NeedColor = "high" | "med" | "low";

export interface MarketCard {
  icon: string;
  num: number | null;
  suffix?: string;
  display?: string;
  label: string;
  sub: string;
}

export interface StudentRow {
  icon: string;
  category: string;
  institutes: string;
  avgStudents: string;
  total: string;
  fees: string;
  need: string;
  needColor: NeedColor;
}

export interface DigitalBar {
  label: string;
  count: string;
  pct: number;
  color: string;
  note: string;
}

export interface FeatureRow {
  feature: string;
  normal: string;
  app: string;
  api: string;
}

export interface UseCase {
  icon: string;
  title: string;
  items: string[];
}

export interface GrowthStep {
  num: number;
  title: string;
  desc: string;
  rev: string;
  students: string;
  tag: string;
  tagStyle: "base" | "green" | "gold" | "orange";
  active: boolean;
}

export interface PackagePlan {
  tier: string;
  name: string;
  featured: boolean;
  ribbon?: string;
  desc: string;
  setup: string;
  monthly: string;
  features: { text: string; included: boolean }[];
  btnStyle: "outline" | "filled";
}
