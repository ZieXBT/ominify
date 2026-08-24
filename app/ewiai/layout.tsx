import type { Metadata } from "next";
import "./ewiai-theme.css";

export const metadata: Metadata = {
  title: "ElevateWithAI — AI Voice Agents for Sales & Support",
  icons: {
    icon: "/ewiai-logo.avif",
    apple: "/ewiai-logo.avif",
  },
  description: "Book 30% more appointments with AI Voice Agents that call, qualify, and follow up 24/7. Trusted by 200+ businesses. Get a live demo in 30 seconds.",
  keywords: ["AI voice agents", "AI sales system", "automated appointments", "AI customer acquisition", "voice AI", "AI calling", "outbound AI", "inbound AI"],
  authors: [{ name: "Elevate With AI" }],
  openGraph: {
    title: "ElevateWithAI — AI Voice Agents for Sales & Support",
    description: "AI Voice Agents that call, qualify leads, and book appointments 24/7. Trusted by 200+ businesses.",
    type: "website",
    locale: "en_US",
    siteName: "Elevate With AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "ElevateWithAI — AI Voice Agents for Sales & Support",
    description: "Book 30% more appointments with AI that sounds 100% human.",
  },
  // The real site is ewiai.com (separate repo/project). This copy exists
  // only so the route keeps working; keep it out of every index.
  robots: {
    index: false,
    follow: false,
  },
};

export default function EWIAILayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
