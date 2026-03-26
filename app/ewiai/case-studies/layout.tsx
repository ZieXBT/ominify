import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Real AI Voice Agent Results | ElevateWithAI",
  description: "See how businesses like RENU, Keyrenter, and SOLD.com use AI Voice Agents to book 278+ appointments/week, cut costs by 6 figures, and automate 80% of sales.",
  openGraph: {
    title: "Case Studies — Real AI Voice Agent Results | ElevateWithAI",
    description: "Real results from real clients using AI Voice Agents to scale sales and automate operations.",
    type: "website",
    locale: "en_US",
    siteName: "Elevate With AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies — AI Voice Agent Results | ElevateWithAI",
    description: "See how businesses automate sales and book more appointments with AI Voice Agents.",
  },
};

export default function CaseStudiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
