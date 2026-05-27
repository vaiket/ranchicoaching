import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif, Syne } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
});

const syne = Syne({
  weight: ["700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-dm",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vaiketit.com"),
  title: "Vaiket IT — Coaching Institutes ka Digital Growth Partner",
  description:
    "Ranchi ke 500+ coaching institutes ke liye Website, WhatsApp AI aur Digital Marketing. 400% revenue growth possible. NEET, JEE, Bank, SSC, JPSC coaching ke liye.",
  keywords: [
    "coaching institute ranchi",
    "whatsapp marketing ranchi",
    "digital marketing coaching jharkhand",
  ],
  openGraph: {
    title: "Vaiket IT",
    description: "Coaching institutes ke liye WhatsApp AI + Digital Marketing",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/media/favicon.png",
    shortcut: "/media/favicon.png",
    apple: "/media/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hi-IN"
      className={`${instrumentSerif.variable} ${syne.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-dark text-warm">{children}</body>
    </html>
  );
}
